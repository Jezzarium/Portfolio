<script lang="ts">
  import { fadeBlur } from './transitions/fadeBlur';
</script>

<div class="personal" in:fadeBlur>
  <h1>Personal</h1>
  <p>Work in progress...</p>
  <div class="content"></div>
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

  .content {
    display: grid;
  }
</style>
