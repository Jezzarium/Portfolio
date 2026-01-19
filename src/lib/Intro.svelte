<script lang="ts">
  import { onMount } from 'svelte';
  import { createTimeline } from 'animejs';

  let { oncomplete }: { oncomplete?: () => void } = $props();

  const timeline = createTimeline({
    defaults: {
      ease: 'out(3)',
      duration: 4000,
    },
    loop: false,
    autoplay: false,
  });

  let hiText: HTMLElement;
  let NameText: HTMLElement;

  const animationDuration = 1000;

  onMount(() => {
    timeline.add(
      hiText,
      {
        opacity: [0, 1],
        translateX: [0, 0],
        filter: ['blur(10px)', 'blur(0px)'],
        duration: animationDuration,
        easing: 'easeOutExpo',
      },
      0
    );

    timeline.add(
      hiText,
      {
        opacity: [1, 0],
        translateX: [0, -50],
        filter: ['blur(0px)', 'blur(10px)'],
        duration: animationDuration,
        easing: 'easeOutExpo',
      },
      1500
    );

    timeline.add(
      NameText,
      {
        opacity: [0, 1],
        translateX: [50, 0],
        filter: ['blur(10px)', 'blur(0px)'],
        duration: animationDuration,
        easing: 'easeOutExpo',
      },
      1500
    );

    timeline.add(
      NameText,
      {
        opacity: [1, 0],
        translateX: [0, 0],
        filter: ['blur(0px)', 'blur(10px)'],
        duration: animationDuration,
        easing: 'easeOutExpo',
        onComplete: () => oncomplete?.(),
      },
      3800
    );

    timeline.play();
  });
</script>

<div class="intro">
  <h1 class="roboto" bind:this={hiText}>Hi</h1>
  <h1 class="roboto" bind:this={NameText}>Welcome to my portfolio</h1>
</div>

<style>
  .intro {
    display: grid;
    place-items: center;
    height: 100%;
    font-size: 1.5rem;
    position: relative;
    overflow: hidden;
    touch-action: none;
  }

  @media (width < 400px) {
    .intro {
      font-size: 1.2rem;
    }
  }

  .intro h1 {
    opacity: 0;
    grid-area: 1 / 1;
    text-align: center;
    margin: 0;
    color: white;
  }
</style>
