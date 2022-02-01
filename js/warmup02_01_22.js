(function () {
	'use strict'

	// Write a function called whichStringIsLonger() that takes two parameters and returns one of 4 values:
	// 	returns "first" if the first string parameter is longer
	// returns "second" if the second parameter is longer
	// returns "neither" if they are the same length
	// returns false if either or both of the parameters are not strings

	function whichStringIsLonger(str1, str2) {
		return typeof str1 !== "string" || typeof str2 !== 'string' ? false
			: str1.length > str2.length ? "First"
			: str2.length > str1.length ? "Second"
			: "Neither";
	}

	console.log(whichStringIsLonger("bobby", "lou")); // returns first
	console.log(whichStringIsLonger("bob", "louise")); // returns second
	console.log(whichStringIsLonger("bob", "lou")); // returns neither
	console.log(whichStringIsLonger("bobby", 2)); // returns false
	console.log(whichStringIsLonger(1, "lou")); // returns false


})();