<script lang="ts">
	import { slide } from 'svelte/transition';
	import AddDriver from './AddDriver.svelte';
	let isopen = false;
</script>

<div class="driverform">
	<button on:click={() => (isopen ? (isopen = false) : (isopen = true))}>
		{isopen ? '^ إخفاء الاستمارة' : 'انضم الي برنامج السواقين'}
	</button>
	{#if isopen}
		{#key isopen}
			<div in:slide={{ duration: 250 }} out:slide={{ duration: 250 }}>
				<AddDriver />
			</div>
		{/key}
	{/if}
</div>

<style>
	.driverform {
		background-color: rgb(224, 225, 226);
		padding: 0.2rem;
	}
	button {
		padding: 0.2rem 30%;
	}
</style>
