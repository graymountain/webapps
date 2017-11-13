// Following function takes a numebrs and returns a rounded off number
function toInteger(number) {
  // Making float to show 2 decimal places
  return parseFloat(number).toFixed(2);
};

//Sanitary Ware Calculator
//Calculating Sanitry Ware for Educational building types
function educationalType() {
  var calcPax = function() {
    // Taking input
    var a = document.getElementById('carpetArea-educational').valueAsNumber;
    // Calculating Number of People
    var result = (a / 1);
    var positiveResult = Math.abs(result);

    return positiveResult;
  };

  var calcMale = function() {
    // Calculating Number of Male
    var a = document.getElementById('percentageOfMale-educational').valueAsNumber;
    var result = (a / 100) * calcPax();
    var positiveResult = Math.ceil(result);

    return positiveResult;
  };

  var calcFemale = function() {
    // Calculating Number of Male
    var a = document.getElementById('percentageOfMale-educational').valueAsNumber;
    var result = ((100 - a) / 100) * calcPax();
    var positiveResult = Math.ceil(result);

    return positiveResult;
  };

  var calcUrinals = function() {
    // Calculating Number of Urinals
    if (calcPax() > 0 && calcPax() <= 250) {
      var positiveResult = 5;
    } else if (calcPax() > 250) {
      var result = calcMale() / 50;
      var positiveResult = Math.ceil(result);
    } else {
      var positiveResult = 0;
    }

    return positiveResult;
  };

  var calcWCMale = function() {
    // Calculating Number of WC for Male
    if (calcPax() > 0 && calcPax() <= 400) {
      var positiveResult = 2;
    } else if (calcPax() > 400) {
      var result = calcMale() / 200;
      var positiveResult = Math.ceil(result);
    } else {
      var positiveResult = 0;
    }

    return positiveResult;
  };

  var calcWCFemale = function() {
    // Calculating Number of WC for Male
    if (calcPax() > 0 && calcPax() <= 400) {
      var positiveResult = 2;
    } else if (calcPax() > 400) {
      var result = calcFemale() / 200;
      var positiveResult = Math.ceil(result);
    } else {
      var positiveResult = 0;
    }

    return positiveResult;
  };

  var resultSanitaryWare = function() {
    // Declaring Result
    document.getElementById('resultSanitaryWare').innerHTML = "Urinals: " + calcUrinals() + "<br/>" + "WC for Male:" + calcWCMale() + "<br/>" + "WC for Female:" + calcWCFemale();
  };

  return resultSanitaryWare();
};

//Calculating Sanitry Ware for Business building types
function businessType() {
  var calcPax = function() {
    // Taking input
    var a = document.getElementById('carpetArea-business').valueAsNumber;
    // Calculating Number of People
    var result = (a / 4);
    var positiveResult = Math.abs(result);

    return positiveResult;
  };

  var calcMale = function() {
    // Calculating Number of Male
    var a = document.getElementById('percentageOfMale-business').valueAsNumber;
    var result = (a / 100) * calcPax();
    var positiveResult = Math.ceil(result);

    return positiveResult;
  };

  var calcFemale = function() {
    // Calculating Number of Male
    var a = document.getElementById('percentageOfMale-business').valueAsNumber;
    var result = ((100 - a) / 100) * calcPax();
    var positiveResult = Math.ceil(result);

    return positiveResult;
  };

  var calcUrinals = function() {
    // Calculating Number of Urinals
    if (calcPax() > 0 && calcPax() <= 20) {
      var positiveResult = 1;
    } else if (calcPax() > 20 && calcPax() <= 100) {
      var result = calcMale() / 25;
      var positiveResult = Math.ceil(result);
    } else if (calcPax() > 100 && calcPax() <= 500) {
      var result = calcMale() / 50;
      var positiveResult = Math.ceil(result);
    } else if (calcPax() > 500) {
      var result = calcMale() / 50;
      var positiveResult = Math.ceil(result);
    } else {
      var positiveResult = 0;
    }

    return positiveResult;
  };

  var calcWCMale = function() {
    // Calculating Number of WC for Male
    if (calcPax() > 0 && calcPax() <= 20) {
      var positiveResult = 1;
    } else if (calcPax() > 20 && calcPax() <= 100) {
      var result = calcMale() / 25;
      var positiveResult = Math.ceil(result);
    } else if (calcPax() > 100 && calcPax() <= 500) {
      var result = calcMale() / 50;
      var positiveResult = Math.ceil(result);
    } else if (calcPax() > 500) {
      var result = calcMale() / 100;
      var positiveResult = Math.ceil(result);
    } else {
      var positiveResult = 0;
    }

    return positiveResult;
  };

  var calcWCFemale = function() {
    // Calculating Number of WC for Male
    if (calcPax() > 0 && calcPax() <= 20) {
      var positiveResult = 1;
    } else if (calcPax() > 20 && calcPax() <= 100) {
      var result = calcFemale() / 25;
      var positiveResult = Math.ceil(result);
    } else if (calcPax() > 100 && calcPax() <= 500) {
      var result = calcFemale() / 50;
      var positiveResult = Math.ceil(result);
    } else if (calcPax() > 500) {
      var result = calcFemale() / 100;
      var positiveResult = Math.ceil(result);
    } else {
      var positiveResult = 0;
    }

    return positiveResult;
  };

  var resultSanitaryWare = function() {
    // Declaring Result
    document.getElementById('resultSanitaryWare').innerHTML = "Urinals: " + calcUrinals() + "<br/>" + "WC for Male:" + calcWCMale() + "<br/>" + "WC for Female:" + calcWCFemale();
  };

  return resultSanitaryWare();
};

//Calculating Sanitry Ware for Industrial & Storage building types
function industrialType() {
  var calcPax = function() {
    // Taking input
    var a = document.getElementById('carpetArea-industrial').valueAsNumber;
    // Calculating Number of People
    var result = (a / 25);
    var positiveResult = Math.abs(result);

    return positiveResult;
  };

  var calcMale = function() {
    // Calculating Number of Male
    var a = document.getElementById('percentageOfMale-industrial').valueAsNumber;
    var result = (a / 100) * calcPax();
    var positiveResult = Math.ceil(result);

    return positiveResult;
  };

  var calcFemale = function() {
    // Calculating Number of Male
    var a = document.getElementById('percentageOfMale-industrial').valueAsNumber;
    var result = ((100 - a) / 100) * calcPax();
    var positiveResult = Math.ceil(result);

    return positiveResult;
  };

  var calcUrinals = function() {
    // Calculating Number of Urinals
    if (calcPax() > 0 && calcPax() <= 100) {
      var result = calcMale() / 100;
      var positiveResult = Math.ceil(result);
    } else if (calcPax() > 100) {
      var result = calcMale() / 50;
      var positiveResult = Math.ceil(result);
    } else {
      var positiveResult = 0;
    }

    return positiveResult;
  };

  var calcWCMale = function() {
    // Calculating Number of WC for Male
    if (calcPax() > 0 && calcPax() <= 100) {
      var result = calcMale() / 25;
      var positiveResult = Math.ceil(result);
    } else if (calcPax() > 100) {
      var result = calcMale() / 50;
      var positiveResult = Math.ceil(result);
    } else {
      var positiveResult = 0;
    }

    return positiveResult;
  };

  var calcWCFemale = function() {
    // Calculating Number of WC for Male
    if (calcPax() > 0 && calcPax() <= 100) {
      var result = calcFemale() / 25;
      var positiveResult = Math.ceil(result);
    } else if (calcPax() > 100) {
      var result = calcFemale() / 50;
      var positiveResult = Math.ceil(result);
    } else {
      var positiveResult = 0;
    }

    return positiveResult;
  };

  var resultSanitaryWare = function() {
    // Declaring Result
    document.getElementById('resultSanitaryWare').innerHTML = "Urinals: " + calcUrinals() + "<br/>" + "WC for Male:" + calcWCMale() + "<br/>" + "WC for Female:" + calcWCFemale() + "<br/>" + "Wash Area: 4 m²";
  };

  return resultSanitaryWare();
};

//Calculating Sanitry Ware for Special building types
function specialType() {
  var calcPax = function() {
    // Taking input
    var a = document.getElementById('seats-special').valueAsNumber;
    // Calculating Number of People
    var positiveResult = a;

    return positiveResult;
  };

  var calcMale = function() {
    // Calculating Number of Male
    var a = document.getElementById('percentageOfMale-special').valueAsNumber;
    var result = (a / 100) * calcPax();
    var positiveResult = Math.ceil(result);

    return positiveResult;
  };

  var calcFemale = function() {
    // Calculating Number of Male
    var a = document.getElementById('percentageOfMale-special').valueAsNumber;
    var result = ((100 - a) / 100) * calcPax();
    var positiveResult = Math.ceil(result);

    return positiveResult;
  };

  var calcUrinals = function() {
    // Calculating Number of Urinals
    if (calcPax() > 0) {
      var result = (calcMale() / 75) * 2;
      var positiveResult = Math.ceil(result);
    } else {
      var positiveResult = 0;
    }

    return positiveResult;
  };

  var calcWCMale = function() {
    // Calculating Number of WC for Male
    if (calcPax() > 0) {
      var result = calcMale() / 100;
      var positiveResult = Math.ceil(result);
    } else {
      var positiveResult = 0;
    }

    return positiveResult;
  };

  var calcWBMale = function() {
    // Calculating Number of WC for Male
    if (calcPax() > 0) {
      var result = calcMale() / 200;
      var positiveResult = Math.ceil(result);
    } else {
      var positiveResult = 0;
    }

    return positiveResult;
  };

  var calcWCFemale = function() {
    // Calculating Number of WC for Male
    if (calcPax() > 0) {
      var result = calcFemale() / 100;
      var positiveResult = Math.ceil(result);
    } else {
      var positiveResult = 0;
    }

    return positiveResult;
  };

  var calcWBFemale = function() {
    // Calculating Number of WC for Male
    if (calcPax() > 0) {
      var result = calcFemale() / 200;
      var positiveResult = Math.ceil(result);
    } else {
      var positiveResult = 0;
    }

    return positiveResult;
  };

  var resultSanitaryWare = function() {
    // Declaring Result
    document.getElementById('resultSanitaryWare').innerHTML = "Urinals: " + calcUrinals() + "<br/>" + "WC for Male:" + calcWCMale() + "<br/>" + "Wash Basins for Male:" + calcWBMale() + "<br/>" + "WC for Female:" + calcWCFemale() + "<br/>" + "Wash Basins for Female:" + calcWBFemale();
  };

  return resultSanitaryWare();
};
