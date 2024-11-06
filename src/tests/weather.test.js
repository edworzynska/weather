var Weather = require('../weather');
var WeatherClient = require('../weatherClient');

describe('weather test', () => {
    let weatherClientMock;
    let weather;

    beforeEach(() => {
        weatherClientMock = {
            fetchWeatherData: jest.fn()
        };
        weather = new Weather(weatherClientMock);
    });
    it('loads and returns weather data', async () => {
        const mockData = {name: "Konin", main: {temp: 2, pressure: 1020, humidity: 60}, weather: [{ main: 'Clear' }]};
        weatherClientMock.fetchWeatherData.mockResolvedValue(mockData);

        await weather.load('Konin');
        expect(weather.getWeatherData()).toEqual({
            city: 'Konin',
            temperature: 2,
            pressure: 1020,
            humidity: 60,
            description: 'Clear'
        })});
});