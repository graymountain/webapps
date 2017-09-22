// Following function takes a numebrs and returns a rounded off number
function toInteger(number) {
  // Making float to show 2 decimal places
  return parseFloat(number).toFixed(2);
};

// Function for calculating arc length
function resultArcLength() {
  // Taking input
  var a = document.getElementById('inputRadius').valueAsNumber;
  var b = document.getElementById('inputAngle').valueAsNumber;
  // Calculating Arc Length
  var result = 2 * Math.PI * a * (b / 360);
  var positiveResult = toInteger(Math.abs(result));
  // Appending result
  document.getElementById('arcValue').innerHTML = "The result is: " + positiveResult;
}

// Function for calculating arc radius
function resultArcRadius() {
  // Taking input
  var a = document.getElementById('inputArcLength').valueAsNumber;
  var b = document.getElementById('inputAngle2').valueAsNumber;
  // Calculating Arc Radius
  var result = (a * 360) / (2 * Math.PI * b);
  var positiveResult = toInteger(Math.abs(result));
  // Appending result
  document.getElementById('arcValue').innerHTML = "The result is: " + positiveResult;
}

// Function for calculating arc radius
function resultCentreAngle() {
  // Taking input
  var a = document.getElementById('inputArcLength2').valueAsNumber;
  var b = document.getElementById('inputRadius2').valueAsNumber;
  // Calculating Centre Angle
  var result = (a * 360) / (2 * Math.PI * b);
  var positiveResult = toInteger(Math.abs(result));
  // Appending result
  document.getElementById('arcValue').innerHTML = "The result is: " + positiveResult;
}
