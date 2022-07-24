<script>
	import { db } from '$lib/firebase';
	import Wrapper from '$lib/Wrapper.svelte';
	import { fly } from 'svelte/transition';
	import { collection, getDocs } from 'firebase/firestore';
	import Header from '../../../components/Header.svelte';
	// listed-drivers
export let noData;
export let listedDrivers;

console.log(noData);
</script>

<main>
	<Header title="مقدمي طلب الانضمام" />
	<Wrapper>
		
				{#if noData === 'sorry we could not have the data'}
					تاكد من اتصال الانترنت لديك و اعد المحاولة
				{:else}
					<h2 class="value">هذهي قائمة باسماء الاشخاص الذين قدموا طلب للانضمام</h2>
                    {/if}
					<p>عدد الاشحاص المسجلين {listedDrivers.length}</p>
				{#each listedDrivers as ld}
					<div class="listedDrivers">
						<h3>{ld.name}</h3>
						<h3>{ld.phoneNember}</h3>
						<h3>{ld.residence}</h3>
						<h3>{ld.carModel}</h3>
						<h3>{ld.carNumber}</h3>
						<h3>{ld.createdat}</h3>
						<h3>{ld.id}</h3>
					</div>
				{/each}
			
	</Wrapper>
</main>

<style lang="scss">
	.value {
		margin-top: 0.5rem;
	}
	.listedDrivers {
		background-color: rgba(211, 216, 219, 0.767);
		border-radius: 3rem;
		padding-top: 1rem;
		padding-bottom: 1rem;
		box-shadow: 0 0 2rem 0.2rem rgba(44, 43, 43, 0.705);
		margin: 1rem 0;
	}
</style>
