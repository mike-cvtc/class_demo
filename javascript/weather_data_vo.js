var WeatherDataVo = function(weatherData) {
  var jsonData = JSON.parse(weatherData);
  var currentObservation = jsonData.current_observation
  var location = currentObservation.display_location
  var city = location.city;
  var state = location.state;
  var weather = currentObservation.weather;
  var temperatureString = currentObservation.temperature_string;
  var windString = currentObservation.wind_string
}
