const convertToCelsius = function(num) {
  return (parseFloat(((num - 32) / 1.8).toFixed(1)));
};

const convertToFahrenheit = function(num) {
  return (parseFloat(((num * 1.8) + 32).toFixed(1)));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
