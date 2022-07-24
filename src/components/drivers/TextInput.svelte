<script lang="ts">
    import{slide}from 'svelte/transition'
	export let value = '';
	export let placeholder = '';
	let isactive = false;
	let isShown = false;
</script>

<input
	type="text"
	class:isactive
	on:focus={() => ((isactive = true), (isShown = true))}
	on:blur={() => ((isactive = false), (isShown = false))}
	bind:value
	{placeholder}
/>
{#key isShown}
	<div
		class:isShown
		hidden
		in:slide={{ x: -50, duration: 250 }}
		out:slide={{ x: -50, duration: 250 }}
	>
		<slot />
	</div>
{/key}

<style lang="scss">
	input {
		padding: 0.5rem;
		border-radius: 0.5rem;
		width: 80%;
		margin-bottom: 0.2rem;
		font-size: 1.3rem;
		background: rgba(255, 255, 255, 0.178);
		// outline: 2px solid rgb(85, 148, 88);
		// &::placeholder {
		// 	// color: rgb(37, 168, 19);
		// }
	}
	.isactive {
		background: rgba(200, 206, 201, 0.788);
		&::placeholder {
			color: rgb(20, 32, 192);
		}
	}
	.isShown {
		display: block;
	}
</style>
