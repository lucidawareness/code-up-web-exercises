(function () {
	'use strict'

	// Write a function called convertLowHighToObject that takes in a string  that represents the low and high temperature in this format '35, 42' (assuming low will always be the left value and high the right) and returns an object with the properties 'low' and 'high' with the values of those respective properties set to the corresponding values in the input string.
	// 	NOTE: the values in the object should be of the number type
	// Example input: '35, 42'
	// Example return: {low: 35, high: 42}

	function convertLowHighToObject(str) {
		let myArray = str.split(", ");
		let obj = {};
		obj = {low: parseInt(myArray[0]), high: parseInt(myArray[1])};
		return obj;
	}

	console.log(convertLowHighToObject('35, 42'));

})();