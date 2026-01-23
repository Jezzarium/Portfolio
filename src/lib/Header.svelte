<script lang="ts">
  import type { Page } from './types';
  import { Page as PageEnum } from './types';
  import { navigate } from './navigation.svelte';

  interface Props {
    currentPage: Page;
  }

  let { currentPage }: Props = $props();

  const pages = [
    { page: PageEnum.Home, label: 'Home', mobileOnly: true },
    { page: PageEnum.Personal, label: 'About Me', mobileOnly: false },
    {
      page: PageEnum.Academic,
      label: 'Academic and Work',
      mobileOnly: false,
    },
    { page: PageEnum.Projects, label: 'Projects', mobileOnly: false },
  ];
</script>

<header class="header">
  <div class="name desktop-only">
    <button onclick={() => navigate(PageEnum.Home)} class="name-button">
      Justin Abourjaili-Bilodeau
    </button>
  </div>

  <nav class="nav-links">
    {#each pages as { page, label, mobileOnly } (page)}
      <button
        onclick={() => navigate(page)}
        class="nav-link"
        class:active={page === currentPage}
        class:mobile-only={mobileOnly}
      >
        {label}
      </button>
    {/each}
  </nav>

  <div class="spacer desktop-only"></div>
</header>

<style>
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #000;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 1000;
    height: 50px;
    box-sizing: border-box;
  }

  .name,
  .spacer {
    flex: 1;
  }

  .name-button {
    background: none;
    border: none;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    padding: 0.25rem 0.5rem;
    font-family: 'Google Sans', sans-serif;
  }

  .name-button:hover {
    color: #fc6b03;
  }

  .nav-links {
    display: flex;
    gap: 2rem;
    justify-content: center;
    flex: 1;
  }

  .nav-link {
    background: none;
    border: none;
    color: rgba(255, 255, 255, 0.6);
    font-size: 1rem;
    cursor: pointer;
    padding: 0.25rem 0.5rem;
    font-family: 'Google Sans', sans-serif;
  }

  .nav-link.active {
    color: #fff;
  }

  .nav-link:hover {
    color: #fc6b03;
  }

  .mobile-only {
    display: none;
  }

  @media (max-width: 768px) {
    .header {
      padding: 0.75rem 1rem;
      justify-content: center;
    }

    .desktop-only {
      display: none;
    }

    .mobile-only {
      display: block;
    }

    .nav-links {
      gap: 1rem;
    }

    .nav-link {
      font-size: 0.9rem;
    }
  }
</style>
