const convertToCelsius = function(fahrenheit) {
  let rawValue = (fahrenheit - 32) * (5/9);
  return parseFloat(rawValue.toFixed(1));
};

const convertToFahrenheit = function(celsius) {
  let rawValue = (celsius * (9/5) + 32);
  return parseFloat(rawValue.toFixed(1));

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
