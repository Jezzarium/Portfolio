<script lang="ts">
  import { Page } from './types';
  import Button from './Button.svelte';
  import { fadeBlur } from './transitions/fadeBlur';
</script>

<div class="home" in:fadeBlur>
  <div class="content">
    <div class="title">
      <div class="mainfont">Hey, I'm Justin</div>
    </div>

    <div class="desc mainfont">
      I'm a third year Software Engineering student at Polytechnique Montreal. I
      have experience in Full Stack web development and have done multiple
      projects in C++ and Python. I'm interested in Cybersecurity, AI and
      everything related to Human-Computer Interaction, but I'm always eager to
      learn and explore new fields!
    </div>
  </div>

  <div class="nav">
    <!-- <Button page={Page.Blog} label="Blog" /> -->
    <Button page={Page.Personal} label="Personal" />
    <Button page={Page.Academic} label="Academic" />
    <Button page={Page.Projects} label="Projects" />
  </div>
</div>

<style>
  .home {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 3rem;
    color: white;
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
    touch-action: none;
  }

  .content {
    flex: 1;
  }

  .title {
    font-size: 4rem;
    flex-shrink: 0;
  }

  .desc {
    font-size: 1.4rem;
    padding: 1rem 0;
    flex-shrink: 0;
  }

  .nav {
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex-shrink: 0;
  }

  @media (max-width: 768px) {
    .home {
      flex-direction: column;
      gap: 2rem;
    }

    .title {
      font-size: 2.5rem;
    }

    .desc {
      font-size: 1.1rem;
    }

    .nav {
      width: 100%;
      align-items: center;
    }
  }
</style>
