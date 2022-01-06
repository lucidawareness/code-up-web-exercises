(function () {
	"use strict";

	/**
	 * TODO:
	 * Create an object with firstName and lastName properties that are strings
	 * with your first and last name. Store this object in a variable named
	 * `person`.
	 *
	 * Example:
	 *  > console.log(person.firstName) // "Rick"
	 *  > console.log(person.lastName) // "Sanchez"
	 */

	let person = {
		firstName: "Irvin",
		lastName: "Ruiz"
	};

	console.log(person.firstName);
	console.log(person.lastName);

	/**
	 * TODO:
	 * Add a sayHello method to the person object that returns a greeting using
	 * the firstName and lastName properties.
	 * console.log the returned message to check your work
	 *
	 * Example
	 * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
	 */

	person.hello = function () {
		return ("Hello from " + person.firstName + " " + person.lastName);
	}

	console.log(person.hello());

	/** TODO:
	 * HEB has an offer for the shoppers that buy products amounting to
	 * more than $200. If a shopper spends more than $200, they get a 12%
	 * discount. Write a JS program, using conditionals, that logs to the
	 * browser, how much Ryan, Cameron and George need to pay. We know that
	 * Cameron bought $180, Ryan $250 and George $320. Your program will have to
	 * display a line with the name of the person, the amount before the
	 * discount, the discount, if any, and the amount after the discount.
	 *
	 * Uncomment the lines below to create an array of objects where each object
	 * represents one shopper. Use a foreach loop to iterate through the array,
	 * and console.log the relevant messages for each person
	 */



	let shoppers = [
		{name: 'Cameron', amount: 180},
		{name: 'Ryan', amount: 250},
		{name: 'George', amount: 320}
	];

	for (let i = 0; i < shoppers.length; i++) { // loops through shoppers object length
		if (shoppers[i].amount > 200) { // checks if shoppers amount is greater than 200
			let discount = shoppers[i].amount * .12; // calculates shoppers discount
			let finalPrice = shoppers[i].amount - discount; // subtracts shoppers discount from total
			console.log(`\n${shoppers[i].name}'s total is $${shoppers[i].amount}\nYou saved $${discount}\nYour new total is:$${finalPrice}\n`); // logs users name, total before discount, discount amount, total after discount
		} else { // if user amount less <= 200
			console.log(`\nHello ${shoppers[i].name} your total is $${shoppers[i].amount}\n`); // logs total for user with no discount

		}

	}

	/** TODO:
	 * Create an array of objects that represent books and store it in a
	 * variable named `books`. Each object should have a title and an author
	 * property. The author property should be an object with properties
	 * `firstName` and `lastName`. Be creative and add at least 5 books to the
	 * array
	 *
	 * Example:
	 * > console.log(books[0].title) // "The Salmon of Doubt"
	 * > console.log(books[0].author.firstName) // "Douglas"
	 * > console.log(books[0].author.lastName) // "Adams"
	 */

	let books = [{
		title: "In Search of Lost Time",
		author: {
			firstName: "Marcel",
			lastName: "Proust"
		}
	},
		{
			title: "Ulysses",
			author: {
				firstName: "James",
				lastName: "Joyce"
			}
		},
		{
			title: "Don Quixote",
			author: {
				firstName: "Miguel",
				lastName: "de Cervantes"
			}
		},
		{
			title: "One Hundred Years of Solitude ",
			author: {
				firstName: "Gabriel",
				lastName: "Garcia Marquez"
			}
		},
		{
			title: "The Great Gatsby ",
			author: {
				firstName: "F. Scott",
				lastName: "Fitzgerald"
			}
		}
	];

	console.log(books[0].title);
	console.log(books[0].author.firstName);
	console.log(books[0].author.lastName + "\n");


	// logs object with all properties

	// Object.keys(books).forEach(key => {
	// 	console.log(key, books[key]);
	// });


	/**
	 * TODO:
	 * Loop through the books array and output the following information about
	 * each book:
	 * - the book number (use the index of the book in the array)
	 * - the book title
	 * - author's full name (first name + last name)
	 *
	 * Example Console Output:
	 *
	 *      Book # 1
	 *      Title: The Salmon of Doubt
	 *      Author: Douglas Adams
	 *      ---
	 *      Book # 2
	 *      Title: Walkaway
	 *      Author: Cory Doctorow
	 *      ---
	 *      Book # 3
	 *      Title: A Brief History of Time
	 *      Author: Stephen Hawking
	 *      ---
	 *      ...
	 */

	for (let i = 0; i < books.length; i++) { // loops through object list until i is greater than the length of the object
		console.log(`Book # ${i + 1}\nBook Title: ${books[i].title}\nAuthor: ${books[i].author.firstName} ${books[i].author.lastName}\n`);
	}

	/**
	 * Bonus:
	 * - Create a function named `createBook` that accepts a title and author
	 *   name and returns a book object with the properties described
	 *   previously. Refactor your code that creates the books array to instead
	 *   use your function.
	 * - Create a function named `showBookInfo` that accepts a book object and
	 *   outputs the information described above. Refactor your loop to use your
	 *   `showBookInfo` function.
	 */

	let books2;

	function createBook(title, authorFirstName, authorLastName) {
		books2 = {
			title: title,
			author: {
				firstName: authorFirstName,
				lastName: authorLastName
			}
		}
		console.log(books2);
		return books2;
	}

	createBook("Hello", "Irvin", "Ruiz");

	console.log(books2);

	function showBookInfo(obj){
		console.log(books2);
	}

	showBookInfo(0);



})();