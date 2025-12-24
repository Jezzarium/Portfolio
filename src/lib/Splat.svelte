<script lang="ts">
    import { onMount } from "svelte";
    import * as THREE from "three";
    import { SplatMesh } from "@sparkjsdev/spark";
    // import splatURL from "../assets/P1037130.ply?url";
    const splatURL =
        "https://pub-be878abefabe4fbfbadb730928721595.r2.dev/P1037130.ply";

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

        const butterfly = new SplatMesh({ url: splatURL });
        butterfly.quaternion.set(1, 0, 0, 0);
        butterfly.position.set(initX, initY, 4);
        scene.add(butterfly);

        let mouseX = 0;
        let mouseY = 0;
        let targetX = 0;
        let targetY = 0;

        const onMouseMove = (event: MouseEvent) => {
            targetX = (event.clientX / window.innerWidth) * 2 - 1;
            targetY = -(event.clientY / window.innerHeight) * 2 + 1;
        };

        const onDeviceOrientation = (event: DeviceOrientationEvent) => {
            if (event.gamma !== null && event.beta !== null) {
                targetX = Math.max(-1, Math.min(1, event.gamma / 30));
                targetY = Math.max(-1, Math.min(1, event.beta / 30));
            }
        };

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("deviceorientation", onDeviceOrientation);

        renderer.setAnimationLoop(() => {
            const smoothing = 0.01;
            mouseX += (targetX - mouseX) * smoothing;
            mouseY += (targetY - mouseY) * smoothing;

            butterfly.position.x = initX + mouseX * 0.2;
            butterfly.position.y = initY + mouseY * 0.2;
            renderer.render(scene, camera);
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
