"use strict";
(function () {

// # Function Drills
//
// Functions using conditionals but not loops or arrays:
//
//     - Make a function named `isOdd(number)`

	let randomNumber = Math.floor(Math.random() * 100);
	let randomNumber2 = Math.floor(Math.random() * 100);
	let randBool = Boolean(Math.round(Math.random()));
	console.log(`Random number is: ${randomNumber}`);
	const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
	let randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)]

	function isOdd(number) {
		if (number % 2 === 0) {
			console.log(`The number ${number} is Even`);
		} else {
			console.log(`The number ${number} is Odd`);
		}
	}

	isOdd(randomNumber);

// - Make a function named `isEven(number)`
	function isEven(number) {
		if (number % 2 === 0) {
			console.log(`The number ${number} is Even`);
		} else {
			console.log(`The number ${number} is Odd`);
		}
	}

	isEven(randomNumber);

// - Make a function named `identity(input)` that returns the input exactly as
// provided.
	function identity(input) {
		console.log(input);
	}

	identity(randomNumber);

// - Make a function named `isFive(input)`
	function isFive(input) {
		if (input === 5) {
			console.log("Input is Five");
		} else {
			console.log(`Input "${input}" is not five`);
		}
	}

	isFive(randomNumber);

// - Make a function named `addFive(input)` that adds five to some input.
	function addFive(input) {
		console.log(`${input} + 5 is : ${input + 5}`);
	}

	addFive(randomNumber);

// - Make a function named `isMultipleOfFive(input)`
	function isMultipleOfFive(input) {
		if (input % 5 === 0) {
			console.log(`${input} is multiple of 5`)
		} else {
			console.log(`${input} is NOT multiple of 5`)
		}
	}

	isMultipleOfFive(randomNumber);

// - Make a function named `isThree(input)`
	function isThree(input) {
		if (input === 3) {
			console.log("Input is 3")
		} else {
			console.log(`${input} is NOT three`)
		}
	}

	isThree(randomNumber);

// - Make a function named `isMultipleOfThree(input)`
	function isMultipleOfThree(input) {
		if (input % 3 === 0) {
			console.log(`${input} is multiple of 3`)
		} else {
			console.log(`${input} is NOT multiple of 3`)
		}
	}

	isMultipleOfThree(randomNumber);

// - Make a function named `isMultipleOfThreeAndFive(input)`
	function isMultipleOfThreeAndFive(input) {
		if (input % 3 === 0 && input % 5 === 0) {
			console.log(`${input} is multiple of three and five`);
		} else {
			console.log(`${input} is not multiple of three and five`);
		}
	}

	isMultipleOfThreeAndFive(randomNumber);

// - Make a function named `isMultipleOf(target, n)` which checks if target is
// evenly divisible by `n`
	function isMultipleOf(target, n) {
		let value = (target % n === 0);
		if (value) {
			console.log(`${target} is multiple of ${n}`);
		} else {
			console.log(`${target} is NOT multiple of ${n}`);
		}
	}

	isMultipleOf(randomNumber, randomNumber2);

// - Make a function named `isTrue(boolean)`
	function isTrue(boolean) {
		if (boolean) {
			console.log("Input is true!")
		} else {
			console.log("Input is false!")
		}
	}

	isTrue(randBool);

// - Make a function named `isFalse(boolean)`
	function isFalse(boolean) {
		if (!boolean) {
			console.log("Input is false!")
		} else {
			console.log("Input is true!")
		}
	}

	isFalse(randBool);

// - Make a function named `isTruthy(input)`, remember that values other than true
// will behave like true
	function isTruthy(input) {
		if (input) {
			console.log(`${input} is Truthy`);
		} else {
			console.log(`${input} is Falsy`);
		}
	}

	isTruthy(randBool);

// - Make a function named `isFalsy(input)`, remember that values other than false
// behave like false
	function isFalsy(input) {
		if (!input) {
			console.log(`${input} is Falsy`);
		} else {
			console.log(`${input} is Truthy`);
		}
	}

	isFalsy(randBool);

// - Make a function named `isVowel(letter)`
	function isVowel(x) {
		if (x === "A" || x === "E" || x === "I" || x === "O" || x === "U" || x === "a" || x === "e" || x === "i" || x === "o" || x === "u") {
			console.log(`${x} is a Vowel!`);
		} else {
			console.log(`${x} is NOT a vowel`);
		}
	}

	isVowel(randomLetter);

// - Make a function named `isConsonant(letter)`
	function isConsonant(x) {
		if (x === "A" || x === "E" || x === "I" || x === "O" || x === "U" || x === "a" || x === "e" || x === "i" || x === "o" || x === "u") {
			console.log(`${x} is NOT a Consonant!`);
		} else {
			console.log(`${x} is a Consonant`);
		}
	}

	isConsonant(randomLetter);

// - Make a function named `isCapital(letter)`
	function isCapital(letter) {
		if (letter === letter.toUpperCase()) {
			console.log(`${letter} is a Capital Letter`);
		}
		if (letter === letter.toLowerCase()) {
			console.log(`${letter} is NOT a Capital Letter`);
		}
	}

	isCapital(randomLetter);

// - Make a function named `isLowerCase(letter)`
	function isLowerCase(letter) {
		if (letter === letter.toUpperCase()) {
			console.log(`${letter} is NOT Lower Case`);
		}
		if (letter === letter.toLowerCase()) {
			console.log(`${letter} is Lower Case`);
		}
	}

	isLowerCase(randomLetter);

// - Make a function named `hasLowerCase(string)` that returns if a string has any
// lower cased letter
	function hasLowerCase(string) {
		let lowerCase = string.toUpperCase() !== string;
		if (lowerCase) {
			console.log(`"${string}" String has lower case`);
		} else {
			console.log(`"${string}" String does NOT have lower case`);
		}
	}

	hasLowerCase("FSDGSFG");
	hasLowerCase("fgsdgsdf");

// - Make a function named `isSpace(letter)` that returns if a character is a space
// character
	function isSpace(letter) {
		let hasSpaces = letter.indexOf(' ') >= 0;
		if (hasSpaces) {
			console.log(`"${letter}" is a space character`);
		} else {
			console.log(`"${letter}" is NOT a space character`);
		}
	}

	isSpace(randomLetter);
	isSpace(" ")

// - Make a function named `isZero(number)`
	function isZero(number) {
		if (number === 0) {
			console.log(`"${number}" is ZERO`);
		} else {
			console.log(`"${number}" is NOT ZERO`)
		}
	}

	isZero(randomNumber);
	isZero(0);

// - Make a function named `notZero(input)` that returns true if the input is not
// zero
	function notZero(input) {
		if (input !== 0) {
			console.log(`"${input}" is NOT ZERO`);
		} else {
			console.log(`"${input}" is ZERO`);
		}
	}

	notZero(randomNumber);
	notZero(0)

// - Write a function named `lowerCase(string)`
	function lowerCase(string) {
		let strLowerCased = string.toLowerCase();
		console.log(strLowerCased);
	}

	lowerCase("AAAAAAAA");

// - Write a function named `double(n)` that returns a number times two
	function double(n) {
		let nDoubled = n * 2;
		console.log(`${n} mutiplied by 2 = ${nDoubled}`);
	}

	double(randomNumber);

// - Write a function named `triple(n)` that returns a number times 3
	function triple(n) {
		let nTripled = n * 3;
		console.log(`${n} multiplied by 3 = ${nTripled}`);
	}

	triple(randomNumber);

// - Write a function named `quadruple(n)` that returns a number times 4
	function quadruple(n) {
		let nQuadrupled = n * 4;
		console.log(`${n} quadrupled is = ${nQuadrupled}`);
	}

	quadruple(randomNumber);

// - Write a function named `half(n)` that returns 1/2 of the provided input
	function half(n) {
		let halved = n / 2;
		console.log(`${n} halved = ${halved}`);
	}

	half(randomNumber);

// - Write a function named `subtract(a, b)` that returns `a` minus `b`
	function subtract(a, b) {
		let subtracted = a - b;
		console.log(`${a} minus ${b} = ${subtracted}`);
	}

	subtract(randomNumber, randomNumber2);

// - Write a function named `multiply(a, b)` that returns the product of `a` times
//     `b`
	function multiply(a, b) {
		let multiplied = a * b;
		console.log(`${a} minus ${b} = ${multiplied}`);
	}

	multiply(randomNumber, randomNumber2);

// - Write a function named divide(a, b) that returns `a` divided by ~b~
	function divide(a, b) {
		let divided = a / b;
		console.log(`${a} minus ${b} = ${divided}`);
	}

	divide(randomNumber, randomNumber2);

//     - Write a function named `remainder(a, b)` that returns the remainder after
// dividing a by b
	function remainder(a, b) {
		let remaining = a % b;
		console.log(`${a} minus ${b} = ${remaining}`);
	}

	remainder(randomNumber, randomNumber2);

// - Make a function named `modulo(a, b)` that returns the remainder
// after dividing a by b
	function modulo(a, b) {
		let modulated = a % b;
		console.log(`${a} minus ${b} = ${modulated}`);
	}

	modulo(randomNumber, randomNumber2);

// - Write a function named `cube(n)` that returns n * n * n
	function cube(n) {
		let cubed = n * n * n;
		console.log(`${n} cubed = ${cubed}`);
	}

	cube(randomNumber);

// - Write a function named `squareRoot(n)` that returns the square root of the
// input
	function squareRoot(n) {
		console.log(Math.sqrt(n));
	}

	squareRoot(randomNumber);

// - Write a function named `cubeRoot(n)` that returns the cube root of the input
	function cubeRoot(n) {
		console.log(Math.cbrt(n));
	}

	cubeRoot(randomNumber);

// - Write a function named `invertSign(number)` that returns a negative version of
// a positive number, a positive version of negative, and false for all else.
	function invertSign(number) {
		if (number > 0 || number < 0) {
			console.log(number * -1);
		} else {
			console.log(false);
		}
	}

	invertSign(randomNumber);
	invertSign(-5465)

// - Write a function named `degreesToRadians(number)`
	function degreesToRadians(number) {
		const pi = Math.PI;
		console.log(number * (pi / 180));
	}

	degreesToRadians(randomNumber);

// - Write a function named `radiansToDegrees(number)`
	function radiansToDegrees(number) {
		const pi = Math.PI;
		console.log(number * (180 / pi));
	}

	radiansToDegrees(randomNumber);

// - Make a function named `isBlank(input)` that determines if a given input is
// spaces, newline characters, or tabs.
	function isBlank(input) {
		if (!input.replace(/\s/g, '').length) {
			console.log(`string "${input}" only contains whitespace (ie. spaces, tabs or line breaks)`);
		} else {
			console.log(`String "${input}" does not ONLY contain whitespaces (ie. spaces, tabs or line breaks).`)
		}
	}

	isBlank("sdf");
	isBlank(" sdfds  ");

// - Make a function named `trim(string)` that removes empty spaces before and
// after the input.
	function trim(string) {
		console.log(string.trim());
	}

	trim(" sdf ");

// - Make a function named `areEqual(input1, input2)` that returns if both inputs
// have the same value
	function areEqual(input1, input2) {
		if (input1 == input2) {
			console.log(true);
		} else {
			console.log(false);
		}
	}
	areEqual(randomNumber, randomNumber2);

// - Make a function named `areIdentical(input1, input2)` that returns if both
//     inputs are same value and data type.
	function areIdentical(input1, input2) {
		if (input1 === input2) {
			console.log(true);
		} else {
			console.log(false);
		}
	}
	areIdentical(randomNumber, randomNumber2);

// - Make a function named `not(input)` returns the input with a flipped boolean
	function not(input) {
		if (input === true) {
			console.log(false);
		} else {
			console.log(true);
		}
	}

	console.log(randBool);
	not(randBool);

// - Make a function named `notNot(input)` that the negation of the negation of the
// input.
	function notNot(input) {
		if (parseInt(input) > 0 ){
			console.log(-Math.abs(input));
		} else if (parseInt(input) < 0){
			console.log(Math.abs(input));
		} else {
			console.log("Please input a positive or negative number");
		}
	}
	notNot(-546);
	notNot(6546);

// - Make a function named `and(predicate1, predicate2)` that returns the logical
// operation of AND
	function and(predicate1, predicate2) {
		console.log(predicate1 && predicate2);
	}
	and(123, 312);

// - Make a function named `or(predicate1, predicate2)` that returns the logical
// operation of OR
	function or(predicate1, predicate2) {
		console.log(predicate1 || predicate2);
	}
	or(23223,2323)
// - Write a function called `reverseString(string)` that reverses a string
	function reverseString(string) {
		console.log(string.split("").reverse().join(""));
	}
	reverseString("sdfsdf");

// - Make a function named `absoluteValue(number)` that returns the absolute value
// of a number.

// - Make a function named `rollDice(sides)` that takes in an argument containing
// the number of sides the die should have. Generate a random number between 1 up
// to and including the number of sides.
//
//
//
// ## Simple Function Drills
//
// 1. Make a function called returnTwo() that returns the number 2 when called
//
// Test this function with `console.log(returnTwo())`
//
//     1. Make a function called sayHowdy() which console.logs the string “Howdy!”
//
//    Test this function by directly calling `sayHowdy()`
//
// Remember this function does not need a defined console.logvalue
//
// 1. Make a function called returnName() that returns the string of your name
//
// Test this function with `console.log(returnName())`
//
//     1. Make a function called addThree() which takes in a number input and returns the number plus 3.
//
// Test this function with `console.log(addThree(5))`
//
//     1. Make a function called sayString() which returns the string input passed in.
//
// Test this function with `console.log(sayString('codeup'))`
//
//
//     ## Challenge Function Drills
//
// - Write a function called `identity(input)` that takes in an argument called
// input and returns that input.
//
// - Write a function called `getRandomNumber(min, max)` that returns a random
// number between min and max values sent to that function call.
//
// - Write a function called `first(input)` that returns the first character in the
// provided string.
//
// - Write a function called `last(input)` that returns the last character of a
// string
//
// - Write a function called `rest(input)` that returns everything but the first
// character of a string.
//
// - Write a function called `reverse(input)` that takes a string and returns it
// reversed.
//
// - Write a function called `isNumeric(input)` that takes an input and returns a
// boolean if the input is numeric.
//
// - Write a function called `count(input)` that takes in a string and returns the
// number of characters.
//
// - Write a function called `add(a, b)` that returns the sum of a and b
//
// - Write a function called `subtract(a, b)` that console.logthe difference between
// the two inputs.
//
// - Write `multiply(a, b)` function that returns the product
//
// - Write a `divide(numerator, denominator)` function that returns a divided by b
//
// - Write a `remainder(number, divisor)` function that returns the remainder left
// over when dividing `number` by the `divisor`
//
// - Write the function `square(a)` that takes in a number and returns the number
// multiplied by itself.
//
// - Write a function called `sumOfSquares(a, b)` that uses only your `add()` function
// and your square function and not + or * operators
//
// - Write a function called `doMath(operator, a, b)` that takes 3 parameters. The
// first parameter is the name of the math function you want to apply. a and b
// are the two numbers to run that function on.
//
// ## Even More Function Bonuses
//
// 1. Create a function that will console.loghow many whitespace characters are at the
// beginning and end of a string.
//
// 1. Create a function that takes in two string inputs.
//
// - If the second string input is present in the first, console.logthe first input
// string with the second input string removed from it.
// - If the second string input is present multiple times in the first, the
// second string will only be removed where it first occurs in the first
// string.
// - If the second string input is not present in the first, console.logthe first
// string as entered in the function.
//
// 1. Create a function that takes in a string and returns true if the last letter
// is an "a" (otherwise, console.logfalse).
//
// 1. EXTRA CHALLENGE: create a function that will console.loghow many whitespace
// characters are at the beginning of a string (hint: use regex).
//
// 1. Create a function `returnTrueMessage()` that returns the string "Hey, it's true!"
//
// - Create a function `returnFalseMessage()` that returns the string "Hey, it's false!"
// - Create a function `returnMessage()` that takes in a function and returns the call to the function
// - Experiement passing in different functions.
//
// 1. Create a function, `willLoginUser()` that takes in a username string,
//     password string, user age, a boolean indicating if they are an admin.
//
//     The function will console.logtrue if the username is not the same as the
// password and the user is at least 18 years old. If the user is an admin,
//     they do not have to be a certain age but the password must still not match
// the username.

})();