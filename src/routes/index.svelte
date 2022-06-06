<script>
	import Servce from '../components/Servce.svelte';
	import Header from '../components/Header.svelte';
</script>

<Header />

<div class="container">
	<main class="c">
		<Servce url='tirihal' title="اطلب ترحال" />
		<Servce url="tel:+249967013268" title="توصيل جميع الخدمات" />
		<Servce url='ragsha' title="ترحال رقشات" />
		<Servce url="tel:+249127871027" title="اطلب فنين" />
		<Servce url='realstate' title="ايجار وشراء منازل" />
		<Servce url="tel:+249967013268" title=" شراء + صيانة تلفونات" />
		<Servce url='makeup' title="اجار زفاف وبدل  + حجز جلسات تجميل" />
		<Servce url="tel:+249919784021" title="طلب حبائز و حلويات" />
		<Servce url="tel:+249967013268" title="حجز طباخ" />
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