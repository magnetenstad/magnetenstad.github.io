
<script lang="ts">
  import Documents from "$lib/components/Documents.svelte";

  import HelloDialog from "$lib/components/HelloDialog.svelte";
  import Portrait from "$lib/components/Portrait.svelte";

  let showHelloDialog: boolean = true;
  
</script>

<div class="wrapper">
  {#if showHelloDialog}
    <HelloDialog
      title="Hey, I'm Magne Tenstad"
      text="AJKSd aDHLKJ sadlkJ ALSKjdhlAKJSdh lKJAShdl AJKHSdl kJAHS dl"
      buttonText="Hello!"
      buttonCallback={() => showHelloDialog = false}
    >
      <div class="portrait-wrapper-dialog">
        <Portrait
          imgSrc="https://avatars.githubusercontent.com/u/46494695"
          imgAlt="Portrait of Magne Tenstad"
        />
      </div>
    </HelloDialog>
  {:else}
  
  <div class="body">
    <div class="sidebar">
      <h1>Hello world!</h1>
      <div class="portrait-wrapper">
        <Portrait
          imgSrc="https://avatars.githubusercontent.com/u/46494695"
          imgAlt="Portrait of Magne Tenstad"
        />
      </div>
    </div>
  
    <div class="main">
      <Documents></Documents>
    </div>
  
  </div>

  {/if}
</div>

<style>
  .wrapper {
    background-color: rgb(230, 230, 230);
    min-height: 100vh;
    overflow: hidden;
  }

  .body {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    height: 100vh;
  }

  .main {
    flex: 2;
    overflow: scroll;
  }

  .sidebar {
    flex: 1;
    background-color: rgb(190, 190, 190);
  }

  .portrait-wrapper {
    width: 4rem;
    z-index: 1;
    left: 100px;
  }

  .portrait-wrapper-dialog {
    position: fixed;
    left: 65%;
    top: -15%;
    width: 16rem;
  }

  
</style>
