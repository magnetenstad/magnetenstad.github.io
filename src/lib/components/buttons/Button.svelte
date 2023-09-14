<script lang="ts">
  export let style: string = '';
  export let onClick: () => void;
  export let pulse: boolean = false;
</script>

<button on:click={onClick} {style} class={pulse ? 'pulse' : ''}>
  <slot />
</button>

<style>
  button {
    border: none;
    font-size: medium;
    padding: 0.6em 1.2em;
    border-radius: 1em;
    color: white;
    background-color: var(--color-primary);
    user-select: none;
  }

  button:hover {
    cursor: pointer;
    animation: button-hover 0.25s forwards;
  }

  button:active {
    background-color: var(--color-primary-dark);
    animation: button-click 0.2s;
  }

  .pulse {
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0% {
      box-shadow: none;
    }
    50% {
      background-color: var(--color-primary-light);
      box-shadow: 0 0 2em rgba(var(--color-primary-rgb), 0.8);
    }
    0% {
      box-shadow: none;
    }
  }

  @keyframes button-click {
    from {
      transform: translateY(4px);
    }

    to {
      transform: translateY(0px);
    }
  }

  @keyframes button-hover {
    from {
      transform: translateY(0px);
    }

    to {
      transform: translateY(-4px);
      background-color: var(--color-primary-light);
      box-shadow: 0 4px 1em rgba(var(--color-primary-rgb), 0.5);
    }
  }
</style>
