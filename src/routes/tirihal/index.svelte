<script>
	import Header from '../../components/Header.svelte';
	import Card from '../../components/Card.svelte';
	import Wrapper from '$lib/Wrapper.svelte';

	let url = 'tel:+249922866969';
	// let whatsapp = 'https://wa.me/249922866969';
	const cars = [
		{ name: 'بوكسي تيوتا', img: '/imgs/cars/IMG-20220621-WA0004.jpg' },
		{ name: 'أتس', img: '/imgs/cars/IMG-20220621-WA0019.jpg' },
		{ name: 'كلك', img: '/imgs/cars/IMG-20220621-WA0022.jpg' },
		{ name: 'أكسن', img: '/imgs/cars/IMG-20220621-WA0000.jpg' },
		{ name: 'أفانتي', img: '/imgs/cars/IMG-20220621-WA0013.jpg' },
		{ name: 'شريحة', img: '/imgs/cars/IMG-20220621-WA0023.jpg' },
		{ name: 'هايس', img: '/imgs/cars/IMG-20220621-WA0014.jpg' }
	];
</script>

<Header title="اطلب ترحال" />
<Wrapper>
	{#each cars as car}
		<Card img={car.img} {url} text={car.name} />
	{/each}
</Wrapper>
