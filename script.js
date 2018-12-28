$(document).ready(function(){

  $('#about').hide();
  $('#reads').hide();
  $('#travels').hide();
  $('#social').hide();

  $('#link_quotes').click(function(){ 
    $('#quotes').show();
    $('#about').hide();
    $('#reads').hide();
    $('#travels').hide();
    $('#social').hide();
  });
  
  $('#link_about').click(function(){ 
    $('#quotes').hide();
    $('#about').show();
    $('#reads').hide();
    $('#travels').hide();
    $('#social').hide();
  });

  $('#link_reads').click(function(){ 
    $('#quotes').hide();
    $('#about').hide();
    $('#reads').show();
    $('#travels').hide();
    $('#social').hide();
  });
  
  $('#link_travels').click(function(){ 
    $('#quotes').hide();
    $('#about').hide();
    $('#reads').hide();
    $('#travels').show();
    $('#social').hide();
  });
  
  $('#link_social').click(function(){ 
    $('#quotes').hide();
    $('#about').hide();
    $('#reads').hide();
    $('#travels').hide();
    $('#social').show();
  });
});
