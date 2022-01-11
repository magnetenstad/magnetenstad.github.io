
<script lang="ts">
  import type { Message } from "$lib/Message";

  export let imgSrc: string;
  export let messages: Array<Message>;
</script>


<div class="window">
  <div class="scroll-wrapper">
    <div class="messages-wrapper">
      {#each messages as message}
        {#if message.from == 'magne'}
          <div class="message-wrapper-1">
            <img class="message__img" src={imgSrc} alt="">
            <p>{message.text}</p>
          </div>
        {:else}
          <div class="message-wrapper-2">
            <p class="user">{message.text}</p>
          </div>
        {/if}
      {/each}
    </div>
  </div>
  <input class="text-input"/>
</div>

<style>
  .window {
    width: 80%;
    height: 80%;

    display: flex;
    flex-direction: column;
    justify-content: end;
    
    background-color: rgb(230, 230, 230);
    padding: 1rem;
    margin: 2rem auto;
    border-radius: 2rem;
    box-shadow: 0rem 1rem 2rem rgba(0, 0, 0, 0.20);
  }

  .scroll-wrapper {
    overflow: auto;
  }

  .messages-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: end;
  }

  /* .scroll-wrapper::-webkit-scrollbar {
    display: none;
  } */

  .text-input {
    flex: 0;
    width: 90%;
    min-height: 2rem;
    border-radius: 2rem;
    border-color:rgba(0, 0, 0, 0.25);
    padding: 0rem 1rem;
    box-shadow: 0rem 0.5rem 1rem rgba(0, 0, 0, 0.20);
    margin: 1rem 0;
  }

  .message-wrapper-1 {
    display: flex;
    flex-direction: row;
    margin: 0.5rem;
    align-self: flex-start;
  }

  .message-wrapper-2 {
    display: flex;
    flex-direction: row;
    margin: 0.5rem;
    align-self: flex-end;
  }

  p {
    flex: 4;
    background-color: white;
    border-radius: 2rem;
    box-shadow: 0rem 0.5rem 1rem rgba(0, 0, 0, 0.20);
    padding: 0.5rem 1rem;
    margin: 0.5rem;
  }

  p.user {
    background-color: rgb(33, 130, 241);
    color: white;
  }

  .message__img {
    flex: 0;
    width: 3rem;
    height: 3rem;
    border-radius: 2rem;
    box-shadow: 0rem 0.5rem 1rem rgba(0, 0, 0, 0.20);
  }

</style>