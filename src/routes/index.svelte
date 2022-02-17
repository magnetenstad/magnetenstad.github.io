<script lang="ts">
  import Documents from '$lib/components/Documents.svelte';

  import HelloDialog from '$lib/components/HelloDialog.svelte';
  import Portrait from '$lib/components/Portrait.svelte';
  import Chat from '$lib/components/Chat.svelte';
  import { Message } from '$lib/Message';

  let showHelloDialog: boolean = true;
</script>

<div class="wrapper">
  {#if showHelloDialog}
    <HelloDialog
      title="Hey, I'm Magne Tenstad"
      text="AJKSd aDHLKJ sadlkJ ALSKjdhlAKJSdh lKJAShdl AJKHSdl kJAHS dl"
      buttonText="Hello!"
      buttonCallback={() => (showHelloDialog = false)}
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
        <Chat
          imgSrc="https://avatars.githubusercontent.com/u/46494695"
          messages={[
            new Message(
              'magne',
              'Hey there! bla bla bla bla blabla blabla blabla blablablabla blablablabla blablablabla blablablabla blablablabla blablablabla blablablabla blablablabla blablablabla blablablabla blablablabla blablablabla blablablabla blablablabla blabla'
            ),
            new Message('user', 'Hello!'),
            new Message('magne', "What's up?")
          ]}
        />
      </div>

      <div class="main">
        <Documents />
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
    overflow: auto;
  }

  /* .main::-webkit-scrollbar {
    display: none;
  } */

  .sidebar {
    flex: 1;
    background-color: rgb(190, 190, 190);
  }

  .portrait-wrapper-dialog {
    position: fixed;
    left: 65%;
    top: -15%;
    width: 16rem;
  }
</style>
