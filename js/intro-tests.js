"use strict";
(function () {
// Create a new JS file under the js directory named intro-tests.js
// Write a function called count(input) that takes in a string and returns the number of characters.
// 	Test to ensure this function will:
// return the accurate length of the string
// return a false in the event the argument given is not a string
// Account for: numbers, booleans, undefined, null
	function count(input) {
		if (typeof input === "string") {
			return input.length;
		} else {
			return false;
		}
	}

	function countTest() {
		// count returns length if string
		let actualValue = count("Hello");
		let expectedValue = 5;
		console.log("Expect the return value to be length of string: " + (actualValue === expectedValue));

		// count can handle numbers
		actualValue = count(4543);
		expectedValue = false;
		console.log("Expect to return false when passed boolean: " + (actualValue === expectedValue));

		// count can handle null values
		actualValue = count();
		expectedValue = false;
		console.log("Expect to return false when passed null : " + (actualValue === expectedValue));

		actualValue = count(true);
		expectedValue = false;
		console.log("Expect to return false when passed a boolean: " + (actualValue === expectedValue));

		actualValue = count(undefined);
		expectedValue = false;
		console.log("Expect to return false when passed undefined: " + (actualValue === expectedValue));
	}

	countTest();

})();