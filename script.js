$(document).ready(function(){

  // Hide div 2 by default
  $('#about').hide();
  $('#travels').hide();

  $('#link_about').click(function(){ 
    $('#quotes').hide();
    $('#travels').hide();
    $('#about').show();
  });

  $('#link_quotes').click(function(){ 
    $('#about').hide();
    $('#travels').hide();
    $('#quotes').show();
  }); 
  
  $('#link_travels').click(function(){ 
    $('#quotes').hide();
    $('#about').hide();
    $('#travels').show();
  });
});
