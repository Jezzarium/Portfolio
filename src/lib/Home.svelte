<script lang="ts">
  import { onMount } from 'svelte';
  import { animate } from 'animejs';

  let home: HTMLElement;

  onMount(() => {
    animate(home, {
      opacity: [0, 1],
      filter: ['blur(10px)', 'blur(0px)'],
      duration: 800,
      easing: 'easeOutExpo',
    });
  });
</script>

<div class="home" bind:this={home}>
  <div class="title">
    <h1 class="google-sans">Justin Abourjaili-Bilodeau</h1>
  </div>

  <div class="links"></div>
  <div class="desc"></div>
  <div class="nav"></div>
</div>

<style>
  .home {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: white;
    opacity: 0;
  }
</style>
