<script>
	import Header from '../../components/Header.svelte';
	import Card from '../../components/Card.svelte';
	import Wrapper from '$lib/Wrapper.svelte';
	let url = 'tel:+249127871021';
	// let img = '/home.jpg';

</script>

<Header title="ترحال رقشات" />

<Wrapper>
	<Card img='/imgs/IMG-20220621-WA0008.jpg' {url} text="رقشة جانسي" />
	<Card img='/imgs/IMG-20220621-WA0012.jpg' {url} text="رقشة حمدوووك" />
	<Card img='/imgs/IMG-20220621-WA0016.jpg' {url} text="رقشة دقو ورا" />
</Wrapper>
