<script lang="ts">
  export let imgSrc: string;
  export let imgAlt: string;
</script>

<img class="portrait" src={imgSrc} alt={imgAlt} />

<style>
  .portrait {
    border-radius: 50%;
    box-shadow: 0 1em 2em var(--color-shadow);
    width: 100%;
  }
</style>
