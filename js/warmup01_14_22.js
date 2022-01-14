'use strict'
// Define a function named removeAll(array, value) that takes in two arguments. The first argument should be an array and the second argument should be a value you wish to remove

// Given the following array as an argument (do not define this array inside your function - pass it in as an argument)

// var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];

// removeAll(bugs, "ant") should return ["mosquito", "scorpion", "mosquito", "typo", "reference error", "type error"]

// removeAll(bugs, "mosquito") should return ["ant", "scorpion", "ant", "ant", "typo", "reference error", "type error"]

// removeAll(bugs, "roach") should return the original array b/c “roach” has no occurrances.

let bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];

function removeAll(arr, val) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === val) {
			arr.splice(i, 1);
			i--;
		}
	}
	console.log(arr + " Without value " + val + "\n")
}

removeAll(bugs, 'ant');
removeAll(bugs, 'mosquito');
removeAll(bugs, 'roach');