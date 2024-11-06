const apiKey = require('./key.js');

class WeatherClient {

    constructor() {
        this.weatherData = null;
    }
    fetchWeatherData(city){
        let apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
        return fetch(apiUrl)
            .then(response => response.json())
            .then(weatherData =>
                weatherData);
            };

}
const client = new WeatherClient();
client.fetchWeatherData('London').then((weatherData) => {
    console.log('Weather data:');
    console.log(weatherData);
});

module.exports = WeatherClient;