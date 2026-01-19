<script lang="ts">
  import type { Page } from './types';
  import { navigate } from './navigation.svelte';

  interface Props {
    page: Page;
    label: string;
  }

  let { page, label }: Props = $props();
</script>

<button onclick={() => navigate(page)}>
  {label}
</button>

<style>
  button {
    background-color: #1a1a1a;
    color: white;
    font-family: 'Google Sans', sans-serif;
    padding: 12px;
    border: none;
    cursor: pointer;
    aspect-ratio: 1 / 1;
    min-width: 100px;
    height: 40px;
  }

  button:hover {
    background-color: white;
    color: #000;
  }
</style>
