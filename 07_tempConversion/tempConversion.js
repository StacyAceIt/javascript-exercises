//(32°F − 32) × 5/9 = 0°C

const convertToCelsius = function(fahrenheitTemp) {
  res = (fahrenheitTemp - 32) * 5/9;
  if (Number.isInteger(res)){
    return res;
  }
  return Math.round(res * 10) / 10;
};
//(0°C × 9/5) + 32 = 32°F

const convertToFahrenheit = function(celciusTemp) {
  res = (celciusTemp * 9/5) + 32;
  if (Number.isInteger(res)){
    return res;
  }
  return Math.round(res * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
