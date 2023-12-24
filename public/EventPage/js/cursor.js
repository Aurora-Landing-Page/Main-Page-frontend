$(function() {

  if (window.innerWidth >= 768){
    var prefix = function() {
    var a = window.getComputedStyle(document.documentElement, ""),
      b = (Array.prototype.slice.call(a).join("").match(/-(moz|webkit|ms)-/) || "" === a.OLink && ["", "o"])[1];
    return "WebKit|Moz|MS|O".match(new RegExp("(" + b + ")", "i"))[1], "-" + b + "-"
  }();
  $(document).mousemove(function(e) {
    mouseX = e.pageX+50 ;
    mouseY = e.pageY+50;
    $('.theBall-outer').css({
      transform: 'translate(' + mouseX+ 'px,' + mouseY + 'px)'
    });

  });
  }
  
});
