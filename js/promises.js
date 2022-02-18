(function () {
	'use strict'

	let username = "lucidawareness";

	const getUsersLastRepo = function (username) {
		return fetch(`https://api.github.com/users/${username}/events`, {headers: { Authorization: `token ${GITHUB_TOKEN}`}})
			.then(response => {
				return response.json()
			})
			.then(result => {
				// console.log(result)
				getUsersLastCommitDate(result[0].repo.name)
			}).catch(err => console.error(err))
	}

	getUsersLastRepo(username);

	const getUsersLastCommitDate = function (repoName){
		return fetch(`https://api.github.com/repos/${repoName}/commits`,{headers: { Authorization: `token ${GITHUB_TOKEN}`}})
			.then(response => {
				return response.json()
			}).then(result => {
				console.log(result[0].commit.author.date);
			}).catch(err => console.log(err));
	}

	function waitNSeconds(milliseconds) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				console.log(`You'll see this after ${milliseconds / 1000} second(s)`)
			}, milliseconds)
		});
	}

	waitNSeconds(3000);
	waitNSeconds(1000);

})();