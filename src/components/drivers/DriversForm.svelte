<script lang="ts">
	import { slide } from 'svelte/transition';
	import AddDriver from './AddDriver.svelte';
	let isopen = false;
</script>
<div class="driverform">
	<button on:click={() => (isopen ? (isopen = false) : (isopen = true))}>
		{isopen ? "^ إخفاء الاستمارة":"انضم الي برنامج السواقين"}
	</button>
	{#if isopen}
		{#key isopen}
			<div in:slide={{ x: -50, duration: 250 }} out:slide={{ x: -50, duration: 250 }}>
				<AddDriver />
			</div>
		{/key}
	{/if}
</div>
<style>
	.driverform{
		background-color: rgb(224, 225, 226);
		padding: .2rem ;
	}
	button{
		padding: .2rem 30%;
	}
</style>