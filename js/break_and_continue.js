"use strict";
(function () {
	// Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
	// 	Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.
	// 	Your output should look like this:
	//
	//
	// Number to skip is: 27
	//
	// Here is an odd number: 1
	// Here is an odd number: 3
	// Here is an odd number: 5
	// Here is an odd number: 7
	// Here is an odd number: 9
	// Here is an odd number: 11
	// Here is an odd number: 13
	// Here is an odd number: 15
	// Here is an odd number: 17
	// Here is an odd number: 19
	// Here is an odd number: 21
	// Here is an odd number: 23
	// Here is an odd number: 25
	// Yikes! Skipping number: 27
	// Here is an odd number: 29
	// Here is an odd number: 31
	// Here is an odd number: 33
	// Here is an odd number: 35
	// Here is an odd number: 37
	// Here is an odd number: 39
	// Here is an odd number: 41
	// Here is an odd number: 43
	// Here is an odd number: 45
	// Here is an odd number: 47
	// Here is an odd number: 49

	let input;

	function promptUser() {
		input = prompt("Enter an odd number between 1 and 50 to skip");
	}

	for (let i = 0; i < 3; i++) {
		promptUser();
		if (input === null) { // checks if user cancelled prompt
			alert("Process Cancelled!");
			break;
		} else if (input < 0 || input > 50) { // checks if input is NOT between 1 and 50
			alert("Please enter a number between 1 and 50!");
		} else if (isNaN(input) || input % 2 === 0) { // checks if user input is a number or is even
			alert("Please try again and input an odd number!");
		}
		for (let n = 1; n < 50; n++) {
			if (parseInt(input) === n) { // if input passes all checks, check if input is equal to the current iteration
				console.log("Yikes! Skipping number: " + n);
			} else if (n % 2 === 0) { // skips even numbers
				continue;
			}
			console.log('Here is an odd number: ' + n); // logs odd numbers
		}
		break;
	}

})();