//Occupancy Calculator according to NBC 2016 Part II, p.g.no.622. 

// Following function takes a numebrs and returns a rounded off number
function floatingValue(number) {
  // Making float to show 2 decimal places
  return parseFloat(number).toFixed(2);
};

//Calculating water requirement for residential building types
function WRResidential() {
    
  var occ = document.getElementById('occupancy-number-residential').valueAsNumber;
  var dom = 105 * occ;
  var flush = 45 * occ;
  var total = 150 * occ;
  output1 = "Domestic/ Day (litre): " + dom;
  output2 = "Flushing/ Day (litre): " + flush;
  output3 = "Total/ Day (litre): " + total;
    
  // Send output back to HTML
  document.getElementById('resultDomWR').innerHTML = output1;
  document.getElementById('resultFlushingWR').innerHTML = output2;
  document.getElementById('resultTotalWR').innerHTML = output3;
    
};


//Calculating water requirement for factory building types
function WRFactory() {
    
  if (document.getElementById('fac-w-bath').checked == true) {
    var occ = document.getElementById('occupancy-number-factory').valueAsNumber;
    var dom = 30 * occ;
    var flush = 15 * occ;
    var total = 45 * occ;
    output1 = "Domestic/ Day (litre): " + dom;
    output2 = "Flushing/ Day (litre): " + flush;
    output3 = "Total/ Day (litre): " + total;
  };
    
  if (document.getElementById('fac-wo-bath').checked == true) {
    var occ = document.getElementById('occupancy-number-factory').valueAsNumber;
    var dom = 20 * occ;
    var flush = 10 * occ;
    var total = 30 * occ;
    output1 = "Domestic/ Day (litre): " + dom;
    output2 = "Flushing/ Day (litre): " + flush;
    output3 = "Total/ Day (litre): " + total;
  };
    
  // Send output back to HTML
  document.getElementById('resultDomWR').innerHTML = output1;
  document.getElementById('resultFlushingWR').innerHTML = output2;
  document.getElementById('resultTotalWR').innerHTML = output3;
    
};

//Calculating water requirement for hospital building types
function WRHospital() {
    
  if (document.getElementById('bed-lt-100').checked == true) {
    var occ = document.getElementById('occupancy-number-hospital').valueAsNumber;
    var dom = 230 * occ;
    var flush = 110 * occ;
    var total = 340 * occ;
    output1 = "Domestic/ Day (litre): " + dom;
    output2 = "Flushing/ Day (litre): " + flush;
    output3 = "Total/ Day (litre): " + total;
  };
    
  if (document.getElementById('bed-gt-100').checked == true) {
    var occ = document.getElementById('occupancy-number-hospital').valueAsNumber;
    var dom = 300 * occ;
    var flush = 150 * occ;
    var total = 450 * occ;
    output1 = "Domestic/ Day (litre): " + dom;
    output2 = "Flushing/ Day (litre): " + flush;
    output3 = "Total/ Day (litre): " + total;
  };
    
  if (document.getElementById('hos-opd').checked == true) {
    var occ = document.getElementById('occupancy-number-hospital').valueAsNumber;
    var dom = 10 * occ;
    var flush = 5 * occ;
    var total = 15 * occ;
    output1 = "Domestic/ Day (litre): " + dom;
    output2 = "Flushing/ Day (litre): " + flush;
    output3 = "Total/ Day (litre): " + total;
  };
    
  // Send output back to HTML
  document.getElementById('resultDomWR').innerHTML = output1;
  document.getElementById('resultFlushingWR').innerHTML = output2;
  document.getElementById('resultTotalWR').innerHTML = output3;
    
};

//Calculating water requirement for medical quater building types
function WRMedQtr() {
    
  var occ = document.getElementById('occupancy-number-medqtr').valueAsNumber;
  var dom = 90 * occ;
  var flush = 45 * occ;
  var total = 135 * occ;
  output1 = "Domestic/ Day (litre): " + dom;
  output2 = "Flushing/ Day (litre): " + flush;
  output3 = "Total/ Day (litre): " + total;
    
  // Send output back to HTML
  document.getElementById('resultDomWR').innerHTML = output1;
  document.getElementById('resultFlushingWR').innerHTML = output2;
  document.getElementById('resultTotalWR').innerHTML = output3;
    
};

//Calculating water requirement for Hostel building types
function WRHostel() {
    
  var occ = document.getElementById('occupancy-number-hostel').valueAsNumber;
  var dom = 90 * occ;
  var flush = 45 * occ;
  var total = 135 * occ;
  output1 = "Domestic/ Day (litre): " + dom;
  output2 = "Flushing/ Day (litre): " + flush;
  output3 = "Total/ Day (litre): " + total;
    
  // Send output back to HTML
  document.getElementById('resultDomWR').innerHTML = output1;
  document.getElementById('resultFlushingWR').innerHTML = output2;
  document.getElementById('resultTotalWR').innerHTML = output3;
    
};

//Calculating water requirement for hotel building types
function WRHotel() {
    
  if (document.getElementById('hot-ut-3').checked == true) {
    var occ = document.getElementById('occupancy-number-hotel').valueAsNumber;
    var dom = 120 * occ;
    var flush = 60 * occ;
    var total = 180 * occ;
    output1 = "Domestic/ Day (litre): " + dom;
    output2 = "Flushing/ Day (litre): " + flush;
    output3 = "Total/ Day (litre): " + total;
  };
    
  if (document.getElementById('hot-gt-3').checked == true) {
    var occ = document.getElementById('occupancy-number-hotel').valueAsNumber;
    var dom = 260 * occ;
    var flush = 60 * occ;
    var total = 320 * occ;
    output1 = "Domestic/ Day (litre): " + dom;
    output2 = "Flushing/ Day (litre): " + flush;
    output3 = "Total/ Day (litre): " + total;
  };
    
  // Send output back to HTML
  document.getElementById('resultDomWR').innerHTML = output1;
  document.getElementById('resultFlushingWR').innerHTML = output2;
  document.getElementById('resultTotalWR').innerHTML = output3;
    
};

//Calculating water requirement for Hostel building types
function WROffice() {
    
  var occ = document.getElementById('occupancy-number-office').valueAsNumber;
  var dom = 25 * occ;
  var flush = 20 * occ;
  var total = 45 * occ;
  output1 = "Domestic/ Day (litre): " + dom;
  output2 = "Flushing/ Day (litre): " + flush;
  output3 = "Total/ Day (litre): " + total;
    
  // Send output back to HTML
  document.getElementById('resultDomWR').innerHTML = output1;
  document.getElementById('resultFlushingWR').innerHTML = output2;
  document.getElementById('resultTotalWR').innerHTML = output3;
    
};

//Calculating water requirement for restaurant building types
function WRRestaurant() {
    
  if (document.getElementById('res-res').checked == true) {
    var occ = document.getElementById('occupancy-number-restaurant').valueAsNumber;
    var dom = 55 * occ;
    var flush = 15 * occ;
    var total = 70 * occ;
    output1 = "Domestic/ Day (litre): " + dom;
    output2 = "Flushing/ Day (litre): " + flush;
    output3 = "Total/ Day (litre): " + total;
  };
    
  if (document.getElementById('res-fc').checked == true) {
    var occ = document.getElementById('occupancy-number-restaurant').valueAsNumber;
    var dom = 25 * occ;
    var flush = 10 * occ;
    var total = 35 * occ;
    output1 = "Domestic/ Day (litre): " + dom;
    output2 = "Flushing/ Day (litre): " + flush;
    output3 = "Total/ Day (litre): " + total;
  };
    
  // Send output back to HTML
  document.getElementById('resultDomWR').innerHTML = output1;
  document.getElementById('resultFlushingWR').innerHTML = output2;
  document.getElementById('resultTotalWR').innerHTML = output3;
    
};

//Calculating water requirement for Clubhouse building types
function WRClubhouse() {
    
  var occ = document.getElementById('occupancy-number-clubhouse').valueAsNumber;
  var dom = 25 * occ;
  var flush = 20 * occ;
  var total = 45 * occ;
  output1 = "Domestic/ Day (litre): " + dom;
  output2 = "Flushing/ Day (litre): " + flush;
  output3 = "Total/ Day (litre): " + total;
    
  // Send output back to HTML
  document.getElementById('resultDomWR').innerHTML = output1;
  document.getElementById('resultFlushingWR').innerHTML = output2;
  document.getElementById('resultTotalWR').innerHTML = output3;
    
};

//Calculating water requirement for Stadium building types
function WRStadium() {
    
  var occ = document.getElementById('occupancy-number-stadium').valueAsNumber;
  var dom = 4 * occ;
  var flush = 6 * occ;
  var total = 10 * occ;
  output1 = "Domestic/ Day (litre): " + dom;
  output2 = "Flushing/ Day (litre): " + flush;
  output3 = "Total/ Day (litre): " + total;
    
  // Send output back to HTML
  document.getElementById('resultDomWR').innerHTML = output1;
  document.getElementById('resultFlushingWR').innerHTML = output2;
  document.getElementById('resultTotalWR').innerHTML = output3;
    
};

//Calculating water requirement for Cinema building types
function WRCinema() {
    
  var occ = document.getElementById('occupancy-number-cinema').valueAsNumber;
  var dom = 5 * occ;
  var flush = 10 * occ;
  var total = 15 * occ;
  output1 = "Domestic/ Day (litre): " + dom;
  output2 = "Flushing/ Day (litre): " + flush;
  output3 = "Total/ Day (litre): " + total;
    
  // Send output back to HTML
  document.getElementById('resultDomWR').innerHTML = output1;
  document.getElementById('resultFlushingWR').innerHTML = output2;
  document.getElementById('resultTotalWR').innerHTML = output3;
    
};

//Calculating water requirement for school building types
function WRSchool() {
    
  if (document.getElementById('sch-bor').checked == true) {
    var occ = document.getElementById('occupancy-number-school').valueAsNumber;
    var dom = 25 * occ;
    var flush = 20 * occ;
    var total = 45 * occ;
    output1 = "Domestic/ Day (litre): " + dom;
    output2 = "Flushing/ Day (litre): " + flush;
    output3 = "Total/ Day (litre): " + total;
  };
    
  if (document.getElementById('sch-non-bor').checked == true) {
    var occ = document.getElementById('occupancy-number-school').valueAsNumber;
    var dom = 90 * occ;
    var flush = 45 * occ;
    var total = 135 * occ;
    output1 = "Domestic/ Day (litre): " + dom;
    output2 = "Flushing/ Day (litre): " + flush;
    output3 = "Total/ Day (litre): " + total;
  };
    
  // Send output back to HTML
  document.getElementById('resultDomWR').innerHTML = output1;
  document.getElementById('resultFlushingWR').innerHTML = output2;
  document.getElementById('resultTotalWR').innerHTML = output3;
    
};

//Calculating water requirement for Mall building types
function WRMall() {
    
  var occ1 = document.getElementById('occupancy-number-mall-staff').valueAsNumber;
  var dom1 = 25 * occ1;
  var flush1 = 20 * occ1;
  var total1 = 45 * occ1;
    
  var occ2 = document.getElementById('occupancy-number-mall-visit').valueAsNumber;
  var dom2 = 5 * occ2;
  var flush2 = 10 * occ2;
  var total2 = 15 * occ2;
  output1 = "Domestic/ Day (litre): Staff = " + dom1 + " Visitors = " + dom2;
  output2 = "Flushing/ Day (litre): Staff = " + flush1 + " Visitors = " + flush2;
  output3 = "Total/ Day (litre): Staff = " + total1 + " Visitors = " + total2;
    
  // Send output back to HTML
  document.getElementById('resultDomWR').innerHTML = output1;
  document.getElementById('resultFlushingWR').innerHTML = output2;
  document.getElementById('resultTotalWR').innerHTML = output3;
    
};

//Calculating water requirement for tts building types
function WRTts() {
    
  if (document.getElementById('tts-air').checked == true) {
    var occ = document.getElementById('occupancy-number-tts').valueAsNumber;
    var dom = 40 * occ;
    var flush = 30 * occ;
    var total = 70 * occ;
    output1 = "Domestic/ Day (litre): " + dom;
    output2 = "Flushing/ Day (litre): " + flush;
    output3 = "Total/ Day (litre): " + total;
  };
    
  if (document.getElementById('tts-rlw-jc-w-bath').checked == true) {
    var occ = document.getElementById('occupancy-number-tts').valueAsNumber;
    var dom = 40 * occ;
    var flush = 30 * occ;
    var total = 70 * occ;
    output1 = "Domestic/ Day (litre): " + dom;
    output2 = "Flushing/ Day (litre): " + flush;
    output3 = "Total/ Day (litre): " + total;
  };
    
  if (document.getElementById('tts-rlw-jc-wo-bath').checked == true) {
    var occ = document.getElementById('occupancy-number-tts').valueAsNumber;
    var dom = 30 * occ;
    var flush = 15 * occ;
    var total = 45 * occ;
    output1 = "Domestic/ Day (litre): " + dom;
    output2 = "Flushing/ Day (litre): " + flush;
    output3 = "Total/ Day (litre): " + total;
  };
    
  if (document.getElementById('tts-rlw-in-w-bath').checked == true) {
    var occ = document.getElementById('occupancy-number-tts').valueAsNumber;
    var dom = 25 * occ;
    var flush = 20 * occ;
    var total = 45 * occ;
    output1 = "Domestic/ Day (litre): " + dom;
    output2 = "Flushing/ Day (litre): " + flush;
    output3 = "Total/ Day (litre): " + total;
  };
    
  if (document.getElementById('tts-rlw-in-wo-bath').checked == true) {
    var occ = document.getElementById('occupancy-number-tts').valueAsNumber;
    var dom = 15 * occ;
    var flush = 10 * occ;
    var total = 25 * occ;
    output1 = "Domestic/ Day (litre): " + dom;
    output2 = "Flushing/ Day (litre): " + flush;
    output3 = "Total/ Day (litre): " + total;
  };
    
  if (document.getElementById('tts-inters-bt').checked == true) {
    var occ = document.getElementById('occupancy-number-tts').valueAsNumber;
    var dom = 25 * occ;
    var flush = 20 * occ;
    var total = 45 * occ;
    output1 = "Domestic/ Day (litre): " + dom;
    output2 = "Flushing/ Day (litre): " + flush;
    output3 = "Total/ Day (litre): " + total;
  };
    
  if (document.getElementById('tts-intras-bt').checked == true) {
    var occ = document.getElementById('occupancy-number-tts').valueAsNumber;
    var dom = 10 * occ;
    var flush = 5 * occ;
    var total = 15 * occ;
    output1 = "Domestic/ Day (litre): " + dom;
    output2 = "Flushing/ Day (litre): " + flush;
    output3 = "Total/ Day (litre): " + total;
  };
    
  // Send output back to HTML
  document.getElementById('resultDomWR').innerHTML = output1;
  document.getElementById('resultFlushingWR').innerHTML = output2;
  document.getElementById('resultTotalWR').innerHTML = output3;
    
};