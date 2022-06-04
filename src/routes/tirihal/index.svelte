<script>
	import Servce from '../../components/Servce.svelte';
	import Header from '../../components/Header.svelte';
	import Card from '../../components/Card.svelte';
    let url= "tel:+249922866969";
    let img= "/home.jpg";
</script>

<Header title="اطلب ترحال" />

<div class="container">
	<main class="c">
		<Card {img} {url} text="بوكسي تيوتا" />
		<Card {img} {url} text="أتس" />
		<Card {img} {url} text="كلك" />
		<Card {img} {url} text="أكسن" />
		<Card {img} {url} text="أفانتي" />
		<Card {img} {url} text="شريحة" />
		<Card {img} {url} text="هايس" />
	</main>
</div>

<style>
	.c {
		width: 100%;
		height: 1000vh;
		padding: 0.2rem;
	}
	.container {
		max-width: 460px;
		margin: auto;
	}
</style>
