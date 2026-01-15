<script lang="ts">
  import { Page } from './types';
  import Button from './Button.svelte';
  import { fadeBlur } from './transitions/fadeBlur';
</script>

<div class="home" in:fadeBlur>
  <div class="title">
    <h1 class="google-sans">Justin Abourjaili-Bilodeau</h1>
    <div class="links"></div>
  </div>

  <div class="desc google-sans">
    Software Engineering student at Polytechnique Montreal passionate about
    software development.
  </div>
  <div class="nav">
    <Button page={Page.Blog} label="Blog" />
    <Button page={Page.Personal} label="Personal" />
    <Button page={Page.Academic} label="Academic" />
    <Button page={Page.Projects} label="Projects" />
  </div>
</div>

<style>
  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: white;
  }
  .desc {
    font-size: 1rem;
  }
</style>
