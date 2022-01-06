(function () {
	"use strict";

	let planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
	let planetsArray;

	/**
	 * TODO:
	 * Convert planetsString to an array, and save it in a variable named
	 * planetsArray.
	 * console.log planetsArray to check your work
	 */

	planetsArray = planetsString.split('|');

	console.log(planetsArray);

	/**
	 * TODO:
	 * Create a string with <br> tags between each planet. console.log() your
	 * results. Why might this be useful?
	 */

	let planetsBr = planetsArray.join('<br>');
	console.log(planetsBr);


	/**
	 * BONUS:
	 * Create another string that would display your planets in an unordered
	 * list. You will need an opening AND closing <ul> tags around the entire
	 * string, and <li> tags around each planet.
	 */


	// add <ul> to beginning of planets array
	planetsArray.unshift('<ul>');
	// add <ul> to end of planets array
	planetsArray.push('/<ul>');
	console.log(planetsArray);
	// make array string joined by <li>
	let planetsUl = planetsArray.join('<li>');
	console.log(planetsUl);

	// problem : no way to add /<li> to end of each planet The problem is you can't wrap each planet in open and closing line item tags.


})();
