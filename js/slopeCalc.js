// Following function takes a numebrs and returns a rounded off number
function floatingValue(number) {
  // Making float to show 2 decimal places
  return parseFloat(number).toFixed(3);
};

// Following function calculates slope between two points a certain distance
function slopeCalc() {
  // Taking input
  var a = document.getElementById('pointA').valueAsNumber;
  var b = document.getElementById('pointB').valueAsNumber;
  var distance = document.getElementById('distance').valueAsNumber;
  // Calculating slope
  var result = Math.abs(floatingValue(distance / (b - a)));

  document.getElementById('slopeResult').innerHTML = "The slope is 1: " + result;
};

// following function calculates the level of the second point based on the level of the first point, slope to be maintained, and the distance of the second point from the first point
function levelOfSecond() {
  // Taking inputs
  var a = document.getElementById('firstPoint').valueAsNumber;
  var distance = document.getElementById('distanceToSecond').valueAsNumber;
  var slope = document.getElementById('slope').valueAsNumber;

  // If "up" is selected, provide point higher than the first point
  if (document.getElementById('up').checked == true) {
    var result = floatingValue(a + (distance / slope));
    var result2 = floatingValue(result - a);
    output = "The level of second point is " + result;
    diffBWPoints = "The difference between two points is " + result2;
  };

  // If "down" is selected, provide point lower than the first point
  if (document.getElementById('down').checked == true) {
    var result = floatingValue(a - (distance / slope));
    var result2 = floatingValue(a - result);
    output = "The level of second point is " + result;
    diffBWPoints = "The difference between two points is " + result2;
  };

  // If neither "up" or "down" is selected, give a message
  if (document.getElementById('up').checked != true && document.getElementById('down').checked != true) {
    output = "Please select either \"up\" or \"Down\""
  };
  // Send output back to HTML
  document.getElementById('levelOfSecond').innerHTML = output;
  document.getElementById('diffBWpoints').innerHTML = diffBWPoints;
};

// Following function calculates the coplanar distance between two points based on the location of the first point, second point & provided slope

function distanceBwPoints() {
  // Taking input
  var a = document.getElementById('levelA').valueAsNumber;
  var b = document.getElementById('levelB').valueAsNumber;
  var slope = document.getElementById('givenSlope').valueAsNumber;
  // Calculating distance
  var result = floatingValue(slope * (b - a));
  var positiveResult = Math.abs(result);

  document.getElementById('distanceBwPoints').innerHTML = "The distance is: " + positiveResult;
};