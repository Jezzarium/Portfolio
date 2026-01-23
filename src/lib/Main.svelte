<script lang="ts">
  import './Main.css';
  import { Page } from './types';
  import {
    navigationState,
    navigate,
    initNavigation,
  } from './navigation.svelte';

  initNavigation();

  import Intro from './Intro.svelte';
  import Home from './Home.svelte';
  import Blog from './Blog.svelte';
  import Personal from './Personal.svelte';
  import Academic from './Academic.svelte';
  import Projects from './Projects.svelte';
  import Header from './Header.svelte';

  const showHeader = $derived(
    navigationState.page === Page.Blog ||
      navigationState.page === Page.Personal ||
      navigationState.page === Page.Academic ||
      navigationState.page === Page.Projects
  );
</script>

{#if showHeader}
  <Header currentPage={navigationState.page} />
{/if}

<main class="main">
  {#if navigationState.page === Page.Home}
    <Home />
  {:else if navigationState.page === Page.Blog}
    <Blog />
  {:else if navigationState.page === Page.Personal}
    <Personal />
  {:else if navigationState.page === Page.Academic}
    <Academic />
  {:else if navigationState.page === Page.Projects}
    <Projects />
  {:else}
    <Intro oncomplete={() => navigate(Page.Home)} />
  {/if}
</main>
