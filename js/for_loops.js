"use strict";
(function () {


// Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
//
// For example, showMultiplicationTable(7) should output
//
//
// 7 x 1 = 7
// 7 x 2 = 14
// 7 x 3 = 21
// 7 x 4 = 28
// 7 x 5 = 35
// 7 x 6 = 42
// 7 x 7 = 49
// 7 x 8 = 56
// 7 x 9 = 63
// 7 x 10 = 70


	function showMultiplicationTable(num) {
		for (let i = 1; i < 11; i++) {
			let result = num * i;
			console.log(`${num} X ${i} = ${result} `);
		}
	}

	showMultiplicationTable(7);

// Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:
//
//
// 	123 is odd
// 80 is even
// 24 is even
// 199 is odd


	function isOddOrEven() {
		for (let i = 1; i <= 10; i++) {
			let num = Math.floor(Math.random() * 180) + 20;
			if (num % 2 === 0) {
				console.log(`${i}. ${num} is Even`);
			} else {
				console.log(`${i}. ${num} is Odd`)
			}
		}
	}

	isOddOrEven();

	// Create a for loop that uses console.log to create the output shown below.
	//
	//
	// 1
	// 22
	// 333
	// 4444
	// 55555
	// 666666
	// 7777777
	// 88888888
	// 999999999

	for (let i = 1; i<10; i++) {
		let result = "";
		for (let x = 1; x <= i; x++){
			result += `${i}`;
		}
		console.log(result);
	}

	for (let int = 100; int>0; int--) {
		console.log(int);
	}


})();