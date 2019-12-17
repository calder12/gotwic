<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`_commanders/${params.slug}.md`);

    if (res.status === 200) {
      return { postMd: await res.text() };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import fm from 'front-matter';
  import MarkdownIt from 'markdown-it';

	export let postMd;
	console.log(postMd)

  const md = new MarkdownIt();

  $: frontMatter = fm(postMd);
  $: commander = {
    ...frontMatter.attributes,
    html: md.render(frontMatter.body)
	};
</script>

<style>
  .content :global(h2) {
    font-size: 1.4em;
    font-weight: 500;
  }

  .content :global(pre) {
    background-color: #f9f9f9;
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
    padding: 0.5em;
    border-radius: 2px;
    overflow-x: auto;
  }

  .content :global(pre) :global(code) {
    background-color: transparent;
    padding: 0;
  }

  .content :global(ul) {
    line-height: 1.5;
  }

  .content :global(li) {
    margin: 0 0 0.5em 0;
  }
  .commander {
    border-radius: 0.25rem;
    text-align: center;
    transition: 0.3s;
    width: 227px;
    position: relative;
  }

  .commander-image {
    object-fit: cover;
  }
  .troop-type-image {
    position: absolute;
    top: -6px;
    left: 0;
  }
</style>

<svelte:head>
  <title>{commander.title} :: Game of Thrones Winter is coming {commander.troop_type} Commander</title>
</svelte:head>

<h1>{commander.title}</h1>
<p class="breadcrumbs">
	<a href="/" title="Home">Home</a> > <a href="commanders" title="commanders page">Commanders</a> > {commander.title}
</p>
<div class="commander">
  <img
    class="troop-type-image"
    src="{commander.troop_type}.png"
    alt="{commander.troop_type} badge" />
  <img
    class="commander-image"
    src="{commander.image.src}"
    alt="Image of {commander.title} - {commander.troop_type} commander." />
</div>
<div class="content">
  {@html commander.html}
</div>
