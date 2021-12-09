let a = 1;
let b = a++;
let c = ++a;

// what is the value of a, b, and c?

console.log(a);

console.log(b);

console.log(c);

console.log(a + b + c);

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
let price2 = "2.7";

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


// Bullet 1 You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?

let movieRentalRate = 3;

let mermaidDays = 3;

let brotherBearDays = 5;

let herculesDays = 1;

let totalDays = mermaidDays + brotherBearDays + herculesDays;

let totalPrice = totalDays * movieRentalRate;

console.log("Total price for the rental movies is: $" + totalPrice);

// Bullet 2 Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

let googleRate = 400;

let amazonRate = 380;

let facebookRate = 350;

let googleHours = 6 ;

let amazonHours = 4 ;

let facebookHours = 10 ;


let googlePay = googleRate * googleHours;

let amazonPay = amazonRate * amazonHours;

let facebookPay = facebookRate * facebookHours;

let totalPay = googlePay + amazonPay + facebookPay;

console.log("Your total pay for Google is: $" + googlePay);

console.log("Your total pay for Amazon is: $" +amazonPay);

console.log("Your total pay for Facebook is: $" +facebookPay);

console.log("Your total pay for this week is : $" + totalPay + "\n");

// Bullet 3 A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.

isClassFull = false;

studentScheduleFull = false;

// checks id class is full or if student schedule is full

if (!isClassFull && !studentScheduleFull){
    console.log("Student can enroll in class");
} else {
    console.log("Student can NOT enroll in class");
}

// Bullet 4 A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.

cartQTY = 2;

expired = false;

premiumMember = false;

// Boolean operator only
// let isValid = cartQTY >=2 && !expired && premiumMember;
//
// console.log(isValid);

// if statement
// Check if user is premium member

if (premiumMember){
    if (expired){                           // checks if offer is expired
        console.log("\nOffer is expired!");
    } else {
        console.log("\nOffer is valid");
    }
} else if (cartQTY >= 2) {                  // checks if cart qty is greater than 1
    console.log("\nOffer is valid");
} else {
    console.log("\nYou need at least 2 items for this Offer");
}




// 4. Use the following code to follow the instructions below:

console.log("\nPassword Validation:\n");

// login information

let username = 'codeup';
let password = 'notastrongpassword';

// Booleans for login validation

let maxPswdLength = true; // valid if true

let usernameInPassword = true; // not valid if true

let maxUsernameLength = true; // valid if true

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

if (username.includes(" ")){
    usernameWhitespace = true;
    console.log("No whitespaces in username allowed");
} else {
    usernameWhitespace = false;
    console.log("Username is whitespace free");
}

// checks if password contains whitespaces

if (password.includes(" ")){
    pswdWhitespace = true;
    console.log("No whitespaces in password allowed");
} else {
    pswdWhitespace = false;
    console.log("Password is whitespace free");
}

