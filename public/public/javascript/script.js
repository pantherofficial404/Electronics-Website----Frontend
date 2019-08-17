document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.slider');
  var instances = M.Slider.init(elems, { full_width: true, height: 650, interval: 5000 });
});

$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll > 150) {
    $('#nav').css("background", "#232E35")
  } else {
    $('#nav').css("background", "transparent")
  }
})

function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(51.508742, -0.120850),
    zoom: 5,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

$(document).ready(function () {
  $('.parallax').parallax();
});


$(document).ready(function () {
  jQuery('#loading').fadeOut(100);
  var scroll = $(window).scrollTop();
  if (scroll > 150) {
    $('#nav').css("background", "#232E35")
  } else {
    $('#nav').css("background", "transparent")
  }
});

$(document).ready(function () {
  $('.collapsible').collapsible();
});


var elem = document.querySelector('.collapsible');
var instance = M.Collapsible.init(elem, {
  accordion: true
});
instance.open(0)