<script lang="ts">
  import { fadeBlur } from './transitions/fadeBlur';
</script>

<div class="personal" in:fadeBlur>
  <h1 class="mainfont">Personal</h1>
  <p>Coming soon...</p>
</div>

<style>
  .personal {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: white;
  }
</style>
