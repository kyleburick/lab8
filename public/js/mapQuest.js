function initMap() {
	// add your code here
	L.mapquest.key = '3IitWbhMRR7KGpn2G7wGYxDKOid14Iq1';

	// 'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
  		center: [32.87871, -117.23582],
  		layers: L.mapquest.tileLayer('map'),
  		zoom: 12,
  		zoomControl: false
  	});

  	// Add a marker to the map
  	L.marker([32.88, -117.236]).addTo(map);
}