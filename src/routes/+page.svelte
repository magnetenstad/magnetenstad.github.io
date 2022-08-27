<script lang="ts">
  import HelloDialog from '$lib/components/HelloDialog.svelte';
  import Portrait from '$lib/components/Portrait.svelte';
  import Button from '$lib/components/Button.svelte';
  import { goto } from '$app/navigation';
  import HeartButton from '$lib/components/HeartButton.svelte';
</script>

<div class="wrapper">
  <HeartButton />
  <HelloDialog>
    <div style="max-width: 80%; transform: translateZ(10px);">
      <h1>Hey, I'm Magne Tenstad 👋</h1>
      <ul>
        <li>CS student at NTNU</li>
        <li>Proficient game and web developer</li>
        <li>Open to work this summer</li>
      </ul>
      <div class="portrait-wrapper">
        <Portrait
          imgSrc="https://avatars.githubusercontent.com/u/46494695"
          imgAlt="Portrait of Magne Tenstad"
        />
      </div>
    </div>
    <br />
    <div style="width: 100%; display:flex; justify-content: center; transform: translateZ(20px);">
      <Button onClick={() => goto('/chat')} pulse={true}>Hello! 👋</Button>
    </div>
  </HelloDialog>
</div>

<style>
  .wrapper {
    background-color: var(--color-background);
    height: 100vh; /* fall-back */
    height: fill-available;
    height: 100svh;
  }

  .portrait-wrapper {
    position: fixed;
    left: 80%;
    top: 20%;
    transform: translate(0, -50%);
    width: min(15em, 35vw);
  }
</style>
