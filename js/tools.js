// Following function takes a numebrs and returns a rounded off number
function toInteger(number) {
  // Making float to show 2 decimal places
  return parseFloat(number).toFixed(2);
};

// Following function calculates slope between two points a certain distance
function slopeCalc() {
  // Taking input
  var a = document.getElementById('pointA').valueAsNumber;
  var b = document.getElementById('pointB').valueAsNumber;
  var distance = document.getElementById('distance').valueAsNumber;
  // Calculating slope
  var result = toInteger(distance / (b - a));

  document.getElementById('slopeResult').innerHTML = "The slope is 1: " + result;
}

// following function calculates the level of the second point based on the level of the first point, slope to be maintained, and the distance of the second point from the first point
function levelOfSecond() {
  // Taking inputs
  var a = document.getElementById('firstPoint').valueAsNumber;
  var distance = document.getElementById('distanceToSecond').valueAsNumber;
  var slope = document.getElementById('slope').valueAsNumber;

  // If "up" is selected, provide point higher than the first point
  if (document.getElementById('up').checked == true) {
    var result = toInteger(a + (distance / slope));
    output = "The level of second point is " + result;
  }

  // If "down" is selected, provide point lower than the first point
  if (document.getElementById('down').checked == true) {
    var result = toInteger(a - (distance / slope));
    output = "The level of second point is " + result;
  }

  // If neither "up" or "down" is selected, give a message
  if (document.getElementById('up').checked != true && document.getElementById('down').checked != true) {
    output = "Please select either \"up\" or \"Down\""
  }
  // Send output back to HTML
  document.getElementById('levelOfSecond').innerHTML = output;
}

// Following function calculates the coplanar distance between two points based on the location of the first point, second point & provided slope

function distanceBwPoints() {
  // Taking input
  var a = document.getElementById('levelA').valueAsNumber;
  var b = document.getElementById('levelB').valueAsNumber;
  var slope = document.getElementById('givenSlope').valueAsNumber;
  // Calculating distance
  var result = toInteger(slope * (b - a));
  var positiveResult = Math.abs(result);

  document.getElementById('distanceBwPoints').innerHTML = "The distance is: " + positiveResult;
}

// Following functions calculate the arc length / arc raduis / centre angle of an arc

// Run script on page load
window.onload = function() {

  // Following are the loops for hiding / showing particular divisitions on option selection
  $('#this').on('change', function() {
    if (this.value == "arcLength") {
      $('#div1').show();
      $('#div2,#div3,#selectionMsg').hide();
    } else if (this.value == "arcRadius") {
      $('#div2').show();
      $('#div1,#div3,#selectionMsg').hide();
    } else if (this.value == "centreAngle") {
      $('#div3').show();
      $('#div1,#div2,#selectionMsg').hide();
    } else {
      $('#selectionMsg').show();
      $('#div1,#div2,#div3').hide();
      document.getElementById('selectionMsg').innerHTML = "Please select any of options";
    }
  });
};

// Function for calculating arc length
function resultArcLength() {
  // Taking input
  var a = document.getElementById('inputRadius').valueAsNumber;
  var b = document.getElementById('inputAngle').valueAsNumber;
  // Calculating Arc Length
  var result = 2 * Math.PI * a * (b / 360);
  var positiveResult = Math.abs(result);
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
  var positiveResult = Math.abs(result);
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
  var positiveResult = Math.abs(result);
  // Appending result
  document.getElementById('arcValue').innerHTML = "The result is: " + positiveResult;
}
