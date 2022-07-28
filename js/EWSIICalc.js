//VUDA EWSII Unit Calculator according to survey 

function EWSIICalc() {
    var calcUnits = function () {
        'use strict';
        // Taking input
        var siteArea = document.getElementById('site-area').valueAsNumber;
        var gcaRatio = 34.5;
        var unitsRatio = 8;
        var livableArea = Math.abs(((siteArea)*gcaRatio)/100)
        // Calculating Number of People
        var numUnits = livableArea / unitsRatio;
        var positiveResult = Math.abs(Math.ceil(numUnits));
        
        if (positiveResult%2 == 0) {
            return (positiveResult);
        }
        else {
            return (positiveResult-1);
        }
    };

    var unitsResult = function () {
        // Declaring Result
        document.getElementById('resultUnits').innerHTML = "Approx. number of Units: " + calcUnits();
    };
    return unitsResult();
};