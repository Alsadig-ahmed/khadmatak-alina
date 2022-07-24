// import { db } from '$lib/firebase';
// import { collection, getDocs } from 'firebase/firestore';
// listed-drivers
/** @type {import('@sveltejs/kit').RequestHandler} */
export const GET = async () => {
	// let listedDrivers = [];

	// async function iffe() {
	// 	const querySnapshot = await getDocs(collection(db, 'listed-drivers'));
	// 	// console.log({ ds: querySnapshot });
	// 	querySnapshot.forEach((doc) => {
	// 		listedDrivers.push({
	// 			id: doc.id,
	// 			name: doc.data().name,
	// 			phoneNember: doc.data().phoneNember,
	// 			residence: doc.data().residence,
	// 			carModel: doc.data().carModel,
	// 			carNumber: doc.data().carNumber,
	// 			createdat: doc.data().createdat
	// 		});
	// 	});
		
	// 	if (listedDrivers.length >= 1) {
	// 		console.log('here , you have your data');
	// 		return false;
	// 	}
	// 	if (listedDrivers.length <= 1) {
	// 		console.log('sorry we could not have the data');
	// 		return 'sorry we could not have the data';
	// 	}
	// 	console.log(listedDrivers);
	// }
	let listedDrivers =[{
		id: "dslfgklkdsgv",
		name: "الصادق احمد الصادق",
		phoneNember: "0908439832",
		residence: "ربك",
		carModel: "اتس",
		carNumber: "849 938 j k",
		createdat: "2022 7 20"
	},{
		id: "dslfgklkdsgv",
		name: "عوض احمد الصادق",
		phoneNember: "0908439832",
		residence: "ربك",
		carModel: "اتس",
		carNumber: "849 938 j k",
		createdat: "2022 7 20"
	},{
		id: "dkflk,dsjd,.vms,.vmsa",
		name: "عبدالعزيز عصام",
		phoneNember: "0930232342",
		residence: "كنانئ",
		carModel: "doc.data().carModel",
		carNumber: "doc.data().carNumber",
		createdat: "doc.data().createdat"
	}]

	// const res = await iffe();
let noData = true;
	if (noData) {
		return  {
			body: {
				noData,
				listedDrivers
			}
		};
		
	}
};

// let listedDrivers = [];

// async function iffe() {
// 	const querySnapshot = await getDocs(collection(db, 'listed-drivers'));
// 	// console.log({ ds: querySnapshot });
// 	querySnapshot.forEach((doc) => {
// 		listedDrivers.push({
// 			id: doc.id,
// 			name: doc.data().name,
// 			phoneNember: doc.data().phoneNember,
// 			residence: doc.data().residence,
// 			carModel: doc.data().carModel,
// 			carNumber: doc.data().carNumber,
// 			createdat: doc.data().createdat
// 		});
// 	});
// 	if (listedDrivers.length >= 1) {
// 		console.log('here , you have your data');
// 		return false;
// 	}
// 	if (listedDrivers.length <= 1) {
// 		console.log('sory we could not have the data');
// 		return 'sory we could not have the data';
// 	}
// 	console.log(listedDrivers);
// }
// let iffeValue = await iffe()
