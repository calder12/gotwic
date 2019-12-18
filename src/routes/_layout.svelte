<script>
	import Nav from '../components/Nav.svelte';
	import Sidebar from '../components/Sidebar.svelte';

	export let segment;

	import { stores } from '@sapper/app';
	const { page } = stores();
	console.log($page)
</script>

<style>
	main {
		position: relative;
		width: 100%;
		padding: 2rem;
		margin: 0 auto;
		box-sizing: border-box;
		overflow: auto;
	}
	.wrapper {
		display: grid;
		grid-template-columns: 350px 1fr 350px;
		height: 100vh;
	}
</style>
{$page}
<div class="wrapper">
<Nav {segment}/>
<main>
	<slot></slot>
</main>

<Sidebar />
</div>