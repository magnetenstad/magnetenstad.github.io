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
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) translateZ(100px);
  }
  .dialog {
    padding: 2em;

    width: min(24em, 80vw);

    background-color: white;
    border-radius: 1em;
    box-shadow: 0 1em 2em var(--color-shadow);
  }
</style>
