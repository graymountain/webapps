// Following function takes a numebrs and returns a rounded off number
function toInteger(number) {
  // Making float to show 2 decimal places
  return parseFloat(number).toFixed(2);
}

//Pythagorean Theorem
function findSide() {
  var findMissingSide = function() {
    // Taking input
    var a = document.getElementById('sideA').valueAsNumber;
    var b = document.getElementById('sideB').valueAsNumber;
    // Calculating Side C
    var result = Math.sqrt((Math.pow(a,2))+(Math.pow(b,2)));
      
    var floatingResult = toInteger(result);

    return floatingResult;
  }

  var resultFindSide = function() {
    // Declaring Result
    document.getElementById('resultMissingSide').innerHTML = "Side C: " + findMissingSide();
  }

  return resultFindSide();
}