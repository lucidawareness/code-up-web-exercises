var a = 1;
var b = a++;
var c = ++a;
// what is the value of a, b, and c?

console.log(a + b + c);

var d = "hello";
var e = false;

d++;
e++;

console.log(d);
console.log(e);

var perplexed; // perplexed is undefined (no value is assigned)
perplexed + 2;

var price = 2.7;

// console.log(price.toFixed(2));
//
// var price = "2.7";
//
// console.log(price.toFixed(2));

isNaN(0)

isNaN(1)

isNaN("")

isNaN("string")

isNaN("0")

isNaN("1")

isNaN("3.145")

isNaN(Number.MAX_VALUE)

isNaN(Infinity)

isNaN("true")

isNaN(true)

isNaN("false")

isNaN(false)

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

var sample = "Hello Codeup";

console.log(sample.length);

console.log(sample.toUpperCase());
