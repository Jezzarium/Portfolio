<script lang="ts">
    import { onMount } from "svelte";
    import { animate } from "animejs";
    import { createTimeline } from "animejs";

    const timeline = createTimeline({
        defaults: {
            ease: "out(3)",
            duration: 500,
        },
        loop: false,
        alternate: true,
        autoplay: false,
    });

    let intro: HTMLElement;

    onMount(() => {
        timeline.add(intro, {
            opacity: [0, 1],
            filter: ["blur(10px)", "blur(0px)"],
            duration: 1000,
            easing: "easeOutQuad",
        });
        timeline.play();
    });
</script>

<div class="intro" bind:this={intro}>
    <h1 class="hdr-text">Hi</h1>
</div>

<style>
    .intro {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        color: white;
    }

    .hdr-text {
        mix-blend-mode: overlay;
        position: relative;
        padding: var(--spacing-lg);
        background: url(data:image/png;base64,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);
        background-size: cover;
        text-align: center;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
</style>
