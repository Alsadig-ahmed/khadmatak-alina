<script>
	import Header from '../../components/Header.svelte';
	import HouseCard from '../../components/HouseCard.svelte';
	import Wrapper from '$lib/Wrapper.svelte';
	let url = 'tel:+249127871021';
	let img = '/home.jpg';
	let price = '2000,000';
	let description = 'قطعة أرض بربك مربع 6 بمساحة 400';
</script>

<Header title="ايحار وشراء منازل" />

<Wrapper>
	<HouseCard {img} {price} {description} {url} text="بيع قطعة ارض" />
	<HouseCard {img} {price} {description} {url} text="بيع قطعة ارض" />
	<HouseCard {img} {price} {description} {url} text="بيع قطعة ارض" />
	<HouseCard {img} {price} {description} {url} text="بيع قطعة ارض" />
</Wrapper>
