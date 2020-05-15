<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`guides.json`)
      .then(r => r.json())
      .then(guides => {
        return { guides };
      });
  }
</script>

<script>
  export let guides;
</script>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }
</style>

<svelte:head>
  <title>Guides :: Game of Thrones Winter is Coming</title>
</svelte:head>

<div class="container">
  <h1>Guides</h1>

  <ul>
    {#each guides as guide}
      <li>
        <a rel="prefetch" href="guides/{guide.slug}">{guide.title}</a>
      </li>
    {/each}
  </ul>
</div>
