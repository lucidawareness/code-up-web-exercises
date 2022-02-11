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

	//Creates map box search box
	const geocoder = new MapboxGeocoder({
		accessToken: mapboxgl.accessToken,
		mapboxgl: mapboxgl
	});
	//Adds map box search to html
	document.getElementById('geocoder').appendChild(geocoder.onAdd(map));

	//Called when map finishes loading
	function onLoadWeatherData() {
		map.on('load', function (e) {
			let center = map.getCenter();
			sendQueryToOpenWeather(center);
		})
	}
	onLoadWeatherData();

	//Sends center of map to open weather api with value input as param
	function sendQueryToOpenWeather(center) {
		$.get(`http://api.openweathermap.org/data/2.5/onecall?lat=${center.lat}&lon=${center.lng}&exclude=hourly,minutely,alerts&units=imperial&appid=${OPEN_WEATHER_APPID}`, {}).done(function (weatherData) {
			map.setCenter(center);
			$('#card-container').html(``)
			reverseGeocoding(center)
			populateWeatherCards(weatherData);

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
	}

	//Get data from weather api and assigns them to variable then populates div cards with data for each day up to 5 days including current day
	function populateWeatherCards(weatherData) {
		let unix_timestamp = weatherData.current.dt;
		let date = new Date(unix_timestamp * 1000);// console.log(date);

		let dailyArr = weatherData.daily;

		dailyArr.forEach(function (day, index) {
			if (index > 4) {
				return
			}
			unix_timestamp = day.dt;
			date = new Date(unix_timestamp * 1000);
			let year = date.getFullYear();
			let month = date.getMonth();
			let dayNum = date.getDate();


			let minTemp = day.temp.min;
			let maxTemp = day.temp.max;
			let icon = day.weather[0].icon;
			let description = day.weather[0].description;
			let wind = day.wind_speed;
			let humidity = day.humidity;
			let pressure = day.pressure

			let iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;

			$('#card-container').append(`
				<div class="card mt-4 ml-3 col-10 col-lg-2 px-0" style="width: 18rem;">
            <div class="card-header text-center">
                ${year}-${month}-${dayNum}
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item container-fluid">
                    <div class="row justify-content-center">${minTemp}°F / ${maxTemp}°F</div>
                    <div class="row justify-content-center"><img src="${iconUrl}"></div>
                </li>
                <li class="list-group-item">
                    <p>Description: <span class="font-weight-bold">${description}</span></p>
                    <p class="mb-0">Humidity: <span class="font-weight-bold">${humidity}%</span></p>
                </li>
                <li class="list-group-item">Wind: <span class="font-weight-bold">${wind}mph</span></li>
                <li class="list-group-item">Pressure: <span class="font-weight-bold">${pressure} hpa</span></li>
            </ul>
        </div>
				`);

		})
	}


	//Random event driven functions below

	//Gets lnglat from map after zoom ends to pass to weather api
	function getLnglatAfterMapZoomEnds() {
		map.on('zoomend', function (e) {
			let center = map.getCenter();
			sendQueryToOpenWeather(center);
		})
	}
	getLnglatAfterMapZoomEnds()

	//On click of map point, get coords and send to open weather api for weather info of location clicked on
	function latLonOnClick() {
		map.on('click', function (e) {
			console.log(e.lngLat)
			// Create a new marker.
			const marker = new mapboxgl.Marker({
				draggable: true
			})
				.setLngLat(e.lngLat)
				.addTo(map);
			map.setCenter(e.lngLat);
			afterDropCoords(marker);
			let markerCenter = map.getCenter();
			sendQueryToOpenWeather(markerCenter)
		})
	}
	latLonOnClick()

	//If marker is dragged call open weather api with updated location of marker
	function afterDropCoords(marker) {
		marker.on('dragend', function () {
			const lngLat = marker.getLngLat();
			map.setCenter(lngLat);
			console.log(lngLat);
			sendQueryToOpenWeather(lngLat)
		})
	}

})();