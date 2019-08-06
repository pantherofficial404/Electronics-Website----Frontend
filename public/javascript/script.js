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