(function () {
	"use strict"

// Write a function called findAverage that takes in an array of integers representing grades and returns the average.
// 	Example input: [95, 74, 86, 100]
// Example output: 88.75

	function findAverage(arr) {
		let sum = 0;
		for (let i = 0; i < arr.length; i++) {
			sum += arr[i];
		}
		return sum / arr.length;
	}

	console.log(findAverage([95, 74, 86, 100]));

})();
