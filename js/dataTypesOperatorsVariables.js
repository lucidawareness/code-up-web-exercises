let a = 1;
let b = a++;
let c = ++a;
// what is the value of a, b, and c?

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

let sample = "Hello Codeup ";

console.log(sample.length);

console.log(sample.toUpperCase());

let student = "Class";

console.log(sample + student);

console.log(student.indexOf("c"));

console.log(student.indexOf("C"));

console.log(sample.substr(6, 6))

