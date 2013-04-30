var WeatherDao = function() {
  this.setClickHandler();
}

WeatherDao.prototype.setClickHandler = function() {
  var that = this;
  $('#location_form').submit(function() {
    var zipCode = that.getZipCode();
    that.getData(zipCode, populateResultsContainer)
    return false;
  });
}

var populateResultsContainer = function(weatherDataVo) {
  var resultContainer = new ResultContainer();
  resultContainer.populateWeatherData(weatherDataVo);
}

WeatherDao.prototype.getData = function(zipCode, success) {
  that = this;
  apiKey = "4a5c268c050162e3";
  url = "http://weather-api.herokuapp.com/weather/" + apiKey + "/conditions/z/" + zipCode +"/";
  $.ajax({
    url: url,
    success: function(data) {
      var weatherDataVo = new WeatherDataVo(data);
      populateResultsContainer(weatherDataVo);
    },
    error: function() {
      console.log("Error");
    }
  });
}

WeatherDao.prototype.getZipCode = function() {
  return $('#location_form :input[name="zip_code"]').val()
}
