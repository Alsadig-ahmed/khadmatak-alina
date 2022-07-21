<script>
	import Header from '../../components/Header.svelte';
	import Wrapper from '$lib/Wrapper.svelte';
    let url= "tel:+249127871021";
    let img= "/home.jpg";
</script>

<Header title="الاسئلة الشائعة" />

<Wrapper>
	<h2> ماهو خدمتك علينا؟ </h2>
    خدمتك علينا هو عبارة عن موقع ويب وتطبيق اندرويد يهدف لتقديم مجموعة من الخدمات لسكان ولاية النيل الابيض
	<p> ما هي خدمات خدمتك علينا ؟</p>
	 الخدمات التي يقدمها    
	<p>ترحال داخلي وسفري </p>
	<p>توصيل دليفري </p>
    <p> توفير فنين وصناعيني مهراء </p>
	<span> فني كهرباء </span>
	<span> فني نجارة </span>
	<span>  فني مكنيكاء </span>
	<span> فني نقاشة </span>
	<span> فني سراميك </span>
	<span> فني بناء </span>
	<span> فني سباكة </span>
	<span> فني لحام </span>
	<p> فني تكييف وتبريد </p>
	<p>  وجميع أعمال الحرفين الاخرى </p>
	<p> يوفر التطبيق حجز جلسات تجميل وحجز زفافات </p>
	<p> ويوفر حجز طباخ وحلويات </p>
	
</Wrapper>
<style>
	p{
		font-weight: 700;
	}
    span{
        padding: 1rem;
    }
</style>