const request = require('request');

var geocodeAddress = (address, callback) => {

	var encodedAddress = encodeURIComponent(address);

	request({
		url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyBf77j6A9wK0Fv3YRHTsqgo8-BSG3k7kRM`,
		json: true
	}, (error, response, body) => {

		if (error) {
			callback('unable to connect to google servers');
		} else if (body.status === 'ZERO_RESULTS') {
			callback('unable to find address');
		} else if (body.status === 'OK') {
			callback(undefined, {
				address: body.results[0].formatted_address,
				latitude: body.results[0].geometry.location.lat,
				longitude: body.results[0].geometry.location.lng
			});
		}
	});
};
//7bc7716d89692f5686448911e378707b
//https://api.darksky.net/forecast/7bc7716d89692f5686448911e378707b/37.8267,-122.4233


module.exports.geocodeAddress = geocodeAddress;