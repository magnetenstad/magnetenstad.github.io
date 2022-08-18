<script lang="ts">
  import Chat from '$lib/components/Chat.svelte';
  import { Message } from '$lib/Message';
  import { Prat } from 'pratjs';
  import text from '$lib/../../static/prat/prat.talk?raw';
  const prat = Prat.fromString(text);

  let messages: Array<Message> = [new Message(true, prat.getLine().text)];
</script>

<div class="wrapper">
  <div class="body">
    <Chat imgSrc="https://avatars.githubusercontent.com/u/46494695" {messages} />
  </div>
</div>

<style>
  .wrapper {
    background-color: var(--color-background);
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
