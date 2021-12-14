// Create a file named conditionals.js inside the js directory.
// 	Create a function called analyzeColor1 that takes a parameter called color
// In your function, use ONLY if statements to print the following:
// 	“blue is the color of the sky” if the value of color is “blue”
// “red is the color of love” if the value of color is “red”
// “green is the color of envy” if the value of color is “green”
// “I don’t know that color” if the value of color is anything else
// HINT: use return in the conditional code blocks to prevent from printing multiple times for the same argument
// Add, commit, and push to GitHub.

let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let randomColor = colors[Math.floor(Math.random() * colors.length)];


function analyzeColor1(color) {
	if (typeof color !== "string"){
		return "This is not a word!";
	} else {
		if (color === "blue") {
			return "Blue is the color of the sky!";
		} else if (color === "red") {
			return "Red is the color of love!";
		} else if (color === "green") {
			return "Green is the color of envy!";
		} else {
			return `I dont know anything about "${color}"`;
		}
	}
}

console.log(analyzeColor1("red"));
console.log(analyzeColor1("yellow"));
console.log(analyzeColor1(3543));
console.log(`Random color is: ${randomColor}`);
console.log(analyzeColor1(randomColor));
