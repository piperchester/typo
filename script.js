/*global $:false, jQuery:false */
/*jslint browser: true */
$(function() {
  var typeIndex = 0;

  function typify(){
    var typefaces = [ "Adobe Garamond",
                      "Arial",
                      "Bodoni",
                      "Baskerville",
                      "Futura",
                      "Gill Sans",
                      "Helvetica",
                      "Lucida Grande",
                      "Museo Slab",
                      "Palatino",
                      "Rockwell",
                      "Tahoma",
                      "Trebuchet MS",
                      "Verdana" ];
    //setup font-family
    $("#hipster-text").style.fontFamily = typefaces[typeIndex];
    $("#typify").style.fontFamily = typefaces[typeIndex];
    $("#hipstify").style.fontFamily = typefaces[typeIndex];
    document.getElementsByTagName("h1")[0].style.fontFamily = typefaces[typeIndex];
    // style the header text
    document.getElementsByTagName("h1")[0].innerHTML = typefaces[typeIndex];
    if (typeIndex >= 13) {
      typeIndex = 0;
    } else {
      typeIndex = typeIndex + 1;
    }
  }

  function hipstify(){
    $.getJSON('http://hipsterjesus.com/api/', function(data) {
      $('#hipster-text').html(data.text);
    });
  }

  // Bind events on click on buttons
  $("#typify").on('click', function() {
    typify();
  });

  $("#hipstify").on('click', function() {
    hipstify();
  });

});

