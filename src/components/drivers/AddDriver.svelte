<script lang="ts">
	import { db } from '$lib/firebase';
	import { addDoc,serverTimestamp ,collection } from 'firebase/firestore';

	import TextInput from './TextInput.svelte';
	let text = '';
	let rating;

	let name = '',
		phoneNember: '',
		residence = '',
		workAt = ['الجزيرة', 'الجبلين', 'عسلاياء', 'ربك', 'كوستي'],
		carModel = '',
		carNumber = '';
	const placeholder = {
		name: 'الاسم ثلاثي',
		phoneNember: 'رقم الهاتف',
		residence: 'مكان الاقامة الحالي',
		workAt: ['الجزيرة', 'الجبلين', 'عسلاياء', 'ربك', 'كوستي'],
		carModel: 'السيارة ونوعهاء',
		carNumber: 'رقم السيارة'
	};
	async function handleSubmit() {
		// console.log(name);

		let newDriver = {
			name,
			phoneNember,
			residence,
			//   workAt: ['الجزيرة', 'الجبلين', 'عسلاياء', 'ربك', 'كوستي'],
			carModel,
			carNumber,
			createdat:serverTimestamp()
		};
		name = '';
		phoneNember = '';
		residence = '';
		workAt = ['الجزيرة', 'الجبلين', 'عسلاياء', 'ربك', 'كوستي'];
		carModel = '';
		carNumber = '';
		console.log(newDriver);
		const docRef = await addDoc(collection(db, 'listed-drivers'), newDriver);
		console.log(docRef);
		
		// // feedback.update((currentFB) => {
		// //   return [newFeedback, ...currentFB];
		// // });
	}
</script>

<h2>استمارة الانضمام الي برنامج السواقين</h2>

<form on:submit|preventDefault={handleSubmit}>
	<TextInput bind:value={name} placeholder={placeholder.name}>الر جاء تقديم الاسم كاملا</TextInput>
	<TextInput bind:value={phoneNember} placeholder={placeholder.phoneNember}>
		للتواصل معك وتاكيد طلب الانضمام
	</TextInput>
	<!-- <input type="checkbox" bind:group="fille" name="" >
	<input type="checkbox" bind:group="fille" >
	<input type="checkbox" bind:group="fille" > -->

	<TextInput bind:value={residence} placeholder={placeholder.residence}
		>مكان الاقامة الحالي</TextInput
	>
	<TextInput bind:value={carModel} placeholder={placeholder.carModel}>نوع السيارة</TextInput>
	<TextInput bind:value={carNumber} placeholder={placeholder.carNumber}>
		رقم الوحة الخاص بالسيارة
		<br /><br />
	</TextInput>
	<button>تقديم الطلب</button>
</form>

<style lang="scss">

	input {
		padding: 0.5rem;
		border-radius: 0.3rem;
		width: 80%;
	}
	button {
		/* padding: .2rem 30%; */
		color: rgb(246, 250, 248);
		padding: 0.4rem 2rem;
		border-radius: 0.3rem;
		width: 80%;
		font-size: 1.3rem;
		background-color: rgb(3, 3, 3);
		/* border:3px solid cadetblue ; */
		outline: 3px solid #eee;
		&:hover {
			color: rgb(3, 3, 3);
			background-color: rgb(72, 92, 70);
		}
	}
</style>
