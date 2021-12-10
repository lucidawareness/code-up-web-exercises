
// 1. For each of the following code blocks, read the code and predict what the result of evaluating it would be, then execute the statement(s) in the Chrome console.

let a = 1;
let b = a++;
let c = ++a;
// what is the value of a, b, and c?
console.log(a);

console.log(b);

console.log(c);

console.log(a + b + c);



// --------------------------------------

let d = "hello";
let e = false;

console.log(d++);

console.log(e++);

console.log(d);

console.log(e);

let perplexed; // perplexed is undefined (no value is assigned)
console.log(perplexed + 2);

let price = 2.7;

console.log(price.toFixed(2));

// console.log(price.toFixed(2));
//
//let price2 = "2.7";

// console.log(price.toFixed(2));
console.log(price);

console.log(isNaN(0));

console.log(isNaN(1));

console.log(isNaN(""));

console.log(isNaN("string"));

console.log(isNaN("0"));

console.log(isNaN("1"));

console.log(isNaN("3.145"));

console.log(isNaN(Number.MAX_VALUE));

console.log(isNaN(Infinity));

console.log(isNaN("true"));

console.log(isNaN(true));

console.log(isNaN("false"));

console.log(isNaN(false));

// 2.Execute the following statement in the Chrome JavaScript console and then follow the directions below.

let sample = "Hello Codeup ";

console.log(sample.length);

console.log(sample.toUpperCase());

console.log(sample.toLowerCase());

console.log(sample + "Students");

console.log(sample + "Class");

console.log(sample.indexOf("c"));

console.log(sample.indexOf("C"));

console.log(sample.substring(sample.indexOf("C")),);



// 3. Write some JavaScript code, that is, variables and operators, to describe the following scenarios. Do not worry about the real operations to get the values, the goal of these exercises is to understand how real world conditions can be represented with code.


//      •1 You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?

let movieRentalRate = 3; // rental rate in USD

let mermaidDays = 3;     // Number of days rented for each movie

let brotherBearDays = 5;

let herculesDays = 1;

let totalDays = mermaidDays + brotherBearDays + herculesDays; // combines # of days rented from each movie

let totalPrice = totalDays * movieRentalRate; // total price for all movies rented

console.log(`\nYou rented movies for a combined total of ${totalDays} days\nYour total price for the rental movies is: \$` + totalPrice + "\n");

//      •2 Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.


// Hourly Rates for each company
let googleRate = 400;

let amazonRate = 380;

let facebookRate = 350;


// Hours worked at each company
let googleHours = 6 ;

let amazonHours = 4 ;

let facebookHours = 10 ;


// Total pay amount from each company
let googlePay = googleRate * googleHours;

let amazonPay = amazonRate * amazonHours;

let facebookPay = facebookRate * facebookHours;


// Total pay from all companies combined
let totalPay = googlePay + amazonPay + facebookPay;


// Log Results
console.log(`Your total pay for ${googleHours} hours at a rate of \$${googleRate}/hr for Google is: \$` + googlePay);

console.log(`Your total pay for ${amazonHours} hours at a rate of \$${amazonRate}/hr for Amazon is: \$` +amazonPay);

console.log(`Your total pay for ${facebookHours} hours at a rate of \$${facebookRate}/hr for FaceBook is: \$` +facebookPay);

console.log("Your total pay for this week is : $" + totalPay + "\n");

//      •3 A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.

isClassFull = false;

studentScheduleFull = false;

// checks if class is full or if student schedule is full

if (isClassFull || studentScheduleFull){
    console.log("Student can NOT enroll in class");
} else {
    console.log("Student can enroll in class");
}

//      •4 A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.

cartQTY = 2;

expired = true;

premiumMember = false;

// Boolean operator only
// let isValid = cartQTY >=2 && !expired && premiumMember;
//
// console.log(isValid);
//
// if statement
// Check if user is premium member

if (premiumMember){
    if (expired){                           // checks if offer is expired
        console.log("\nOffer is expired!");
    } else {
        console.log("\nOffer is valid");
    }
} else if (cartQTY < 2 || expired) {                  // checks if cart qty is greater than 1
    console.log("\nOffer is NOT valid");
} else {
    console.log("\nOffer is valid");
}



// 4. Use the following code to follow the instructions below:

console.log("\nPassword Validation:\n");

// login information

let username = 'codeup';
let password = 'notastrongpassword';

// Booleans for login validation

let maxPswdLength = false; // valid if true

let maxUsernameLength = false; // valid if true

let usernameInPassword = true; // not valid if true


let usernameWhitespace = true; // not valid if true

let pswdWhitespace = true; // not valid if true


// check Password Length greater than or equal to 5
if (password.length >= 5){
    maxPswdLength = true;
    console.log("Password length is: Valid");
} else {
    maxPswdLength = false;
    console.log("Password length is: NOT valid. Must be greater than 4 characters!");
}

// checks if username less than 21 char

if (username.length <= 20){
    maxUsernameLength = true;
    console.log("Username length is: Valid");
} else {
    maxUsernameLength = false;
    console.log("Please use less than 21 characters for your username!");
}

// checks if password includes username

if (password.includes(username)){
    usernameInPassword = true;
    console.log("Password cannot include username!");
} else {
    usernameInPassword = false;
    console.log("Password is username free");
}


// checks if username contains whitespaces

if (username.indexOf(0) || username.indexOf(-1) === " "){
    usernameWhitespace = true;
    console.log("Username is whitespace free");
} else {
    usernameWhitespace = false;
    console.log("No whitespaces in username allowed");
}

// checks if password contains whitespaces

if (password.indexOf(0) || password.indexOf(-1) === " "){
    pswdWhitespace = true;
    console.log("No whitespaces in password allowed");
} else {
    pswdWhitespace = false;
    console.log("Password is whitespace free");
}

