<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	main {
		position: relative;
		width: 100%;
		padding: 2rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
	.wrapper {
		display: grid;
		grid-template-columns: 350px 1fr;
		height: 100vh;
	}
</style>

<div class="wrapper">
<Nav {segment}/>

<main>
	<slot></slot>
</main>
</div>