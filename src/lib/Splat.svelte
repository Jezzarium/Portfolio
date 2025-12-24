<script lang="ts">
    import { onMount } from "svelte";
    import * as THREE from "three";
    import { SplatMesh, dyno } from "@sparkjsdev/spark";
    const splatURL =
        "https://pub-be878abefabe4fbfbadb730928721595.r2.dev/P1037130.ply";

    const effectCenter = { x: 0, y: 0, z: 20 };
    const effectMaxRadius = 1000;

    let container: HTMLDivElement;

    onMount(() => {
        const scene = new THREE.Scene();
        const fov = 35;
        const camera = new THREE.PerspectiveCamera(
            fov,
            window.innerWidth / window.innerHeight,
            0.1,
            1000,
        );

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);

        container.appendChild(renderer.domElement);

        const initX = -0.5;
        const initY = 1;

        const animateT = dyno.dynoFloat(0);
        let baseTime = 0;
        let splatLoaded = false;

        const butterfly = new SplatMesh({ url: splatURL });
        butterfly.quaternion.set(1, 0, 0, 0);
        butterfly.position.set(initX, initY, 4);
        scene.add(butterfly);

        setupSplatModifier(butterfly, animateT);

        splatLoaded = true;
        baseTime = 0;

        // shader effect from https://github.com/sparkjsdev/spark/blob/main/examples/splat-reveal-effects/index.html
        function setupSplatModifier(
            splatMesh: SplatMesh,
            animateT: ReturnType<typeof dyno.dynoFloat>,
        ) {
            splatMesh.objectModifier = dyno.dynoBlock(
                { gsplat: dyno.Gsplat },
                { gsplat: dyno.Gsplat },
                ({ gsplat }) => {
                    const d = new dyno.Dyno({
                        inTypes: {
                            gsplat: dyno.Gsplat,
                            t: "float",
                        },
                        outTypes: { gsplat: dyno.Gsplat },
                        globals: () => [
                            dyno.unindent(`
                                vec3 hash(vec3 p) {
                                    p = fract(p * 0.3183099 + 0.1);
                                    p *= 17.0;
                                    return fract(vec3(p.x * p.y * p.z, p.x + p.y * p.z, p.x * p.y + p.z));
                                }

                                vec3 noise(vec3 p) {
                                    vec3 i = floor(p);
                                    vec3 f = fract(p);
                                    f = f * f * (3.0 - 2.0 * f);
                                    
                                    vec3 n000 = hash(i + vec3(0,0,0));
                                    vec3 n100 = hash(i + vec3(1,0,0));
                                    vec3 n010 = hash(i + vec3(0,1,0));
                                    vec3 n110 = hash(i + vec3(1,1,0));
                                    vec3 n001 = hash(i + vec3(0,0,1));
                                    vec3 n101 = hash(i + vec3(1,0,1));
                                    vec3 n011 = hash(i + vec3(0,1,1));
                                    vec3 n111 = hash(i + vec3(1,1,1));
                                    
                                    vec3 x0 = mix(n000, n100, f.x);
                                    vec3 x1 = mix(n010, n110, f.x);
                                    vec3 x2 = mix(n001, n101, f.x);
                                    vec3 x3 = mix(n011, n111, f.x);
                                    
                                    vec3 y0 = mix(x0, x1, f.y);
                                    vec3 y1 = mix(x2, x3, f.y);
                                    
                                    return mix(y0, y1, f.z);
                                }
                            `),
                        ],
                        statements: ({ inputs, outputs }) =>
                            dyno.unindentLines(`
                            ${outputs.gsplat} = ${inputs.gsplat};
                            float t = ${inputs.t};
                            float s = smoothstep(0.,10.,t-4.5)*${effectMaxRadius.toFixed(1)};
                            vec3 scales = ${inputs.gsplat}.scales;
                            
                            // Effect Center
                            vec3 center = vec3(${effectCenter.x.toFixed(3)}, ${effectCenter.y.toFixed(3)}, ${effectCenter.z.toFixed(3)});
                            
                            // Calculate position relative to effect center
                            vec3 p = ${inputs.gsplat}.center - center;
                            float l = length(p.xz);
                            
                            // Magic Effect
                            float border = abs(s-l-.5);
                            p *= 1.-.2*exp(-20.*border);
                            vec3 finalScales = mix(scales,vec3(0.002),smoothstep(s-.5,s,l+.5));
                            
                            // Apply effect modifications relative to center, then add center back
                            ${outputs.gsplat}.center = p + center + .1*noise(p.xyz*2.+t*.5)*smoothstep(s-.5,s,l+.5);
                            ${outputs.gsplat}.scales = finalScales;
                            
                            float at = atan(p.x,p.z)/3.1416;
                            ${outputs.gsplat}.rgba *= step(at,t-3.1416);
                            ${outputs.gsplat}.rgba += exp(-20.*border) + exp(-50.*abs(t-at-3.1416))*.5;

                        `),
                    });

                    gsplat = d.apply({
                        gsplat,
                        t: animateT,
                    }).gsplat;

                    return { gsplat };
                },
            );

            splatMesh.updateGenerator();
        }

        let mouseX = 0;
        let mouseY = 0;
        let targetX = 0;
        let targetY = 0;
        const moveMultiplier = 2;

        const onMouseMove = (event: MouseEvent) => {
            targetX = (event.clientX / window.innerWidth) * moveMultiplier;
            targetY = -(event.clientY / window.innerHeight) * moveMultiplier;
        };

        const onDeviceOrientation = (event: DeviceOrientationEvent) => {
            if (event.gamma !== null && event.beta !== null) {
                targetX = Math.max(-1, Math.min(1, event.gamma / 30));
                targetY = Math.max(-1, Math.min(1, event.beta / 30));
            }
        };

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("deviceorientation", onDeviceOrientation);

        const targetFPS = 60;
        const interval = 1000 / targetFPS;
        let lastTime = 0;

        renderer.setAnimationLoop((time) => {
            const delta = time - lastTime;

            if (delta > interval) {
                lastTime = time - (delta % interval);

                if (splatLoaded) {
                    baseTime += 1 / 30;
                    animateT.value = baseTime;
                    butterfly.updateVersion();
                }

                const smoothing = 0.05;
                mouseX += (targetX - mouseX) * smoothing;
                mouseY += (targetY - mouseY) * smoothing;

                butterfly.position.x = initX + mouseX * 0.2;
                butterfly.position.y = initY + mouseY * 0.2;
                renderer.render(scene, camera);
            }
        });

        const onResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener("resize", onResize);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("resize", onResize);
            renderer.setAnimationLoop(null);
            renderer.dispose();
            if (container && container.contains(renderer.domElement)) {
                container.removeChild(renderer.domElement);
            }
        };
    });
</script>

<div bind:this={container}></div>

<style>
    :global(body) {
        margin: 0;
        overflow: hidden;
    }
</style>
