<script>
	import Servce from '../components/Servce.svelte';
	import Header from '../components/Header.svelte';
	import Wrapper from '$lib/Wrapper.svelte';

	let Servces = [
		{ url: 'tirihal', title: 'أطلب ترحال', bg: '' },
		{ url: 'tirihal', title: 'اطلب', bg: '' },
		{ url: 'tel:+249967013268', title: 'توصيل جميع الخدمات', bg: '' },
		{ url: 'ragsha', title: 'ترحال رقشات', bg: '' },
		{ url: 'tel:+249127871027', title: 'اطلب فنين', bg: '' },
		{ url: 'realstate', title: 'ايجار وشراء منازل', bg: '' },
		{ url: 'tel:+249967013268', title: ' شراء + صيانة تلفونات', bg: '' },
		{ url: 'makeup', title: 'اجار زفاف وبدل  + حجز جلسات تجميل', bg: '' },
		{ url: 'tel:+249919784021', title: 'طلب خبائز و حلويات', bg: '' },
		{ url: 'tel:+249967013268', title: 'حجز طباخ', bg: '' }
	];
</script>

<Header />

<Wrapper>
	{#each Servces as s}
		<Servce url={s.url} title={s.title} bg={s.bg} />
	{/each}
</Wrapper>
