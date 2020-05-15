<script>
	import Nav from '../components/Nav.svelte'

	export let segment;

	import { stores } from '@sapper/app';
	// const  { page } = stores();
	// console.log($page)
</script>

<style>
	main {
		position: relative;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
		overflow: auto;
	}
	.wrapper {
		display: grid;
		grid-template-columns: 280px 1fr;
		height: 100vh;
	}
</style>
<div class="wrapper">
<Nav {segment}/>
<main>
	<slot></slot>
</main>
</div>