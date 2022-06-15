<script>
	import Header from '../../components/Header.svelte';
	import Card from '../../components/Card.svelte';
	import Wrapper from '$lib/Wrapper.svelte';
	let url = 'tel:+249127871021';
	let img = '/home.jpg';
</script>

<Header title="ترحال رقشات" />

<Wrapper>
	<Card {img} {url} text="رقشة جانسي" />
	<Card {img} {url} text="رقشة حمدوووك" />
	<Card {img} {url} text="رقشة دقو ورا" />
</Wrapper>
