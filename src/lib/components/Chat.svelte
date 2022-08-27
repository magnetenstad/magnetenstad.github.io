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
    <div class="scroll-padding-top" />
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
      <Button onClick={() => click(`${i}`)} style="border: 2px solid white; font-weight: bold;">
        {choice.text}
      </Button>
    {/each}
  </div>
</div>

<style>
  .window {
    width: 80%;
    min-width: 20%;
    max-width: 25em;
    max-height: calc(100% - 2em);

    display: flex;
    flex-direction: column;
    justify-content: end;

    background-color: var(--color-background);
    border-radius: 2em;
    box-shadow: 0em 1em 2em var(--color-shadow);

    overflow: hidden;
  }

  @media only screen and (max-width: 768px) {
    .window {
      width: 100%;
      max-width: 100%;
      margin: 0;
      border-radius: 0;
    }
  }

  .scroll-wrapper {
    overflow: auto;
    max-height: 100%;
  }

  .scroll-wrapper::-webkit-scrollbar {
    display: none;
  }

  .scroll-padding-top {
    height: 100vh; /* fall-back */
    height: fill-available;
    height: 100svh;
  }

  .messages-wrapper {
    display: flex;
    flex-direction: column;
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
    margin: 0 1em;
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
    padding: 2em 1em;
    flex-wrap: wrap;
    background-color: var(--color-primary);
  }

  @media only screen and (max-width: 768px) {
    .choices-wrapper {
      padding: 2em 1em 4em 1em;
    }
  }
</style>
