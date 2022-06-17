<script>
	import Servce from '../components/Servce.svelte';
	import Header from '../components/Header.svelte';
	import Wrapper from '$lib/Wrapper.svelte';

	let Servces = [
		{ url: 'tirihal', title: 'أطلب ترحال', bg: '' ,icon:'car'},
		{ url: 'tel:+249967013268', title: 'توصيل جميع الخدمات',bg: '' ,icon:'shopping-cart' },
		{ url: 'ragsha', title: 'ترحال رقشات',bg: '' ,icon:'automobile' },
		{ url: 'tel:+249127871027', title: 'اطلب فنين',bg: '' ,icon:'adjust' },
		{ url: 'realstate', title: 'ايجار وشراء منازل',bg: '' ,icon:'home' },
		{ url: 'tel:+249967013268', title: ' شراء + صيانة تلفونات',bg: '' ,icon:'phone' },
		{ url: 'makeup', title: 'اجار زفاف وبدل  + حجز جلسات تجميل',bg: '' ,icon:'magic' },
		{ url: 'tel:+249919784021', title: 'طلب خبائز و حلويات',bg: '' ,icon:'lemon-o' },
		{ url: 'tel:+249967013268', title: 'حجز طباخ',bg: '' ,icon:'paste' }
	];
</script>

<Header />

<Wrapper>
	{#each Servces as s}
		<Servce url={s.url} title={s.title} bg={s.bg} icon={s.icon} />
	{/each}
</Wrapper>
