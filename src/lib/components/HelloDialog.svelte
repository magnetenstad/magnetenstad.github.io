<script lang="ts">
  import tilt from '$lib/Tilt.js';
</script>

<div class="wrapper">
  <div class="dialog" use:tilt>
    <slot />
  </div>
</div>

<style>
  .wrapper {
    transform: translateZ(100px);
  }
  .dialog {
    padding: 2em;
    margin: 1em;

    width: min(24em, 80vw);

    background-color: white;
    border-radius: 1em;
    box-shadow: 0 1em 2em var(--color-shadow);
  }
</style>
