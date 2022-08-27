<script lang="ts">
  import Chat from '$lib/components/Chat.svelte';
  import { Prat } from 'pratjs';
  import talkString from '$lib/assets/talk/magne.talk?raw';
  const prat = Prat.fromString(talkString);
  const imgSrc = 'https://avatars.githubusercontent.com/u/46494695';
</script>

<div class="wrapper">
  <Chat {imgSrc} {prat} />
</div>

<style>
  .wrapper {
    background-color: var(--color-background);
    display: flex;
    height: 100vh; /* fall-back */
    height: fill-available;
    height: 100svh;
  }
</style>
