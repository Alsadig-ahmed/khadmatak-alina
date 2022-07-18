<script>
	import Servce from './Servce.svelte';
	import Car from '$lib/svg-icons/car.svelte';
	import Ragsha from '$lib/svg-icons/ragsha.svelte';
import DeliverySvg from '$lib/svg-icons/delivery-svg.svelte';
import WorkerSvg from '$lib/not-used/worker-svg.svelte';
import EngineerWorker from '$lib/svg-icons/engineer-worker.svelte';
import Home from '$lib/svg-icons/home.svelte';
import Devices from '$lib/not-used/devices.svelte';
import Iphone from '$lib/svg-icons/iphone.svelte';
import Wedding from '$lib/not-used/wedding.svelte';
import WeddingS from '$lib/svg-icons/wedding-s.svelte';
import CookingSvg from '$lib/svg-icons/cooking-svg.svelte';
import Cooking from '$lib/not-used/cooking.svelte';
import CakeDessert from '$lib/svg-icons/cake-dessert.svelte';
</script>

<Servce url="tirihal" title="أطلب ترحال" bg="#9bbe1c"><Car /></Servce>
<Servce url="tel:+249967013268" title="خدمات توصيل ودلفري" bg="green"><DeliverySvg /></Servce>
<Servce url="ragsha" title="ترحال رقشات" bg="#2db497"><Ragsha/></Servce>
<Servce url="tel:+249127871027" title="اطلب فنين" bg=""><EngineerWorker/></Servce>
<Servce url="realstate" title="ايجار وشراء منازل" bg="#a36ccf"><Home/></Servce>
<Servce url="tel:+249967013268" title=" شراء + صيانة تلفونات" bg="pink"><Iphone/></Servce>
<Servce url="makeup" title="اجار زفاف وبدل  + حجز جلسات تجميل" bg="#3bb9ff"><WeddingS/></Servce>
<Servce url="tel:+249919784021" title="طلب خبائز و حلويات" bg="#9bbe1c"><CakeDessert/></Servce>
<Servce url="tel:+249967013268" title="حجز طباخ" bg="#9bbe1c"><CookingSvg/></Servce>
