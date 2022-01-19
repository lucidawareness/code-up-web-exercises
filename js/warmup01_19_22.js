// Write a JS function called getNthCat that takes an array of cat objects as a first parameter called cats, and n as a second parameter.
// 	The function returns the cat object at index n in the cats array.
// 	For example:
// 	var myCats = [
// 		{
// 			catName: "Fifi",
// 			age: 5
// 		},
// 		{
// 			catName: "Fluffy",
// 			age: 3
// 		},
// 		{
// 			catName: "Abby",
// 			age: 7
// 		}
// 	];
//
// // print out the cat at index 1
// console.log(getNthCat(myCats, 1));

function getNthCat(cats, n) {
	console.log(cats[n]);
}

let myCats = [
	{
		catName: "Fifi",
		age: 5
	},
	{
		catName: "Fluffy",
		age: 3
	},
	{
		catName: "Abby",
		age: 7
	}
];

getNthCat(myCats, 1);