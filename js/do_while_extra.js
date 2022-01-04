// print "we have ___ amount of desks left"
// variable that holds amount of students; --> our starting point (start at 0)
// define amount of desks available --> inside the while condition
// start our do loop
// increment amount of students
// execute code: log the sentence inside do {}

// ---------------------------
let students = 0;
let seats = 20;

do {
	console.log(`We have ${seats - students} seats left`);
	students++;
	console.log(`${students} in classroom`);
} while (students < seats);
console.log("Class is full!");