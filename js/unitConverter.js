// Number to floor value
function toInteger(number) {
  var floorValue = Math.floor(number);
  return floorValue;
};

// Functions for Length Converter

function inchTo() {
  // Taking input
  var a = document.getElementById('inputInch').valueAsNumber;

  // inch to ft-in

  var inFt = Math.floor(a / 12);
  var inIn = (a % 12);
  // Appending result
  document.getElementById('inputFt').value = inFt;
  document.getElementById('inputFtIn').value = inIn.toFixed(5);

  // inch to mm

  var inMm = (a * 25.4);
  var inchToMm = Math.abs(inMm);
  document.getElementById('inputMm').value = inchToMm.toFixed(5);

  // inch to cm

  var inCm = (a * 2.54);
  var inchToCm = Math.abs(inCm);
  document.getElementById('inputCm').value = inchToCm.toFixed(5);

  // inch to m

  var inM = (a * 0.0254);
  var inchToM = Math.abs(inM);
  document.getElementById('inputM').value = inchToM.toFixed(5);

};

function ftInchTo() {
  // Taking input
  var a = document.getElementById('inputFt').valueAsNumber;
  var b = document.getElementById('inputFtIn').valueAsNumber;

  // ft-in to inch

  var ftToIn = Math.abs(a * 12);
  var inToIn = Math.abs(b);
  var ftInToIn = ftToIn + inToIn;
  document.getElementById('inputInch').value = ftInToIn.toFixed(5);

  // ft-in to mm

  var ftToMm = Math.abs(a * 304.8);
  var inToMm = Math.abs(b * 25.4);
  var ftInToMm = ftToMm + inToMm;
  document.getElementById('inputMm').value = ftInToMm.toFixed(5);

  // ft-in to cm

  var ftToCm = Math.abs(a * 30.48);
  var inToCm = Math.abs(b * 2.54);
  var ftInToCm = ftToCm + inToCm;
  document.getElementById('inputCm').value = ftInToCm.toFixed(5);

  // ft-in to m

  var ftToM = Math.abs(a * 0.3048);
  var inToM = Math.abs(b * 0.0254);
  var ftInToM = ftToM + inToM;
  document.getElementById('inputM').value = ftInToM.toFixed(5);

};


function mmTo() {
  // Taking input
  var a = document.getElementById('inputMm').valueAsNumber;

  // mm to in

  var mmIn = (a * 0.0393701);
  var mmToIn = Math.abs(mmIn);
  document.getElementById('inputInch').value = mmToIn.toFixed(5);

  // mm to ft-in

  var mmFt = Math.floor(a / 304.8); // 1 ft = 304.8 mm
  var mmFtIn = (a * 0.0393701) % 12; // 1 mm = 0.0393701 inch
  // Appending result
  document.getElementById('inputFt').value = mmFt;
  document.getElementById('inputFtIn').value = mmFtIn.toFixed(5);

  // mm to cm

  var mmCm = (a * 0.1);
  var mmToCm = Math.abs(mmCm);
  document.getElementById('inputCm').value = mmToCm.toFixed(5);

  // mm to m

  var mmM = (a * 0.001);
  var mmToM = Math.abs(mmM);
  document.getElementById('inputM').value = mmToM.toFixed(5);

};


function cmTo() {
  // Taking input
  var a = document.getElementById('inputCm').valueAsNumber;

  // cm to in

  var cmIn = (a * 0.393701);
  var cmToIn = Math.abs(cmIn);
  document.getElementById('inputInch').value = cmToIn.toFixed(5);

  // cm to ft-in

  var cmFt = Math.floor(a / 30.48);
  var cmFtIn = (a * 0.393701) % 12;
  // Appending result
  document.getElementById('inputFt').value = cmFt;
  document.getElementById('inputFtIn').value = cmFtIn.toFixed(5);

  // cm to mm

  var cmMm = (a * 10);
  var cmToMm = Math.abs(cmMm);
  document.getElementById('inputMm').value = cmToMm.toFixed(5);

  // cm to m

  var cmM = (a * 0.01);
  var cmToM = Math.abs(cmM);
  document.getElementById('inputM').value = cmToM.toFixed(5);

};


function mTo() {
  // Taking input
  var a = document.getElementById('inputM').valueAsNumber;

  // m to in

  var mIn = (a * 39.3701);
  var mToIn = Math.abs(mIn);
  document.getElementById('inputInch').value = mToIn.toFixed(5);

  // m to ft-in

  var mFt = Math.floor(a / 0.3048);
  var mFtIn = (a * 39.3701) % 12;
  // Appending result
  document.getElementById('inputFt').value = mFt;
  document.getElementById('inputFtIn').value = mFtIn.toFixed(5);

  // m to mm

  var mMm = (a * 1000);
  var mToMm = Math.abs(mMm);
  document.getElementById('inputMm').value = mToMm.toFixed(5);

  // m to cm

  var mCm = (a * 100);
  var mToCm = Math.abs(mCm);
  document.getElementById('inputCm').value = mToCm.toFixed(5);

};

// Functions for Area Converter

function SqInchTo() {
  // Taking input
  var a = document.getElementById('inputSqInch').valueAsNumber;

  // SqIn to SqFt

  var SqInFt = (a * 0.00694444);
  var SqInToSqFt = Math.abs(SqInFt);
  document.getElementById('inputSqFt').value = SqInToSqFt.toFixed(5);

  // SqIn to SqMm

  var SqInMm = (a * 645.16);
  var SqInToSqMm = Math.abs(SqInMm);
  document.getElementById('inputSqMm').value = SqInToSqMm.toFixed(5);

  // SqIn to SqCm

  var SqInCm = (a * 6.4516);
  var SqInToSqCm = Math.abs(SqInCm);
  document.getElementById('inputSqCm').value = SqInToSqCm.toFixed(5);
    
  // SqIn to SqM

  var SqInM = (a * 0.00064516);
  var SqInToSqM = Math.abs(SqInM);
  document.getElementById('inputSqM').value = SqInToSqM.toFixed(5);

};


function SqFtTo() {
  // Taking input
  var a = document.getElementById('inputSqFt').valueAsNumber;

  // SqFt to SqIn

  var SqFtIn = (a * 144);
  var SqFtToSqIn = Math.abs(SqFtIn);
  document.getElementById('inputSqInch').value = SqFtToSqIn.toFixed(5);

  // SqFt to SqMm

  var SqFtMm = (a * 92903);
  var SqFtToSqMm = Math.abs(SqFtMm);
  document.getElementById('inputSqMm').value = SqFtToSqMm.toFixed(5);

  // SqFt to SqCm

  var SqFtCm = (a * 929.03);
  var SqFtToSqCm = Math.abs(SqFtCm);
  document.getElementById('inputSqCm').value = SqFtToSqCm.toFixed(5);
    
  // SqFt to SqM

  var SqFtM = (a * 0.092903);
  var SqFtToSqM = Math.abs(SqFtM);
  document.getElementById('inputSqM').value = SqFtToSqM.toFixed(5);

};


function SqMmTo() {
  // Taking input
  var a = document.getElementById('inputSqMm').valueAsNumber;

  // SqMm to SqIn

  var SqMmIn = (a * 0.00155);
  var SqMmToSqIn = Math.abs(SqMmIn);
  document.getElementById('inputSqInch').value = SqMmToSqIn.toFixed(5);

  // SqMm to SqFt

  var SqMmFt = (a * 0.000010764);
  var SqMmToSqFt = Math.abs(SqMmFt);
  document.getElementById('inputSqFt').value = SqMmToSqFt.toFixed(5);

  // SqIn to SqCm

  var SqMmCm = (a * 0.01);
  var SqMmToSqCm = Math.abs(SqMmCm);
  document.getElementById('inputSqCm').value = SqMmToSqCm.toFixed(5);
    
  // SqIn to SqM

  var SqMmM = (a * 0.000001);
  var SqMmToSqM = Math.abs(SqMmM);
  document.getElementById('inputSqM').value = SqMmToSqM.toFixed(5);

};


function SqCmTo() {
  // Taking input
  var a = document.getElementById('inputSqCm').valueAsNumber;

  // SqCm to SqIn

  var SqCmIn = (a * 0.155);
  var SqCmToSqIn = Math.abs(SqCmIn);
  document.getElementById('inputSqInch').value = SqCmToSqIn.toFixed(5);

  // SqCm to SqFt

  var SqCmFt = (a * 0.00107639);
  var SqCmToSqFt = Math.abs(SqCmFt);
  document.getElementById('inputSqFt').value = SqCmToSqFt.toFixed(5);

  // SqCm to Sqmm

  var SqCmMm = (a * 100);
  var SqCmToSqMm = Math.abs(SqCmMm);
  document.getElementById('inputSqMm').value = SqCmToSqMm.toFixed(5);
    
  // SqIn to SqM

  var SqCmM = (a * 0.0001);
  var SqCmToSqM = Math.abs(SqCmM);
  document.getElementById('inputSqM').value = SqCmToSqM.toFixed(5);

};


function SqMTo() {
  // Taking input
  var a = document.getElementById('inputSqM').valueAsNumber;

  // SqCm to SqIn

  var SqMIn = (a * 1550);
  var SqMToSqIn = Math.abs(SqMIn);
  document.getElementById('inputSqInch').value = SqMToSqIn.toFixed(5);

  // SqCm to SqFt

  var SqMFt = (a * 10.7639);
  var SqMToSqFt = Math.abs(SqMFt);
  document.getElementById('inputSqFt').value = SqMToSqFt.toFixed(5);

  // SqCm to Sqmm

  var SqMMm = (a * 1000000);
  var SqMToSqMm = Math.abs(SqMMm);
  document.getElementById('inputSqMm').value = SqMToSqMm.toFixed(5);
    
  // SqIn to SqM

  var SqMCm = (a * 10000);
  var SqMToSqCm = Math.abs(SqMCm);
  document.getElementById('inputSqCm').value = SqMToSqCm.toFixed(5);

};