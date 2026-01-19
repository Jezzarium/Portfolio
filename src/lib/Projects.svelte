<script lang="ts">
  import { fadeBlur } from './transitions/fadeBlur';
</script>

<div class="projects" in:fadeBlur>
  <h1 class="roboto">Projects</h1>
  <p>Coming soon...</p>
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
