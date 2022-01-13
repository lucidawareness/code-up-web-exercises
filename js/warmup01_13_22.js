// Create a function called arrayToString.
// 	The function takes a parameter called myArray.
// 	It returns a string that is the concatenation of all the elements in myArray.
// 	This function is essentially your own version of join.
// 	Therefore, you cannot use join in your function body

let concatarr = "";

function arrayToString(myArray) {
	// console.log(myArray.toString());
	for (let x = 0; x < myArray.length; x++) {
		concatarr += myArray[x] + " "
	}
	console.log(concatarr);
}

arrayToString(["Hi", "my", "name", "is"]);