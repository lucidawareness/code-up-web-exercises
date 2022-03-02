(function () {

	// Write a function called countDuplicates that takes in a string and returns an object that contains the count for each letter within the given string.
	// 	ex: countDuplicates("adsjfdsfsfjsdjfhacabcsbajda")
	// returns { a: 5, d: 4, s: 5, j: 4, f: 4, h: 1, c: 2, b: 2 }


	function countDuplicates(str) {
		let myArray = str.split("");
		let counts = {};
		for (let i = 0; i < myArray.length; i++) {
			counts[myArray[i]] = (counts[myArray[i]] || 0) + 1;
		}
		return counts;
	}

	console.log(countDuplicates("adsjfdsfsfjsdjfhacabcsbajda"));

})();