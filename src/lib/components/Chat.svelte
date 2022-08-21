<script lang="ts">
  import { Message } from '$lib/Message';
  import type { Prat } from 'pratjs';
  import { onMount } from 'svelte';
  import Button from './Button.svelte';

  export let imgSrc: string;
  export let prat: Prat;
  let messages: Array<Message> = [];
  let choices = [];

  const addMessage = (msg: Message) => {
    messages = [...messages, msg];
  };

  const getChoices = () => {
    choices = prat.getChoices();
    while (choices.length === 0) {
      prat.input('');
      addMessage(new Message(true, prat.getLine().text));
      choices = prat.getChoices();
    }
  };
  const scrollDown = () =>
    setTimeout(
      () => document.getElementById('bottom').scrollIntoView({ block: 'end', behavior: 'smooth' }),
      100
    );
  const click = (index: string) => {
    prat.input(index);
    addMessage(new Message(false, prat.getLine().text));
    getChoices();
    scrollDown();
  };

  addMessage(new Message(true, prat.getLine().text));
  getChoices();
  onMount(() => {
    scrollDown();
  });
</script>

<div class="window">
  <div class="scroll-wrapper">
    <div style="height: 100vh;" />
    <div class="messages-wrapper">
      {#each messages as message, i}
        {#if message.incoming}
          <div class="message message-left">
            <p>{message.text}</p>
          </div>
          {#if !messages[i + 1]?.incoming ?? false}
            <img class="message-img" src={imgSrc} alt="" />
          {/if}
        {:else}
          <div class="message message-right">
            <p class="user">{message.text}</p>
          </div>
        {/if}
      {/each}
      <div id="bottom" />
    </div>
  </div>
  <div class="choices-wrapper">
    {#each choices as choice, i}
      <Button onClick={() => click(`${i}`)}>{choice.text}</Button>
    {/each}
  </div>
</div>

<style>
  .window {
    width: 80%;
    height: 80%;
    max-width: 25em;

    display: flex;
    flex-direction: column;
    justify-content: end;

    background-color: var(--color-background);
    padding: 1em;
    margin: 2em auto;
    border-radius: 2em;
    box-shadow: 0em 1em 2em var(--color-shadow);
  }

  .scroll-wrapper {
    overflow: auto;
  }

  .scroll-wrapper::-webkit-scrollbar {
    display: none;
  }

  .messages-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: end;
  }

  .message {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0.5em;
    max-width: 64%;
  }

  .message-left {
    align-self: flex-start;
  }

  .message-right {
    align-self: flex-end;
  }

  p {
    background-color: white;
    border-radius: 1em;
    box-shadow: 0em 0.5em 1em var(--color-shadow);
    padding: 0.5em 1em;
    margin: 0;
    margin-left: 1em;
    height: min-content;
  }

  p.user {
    background-color: var(--color-primary);
    color: white;
  }

  .message-img {
    flex: 0;
    width: 2.5em;
    height: 2.5em;
    border-radius: 2.5em;
    margin: 0.5em 1em 1em 1.5em;
    box-shadow: 0em 0.5em 1em var(--color-shadow);
  }

  #bottom {
    scroll-padding-top: -100%;
    width: 100%;
  }

  .choices-wrapper {
    display: flex;
    justify-content: center;
    gap: 1em;
    padding: 1em;
    flex-wrap: wrap;
  }
</style>