<script lang="ts">
  import { fadeBlur } from './transitions/fadeBlur';
</script>

<div class="projects" in:fadeBlur>
  <h1 class="mainfont">Projects</h1>
  <p>Coming soon... this page is gonna be cool soon</p>
</div>

<style>
  .projects {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: white;
  }
</style>
