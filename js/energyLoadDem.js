// Following function takes a numebrs and returns a rounded off number
function toInteger(number) {
  // Making float to show 2 decimal places
    return parseFloat(number).toFixed(2);
}

//Find Energy Load
function findEnergyLoad() {
    
  // Taking input
  var carpetArea = document.getElementById('energyCarpetArea').valueAsNumber;
  var lightDemPersqft = 1;
  var powerDemPersqft = 2;
  var hvacDemPersqft = 12;
  var lightDiversity = 1;
  var powerDiversity = 0.8;
  var hvacDiversity = 0.8;
  var overallDiversity = 0.85;
    
  // Calculating results
  var resultLightingLoadKW = (carpetArea * lightDemPersqft * lightDiversity)/1000;
  var resultPowerLoadKW = (carpetArea * powerDemPersqft * powerDiversity)/1000;
  var resultHVACLoadKW = (carpetArea * hvacDemPersqft * hvacDiversity)/1000;
  var resultHVACLoadTR = (resultHVACLoadKW / 3.517);
  var resultTotConLoad = (resultLightingLoadKW + resultPowerLoadKW + resultHVACLoadKW);
  var resultMaxEnergyDemand = (resultTotConLoad * overallDiversity);
    
  // Appending result
  document.getElementById('resultLightingLoadkW').innerHTML = "Lighting Load Demand (kW): " + toInteger(resultLightingLoadKW);
  document.getElementById('resultPowerLoadkW').innerHTML = "Power Load Demand (kW): " + toInteger(resultPowerLoadKW);
  document.getElementById('resultHVACLoadkW').innerHTML = "HVAC Load Demand: " + toInteger(resultHVACLoadKW) + " kW, " + toInteger(resultHVACLoadTR) + " TR";
  document.getElementById('resultTotConLoad').innerHTML = "Total Connected Load (kW): " + toInteger(resultTotConLoad);
  document.getElementById('overallEnergyDiversity').innerHTML = "Overall Diversity (W/ft²): " + toInteger(overallDiversity);
  document.getElementById('maxEnergyDemand').innerHTML = "Maximum Energy Demand (kW): " + toInteger(resultMaxEnergyDemand);
};