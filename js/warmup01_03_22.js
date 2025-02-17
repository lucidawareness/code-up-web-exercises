"use strict";
(function () {
// Write a function called add(num1, num2) which returns the sum of num1 and num2
// Write a function named square(numToSqr) which takes in a number (numToSqr) and returns the number multiplied by itself
// Write a function called sumOfSquares(a, b).
// 	You should find the square of a, then the square of b.
// 	Invoke add(num1, num2) and pass the new squared values in as arguments.

//
// function add(num1, num2){
// 	return num1 + num2;
// }
//
// console.log(add(3,3));
//
// function square(numToSqr){
// 	return numToSqr * numToSqr;
// }
//
// console.log(square(4));
//
// function sumOfSquares(a,b){
// 	let square1 =  square(a);
// 	let square2 =  square(b);
// 	return add(square1, square2);
//
// }
//
// console.log(sumOfSquares(2,2));

// Write a function named getFizzBuzz(startingNum) which performs the following actions:
// 	If startingNum is divisible by 3
// console log "fizz"
// Else, if startingNum is divisible by 5
// console log "buzz"
// If startingNum is divisible by 3 AND divisible by 5
// return a string which says "FIZZ BUZZ"
// Thinking about getFizzBuzz(startingNum), let's console log the return value of this function
// What if getFizzBuzz doesn't return a value (VOID)?
// How do you want to handle that?

	//second attempt

	// function getFizzBuzz(startingNum){
	// 	if (startingNum % 3 === 0 && startingNum % 5 === 0){
	// 		return "FIZZ BUZZ"
	// 	} else if (startingNum % 3 === 0){
	// 		console.log("fizz");
	// 	} else if (startingNum % 5 === 0){
	// 		console.log("buzz");
	// 	}
	// }
	//
	// function checkFizzBuzz(input){
	// 	let check = getFizzBuzz(input);
	// 	if (check === "FIZZ BUZZ"){
	// 		console.log(getFizzBuzz(input));
	// 	} else if (!!check) {
	// 		getFizzBuzz(input);
	// 	}
	// }
	//
	// checkFizzBuzz(6);
	// checkFizzBuzz(10);
	// checkFizzBuzz(15);
	// checkFizzBuzz("sdf");

//	First Solution
// function getFizzBuzz(startingNum) {
// 	if (startingNum % 3 === 0 && startingNum % 5 === 0) {
// 		return "FIZZ BUZZ";
// 	} else if (startingNum % 3 === 0) {
// 		console.log("fizz");
// 	} else if (startingNum % 5 === 0) {
// 		console.log("buzz");
// 	}
// }
//
// function checkFizzBuzz(input){
// 	let num = getFizzBuzz(input);
//
// 	if (num === undefined){
// 		getFizzBuzz(input);
// 	}
//
//
// }
//
// 	console.log(checkFizzBuzz(10));
// 	checkFizzBuzz(9);
// 	checkFizzBuzz(15);

// Define a function named getPassword() which performs the following actions:
// 	Using prompt(), alert(), variables, and a while-loop, ask the user to input their password until their entry matches your hard-coded password value.
// 	HINT: start by defining the correct password and don't forget to link your html file

	let userPass = "123";
	let loginAttempts = 1;

	function promptUser() {
		let userInput = prompt("Enter Password");
		if (userInput === null) {
			alert("Process Cancelled!");
		} else {
			return userInput;
		}
	}

	function getPassword() {
		while (promptUser() !== userPass && loginAttempts < 3) {
			loginAttempts++;
			alert(`Please try again!\nAttempts Remaining ${4 - loginAttempts}`);

		}
		if (loginAttempts >= 3) {
			alert("Max Attempts Reached")
		} else {
			alert("Correct!");
		}
	}

	getPassword();
	//
	// getMeaningOfLife
	// Write a function named getMeaningOfLife which accepts one parameter, meaningfulNum.
	// 	This function will use a while loop to compare its current number (a variable named counter) against the meaningfulNum.
	// 	While the counter is not equivalent to the meaningfulNum, continue the loop.
	// 	Once that condition is broken (i.e., the loop’s test fails), console log a string telling the user "The meaning of life, the universe, and everything is [your meaningful number]"
	// Thinking about the above function, getMeaningOfLife, let’s ask a question: What happens if the value of meaningfulNum is a non-numeric?
	// 	Write some code to account for this case. How the function handles the situation is up to you!
	// 	Let’s continue with getMeaningOfLife: If the value of meaningfulNum happens to be 42, console log a separate message at the end of the function to say: "Did you bring your towel?"


	// function getMeaningOfLife(meaningfulNum) {
	// 	let counter = 0;
	// 	meaningfulNum = parseInt(meaningfulNum);
	// 	if (!meaningfulNum) {
	// 		console.log("Input a real number!");
	// 	} else {
	// 		while (counter !== meaningfulNum) {
	// 			counter++;
	// 		}
	// 		console.log("The meaning of life, the universe, and everything is " + meaningfulNum);
	// 	}
	// 	if (meaningfulNum === 42) {
	// 		console.log("Did you bring your towel?");
	// 	}
	// }
	//
	// getMeaningOfLife(Infinity);
	// getMeaningOfLife("sadf");
	// getMeaningOfLife(5);
	// getMeaningOfLife(42);

})();
