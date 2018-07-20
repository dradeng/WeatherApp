
const request = require('request');
var getWeather = (lat, lng, callback) => {
	request({
		url: `https://api.darksky.net/forecast/7bc7716d89692f5686448911e378707b/${lat},${lng}`,
		json: true
	}, (error, response, body) => {

		if (error) {
			callback('unable to connect');
		} else if (response.statusCode == 400){
			callback('unable to fetch weather');
		} else if (response.statusCode == 200){
			callback(undefined, {
				temperature: body.currently.temperature,
				apparentTemperature: body.currently.apparentTemperature
			});
		}
	});
};
module.exports.getWeather = getWeather;
