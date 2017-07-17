// Following function takes a numebrs and returns a rounded off number
function toInteger(number){
  return Math.round(  // round to nearest integer
    Number(number)    // type cast your input
  );
};

// Following function calculates slope between two points a certain distance
function slopeCalc (){
  // Taking input
  var a = document.getElementById('pointA').valueAsNumber;
  var b = document.getElementById('pointB').valueAsNumber;
  var distance = document.getElementById('distance').valueAsNumber;
  // Calculating slope
  var result = toInteger(distance / (b - a));

  document.getElementById('slopeResult').innerHTML = "The slope is 1: " + result;
}

// following function calculates the level of the second point based on the level of the first point, slope to be maintained, and the distance of the second point from the first point
function levelOfSecond(){
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
