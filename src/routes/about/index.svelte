<script>
	import Servce from '../../components/Servce.svelte';
	import Header from '../../components/Header.svelte';
	import Card from '../../components/Card.svelte';
    let url= "tel:+249127871021";
    let img= "/home.jpg";
</script>

<Header title="معلومات عن التطبيق" />

<div class="container">
	<main class="c">
		<h2> شرح للخدمات التي  يقدمها التطبيق</h2>
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
