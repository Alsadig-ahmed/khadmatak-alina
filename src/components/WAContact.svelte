<script>
	import Whatsappclr from '$lib/svg-icons/Whatsappclr.svelte';
    export let text = "رأسلنا علي واتساب"
</script>

<a
	href="https://wa.me/249967013268?text=%E2%9C%8B%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D9%88%D8%B9%D9%84%D9%8A%D9%83%D9%85%0A%20%D8%A7%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%A7%D8%B3%D8%AA%D8%AE%D8%AF%D8%A7%D9%85%20%D9%86%D8%B8%D8%A7%D9%85%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%D9%83%20%D8%B9%D9%84%D9%8A%D9%86%D8%A7"
	target="_blank"
	rel="noopener noreferrer"
>
	{text}
	<Whatsappclr />
</a>
<style lang="scss">
	a {
		background-color: #00e676;
		color: white;
		padding: 0.3rem;
		display: inline-block;
		border-radius: 0.8rem;
		&:hover {
			background-color: rgb(64, 141, 61);
		}
	}
</style>