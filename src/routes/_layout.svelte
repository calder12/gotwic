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
	}
	.content {
		max-width: 90rem;
		margin: 0 auto;
	}
</style>
<main>
	<Nav {segment}/>
	<div class="content">
		<slot></slot>
	</div>
</main>