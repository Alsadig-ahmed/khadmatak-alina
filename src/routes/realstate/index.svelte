<script>
	import Servce from '../../components/Servce.svelte';
	import Header from '../../components/Header.svelte';
	import HouseCard from '../../components/HouseCard.svelte';
    let url= "tel:+249127871021";
    let img= "/home.jpg";
    let price= "2000,000";
    let description= "قطعة أرض بربك مربع 6 بمساحة 400";
</script>

<Header title="ايحار وشراء منازل" />

<div class="container">
	<main class="c">
		<HouseCard {img} {price} {description} {url} text="بيع قطعة ارض" />
		<HouseCard {img} {price} {description} {url} text="بيع قطعة ارض" />
		<HouseCard {img} {price} {description} {url} text="بيع قطعة ارض" />
		<HouseCard {img} {price} {description} {url} text="بيع قطعة ارض" />
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
