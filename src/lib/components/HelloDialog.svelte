<script lang="ts">
  import MediaQuery from './MediaQuery.svelte';
  import tilt from '$lib/Tilt.js';
</script>

<div class="wrapper">
  <!-- Only enable tilt for displays > 800px wide -->
  <MediaQuery query="(min-width: 800px)" let:matches>
    {#if matches}
      <div class="dialog" use:tilt>
        <slot />
      </div>
    {/if}
  </MediaQuery>
  <MediaQuery query="(max-width: 800px)" let:matches>
    {#if matches}
      <div class="dialog">
        <slot />
      </div>
    {/if}
  </MediaQuery>
</div>

<style>
  .wrapper {
    transform: translateZ(100px);
  }
  .dialog {
    padding: 2em;

    width: min(24em, 100vw - 8em);

    background-color: white;
    border-radius: 1em;
    box-shadow: 0 1em 2em var(--color-shadow);
  }
</style>
