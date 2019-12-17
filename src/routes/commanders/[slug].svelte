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
  import fm from "front-matter";
  import MarkdownIt from "markdown-it";

  export let postMd;

  const md = new MarkdownIt();

  $: frontMatter = fm(postMd);
  $: commander = {
    ...frontMatter.attributes,
    html: md.render(frontMatter.body)
  };
</script>

<style>
  .content {
    max-width: 56rem;
  }
  .content :global(h2) {
    font-size: 1.4em;
    font-weight: 500;
  }

  .content :global(ul) {
    line-height: 1.5;
  }

  .content :global(li) {
    margin: 0 0 0.5em 0;
  }
  .commander-image-container {
    border-radius: 0.25rem;
    text-align: center;
    transition: 0.3s;
    width: 227px;
    position: relative;
  }

  .commander {
    display: grid;
    grid-template-columns: 260px 1fr;
  }

  .commander-image {
    object-fit: cover;
  }
  .troop-type-image {
    position: absolute;
    top: -6px;
    left: 0;
	}
	td {
		padding: 0.25rem 0.5rem;
	}
</style>

<svelte:head>
  <title>
    {commander.title} :: Game of Thrones Winter is coming {commander.troop_type}
    Commander
  </title>
</svelte:head>

<p class="breadcrumbs">
  <a href="/" title="Home">Home</a>
  >
  <a href="commanders" title="commanders page">Commanders</a>
  > {commander.title}
</p>
<h1>{commander.title}</h1>
<div class="content">
  <div class="commander">
    <div class="commander-image-container">
      <img
        class="troop-type-image"
        src="{commander.troop_type}.png"
        alt="{commander.troop_type} badge" />
      <img
        class="commander-image"
        src={commander.image.src}
        alt="Image of {commander.title} - {commander.troop_type} commander." />
    </div>
		<div>
		<table>
			<tbody>
				<tr>
					<td><strong>Troop Type:</strong></td>
					<td>{commander.troop_type}</td>
				</tr>
				<tr>
					<td><strong>Commander Type:</strong></td>
					<td>{commander.type}</td>
				</tr>
				<tr>
					<td><strong>Acquisition:</strong></td>
					<td>{commander.acquisition} (see description for details)</td>
				</tr>
			</tbody>
		</table>
		</div>
  </div>
	<h2>Description</h2>
  {@html commander.html}
</div>
