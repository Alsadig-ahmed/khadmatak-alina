<script lang="ts">
	import Header from '../../components/Header.svelte';
	import Wrapper from '$lib/Wrapper.svelte';
	import AddDriver from '../../components/drivers/AddDriver.svelte';
	import Car from '$lib/svg-icons/car.svelte';
	import Car_1 from '$lib/not-used/car-(1).svelte';
</script>

<Header title="انضم الي برنامج السواقين" />
<Wrapper>
	<!-- <div class="cla"> -->
	<!-- <div class="square" style="--i:0" ><Car square ='4rem' /></div>
		<div class="square" style="--i:1" ><Car_1 square='7rem'/></div>
		<div class="square" style="--i:2" />
		<div class="square" style="--i:3" />
		<div class="square" style="--i:4" /> -->
	<!-- </div> -->
	<div class="driverform">
		<AddDriver />
	</div>
</Wrapper>

<style lang="scss">
	// .cla {
	// 	position: relative;
	// 	.square {
	// 		z-index: -10;
	// 		position: absolute;
	// 		height: 6rem;
	// 		width: 6rem;
	// 		border-radius: 1rem;
	// 		box-shadow: 0 0 2rem 1px rgba(158, 31, 31, 0.521);
	// 		animation: animate 10s linear infinite;
	// 		animation-delay: calc(-1s * var(--i));
	// 		&:nth-child(1) {
	// 			background-color: rgba(102, 189, 52, 0.295);
	// 			top: 50%;
	// 			right: 1px;
	// 			width: 80px;
	// 			height: 80px;
	// 		}
	// 		&:nth-child(2) {
	// 			background-color: rgba(0, 195, 255, 0.295);
	// 			bottom: 40px;
	// 			left: 0px;
	// 			width: 120px;
	// 			height: 120px;
	// 		}
	// 		&:nth-child(3) {
	// 			background-color: rgba(49, 33, 139, 0.295);
	// 			top: 40px;
	// 			left: 70px;
	// 			width: 90px;
	// 			height: 90px;
	// 		}
	// 		&:nth-child(4) {
	// 			background-color: rgba(224, 49, 201, 0.295);
	// 			bottom: -40px;
	// 			right: 70px;
	// 			width: 90px;
	// 			height: 90px;
	// 		}
	// 	}
	// }
	// @keyframes animate {
	// 	0%,
	// 	100% {
	// 		transform: translateY(-40px);
	// 	}
	// 	50% {
	// 		transform: translateY(40px);
	// 	}
	// }
	.driverform {
		background-color: rgba(255, 255, 255, 0.103);
		padding: 1rem 0.2rem;
		margin-top: 1rem;
		border-radius: 2rem;
		box-shadow: 0 0 2rem 0.1rem rgba(85, 83, 83, 0.521);
	}
</style>
