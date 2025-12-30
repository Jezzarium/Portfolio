<script lang="ts">
    import { onMount } from "svelte";
    import { createTimeline } from "animejs";

    let { oncomplete }: { oncomplete?: () => void } = $props();

    const timeline = createTimeline({
        defaults: {
            ease: "out(3)",
            duration: 2000,
        },
        loop: false,
        autoplay: false,
    });

    let hiText: HTMLElement;
    let NameText: HTMLElement;

    onMount(() => {
        timeline.add(
            hiText,
            {
                opacity: [0, 1],
                filter: ["blur(10px)", "blur(0px)"],
                duration: 800,
                easing: "easeOutExpo",
            },
            0,
        );

        timeline.add(
            hiText,
            {
                translateX: [0, -130],
                duration: 800,
                easing: "easeOutExpo",
            },
            800,
        );

        timeline.add(
            NameText,
            {
                opacity: [0, 1],
                translateX: [50, -85],
                filter: ["blur(10px)", "blur(0px)"],
                duration: 800,
                easing: "easeOutExpo",
            },
            800,
        );

        timeline.add(
            [hiText, NameText],
            {
                opacity: [1, 0],
                filter: ["blur(0px)", "blur(10px)"],
                duration: 500,
                easing: "easeInExpo",
                delay: 800,
                onComplete: () => oncomplete?.(),
            },
            1800,
        );

        timeline.play();
    });
</script>

<div class="intro">
    <h1 class="google-sans hdr-text" bind:this={hiText}>Hi</h1>
    <h1 class="google-sans hdr-text" bind:this={NameText}>, I'm Justin</h1>
</div>

<style>
    .intro {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        height: 100%;
        font-size: 1.5rem;
        gap: 0.5rem;
        position: relative;
    }

    .intro h1 {
        opacity: 0;
        position: absolute;
        left: 50%;
    }
</style>
