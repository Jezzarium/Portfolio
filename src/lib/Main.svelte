<script lang="ts">
    import "./Main.css";
    let showSplat = $state(false);
    import Splat from "./Splat.svelte";
    import AnimeDemo from "./AnimeDemo.svelte";
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
    <AnimeDemo />
</main>
