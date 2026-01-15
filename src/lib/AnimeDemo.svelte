<script lang="ts">
  import { onMount } from 'svelte';
  import { animate, createDraggable, spring } from 'animejs';

  let logo: HTMLElement;

  onMount(() => {
    animate(logo, {
      scale: [
        { to: 1.25, ease: 'inOut(3)', duration: 200 },
        { to: 1, ease: spring({ bounce: 0.7 }) },
      ],
      loop: true,
      loopDelay: 250,
    });

    createDraggable(logo, {
      container: [0, 0, 0, 0],
      releaseEase: spring({ bounce: 0.7 }),
    });
  });
</script>

<div class="demo-container">
  <div class="logo" bind:this={logo}>
    <div class="logo-inner"></div>
  </div>
</div>

<style>
  .demo-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 2rem;
  }

  .logo {
    width: 100px;
    height: 100px;
    background-color: #ff4b4b;
    border-radius: 50%;
    cursor: grab;
  }

  .logo:active {
    cursor: grabbing;
  }
</style>
