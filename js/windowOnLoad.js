// Run script on page load
window.onload = function() {

  // Following are the loops for hiding / showing particular divisitions on option selection
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


};
