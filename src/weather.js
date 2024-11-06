class Weather {

    constructor(weatherClient) {
        this.weatherClient = weatherClient;
        this.weatherData = null;
    }
    weatherDataDTO(weatherData) {
        return {
            city: weatherData.name,
            temperature: weatherData.main.temp,
            pressure: weatherData.main.pressure,
            humidity: weatherData.main.humidity,
            description: weatherData.weather[0].main
        }
    }
    load(city){
        return this.weatherClient.fetchWeatherData(city)
            .then(weatherData => {
                this.weatherData = this.weatherDataDTO(weatherData);
            });
    }
    getWeatherData(){
        return this.weatherData;
    }
}
module.exports = Weather;