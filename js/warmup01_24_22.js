"use strict";
(function () {

	function reverseString(str) {
		if (typeof str === "string") {
			let splitString = str.split("");

			let reverseArray = splitString.reverse();

			return reverseArray.join("");
		}
		return "Please input a string!";
	}

	console.log(reverseString("hello"));
	console.log(reverseString(65465));


})();
