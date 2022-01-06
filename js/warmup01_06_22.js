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
			genres: []


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
			genres: []


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
			genres: []
		},
	]

	function printMovie(i) {
		console.log(`Printing movie of index "${i}"`);
		console.log(movies[i])
	}

	function printMovies(arr) {
		console.log(`Printing objects in Movies array`);
		console.log(arr);
	}

	printMovie(0);
	printMovie(1);
	printMovie(2);
	printMovies(movies);

	// Change the director member of your movies to an object
	// with firstName and lastName members
	// Make an array member for your movies called genres.
	// 	It is an array of string elements where each element
	// is one of your movies’ genres from imdb.com
	// and change your printMovie function


})();