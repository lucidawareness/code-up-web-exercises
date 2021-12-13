"use strict";
(function () {
/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor(input) {
    if (input === "blue") {
        return "Blue is the color of the sky!";
    } else if (input === "red") {
        return "Strawberries are Red!";
    } else {
        return `I dont know anything about "${input}"`;
    }
}

console.log(analyzeColor("red"));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

switch (randomColor) {
    case "blue":
        console.log("Blue is the color of the sky!");
        break;
    case "red":
        console.log("Strawberries are Red!");
        break;
    default:
        console.log(`I dont know anything about "${randomColor}"`);
        break;
}

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

let userColor = prompt("Input a color:");
alert(analyzeColor(userColor));


/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

let luckyNumbers = [0, 1, 2, 3, 4, 5];
let numberPicked = luckyNumbers[Math.floor(Math.random() * luckyNumbers.length)]
let total = prompt("Enter to draw a number from 0-5 for your discount! \n\n*If your lucky number is 1 you'll get a 10% discount, if it's 2  the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get everything for free!* \n\nWhat is your bill total in USD?");

function calculatedTotal(numberPicked, total) {

    switch (numberPicked) {
        case 0 :
            alert(`You drew: #${numberPicked} \nNO discount \nYour Total is: \$${total}`);
            break;
        case 1 :
            let discountedPrice = total - (total * .10);
            alert(`You drew: #${numberPicked} \nYou get 10% off your total of \$${total}! \nYour new total is \$${discountedPrice}`);
            break;
        case 2 :
            let discountedPrice2 = total - (total * .25);
            alert(`You drew: #${numberPicked} \nYou get 25% off your total of \$${total}! \nYour new total is \$${discountedPrice2}`);
            break;
        case 3 :
            let discountedPrice3 = total - (total * .35);
            alert(`You drew: #${numberPicked} \nYou get 35% off your total of \$${total}! \nYour new total is \$${discountedPrice3}`);
            break;
        case 4 :
            let discountedPrice4 = total - (total * .50);
            alert(`You drew: #${numberPicked} \nYou get 50% off your total of \$${total}! \nYour new total is \$${discountedPrice4}`);
            break;
        case 5 :
            let discountedPrice5 = total - (total * 1);
            alert(`You drew: #${numberPicked} \nYou get 100% off your total of \$${total}! \nYour new total is \$${discountedPrice5}`);
            break;
        default:
            alert("Error Try Again");
            break;
    }
}

calculatedTotal(numberPicked, total);


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
let luckyNumber = Math.floor(Math.random() * 6);

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

function isEvenOrOdd(num) {
    if (num % 2 == 0) {
        alert(`The number ${num} is Even`);
    } else {
        alert(`The number ${num} is Odd`);
    }
}

function numPlus100(num) {
    alert(`Your number ${num} + 100 = ${parseInt(num) + 100}`);
}

function isNegOrPos(num) {
    if (num > 0) {
        alert(`Your number ${num} is Positive`);
    } else if (num < 0) {
        alert(`You number ${num} is Negative`);
    } else {
        alert("Please enter a positive or negative number!");
    }
}

function inputCheck(input) {
    if (isNaN(input)) {
        alert(`"${input}" Is not a number!\nPlease input a number!`);
        userPrompt();
    } else if (input == null){
        alert("Process cancelled");
        userPrompt();
    } else {
        isEvenOrOdd(input);
        numPlus100(input);
        isNegOrPos(input);
    }
}

function userPrompt() {
    let userConfirm = confirm("Do you want to enter a number?");
    if (userConfirm === true) {
        let userNum = prompt("Please enter a number");
        inputCheck(userNum);
    } else {
        alert("Goodbye!");
    }
}

userPrompt();

})();