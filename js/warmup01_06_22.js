(function () {
	"use strict";

	// Declare an array of two objects for movies
	// 	that have the following member values:

	// 	title (string)
	// year released (int)
	// rating (string)
	// director (string)
	// imdb rating (decimal)
	// academy award win (boolean)

	// Use imdb.com to look up the info or make up your own info
	// write a printMovie function that takes a movie as a parameter and prints its info.

	// 	call it with each of your array elements.
	// 	write a printMovies function that takes an array as a parameter, iterates over the array, and calls printMovie on each of the array elements

	let movies = [
		{
			title: "The Shawshank Redemption",
			yearReleased: 1994,
			rating: "Good",
			director: {
				firstName: "Frank",
				lastName: "Darabont"
			},
			imdbRating: 9.2,
			academyAwardWinner: false,
			genres: ["action", "suspense", "thriller"]


		},
		{
			title: "The Godfather",
			yearReleased: 1972,
			rating: "Awesome",
			director: {
				firstName: "Francis",
				lastName: "Ford Coppola"
			},
			imdbRating: 9.1,
			academyAwardWinner: false,
			genres: ["action", "suspense", "thriller"]


		},
		{
			title: "The Godfather: Part II",
			yearReleased: 1974,
			rating: "Awesome 2",
			director: {
				firstName: "Francis",
				lastName: "Ford Coppola"
			},
			imdbRating: 9.0,
			academyAwardWinner: false,
			genres: ["action", "suspense", "thriller"]
		},
	]
	// Change the director member of your movies to an object
	// with firstName and lastName members
	// Make an array member for your movies called genres.
	// 	It is an array of string elements where each element
	// is one of your movies’ genres from imdb.com
	// and change your printMovie function

	function printMovie(i) {
		console.log(`Printing movie of index "${i}"`);
		console.log(movies[i]);
	}

	function printMovies(arr) {
		console.log(`Printing objects in Movies array`);
		for (let i = 0; i < arr.length; i++) {
			console.log(`\nMovie #${i + 1}.\nTitle: ${arr[i].title}\nYear Released: ${arr[i].yearReleased}\nYour Rating: ${arr[i].rating}`);
		}
		// console.log(arr);
	}

	printMovie(0);
	printMovie(1);
	printMovie(2);
	printMovies(movies);


	// Add a rate(rating) function to each of your movie objects.
	// 	The function takes an int parameter called rating
	// Modify rate(rating) to set a myRating property on that object
	// modify printMovie to display myRating for each movie
	// 15 minutes

	function rateMovie(i, rating) {
		movies[i].rating = rating;
	}

	rateMovie(0, "OK");
	rateMovie(1, "Bad");
	console.log("New rating")
	console.log(movies);


})();