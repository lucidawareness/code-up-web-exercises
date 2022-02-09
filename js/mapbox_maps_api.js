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

	map.on('click', function (e) {
		console.log(e);
	})
	//Creates marker and adds to map
	function getMarker(coordinates, el) {
		return new mapboxgl.Marker(el)
			.setLngLat(coordinates)
			.addTo(map);

	}
	//Creates pop up and adds to map
	function makePopup(restaurant) {
		return new mapboxgl.Popup()
			.setHTML(`
                    <h3>${restaurant.name}</h3>
                    <p>Address: ${restaurant.address}</p>
                    <p>Web Site: <a href="${restaurant.website}" target="_blank">${restaurant.websiteShorthand}</a></p>

                        `);
	}

	//Forward geopcoding set up
	function geocode(search, token) {
		var baseUrl = 'https://api.mapbox.com';
		var endPoint = '/geocoding/v5/mapbox.places/';
		return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
			.then(function (res) {
				return res.json();
				// to get all the data from the request, comment out the following three lines...
			}).then(function (data) {
				return data.features[0].center;
			});
	}


	// Adds the search control to the map.
	map.addControl(
		new MapboxGeocoder({
			accessToken: mapboxgl.accessToken,
			mapboxgl: mapboxgl
		})
	);


	//Array of objects containing details of favorite restaurants
	let restaurants = [{
		"name": "Sixty Vines",
		"address": "500 Crescent Ct Suite 160, Dallas, TX 75201",
		"website": " https://sixtyvines.com",
		"websiteShorthand": "sixtyvines.com",
		"position": [-96.80495, 32.79379],
		"image_url": "url(https://sixtyvines.com/static/d50af3fac5380d4b1112fa7df3a0fef6/45cca/index-1.webp)"
	}, {
		"name": "Meso Maya",
		"address": "5280 Belt Line Rd, Addison, TX 75254",
		"website": "https://www.mesomaya.com",
		"websiteShorthand": "mesomaya.com",
		"position": [-96.81877, 32.95352],
		"image_url": "url(https://www.mesomaya.com/wp-content/uploads/2018/03/Downtown.jpg)"
	}, {
		"name": "Tortugas Mexican Kitchen",
		"address": "6010 Seawall Blvd, Galveston, TX 77551",
		"website": "https://tortugacantina.com",
		"websiteShorthand": "tortugacantina.com",
		"position": [-94.82559, 29.26749],
		"image_url": "url(https://tortugacantina.com/wp-content/uploads/2021/03/Tortuga_logo_notagline-1-230x116.png)"
	}]

	// the  geocode method from mapbox-geocoder-utils.js
	geocode(restaurants[0].position, mapboxgl.accessToken).then(function (result) {
		map.setCenter(result);
		map.setZoom(15);
	});

	// populates table with details of each restaurant
	restaurants.forEach(function (restaurant, index) {
		let restaurantNum = index + 1;
		$('#tableBody').append(`
                <tr>
                    <th scope="row">${restaurantNum}</th>
                    <td>${restaurant.name}</td>
                    <td>${restaurant.address}</td>
                    <td><a href="${restaurant.website}" target="_blank">${restaurant.websiteShorthand}</a></td>
                </tr>
			`);
		//Creates a marker for each restaurant/ part of forEach loop
		const el = document.createElement('div');
		const width = 75;
		const height = 75;
		el.className = `marker`;
		el.style.backgroundImage = restaurant.image_url;
		el.style.width = `${width}px`;
		el.style.height = `${height}px`;
		el.style.backgroundSize = '100%';

		// Add markers to the map.
		let marker = getMarker(restaurant.position, el)
		//Creates a popup for each restaurant in array/ part of forEach loop
		let popup = makePopup(restaurant)

		//Links the popup to a marker
		marker.setPopup(popup);

	});

	//Hides markers on button click
	$('#hide-markers').click(function () {
		$(".marker").toggle();
	});


	//Creates ability to change zoom level based on IF value of select input has changed
	$('select').change(function () {
		if ($(this).val() === 5) {
			map.setZoom($(this).val());
		} else if ($(this).val() === 10) {
			map.setZoom($(this).val());
		}
		map.setZoom($(this).val());
	})

	//Creates a flyTo when a table row is clicked using the currently clicked restaurants physical position
	$('tr').each(function (index) {
		let indexNum = index - 1;
		$(this).click(function () {
			map.flyTo({
				center: restaurants[indexNum].position,
				zoom: 18,
				speed: 1.5,
				curve: 1,
				easing(t) {
					return t;
				}
			});

		})
	})

	//Creates ability to recenter the map to the original load instance
	$('#re-center').click(function () {
		map.setZoom(10);
		map.setCenter([
			-96.7969,
			32.7763
		])
	})


})();