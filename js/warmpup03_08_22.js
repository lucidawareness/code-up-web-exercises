// Write a function called makePerson. It takes 2 arguments: personName and age.
// 	personName must be at least 1 character long. age must be between 1 and 150.
// If either of the parameters is invalid, output an appropriate message to the console and return FALSE.
// 	If both parameters are valid, return an object containing personName and age.
// 	E.g.,
// 	console.log(makePerson("Bob", 30)); // outputs {personName:"Bob", age:30}
// console.log(makePerson("", 30));
// // outputs:
// Person name cannot be blank
// false

(function() {
	function makePerson(personName, age) {
		if (personName.length <1 || age > 150 || age < 1) {
			console.log("Name must be at least 1 character long. Age must be between 1 and 150");
			return false;
		}
		return {personName: personName, age: age};

	}

	console.log(makePerson("Bob", 30));
	console.log(makePerson("", 30));
})();