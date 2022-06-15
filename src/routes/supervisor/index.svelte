<script>
	import Header from '../../components/Header.svelte';
	import Card from '../../components/Card.svelte';
	import Wrapper from '$lib/Wrapper.svelte';

	let img = '/home.jpg';
	let supervisors = [
		{ name: 'عبدالعزيز عصام - أدارة', number: 'tel:+249967013268' },
		{ name: 'السيد - منسق ترحال', number: 'tel:+249912964409' },
		{ name: 'ابوعبيدة - منسق دليفري', number: 'tel:+249904373619' },
		{ name: 'النزير - منسق رقسات', number: 'tel:+249911622268' },
		{ name: 'عمران - منسق فنيين', number: 'tel:+249916130972' },
		{ name: 'الهادي - منسق ولاية الخرطوم', number: 'tel:+249910761140' }
	];
</script>

<Header title="المشرفين" />

<Wrapper>
	{#each supervisors as supervisor}
		<Card {img} text={supervisor.name} url={supervisor.number} />
	{/each}
</Wrapper>
