<script>
	import Header from '../../components/Header.svelte';
	import Card from '../../components/Card.svelte';
	import Wrapper from '$lib/Wrapper.svelte';

	let img = '/home.jpg';
	let supervisors = [
		{ name: 'عبدالعزيز عصام - أدارة', number: 'tel:+249967013268', img:'/imgs/team/IMG-20220621-WA0006.jpg' },
		{ name: 'السيد - منسق ترحال', number: 'tel:+249912964409', img:'/imgs/team/IMG-20220621-WA0015.jpg' },
		{ name: 'ابوعبيدة - منسق دليفري', number: 'tel:+249904373619', img:'/imgs/team/IMG-20220621-WA0010.jpg' },
		{ name: 'النزير - منسق رقسات', number: 'tel:+249911622268', img:'/imgs/team/IMG-20220621-WA0007.jpg' },
		{ name: 'عمران - منسق فنيين', number: 'tel:+249916130972', img:'/imgs/team/IMG-20220621-WA0020.jpg' },
		{ name: 'الهادي - منسق ولاية الخرطوم', number: 'tel:+249910761140', img:'/imgs/team/IMG-20220621-WA0001.jpg' },
		{ name: 'الصادق أحمد - مطور', number: 'tel:+249963003102', img:'/imgs/team/DSC_0614.jpg' }
	];
</script>

<Header title="المشرفين" />

<Wrapper>
	{#each supervisors as supervisor}
		<Card img={supervisor.img} text={supervisor.name} url={supervisor.number} />
	{/each}
</Wrapper>
