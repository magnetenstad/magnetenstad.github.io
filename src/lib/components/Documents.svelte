
<script lang='ts'>
  import Card from '$lib/components/Card.svelte';
  import { onMount } from 'svelte';
  import metadataParser from 'markdown-yaml-metadata-parser'

  let documents = [];

  onMount(() => {
    fetch('documents/.documents.config.json')
      .then((response) => response.json())
      .then((json) => {
        for (let filename of json.documents) {
          fetch('documents/' + filename)
            .then((response) => response.text())
            .then((text) => {
              documents.push(metadataParser(text));
              documents = documents;
            });
        }
      });
  });
</script>

<div class="container">
  <ul class="cards">
    {#each documents as document}
      <li>
        <Card {document}></Card>
      </li>
    {/each}
  </ul>
</div>

<style>
  .container {
    max-width: 90%;
    margin: auto;
    align-content: flex-start;
  }
  
  .cards {
    display: flex;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    margin: 4rem 5vw;
    padding: 0;
    list-style-type: none;
    flex-wrap: wrap;
  }
</style>