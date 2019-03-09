// Following function takes a numebrs and returns a rounded off number
function toInteger(number) {
  // Making float to show 2 decimal places
  return parseFloat(number).toFixed(2);
};

//Sanitary Ware Calculator
//Calculating Sanitry Ware for Educational building types
function convScale() {
  var convScale = function() {
    // Taking input
    var a = document.getElementById('currentDimension').valueAsNumber;
    var b = document.getElementById('currentScale').valueAsNumber;
    var c = document.getElementById('expectedScale').valueAsNumber;
    // Calculating Number of People
    var result = ((a*b)/c);
    var positiveResult = Math.abs(result);

    return positiveResult;
  };

  var resultScaleValue = function() {
    // Declaring Result
    document.getElementById('resultScaleValue').innerHTML = convScale();
  };

  return resultScaleValue();
};

//Sanitary Ware Calculator
//Calculating Sanitry Ware for Educational building types
function findScale() {
  var findScale = function() {
    // Taking input
    var a = document.getElementById('actualDimension').valueAsNumber;
    var b = document.getElementById('modelDimension').valueAsNumber;
    // Calculating Number of People
    var result = (a/b);
    var positiveResult = Math.abs(result);

    return positiveResult;
  };

  var resultScale = function() {
    // Declaring Result
    document.getElementById('resultScale').innerHTML = "1 : " + findScale();
  };

  return resultScale();
};