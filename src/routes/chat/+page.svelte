<script lang="ts">
  import Chat from '$lib/components/Chat.svelte';
  import { Prat } from 'pratjs';
  import pratString from '$lib/assets/prat/magne.prat?raw';
  const prat = Prat.fromString(pratString);
  const imgSrc = 'https://avatars.githubusercontent.com/u/46494695';
</script>

<Chat {imgSrc} {prat} />
