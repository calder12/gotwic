<script context="module">                                                                                                                                                                                                                                                                   
  export async function preload({ params, query }) {
    const res = await this.fetch(`_guides/${params.slug}.md`);

    if (res.status === 200) {
      return { guideMd: await res.text() };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import fm from 'front-matter';
  import MarkdownIt from 'markdown-it';

  export let guideMd;

  const md = new MarkdownIt();

  $: frontMatter = fm(guideMd);
  $: guide = {
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
		box-shadow: inset 1px 1px 5px rgba(0,0,0,0.05);
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

	.content {
		max-width: 56rem;
	}
</style>

<svelte:head>
	<title>NDM - {guide.title}</title>
</svelte:head>
<div class="container">
<p class="breadcrumbs">
	<a href="/" title="Home">Home</a> > <a href="guides" title="guide page">Guides</a> > {guide.title}
</p>
<h1>{guide.title}</h1>
<p>{guide.date}</p>

<div class='content'>
	{@html guide.html}
</div>
</div>