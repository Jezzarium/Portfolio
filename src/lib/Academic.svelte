<script lang="ts">
  import { fadeBlur } from './transitions/fadeBlur';
</script>

<div class="academic" in:fadeBlur>
  <h1 class="google-sans">Academic</h1>
  <p>Coming soon...</p>
</div>

<style>
  .academic {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: white;
  }
</style>
