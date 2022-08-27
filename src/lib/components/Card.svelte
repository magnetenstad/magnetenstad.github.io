<script lang="ts">
  import type { Document } from '$lib/Document';

  export let document: Document;

  $: ready = document !== undefined;
</script>

<div class="card">
  {#if !ready}
    <h1>...Loading</h1>
  {:else}
    <img src={document.metadata.image} class="card__image" alt="" />
    <div class="card__overlay">
      <div class="card__header">
        <div class="card__header-text">
          <h3 class="card__title">{document.metadata.title}</h3>
          <span class="card__status">{document.metadata.date}</span>
        </div>
      </div>
      <p class="card__description">
        Loem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?
      </p>
    </div>
  {/if}
</div>

<style>
  :root {
    --surface-color: #fff;
    --curve: 40;
  }

  * {
    box-sizing: border-box;
  }

  .card {
    max-width: 12em;
    position: relative;
    display: block;
    height: 16em;
    border-radius: calc(var(--curve) * 1px);
    overflow: hidden;
    text-decoration: none;
    box-shadow: 0em 1em 2em var(--color-shadow);
  }

  .card__image {
    height: inherit;
    margin-left: -30%;
  }

  .card__overlay {
    position: absolute;
    bottom: 0;
    height: 16em;
    left: 0;
    right: 0;
    z-index: 1;
    border-radius: 0 0 0 0;
    background-color: var(--surface-color);
    transform: translateY(100%);
    transition: 0.2s ease-in-out;
  }

  .card:hover .card__overlay {
    transform: translateY(0);
  }

  .card__header {
    position: relative;
    display: flex;
    align-items: center;
    gap: 2em;
    padding: 1em 2em;
    border-radius: calc(var(--curve) * 1px) calc(var(--curve) * 1px) 0 0;
    background-color: var(--surface-color);
    transform: translateY(-100%);
    transition: 0.2s ease-in-out;
  }
  .card:hover .card__header {
    transform: translateY(0);
  }

  .card__title {
    font-size: 1em;
    margin: 0 0 0.3em;
    color: #6a515e;
  }

  .card__status {
    font-size: 0.8em;
    color: #d7bdca;
  }

  .card__description {
    padding: 0 2em 2em;
    margin: 0;
    color: #d7bdca;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
</style>
