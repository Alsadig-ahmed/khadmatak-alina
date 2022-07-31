<script context="module">
	export let prerender = true;
</script>

<script>
	import Wrapper from '$lib/Wrapper.svelte';
	import Header from '../components/Header.svelte';
</script>

<Header />

<Wrapper>
	<div class="added">sorry something went wrong</div>
</Wrapper>

<style>
	.added {
		margin: 2rem 1rem;
		padding: 1rem 2rem;
		background-color: rgba(201, 32, 32, 0.479);
		color: aliceblue;
	}
</style>
