(function () {
	'use strict'

	let username = "lucidawareness";

	function getGithubUsernames(user) {
		return fetch(`https://api.github.com/users/${user}/repos`, {headers: {'Authorization': GITHUB_TOKEN}})
			.then(response => response.json())
			.catch(err => console.log(err));
	}

	getGithubUsernames(username).then(users => {
		let arrDates = [];
		users.forEach(userObj => {
			arrDates.push(userObj.pushed_at);
		});
		let sortedArrOfDates = arrDates.sort()
		let arrLength = arrDates.length - 1;
		console.log(`User ${username} last commit was ${sortedArrOfDates[arrLength]}`);
	}).catch(err => console.error(err))

	function waitNSeconds(milliseconds) {
		const myPromise = new Promise((resolve, reject) => {
			setTimeout(() => {
				console.log(`You'll see this after ${milliseconds / 1000} second(s)`)
			}, milliseconds)
		})
	}

	waitNSeconds(3000)
	waitNSeconds(1000)


})();