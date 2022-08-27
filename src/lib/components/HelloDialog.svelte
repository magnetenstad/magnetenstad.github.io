<script lang="ts">
  import tilt from '$lib/tilt.js';
</script>

<div class="wrapper">
  <div class="dialog" use:tilt>
    <slot />
  </div>
</div>

<style>
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateZ(100px);
    height: 100%;
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
