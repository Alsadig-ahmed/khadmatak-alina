<script>
	import Wrapper from '$lib/Wrapper.svelte';
	import Footer from '../components/Footer.svelte';
	import Head from '../components/Head.svelte';
</script>

<Head />
<slot />

<Wrapper>
	<Footer />
</Wrapper>
