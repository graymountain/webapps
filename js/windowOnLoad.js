// Run script on page load
window.onload = function() {

  // Following are the loops for hiding / showing particular divisitions on option selection
    
  //Arc Properties
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
  
  //Sanitaryware Calculator
  $('#buildingType').on('change', function() {
    //  alert( this.value ); // or $(this).val()
    if (this.value == "business") {
      $('#business').show();
      $('#industrial,#educational,#special,#selectionErr').hide();
    } else if (this.value == "industrial") {
      $('#industrial').show();
      $('#business,#educational,#special,#selectionErr').hide();
    } else if (this.value == "educational") {
      $('#educational').show();
      $('#business,#industrial,#special,#selectionErr').hide();
    } else if (this.value == "special") {
      $('#special').show();
      $('#business,#industrial,#educational,#selectionErr').hide();
    } else {
      $('#selectionErr').show();
      $('#business,#industrial,#educational,#special').hide();
      document.getElementById('selectionErr').innerHTML = "Please select any of options";
    }
  });
    
  //Unit Converter
  $('#conversionType').on('change', function() {
    if (this.value == "convLength") {
      $('#unitInput').show();
      $('#areaInput,#volumeInput,#selectionMsg').hide();
    } else if (this.value == "convArea") {
      $('#areaInput').show();
      $('#unitInput,#volumeInput,#selectionMsg').hide();
    } else if (this.value == "convVolume") {
      $('#volumeInput').show();
      $('#unitInput,#areaInput,#selectionMsg').hide();
    } else {
      $('#selectionMsg').show();
      $('#unitInput,#areaInput,#volumeInput').hide();
      document.getElementById('selectionMsg').innerHTML = "Please select any of options";
    }
  });
   
  //Scale Converter
  $('#scaleConv').on('change', function() {
    if (this.value == "convScale") {
      $('#convScale').show();
      $('#findScale,#selectionMsg').hide();
    } else if (this.value == "findScale") {
      $('#findScale').show();
      $('#convScale,#selectionMsg').hide();
    } else {
      $('#selectionMsg').show();
      $('#convScale,#findScale').hide();
      document.getElementById('selectionMsg').innerHTML = "Please select any of options";
    }
  });
    
  //Occupancy Calculator
  $('#selectOccupancy').on('change', function() {
    if (this.value == "office") {
      $('#occupancy-office').show();
      $('#occupancy-residence,#occupancy-schools,#occupancy-hostels,#occupancy-hotels,#occupancy-hospitals,#occupancy-mercantile,#occupancy-tts,#selectionErr-occupancy').hide();
    } 
    else if (this.value == "residential") {
      $('#occupancy-residence').show();
      $('#occupancy-office,#occupancy-schools,#occupancy-hostels,#occupancy-hotels,#occupancy-hospitals,#occupancy-mercantile,#occupancy-tts,#selectionErr-occupancy').hide();
    }
    else if (this.value == "schools") {
      $('#occupancy-schools').show();
      $('#occupancy-office,#occupancy-residence,#occupancy-hostels,#occupancy-hotels,#occupancy-hospitals,#occupancy-mercantile,#occupancy-tts,#selectionErr-occupancy').hide();
    }
    else if (this.value == "hostels") {
      $('#occupancy-hostels').show();
      $('#occupancy-office,#occupancy-residence,#occupancy-schools,#occupancy-hotels,#occupancy-hospitals,#occupancy-mercantile,#occupancy-tts,#selectionErr-occupancy').hide();
    }
    else if (this.value == "hotels") {
      $('#occupancy-hotels').show();
      $('#occupancy-office,#occupancy-residence,#occupancy-schools,#occupancy-hostels,#occupancy-hospitals,#occupancy-mercantile,#occupancy-tts,#selectionErr-occupancy').hide();
    }
    else if (this.value == "hospitals") {
      $('#occupancy-hospitals').show();
      $('#occupancy-office,#occupancy-residence,#occupancy-schools,#occupancy-hostels,#occupancy-hotels,#occupancy-mercantile,#occupancy-tts,#selectionErr-occupancy').hide();
    }
    else if (this.value == "mercantile") {
      $('#occupancy-mercantile').show();
      $('#occupancy-office,#occupancy-residence,#occupancy-schools,#occupancy-hostels,#occupancy-hotels,#occupancy-hospitals,#occupancy-tts,#selectionErr-occupancy').hide();
    }
    else if (this.value == "tts") {
      $('#occupancy-tts').show();
      $('#occupancy-office,#occupancy-residence,#occupancy-schools,#occupancy-hostels,#occupancy-hotels,#occupancy-hospitals,#occupancy-mercantile,#selectionErr-occupancy').hide();
    }
    else {
      $('#selectionErr-occupancy').show();
      $('#occupancy-office,#occupancy-residence,#occupancy-schools,#occupancy-hostels,#occupancy-hotels,#occupancy-hospitals,#occupancy-mercantile,#occupancy-tts').hide();
      document.getElementById('selectionErr-occupancy').innerHTML = "Please select any of options";
    }
  });  
    

};
