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
