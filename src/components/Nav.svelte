<script>
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	export let segment;

</script>

<style>
	nav {
		background-color: #c5c6c7;
		padding: 0.75rem 1rem;
		box-shadow: 0 5px 5px -5px #000;
		overflow: auto;
		z-index: 1000;
	}
	.menu {
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
		display: inline-block;
	}
	li a {
		text-decoration: none;
		padding: 0.5rem;
	}
	li a:hover {
		color: #888;
	}
	li a.selected {
		color: #888;
		text-decoration: underline;
	}
</style>
<nav>
  <ul class="menu">
    <li>
      <a class:selected={segment === undefined} href=".">home</a>
    </li>
    <li class="menu-item-has-children">
      <a class:selected={segment === 'research'} href="research">research</a>
    </li>
    <li>
      <a rel="prefetch" class:selected={segment === 'guides'} href="guides">
        guides
      </a>
    </li>
  </ul>
</nav>
