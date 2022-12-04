<script lang="ts">
  import HelloDialog from '$lib/components/HelloDialog.svelte';
  import Portrait from '$lib/components/Portrait.svelte';
  import Button from '$lib/components/buttons/Button.svelte';
  import { goto } from '$app/navigation';
  // import HeartButton from '$lib/components/buttons/HeartButton.svelte';
  import DocsButton from '$lib/components/buttons/DocsButton.svelte';
</script>

<DocsButton />
<!-- <HeartButton /> -->
<HelloDialog>
  <div style="max-width: 68%; transform: translateZ(15px);">
    <h1>Hey, I'm Magne Tenstad 👋</h1>
  </div>
  <div style="transform: translateZ(15px);">
    <ul>
      <li>👨‍🎓 CS student and TA at NTNU</li>
      <li>💻 Web Developer at Norsonic</li>
      <li>👾 Hobbyist Game Developer</li>
      <!-- <li>🌴 Open to work this summer</li> -->
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
  li {
    list-style: none;
    transform: translateX(-25px);
    padding: 0 0 0.2em 0;
  }
</style>
