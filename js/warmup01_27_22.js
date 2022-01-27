(function () {
	"use strict"
	// morning JS warmup:
	// 	write a function called sumOfSquares(a, b)
	// takes 2 parameters called a and b
	// returns the sum of the squares of a and b
	// i.e., (a to the power of 2) + (b to the power of 2)
	// e.g., console.log(sumOfSquares(2, 3));
	// will return 13


	function sumOfSquares(a,b) {
		let powerOf = 2;
		return (Math.pow(a, powerOf)) + (Math.pow(b, powerOf));
	}


	console.log(sumOfSquares(2,3));

})();