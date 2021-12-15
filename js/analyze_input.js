"use strict";
(function () {

	// Create a file named analyze_input.js in the js directory.
	// 	In that file, write a program that receives user input and analyzes the input differently if the input is a number or a string.
	// 	If the input is a string, it will analyze the string differently if it is length 1.

	// Following are the rules of analysis:

	// 	If the input is a number:
	// 	Output if the number is odd or even (zero is considered even). Use your function from Exercise 2 for this functionality.
	// 	Output if the number is negative, positive, or zero

	// If the input is a string:
	// 	If the string’s length is 1, output if the string (or char) is a vowel or not
	// Otherwise, output the length of the string


	// Design your program to include a switch and at least one if/else. You must also make separate functions for each of the following pieces of program functionality:

	// 	Determining if the input is a number, string, or otherwise. This function should be called analyzeInput
	// 	Determining if a number is odd or even. Re-use your Exercise 2 function for this.
	//  Determining if a number is <, >, or equal to zero
	// 	Determining if the string is a single character or not
	// 	Determining if the length 1 string is a vowel or not

	let userInput = prompt("Please enter a number or string");

	// 	Determining if the input is a number, string, or otherwise. This function should be called analyzeInput
	function analyzeInput(input) {
		if (input === null) {
			alert("Process Cancelled");
		} else if (input === "" || !input.replace(/\s/g, '').length) {
			alert("No blank spaces allowed!")
		} else if (isNaN(input)) {
			stringMethod(input);
		} else if (!isNaN(input)) {
			integerMethod(input);
		} else {
			alert("Error: Input a string or a number");
			analyzeInput(userInput);
		}
	}

	analyzeInput(userInput);

	// If user input is string
	function stringMethod(input) {
		if (input.length === 1) {
			checkStringVowel(input); // If the string’s length is 1, output if the string (or char) is a vowel or not
		} else {
			checkStringLength(input); // Otherwise, output the length of the string
		}
	}

	// If user input is number
	function integerMethod(input) {
		checkOddOrEven(input); // 	Output if the number is odd or even (zero is considered even). Use your function from Exercise 2 for this functionality.
		checkNumNegPosOrEqualToZero(input); // 	Output if the number is negative, positive, or zero
	}

	// 	Determining if the string is a single character or not
	function checkStringLength(input) {
		let stringLength = input.length;
		alert(`${input} has a length of ${stringLength}`);
	}

	// 	Determining if the length 1 string is a vowel or not
	function checkStringVowel(input) {
		if (input === "A" || input === "E" || input === "I" || input === "O" || input === "U" || input === "a" || input === "e" || input === "i" || input === "o" || input === "u") {
			alert(`${input} is a Vowel!`);
		} else {
			alert(`${input} is NOT a vowel`);
		}
	}

	// 	Determining if a number is odd or even. Re-use your Exercise 2 function for this.
	function checkOddOrEven(input) {
		if (input % 2 === 0) {
			alert(`The number ${input} is Even`);
		} else {
			alert(`The number ${input} is Odd`);
		}
	}

	//  Determining if a number is <, >, or equal to zero
	function checkNumNegPosOrEqualToZero(input) {
		let parsedFloat = parseFloat(input)
		if (parsedFloat === 0) {
			alert(`The number ${input} is Zero`);
		} else if (input > 0) {
			alert(`The number ${input} is GREATER THAN Zero`);
		} else {
			alert(`The number ${input} is LESS THAN Zero`);
		}
	}

	// if (isNaN(input)) {
	// 	stringMethod(input);
	// } else if (input == null) {
	// 	alert("Process cancelled");
	// 	userPrompt();
	// } else if (!isNaN(input)) {
	// 	stringMethod(input);
	// }

	// if (typeof userInput === "string"){
	// 	stringMethod(userInput);
	// } else if (typeof parseInt(userInput) === "number"){
	// 	integerMethod(userInput);
	// } else if (userInput === null) {
	// 	alert("Process cancelled");
	// 	analyzeInput();
	// } else {
	// 	alert("Please enter a number");
	// 	analyzeInput();
	// }

	// switch (typeOfUserInput) {
	// 	case "string": // If the input is a string:
	// 		stringMethod(userInput);
	// 		break;
	// 	case "number": // 	If the input is a number:
	// 		integerMethod(userInput);
	// 		break;
	// 	default:
	// 		alert(`${userInput} Not Recognized \nInput String or Number`);
	// }


})();