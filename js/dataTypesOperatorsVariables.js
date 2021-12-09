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

// to illustrate why the isNaN() function is needed:

//  //

NaN == NaN

!true

!false

!!true

!!false

!!0

!!-0

!!1

!!-1

!!0.1

!!"hello"

!!""

!!''

!!"false"

!!"0"

// 2.

let sample = "Hello Codeup ";

console.log(sample.length);

console.log(sample.toUpperCase());

let student = "Class";

console.log(sample + student);

console.log(student.indexOf("c"));

console.log(student.indexOf("C"));

console.log(sample.substr(6, 6));

// 3.

let movieRentalRate = 3;

let mermaidDays = 3;

let brotherBearDays = 5;

let herculesDays = 1;

let totalDays = mermaidDays + brotherBearDays + herculesDays;

let totalPrice = totalDays * movieRentalRate;

console.log("Total price for the rental movies is: $" + totalPrice);

// 4.

let username = 'codeup';
let password = 'notastrongpassword';

let maxPswdLength = true; // valid if true

let usernameInPassword = true; // not valid if true

let maxUsernameLength = true; // valid if true

let usernameWhitespace = true; // not valid if true

let pswdWhitespace = true; // not valid if true


// check Password Length greater than or equal to 5
if (password.length >= 5){
    maxPswdLength = true;
    console.log("Password length is valid");
} else {
    maxPswdLength = false;
    console.log("Password length is NOT valid. Must be greater than 4 characters!");
}

// checks if password includes username

if (password.includes(username)){
    usernameInPassword = true;
    console.log("Password cannot include username!");
} else {
    usernameInPassword = false;
    console.log("Password is free of username");
}

// checks if username less than 21 char

if (username.length <= 20){
    maxUsernameLength = true;
    console.log("Username length is valid");
} else {
    maxUsernameLength = false;
    console.log("Please use less than 21 characters for your username!");
}

// checks if username contains whitespaces

if (username.includes(" ")){
    usernameWhitespace = true;
    console.log("No whitespaces in username allowed");
} else {
    usernameWhitespace = false;
    console.log("Username is free of whitespaces!");
}

// checks if password contains whitespaces

if (password.includes(" ")){
    pswdWhitespace = true;
    console.log("No whitespaces in password allowed");
} else {
    pswdWhitespace = false;
    console.log("Password is free of white spaces");
}
