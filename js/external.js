"use strict";


console.log("Hello from external JavaScript");

// Use the alert function to show a message that says 'Welcome to my Website!'.
alert("Welcome to my Website!")


//Use a prompt to ask for the user's favorite color. Use the user's response to alert a message that says that the color entered is your favorite color too.
let userInput = prompt("What is your favorite color");
alert(`Great, ${userInput} is my favorite color too!`);

// Complete exercise 3 from the previous lesson, but write your code in the external.js file instead of in the console.
// When the exercise asks you to use a number, instead use a prompt to ask the user for that number.
// Use an alert to show the results of each problem.

// Write some JavaScript code, that is, variables and operators, to describe the following scenarios. Do not worry about the real operations to get the values, the goal of these exercises is to understand how real world conditions can be represented with code.
//

// You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?

let rentalRate = 3

let movie1 = "The Little Mermaid";
let movie2 = "Brother Bear";
let movie3 = "Hercules";

let movie1Days = prompt(`How many days did you rent ${movie1}?`);

let movie2Days = prompt(`How many days did you rent ${movie2}?`);

let movie3Days = prompt(`How many days did you rent ${movie3}?`);

let combinedDays = parseInt(movie1Days) + parseInt(movie2Days) + parseInt(movie3Days);

let totalPrice = rentalRate * combinedDays;

alert(`You rented 3 movies \n${movie1}: ${movie1Days} days\n${movie2}: ${movie2Days} days \n${movie3}: ${movie3Days} days \nCombined Days: ${combinedDays} \nRental Rate \$${rentalRate}/day \nTotal price: \$${totalPrice}`);


// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.


// Company names
let company1 = "Google";

let company2 = "Amazon";

let company3 = "FaceBook";

// Prompts user for each companies rate and hours worked for
let googleRate = prompt(`What is your \$HOURLY RATE for ${company1}?`);

let googleHours = prompt(`How many HOURS did you work for ${company1}`);

let amazonRate = prompt(`What is your \$HOURLY RATE for ${company2}?`);

let amazonHours = prompt(`How many HOURS did you work for ${company2}`);

let facebookRate = prompt(`What is your \$HOURLY RATE for ${company3}?`);

let faceBookHours = prompt(`How many HOURS did you work for ${company3}`);

// Calculates each companies pay (Rate * Hours)
let googlePay = googleRate * googleHours;
let amazonPay = amazonRate * amazonHours;
let faceBookPay = facebookRate * faceBookHours;

// Parses and calculates combined hours worked
let totalHours = parseInt(googleHours) + parseInt(amazonHours) + parseInt(faceBookHours);
// Calculates combined pay
let totalPay = googlePay + amazonPay + faceBookPay;

alert(`You worked a total of ${totalHours} hours\nFor a total pay of: \$${totalPay}\nDetailed Summary\n${company1} Hours: ${googleHours}, ${company1} Rate: \$${googleRate}/hr\n${company2} Hours ${amazonHours}, ${company2} Rate: \$${amazonRate}/hr\n${company3} Hours: ${faceBookHours}, ${company3} Rate: \$${facebookRate}/hr\n`);


// A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.

let classIsFull = confirm("Is this class full?");

let studentScheduleConflict = confirm("Does this class conflict with your schedule?")

if (classIsFull) {
    alert("Class is full!");
} else if (studentScheduleConflict) {
    alert("Your schedule does not fit this class");
} else {
    alert("You are eligible to join this class!")
}

// A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.

let cartQTY = prompt("How many items do you want to purchase?");

let expired = confirm("Is your offer expired?");

let premiumMember = confirm("Are you a premium member?");

if (premiumMember) {
    if (expired) {                           // checks if offer is expired
        alert("\nOffer is expired!");
    } else {
        alert("\nOffer is valid");
    }
} else if (cartQTY < 2 || expired) {                  // checks if cart qty is greater than 1
    alert("\nOffer is expired & or less than 2 items");
} else {
    alert("\nOffer is valid");
}