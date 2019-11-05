//Occupancy Calculator according to NBC 2016 Part II, p.g.no.622. 

//Calculating Occupancy for Office building types
function officeType() {
    var calcOcc = function () {
        'use strict';
        // Taking input
        var a = document.getElementById('occupancy-carpetArea-office').valueAsNumber;
        var b = document.getElementById('occupancy-workingShifts').valueAsNumber;
        // Calculating Number of People
        var result = (a / 10) * b;
        var positiveResult = Math.abs(result);

        return positiveResult;
    };

    var occupancyResult = function () {
        // Declaring Result
        document.getElementById('resultOccupancy').innerHTML = "Occupancy: " + calcOcc();
    };
    return occupancyResult();
};

//Calculating Occupancy for Residential building types
function residentialType() {
    var calcBedrooms = function () {
        // Taking input
        var result = document.getElementById('bedroomNumber-residential').valueAsNumber;
        return result;
    };

    var calcOcc = function () {
        if (calcBedrooms() > 0 && calcBedrooms() < 2) {
            var positiveResult = 4;
        } else if (calcBedrooms() > 1 && calcBedrooms() < 3) {
            var positiveResult = 5;
        } else if (calcBedrooms() > 2 && calcBedrooms() < 4) {
            var positiveResult = 6;
        } else {
            var positiveResult = 7;
        }
        return positiveResult;
    };

    var occupancyResult = function () {
        // Declaring Result
        document.getElementById('resultOccupancy').innerHTML = "Occupancy: " + calcOcc();
    };
    
    return occupancyResult();
};

//Residential Type Range Value indicater
function displayRangeValue() {
    
    var calcBedrooms = function () {
        // Taking input
        var result = document.getElementById('bedroomNumber-residential').valueAsNumber;
        return result;
    };
    
    var assignBedNumber = function () {
        // Declaring Result
        document.getElementById('bednum-value').innerHTML = calcBedrooms();
    };
    
    return assignBedNumber();
};

//Calculating Occupancy for School building types
function schoolType() {
    var calcOcc = function () {
        // Taking input
        var a = document.getElementById('schoolStrength-school').valueAsNumber;
        var b = document.getElementById('nonTeachingStaff-school').valueAsNumber;
        var c = document.getElementById('teachingStaff-school').valueAsNumber;
        // Calculating Number of People
        var result = a + b + c;
        var positiveResult = Math.abs(result);

        return positiveResult;
    };
    
    var occupancyResult = function () {
        // Declaring Result
        document.getElementById('resultOccupancy').innerHTML = "Occupancy: " + calcOcc();
    };
    
    return occupancyResult();
};

//Calculating Occupancy for Hostel building types
function hostelType() {
    var calcOcc = function () {
        // Taking input
        var a = document.getElementById('bedNumber-hostel').valueAsNumber;
        var b = document.getElementById('wardenResidence-hostel').valueAsNumber;
        var c = document.getElementById('staffNumber-hostel').valueAsNumber;

        // Calculating Number of People
        var result = ((a + 4.5) * b) + c;
        var positiveResult = Math.abs(result);

        return positiveResult;
    };
    var occupancyResult = function () {
        // Declaring Result
        document.getElementById('resultOccupancy').innerHTML = "Occupancy: " + calcOcc();
    };
    
    return occupancyResult();
};

//Calculating Occupancy for Hotel building types
function hotelType() {
    var calcOcc = function () {
        // Taking input
        var a = document.getElementById('bedNumber-hotel').valueAsNumber;
        var b = document.getElementById('staffNumber-hotel').valueAsNumber;
        var c = document.getElementById('restaurantSeats-hotel').valueAsNumber;
        // Calculating Number of People
        var result = a + b + c;
        var positiveResult = Math.abs(result);

        return positiveResult;
    };
    var occupancyResult = function () {
        // Declaring Result
        document.getElementById('resultOccupancy').innerHTML = "Occupancy: " + calcOcc();
    };
    
    return occupancyResult();
};

//Calculating Occupancy for Hospital building types
function hospitalType() {
    var calcOcc = function () {
        // Taking input
        var a = document.getElementById('bedNumber-hospital').valueAsNumber;
        var b = document.getElementById('patientAttendants-hospital').valueAsNumber;
        // Calculating Number of People
        var result = a + b;
        var positiveResult = Math.abs(result);

        return positiveResult;
    };
    var occupancyResult = function () {
        // Declaring Result
        document.getElementById('resultOccupancy').innerHTML = "Occupancy: " + calcOcc();
    };
    
    return occupancyResult();
};

//Calculating Occupancy for Mercantile building types
function mercantileType() {
    var calcOcc = function () {
        // Taking input
        var a = document.getElementById('carpetAreaGround-mercantile').valueAsNumber;
        var b = document.getElementById('carpetAreaUpper-mercantile').valueAsNumber;
        // Calculating Number of People
        var resultA = Math.abs(Math.round(a / 3));
        var resultB = Math.abs(Math.round(b / 6));
        var resultFixedOccupancy = Math.abs(Math.round((resultA + resultB) * 0.10));
        var resultFloatingOccupancy = Math.abs(Math.round((resultA + resultB) * 0.90));
        var resultTotalOccupancy = Math.abs(Math.round(resultA + resultB));

        return [resultA, resultB, resultFixedOccupancy, resultFloatingOccupancy, resultTotalOccupancy];
    };
    var occupancyResult = function () {
        // Declaring Result
        var values = calcOcc();
        document.getElementById('resultOccupancy').innerHTML = "Total Occupancy: " + values[4] + "<br />" + "Fixed Occupancy ~ " + values[2] + "<br />" + "Floating Occupancy ~ " + values[3] ;
    };
    
    return occupancyResult();
};

//Calculating Occupancy for Traffic Terminal Stations(TTS) building types
function ttsType() {
    var calcOcc = function () {
        // Taking input
        var a = document.getElementById('userNumber-tts').valueAsNumber;
        var b = document.getElementById('staffNumber-tts').valueAsNumber;
        var c = document.getElementById('vendorNumber-tts').valueAsNumber;
        // Calculating Number of People
        var result = a + b + c;
        var positiveResult = Math.abs(result);

        return positiveResult;
    };
    var occupancyResult = function () {
        // Declaring Result
        document.getElementById('resultOccupancy').innerHTML = "Occupancy: " + calcOcc();
    };
    
    return occupancyResult();
};