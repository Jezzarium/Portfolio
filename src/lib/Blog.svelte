<script lang="ts">
  import { fadeBlur } from './transitions/fadeBlur';
</script>

<div class="blog" in:fadeBlur>
  <h1 class="mainfont">Blog</h1>
  <p>Coming soon...</p>
</div>

<style>
  .blog {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: white;
  }
</style>
