<script>
	import Servce from '../components/Servce.svelte';
	import Header from '../components/Header.svelte';
	import Wrapper from '$lib/Wrapper.svelte';
	import Whatsappclr from '$lib/svg-icons/Whatsappclr.svelte';

	let Servces = [
		{ url: 'tirihal', title: 'أطلب ترحال', bg:'#9bbe1c', icon: 'car' },
		{ url: 'tel:+249967013268', title: 'توصيل جميع الخدمات', bg: 'green', icon: 'shopping-cart' },
		{ url: 'ragsha', title: 'ترحال رقشات', bg: '#2db497', icon: 'automobile' },
		{ url: 'tel:+249127871027', title: 'اطلب فنين', bg: '', icon: 'adjust' },
		{ url: 'realstate', title: 'ايجار وشراء منازل', bg: '#a36ccf', icon: 'home' },
		{ url: 'tel:+249967013268', title: ' شراء + صيانة تلفونات', bg: 'pink', icon: 'phone' },
		{ url: 'makeup', title: 'اجار زفاف وبدل  + حجز جلسات تجميل', bg: '#3bb9ff', icon: 'magic' },
		{ url: 'tel:+249919784021', title: 'طلب خبائز و حلويات', bg: '#eac117', icon: 'lemon-o' },
		{ url: 'tel:+249967013268', title: 'حجز طباخ', bg: '#bb1942', icon: 'paste' }
	];
</script>

<Header />

<Wrapper>
	<a href="https://wa.me/249967013268" target="_blank" rel="noopener noreferrer">
		رأسلنا علي واتساب
		<Whatsappclr />
	</a>
	{#each Servces as s}
		<Servce url={s.url} title={s.title} bg={s.bg} icon={s.icon} />
	{/each}
</Wrapper>

<style lang="scss">
	a {
		background-color: red;
		color: white;
		padding: 0.2rem;
		display: inline-block;
		border-radius: 0.8rem;
		&:hover {
			background-color: rgb(255, 136, 0);
			color: rgb(129, 118, 118);
		}
	}
</style>
