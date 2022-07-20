<script lang="ts">
	import TextInput from './TextInput.svelte';

	// import { feedback } from "./store/data";
	// import { db } from "./firebase";
	// import { collection, addDoc } from 'firebase/firestore';
	let text = '';
	let rating;

  const newDriver = {
    name:'الاسم ثلاثي',
    phoneNember:'رقم الهاتف',
    residence:'مكان الاقامة الحالي',
    workAt:['الجزيرة','الجبلين','عسلاياء','ربك','كوستي'],
    carModel:'السيارة ونوعهاء',
    carNumber:'رقم السيارة',
  };
	async function handleSubmit() {
		const newFeedback = {
			rating,
			text
		};
		// const docRef = await addDoc(collection(db, "feedbacks"),newFeedback );
		// // feedback.update((currentFB) => {
		// //   return [newFeedback, ...currentFB];
		// // });
		text = '';
		rating = null;
	}
</script>

<h2>استمارة الانضمام الي برنامج السواقين</h2>

<form on:submit|preventDefault={handleSubmit}>
	<TextInput value={''} placeholder={newDriver.name} >
    الر جاء تقديم الاسم كاملا
  </TextInput>
	<TextInput value={''} placeholder={newDriver.phoneNember} >
  للتواصل معك وتاكيد طلب الانضمام
  </TextInput>
	<TextInput value={''} placeholder={newDriver.residence}>
  مكان الاقامة الحالي
  </TextInput>
	<TextInput value={''} placeholder={newDriver.carModel} >
   نوع السيارة 
  </TextInput>
	<TextInput value={''} placeholder={newDriver.carNumber} >
    رقم الوحة الخاص بالسيارة
    <br><br>
  </TextInput>
	<button>تقديم الطلب</button>
</form>

<style lang="scss">

div{
		display: flex;
		justify-content: space-around;
		color: #fff;
		border: 1px #eee solid;
		padding: 0.2rem 10px;
		margin-bottom: 0.4rem;
		text-align: center;
		/* font-size: 1.15rem; */
	}
	input {
		padding: 0.5rem;
		border-radius: 0.3rem;
		width: 80%;
	}
	button {
		/* padding: .2rem 30%; */
    color: rgb(246, 250, 248);
		padding: .4rem 2rem;
		border-radius: 0.3rem;
		width: 80%;
    font-size: 1.3rem;
    background-color: rgb(3, 3, 3);
    /* border:3px solid cadetblue ; */
    outline: 3px solid #eee;
    &:hover{
      color: rgb(3, 3, 3);
      background-color: rgb(72, 92, 70);

    }
    
	}
</style>
