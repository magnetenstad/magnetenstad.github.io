<script lang="ts">
  export const prerender = true;
</script>

<div class="wrapper">
  <slot />
</div>

<style lang="scss">
  @use 'src/global.css';

  .wrapper {
    background-color: var(--color-background);
    width: 100%;
    height: 100vh; /* fall-back */
    height: fill-available;
    height: 100svh;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
</style>
