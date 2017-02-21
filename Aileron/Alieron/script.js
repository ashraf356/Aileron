// JavaScript Document




document.addEventListener("DOMContentLoaded", function(event) {
                          document.getElementById("tabView").style.bottom = document.getElementById('navbar').clientHeight + "px";
                          $( "#bookings .tabContent").load( "bookings.html" );
                          $( "#progress .tabContent").load( "progress.html" );
                          $( "#resources .tabContent").load( "resources.html" );
                          $( "#logout .tabContent").load( "logout.html" );
                          });



//function navClicked(tab){
//    
//    
//    if (document.getElementById(tab).className != "activeTab") {
//        var x = document.getElementsByClassName("activeTab");
//        x[0].style.display = "none";
//        
//        x[0].className = "";
//        
//        
//        var d = document.getElementById(tab);
//        d.className = "activeTab";
//        d.style.display = "block";
//    }
//}

$(function(){
  $( "#navbar ul li" ).bind( "tap", tapHandler );
  
  function tapHandler( event ){
  
  if ($("#" + $(this).attr("name")).hasClass("activeTab") == false) {
  $( ".activeTab" ).hide();
  $( ".activeTab" ).removeClass("activeTab");
  $("#" + $(this).attr("name")).addClass("activeTab");
  $("#" + $(this).attr("name")).show();
  }
  
  }
  });


function bookSlot(){
    
    $.ajax({
           url: 'http://192.168.0.104/Alieron/bookslot.php',
           error: function() {
           alert('No internet connection');
           },
           success: function(data) {
           document.getElementById("bookings").innerHTML = document.getElementById("bookings").innerHTML + '<br> success <br>';
           document.getElementById("bookingButton").disabled = true;
           },
           type: 'POST',
           timeout: 3000 // sets timeout to 3 seconds
           });
    
}