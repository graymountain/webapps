// Following function takes a numebrs and returns a rounded off number
function toInteger(number) {
  // Making float to show 2 decimal places
  return parseFloat(number).toFixed(2);
};

//Find Angle of Slope
function findAngleOfSlope() {
  var angleOfSlope = function() {
    // Taking input
    var a = document.getElementById('inputSlope').valueAsNumber;
    // Calculating Side C
    var result = ((Math.atan(1/a))*(180/Math.PI));

    return toInteger(result);
  };

  var resultAngleOfSlope = function() {
    // Declaring Result
    document.getElementById('inputAngle').value = angleOfSlope();
  };

  return resultAngleOfSlope();
};

//Find Slope of Angle
function findSlopeOfAngle() {
  var slopeOfAngle = function() {
    // Taking input
    var a = document.getElementById('inputAngle').valueAsNumber;
    var b = (a * Math.PI) / 180
    // Calculating Side C
    var result = (1/(Math.tan(b)));

    return toInteger(result);
  };

  var resultSlopeOfAngle = function() {
    // Declaring Result
    document.getElementById('inputSlope').value = slopeOfAngle();
  };

  return resultSlopeOfAngle();
};