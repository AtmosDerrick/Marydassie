var menubutton = $("#menubutt");

var topnavigator = $("#menulink");

$(document).ready(init());

function init(){
  menubutton.click(function(){
    topnavigator.toggleClass("active1");
  });
}