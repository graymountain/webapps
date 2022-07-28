// Following function takes a numebrs and returns a rounded off number
function toInteger(number) {
  // Making float to show 2 decimal places
  return parseFloat(number).toFixed(2);
};

//Pythagorean Theorem
function findSolarLoad() {
  // Taking input
  var terraceArea = document.getElementById('terraceArea').valueAsNumber;
  var areaFor1kWh = document.getElementById('genratingArea').valueAsNumber;
  var diversity = 0.8;
  var genHoursPerDay = 5;
  // Calculating results
  var resultSolarLoad = toInteger(Math.abs(terraceArea / areaFor1kWh));
  var resultMaxSolarLoad = toInteger(Math.abs(resultSolarLoad * diversity));
  var resultUnitsPerDay = toInteger(Math.abs(resultMaxSolarLoad * genHoursPerDay));
  var resultUnitsPerMonth = toInteger(Math.abs(resultUnitsPerDay * 30));
  // Appending result
  document.getElementById('resultDivFac').innerHTML = "Diversity Factor: 0.8";
  document.getElementById('resultGenHours').innerHTML = "Generating Hours/ Day: 5";
  document.getElementById('resultSolarLoad').innerHTML = "Generated solar load (kWh): " + resultSolarLoad;
  document.getElementById('resultMaxSolarLoad').innerHTML = "Maximum generated solar load (kWh): " + resultMaxSolarLoad;
  document.getElementById('resultUnitsPerDay').innerHTML = "Units generated/ Day: " + resultUnitsPerDay;
  document.getElementById('resultUnitsPerMonth').innerHTML = "Units generated/ Month: " + resultUnitsPerMonth;
}