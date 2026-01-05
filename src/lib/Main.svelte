<script lang="ts">
    import "./Main.css";
    import { Page } from "./types";
    import {
        navigationState,
        navigate,
        initNavigation,
    } from "./navigation.svelte";

    initNavigation();

    let showSplat = $state(false);
    import Splat from "./Splat.svelte";
    import Intro from "./Intro.svelte";
    import Home from "./Home.svelte";
    import Blog from "./Blog.svelte";
</script>

<main class="main">
    <div>
        {#if showSplat}
            <Splat />
        {/if}
    </div>

    <div class="controls-container">
        <button class="toggle-button" onclick={() => (showSplat = !showSplat)}>
            {showSplat ? "HIDE SPLAT" : "SHOW SPLAT"}
        </button>
        {#if navigationState.page !== Page.Intro}
            <button
                class="toggle-button"
                onclick={() =>
                    navigate(
                        navigationState.page === Page.Home
                            ? Page.Blog
                            : Page.Home,
                    )}
            >
                {navigationState.page === Page.Home
                    ? "GO TO BLOG"
                    : "GO TO HOME"}
            </button>
        {/if}
    </div>

    {#if navigationState.page === Page.Home}
        <Home />
    {:else if navigationState.page === Page.Blog}
        <Blog />
    {:else}
        <Intro oncomplete={() => navigate(Page.Home)} />
    {/if}
</main>
