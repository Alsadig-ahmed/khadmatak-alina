<script>
import Servce from "../components/Servce.svelte";
import Header from "../components/Header.svelte";

</script>
<svelte:head>
    <link rel="stylesheet" href="/style.css" />
</svelte:head>
<Header />

<div class="container">    
    <main class="c">
        <Servce title='اطلب ترحال' />
        <Servce title='ارسال رسالة للادارة' />
        <Servce title='توصيل جميع الخدمات' />
        <Servce title='ترحال رقشات' />
        <Servce title='اطلب فنين' />
        <Servce title='ايجار وشراء منازل' />
        <Servce title=' شراء + صيانة تلفونات' />
        <Servce title='اجار زفاف وبدل  + حجز جلسات تجميل' />
        <Servce title='طلب حبائز و حلويات' />
        <Servce title='حجز طباخ' />
        <Servce title='المشرفين' />
        <Servce title='معلومات عن التطبيق' />
    </main>
</div>