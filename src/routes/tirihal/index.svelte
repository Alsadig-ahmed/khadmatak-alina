<script>
	import Header from '../../components/Header.svelte';
	import Card from '../../components/Card.svelte';
	import Wrapper from '$lib/Wrapper.svelte';

	let url = 'tel:+249922866969';
	let img = '/home.jpg';
</script>

<Header title="اطلب ترحال" />
<Wrapper>
	<Card {img} {url} text="بوكسي تيوتا" />
	<Card {img} {url} text="أتس" />
	<Card {img} {url} text="كلك" />
	<Card {img} {url} text="أكسن" />
	<Card {img} {url} text="أفانتي" />
	<Card {img} {url} text="شريحة" />
	<Card {img} {url} text="هايس" />
</Wrapper>
