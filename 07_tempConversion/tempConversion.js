const convertToCelsius = function(temp) {
  if (temp < 0) {
    celsius = Math.fround((((temp - 32) *5)/9));
    return parseFloat(celsius.toFixed(1));
  }else{  
  celsius = Math.fround(((temp - 32) *5)/9);
  return parseFloat(celsius.toFixed(1));
}};

const convertToFahrenheit = function(temp) {
  if (temp < 0) {
    fahrenheit = Math.fround(((temp * 5/9)+32));
    return parseFloat(fahrenheit.toFixed(1));
  }else{

  fahrenheit = Math.fround(((temp * 5/9)+32));
  return parseFloat(fahrenheit.toFixed(1));
}};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
