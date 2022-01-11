
<script lang="ts">
  export let title: string;
  export let text: string;
  export let buttonText: string;
  export let buttonCallback: Function;
</script>

<div class="dialog">
  <div class="body">
    <h1>{title}</h1>
    <p>{text}</p>
    <slot></slot>
    <button on:click={() => buttonCallback()}>{buttonText}</button>
  </div>
</div>

<style>
  .dialog {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-width: 24rem;
    padding: 2rem;
    background-color: white;
    border-radius: 1rem;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.25);
  }

  .body {
    max-width: 80%;
  }

  button {
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    background-color: aqua;
  }

  button:hover {
    cursor: pointer;
  }
</style>