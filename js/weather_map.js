(function () {
	'use strict'
	//Mapbox map created
	mapboxgl.accessToken = KEY_API_MAPBOX;
	let map = new mapboxgl.Map({
		container: 'map',
		style: 'mapbox://styles/mapbox/streets-v11',
		zoom: 10,
		center: [
			-96.7969,
			32.7763
		]
	});

	let center = map.getCenter();
	sendQueryToOpenWeather(center);

	//Creates map box search box
	const geocoder = new MapboxGeocoder({
		accessToken: mapboxgl.accessToken,
		mapboxgl: mapboxgl
	});
	//Adds map box search box to html
	document.getElementById('geocoder').appendChild(geocoder.onAdd(map));

	//Adds navigation controls to map
	const nav = new mapboxgl.NavigationControl()
	map.addControl(nav)

	//Formats date and adds to element in HTML
	function doDate() {
		let str = "";

		let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
		let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

		let now = new Date();

		str += days[now.getDay()] + ", " + now.getDate() + " " + months[now.getMonth()] + " " + now.getFullYear() + " " + now.toLocaleTimeString('en-US');
		document.getElementById("todaysDate").innerHTML = str;
	}

	//Updates time every second
	setInterval(doDate, 1000);

	//Sends center of map to open weather api with value input as param
	function sendQueryToOpenWeather(center) {
		$.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${center.lat}&lon=${center.lng}&exclude=hourly,minutely,alerts&units=imperial&appid=${OPEN_WEATHER_APPID}`, {}).done(function (weatherData) {
			map.setCenter(center);
			$('#card-container').html(``);
			$('#second-card-container').html(``);
			reverseGeocoding(center);
			populateWeatherCards(weatherData);
			populateCurrentWeather(weatherData);

		});
	}

	//Reverse geocoder to get city name
	function reverseGeocoding(center) {
		let city;
		$.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${center.lng},${center.lat}.json?&access_token=${KEY_API_MAPBOX}`, {}).done(function (reverseGeocode) {
			for (let i = 0; i < reverseGeocode.features.length; i++) {
				let arrSearch = reverseGeocode.features[i].id
				if (arrSearch.includes('place')) {
					city = reverseGeocode.features[i].text
				}
			}
			populateCityName(city);
		})
	}

	//Sets current city name in span top right corner of screen
	function populateCityName(city) {
		$('#current-location').html(city);
		$('#current-location-map').html(city);
	}

	function populateCurrentWeather(weatherData) {
		//Get current temp
		let currentTemp = weatherData.current.temp;
		let currentFeelsLike = weatherData.current.feels_like;
		//Sets temp for current center of map
		$('#current-temp').html(`
			<p class="mt-3 font-weight-bold text-center">Current Temp: ${currentTemp}°F</p>
		`)

		$('#current-feels-like').html(`
			<p class="font-weight-bold text-center">Feels Like: ${currentFeelsLike}°F</p>
		`)

	}

	//Get data from weather api and assigns them to variable then populates div cards with data for each day up to 5 days including current day
	function populateWeatherCards(weatherData) {
		let unix_timestamp = weatherData.current.dt;
		let date = new Date(unix_timestamp * 1000);

		let dailyArr = weatherData.daily;
		//Loop through daily data from openWeather API
		dailyArr.forEach(function (day, index) {
			if (index > 4) {
				return
			}
			//Converts unix to JS date
			unix_timestamp = day.dt;
			date = new Date(unix_timestamp * 1000);
			let year = date.getFullYear();
			let month = date.getMonth() + 1;
			let dayNum = date.getDate();

			//Gets weather details for current iteration of days
			let minTemp = day.temp.min;
			let maxTemp = day.temp.max;
			let icon = day.weather[0].icon;
			let description = day.weather[0].description;
			let wind = day.wind_speed;
			let humidity = day.humidity;
			let pressure = day.pressure

			let iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;


			//Get uncapitalized description and capitalize first letter in each word
			let words = description.split(" ");
			for (let i = 0; i < words.length; i++) {
				words[i] = words[i][0].toUpperCase() + words[i].substr(1);
			}
			let descriptionCapitalized = words.join(" ");

			//Card row appending
			//language=HTML
			$('#card-container').append(`
                <div class="card shadow px-0 text-center">
                    <div class="card-header">
                        ${year}-${month}-${dayNum}
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item container-fluid">
                            <div class="row justify-content-center">${minTemp}°F / ${maxTemp}°F</div>
                            <div class="row justify-content-center"><img alt="" src="${iconUrl}"></div>
                        </li>
                        <li class="list-group-item">
                            <p>Description<br> <span class="font-weight-bold">${descriptionCapitalized}</span></p>
                            <p class="mb-0">Humidity: <span class="font-weight-bold">${humidity}%</span></p>
                        </li>
                        <li class="list-group-item">Wind: <span class="font-weight-bold">${wind} Mph</span></li>
                        <li class="list-group-item">Pressure: <span class="font-weight-bold">${pressure} Hpa</span></li>
                    </ul>
                </div>
			`);
			//Carousel appending for smaller screens
			//language=HTML
			$('#second-card-container').append(`
                <div class="carousel-item" id="my-carousel">
                    <div class="card shadow px-0 text-center">
                        <div class="card-header">
                            ${year}-${month}-${dayNum}
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item container-fluid">
                                <div class="row justify-content-center">${minTemp}°F / ${maxTemp}°F</div>
                                <div class="row justify-content-center"><img alt="" src="${iconUrl}"></div>
                            </li>
                            <li class="list-group-item">
                                <p>Description<br><span class="font-weight-bold">${descriptionCapitalized}</span></p>
                                <p class="mb-0">Humidity: <span class="font-weight-bold">${humidity}%</span></p>
                            </li>
                            <li class="list-group-item">Wind: <span class="font-weight-bold">${wind} Mph</span></li>
                            <li class="list-group-item">Pressure: <span
                                    class="font-weight-bold">${pressure} hpa</span></li>
                        </ul>
                    </div>
                </div>`);
		})
		//Adds necessary active class for first carousel item
		$('#my-carousel').first().addClass('active');
	}


	//Random event driven functions below

	//Add feature to button to remove markers from map
	function removeMarkers() {
		$('#hide').click(function () {
			$('.mapboxgl-marker').remove();
		})
	}

	removeMarkers();

	//On button click map centers to clicked point of map and sets zoom to 10 which then sends coords to query open weather API
	function centerMap() {
		$('#recenter').click(function () {
			map.setCenter([
				-96.7969,
				32.7763
			]);
			map.setZoom(10);
			let center = map.getCenter();
			sendQueryToOpenWeather(center)
		})
	}

	centerMap();

	//On title click get current center of map and updates data from Open weather API
	function reloadOnTitleClick() {
		$('#title').click(function () {
			let center = map.getCenter();
			sendQueryToOpenWeather(center);
		})
	}

	reloadOnTitleClick();

	//Gets coords from map after geocoder search returns results to pass to weather api
	function getLnglatAfterMapZoomEnds() {
		geocoder.on('result', function (e) {
			let center2 = e.result.center;
			let centerObj = {lat: center2[1], lng: center2[0]}
			map.jumpTo(centerObj);
			map.setZoom(12)
			sendQueryToOpenWeather(centerObj);
		})
	}

	getLnglatAfterMapZoomEnds();

	//On click of map point, get coords and send to open weather api for weather info of location clicked on
	function latLonOnClick() {
		map.on('click', function (e) {
			// Create a new marker.
			$('.mapboxgl-marker').remove();
			let marker = new mapboxgl.Marker({
				draggable: true
			})
				.setLngLat(e.lngLat)
				.addTo(map);
			map.setCenter(e.lngLat);
			afterDropCoords(marker);
			let markerCenter = map.getCenter();
			sendQueryToOpenWeather(markerCenter);
		})
	}

	latLonOnClick()

	//If marker is dragged call open weather api with updated location of marker
	function afterDropCoords(marker) {
		marker.on('dragend', function () {
			const lngLat = marker.getLngLat();
			map.setCenter(lngLat);
			sendQueryToOpenWeather(lngLat);
		})
	}

})();