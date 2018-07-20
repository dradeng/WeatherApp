const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
	.options({
		a: {
			demand: true,
			alias: 'address',
			describe: 'Address to fetch weather for',
			string: true
		}
	})
	.help()
	.alias('help', 'h')
	.argv;

//7bc7716d89692f5686448911e378707b
//https://api.darksky.net/forecast/7bc7716d89692f5686448911e378707b/37.8267,-122.4233


geocode.geocodeAddress(argv.address, (errorMessage, results) => {
	if (errorMessage) {
		console.log(errorMessage);

	} else {
		console.log(results.address);

		weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
			if (errorMessage) {
				console.log(errorMessage);
			} else {
				console.log(`It is currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}.`);
			}
			
		});
	}
});




//7bc7716d89692f5686448911e378707b
//https://api.darksky.net/forecast/7bc7716d89692f5686448911e378707b/37.8267,-122.4233

