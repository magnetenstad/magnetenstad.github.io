<script lang="ts">
  import Documents from '$lib/components/Documents.svelte';
  import Chat from '$lib/components/Chat.svelte';
  import { Message } from '$lib/Message';
  let messages: Array<Message> = [new Message('magne', 'hey there!')];
</script>

<div class="wrapper">
    <div class="body">
      <Chat imgSrc="https://avatars.githubusercontent.com/u/46494695" {messages} />
    </div>
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

</style>
