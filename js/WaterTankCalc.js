//Occupancy Calculator according to NBC 2016 Part II, p.g.no.622. 

// Following function takes a numebrs and returns a rounded off number
function floatingValue(number) {
  // Making float to show 2 decimal places
  return parseFloat(number).toFixed(2);
};

//Calculating water tank capacity for OHT
function onlyOHT() {
    
  var WRDom = document.getElementById('WR-domestic-OHT').valueAsNumber;
  var WRFlu = document.getElementById('WR-flushing-OHT').valueAsNumber;
  var OHTDom = WRDom * 0.5 * 0.3333;
  var OHTFlu = WRFlu * 0.5 * 0.3333;
  var TotOHT = OHTDom + OHTFlu;
  output1 = "Domestic OHT (litre): " + floatingValue(OHTDom);
  output2 = "Flushing OHT (litre): " + floatingValue(OHTFlu);
  output3 = "Total OHT (litre): " + floatingValue(TotOHT);
    
  // Send output back to HTML
  document.getElementById('resultOHTDom').innerHTML = output1;
  document.getElementById('resultOHTFlu').innerHTML = output2;
  document.getElementById('resultOHTTot').innerHTML = output3;   
};

//Calculating water tank capacity for only UGWT
function onlyUGWT() {
    
  var WRDom = document.getElementById('WR-domestic-UGWT').valueAsNumber;
  var WRFlu = document.getElementById('WR-flushing-UGWT').valueAsNumber;
  var UGWTDom = WRDom * 1.5;
  var UGWTFlu = WRFlu * 1.5;
  var TotUGWT = UGWTDom + UGWTFlu;
  output1 = "Domestic UGWT (litre): " + floatingValue(UGWTDom);
  output2 = "Flushing UGWT (litre): " + floatingValue(UGWTFlu);
  output3 = "Total UGWT (litre): " + floatingValue(TotUGWT);
    
  // Send output back to HTML
  document.getElementById('resultUGWTDom').innerHTML = output1;
  document.getElementById('resultUGWTFlu').innerHTML = output2;
  document.getElementById('resultUGWTTot').innerHTML = output3;    
};

//Calculating water tank capacity for OHT & UGWT
function bothOHTandUGWT() {
    
  var WRDom = document.getElementById('WR-domestic-U-O').valueAsNumber;
  var WRFlu = document.getElementById('WR-flushing-U-O').valueAsNumber;
  var OHTDom = WRDom * 0.3333;
  var OHTFlu = WRFlu * 0.3333;
  var UGWTDom = WRDom * 0.6666;
  var UGWTFlu = WRFlu * 0.6666;
  var TotOHT = OHTDom + OHTFlu;
  var TotUGWT = UGWTDom + UGWTFlu;
  output1 = "Domestic OHT (litre): " + floatingValue(OHTDom);
  output2 = "Flushing OHT (litre): " + floatingValue(OHTFlu);
  output3 = "Total OHT (litre): " + floatingValue(TotOHT);
  output4 = "Domestic UGWT (litre): " + floatingValue(UGWTDom);
  output5 = "Flushing UGWT (litre): " + floatingValue(UGWTFlu);
  output6 = "Total UGWT (litre): " + floatingValue(TotUGWT);
    
  // Send output back to HTML
  document.getElementById('resultOHTDom').innerHTML = output1;
  document.getElementById('resultOHTFlu').innerHTML = output2;
  document.getElementById('resultOHTTot').innerHTML = output3;
  document.getElementById('resultUGWTDom').innerHTML = output4;
  document.getElementById('resultUGWTFlu').innerHTML = output5;
  document.getElementById('resultUGWTTot').innerHTML = output6;    
};