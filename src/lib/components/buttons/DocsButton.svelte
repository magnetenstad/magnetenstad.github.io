<script lang="ts">
  import { goto } from '$app/navigation';
  import BaseIcon from '$lib/components/icons/BaseIcon.svelte';
  import DocsSvg from '$lib/assets/icons/docs.svelte';

  const goToDocs = () => {
    goto('https://magne.dev/docs');
  };
</script>

<div class="docs-button" on:click|stopPropagation={goToDocs}>
  <BaseIcon>
    <DocsSvg />
  </BaseIcon>
  Docs
</div>

<style>
  .docs-button {
    position: fixed;
    left: 10px;
    top: 10px;

    width: 80px;
    height: 40px;

    background-color: var(--color-accent-shadow);
    color: var(--color-accent);
    border-radius: 40px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;

    user-select: none;
  }
</style>
