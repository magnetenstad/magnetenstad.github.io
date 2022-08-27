<script lang="ts">
  import HelloDialog from '$lib/components/HelloDialog.svelte';
  import Portrait from '$lib/components/Portrait.svelte';
  import Button from '$lib/components/Button.svelte';
  import { goto } from '$app/navigation';
  import HeartButton from '$lib/components/HeartButton.svelte';
</script>

<HeartButton />
<HelloDialog>
  <div style="max-width: 70%; transform: translateZ(15px);">
    <h1>Hey, I'm Magne Tenstad 👋</h1>
  </div>
  <div style="max-width: 90%; transform: translateZ(15px);">
    <ul>
      <li>CS student at NTNU</li>
      <li>Proficient game and web developer</li>
      <li>Open to work this summer</li>
    </ul>
  </div>
  <div class="portrait-wrapper">
    <Portrait
      imgSrc="https://avatars.githubusercontent.com/u/46494695"
      imgAlt="Portrait of Magne Tenstad"
    />
  </div>
  <br />
  <div style="width: 100%; display:flex; justify-content: center; transform: translateZ(20px);">
    <Button onClick={() => goto('/chat')} pulse={true}>Hello! 👋</Button>
  </div>
</HelloDialog>

<style>
  .portrait-wrapper {
    position: fixed;
    left: 90%;
    top: 20%;
    transform: translate(-50%, -50%);
    width: min(15em, 45vw);
  }
</style>
