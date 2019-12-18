<script>
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	export let segment;

</script>

<style>
	nav {
		background-color: #202225;
		padding: 2rem 1rem;
		box-shadow: 5px 0 5px -5px #000;
	}
	.menu {
		position: sticky;
		position: -webkit-sticky;
		top: 2rem;
		margin: 0 1rem;
		padding: 0;
	}
	ul {
		list-style-type: none;
		padding: 0;
		margin: 0;
	}
	li {
		margin-bottom: 1rem;
	}
	li a {
		text-decoration: none;
		display: block;
		padding: 0.5rem;
	}
	li a:hover {
		background-color: #333;
	}
	.selected {
		background-color: #333;
	}
</style>
<nav>
  <ul class="menu">
    <li>
      <a class:selected={segment === undefined} href=".">home</a>
    </li>
    <li>
      <a class:selected={segment === 'about'} href="about">about</a>
    </li>
    <li class="menu-item-has-children">
      <a class:selected={segment === 'research'} href="research">research calculator</a>
    </li>
    <li>
      <a class:selected={segment === 'commanders'} href="commanders">
        commanders
      </a>
    </li>
    <li>
      <a rel="prefetch" class:selected={segment === 'guides'} href="guides">
        guides
      </a>
    </li>
    <li>
      <a rel="prefetch" class:selected={segment === 'blog'} href="blog">blog</a>
    </li>
  </ul>
</nav>
