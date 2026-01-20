<script lang="ts">
  import { Page } from './types';
  import Button from './Button.svelte';
  import { fadeBlur } from './transitions/fadeBlur';
</script>

<div class="home" in:fadeBlur>
  <div class="fill"></div>

  <div class="title">
    <h1 class="mainfont">Hello, I'm Justin</h1>
  </div>

  <div class="links">links</div>

  <div class="desc mainfont">
    I'm a Software Engineering student at Polytechnique Montreal.
  </div>

  <div class="nav">
    <Button page={Page.Blog} label="Blog" />
    <Button page={Page.Personal} label="Personal" />
    <Button page={Page.Academic} label="Academic" />
    <Button page={Page.Projects} label="Projects" />
  </div>

  <div class="fill2"></div>
</div>

<style>
  .home {
    display: grid;
    grid-template-areas:
      'fill fill'
      'title links'
      'desc desc'
      'nav nav'
      'fill2 fill2';
    grid-template-rows: 1fr auto auto auto auto 1fr;
    height: 100vh;
    color: white;
    width: 90%;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  .fill {
    grid-area: fill;
  }

  .title {
    grid-area: title;
    font-size: 1.3rem;
  }

  .links {
    grid-area: links;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
  }

  .desc {
    grid-area: desc;
    font-size: 1rem;
    padding: 1rem 0;
  }

  .nav {
    grid-area: nav;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    width: 80%;
    padding: 1rem 0;
    margin: 0 auto;
  }

  .fill2 {
    grid-area: fill2;
  }

  /* Mobile: < 768px */
  @media (max-width: 767px) {
    .home {
      width: 400px;
      touch-action: none;
    }
  }

  /* Tablet: 768px - 1024px */
  @media (min-width: 768px) and (max-width: 1024px) {
    .home {
      width: 600px;
    }
  }

  /* Desktop: > 1024px */
  @media (min-width: 1025px) {
    .home {
      width: 900px;
    }
  }
</style>
