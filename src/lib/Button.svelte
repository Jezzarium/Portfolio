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
    font-size: 1.4rem;
    padding: 12px;
    border: none;
    cursor: pointer;
    aspect-ratio: 1 / 1;
    height: 60px;
    width: 240px;
  }

  button:hover {
    background-color: #fc6b03;
  }
</style>
