<script lang="ts">
    import "./Main.css";
    let showSplat = $state(false);
    let showHome = $state(false);
    import Splat from "./Splat.svelte";
    import Intro from "./Intro.svelte";
    import Home from "./Home.svelte";
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
    </div>
    {#if showHome}
        <Home />
    {:else}
        <Intro oncomplete={() => (showHome = true)} />
    {/if}
</main>
