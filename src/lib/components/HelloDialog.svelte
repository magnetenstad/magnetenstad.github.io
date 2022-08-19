<script lang="ts">
</script>

<div class="dialog">
  <div class="body">
    <slot />
  </div>
</div>

<style>
  .dialog {
    padding: 2em;

    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: min(24em, 80vw);

    background-color: white;
    border-radius: 1em;
    box-shadow: 0 1em 2em var(--color-shadow);
  }
</style>
