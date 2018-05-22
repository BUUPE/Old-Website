$(document).ready(function(){
  var nav = $(".navbar");
  if (window.location.pathname == "/") {
    $(document).scroll(function () {
        nav.toggleClass('scrolled', $(this).scrollTop() > ($(window).height()/3)/*nav.height()*/);
      });
  } else {
    nav.addClass('scrolled');
  }

  $(".nav-item").removeClass("active");
  var tabs = $(".navbar-nav").children();
  if (window.location.pathname == "/") {
    $(tabs[0]).addClass("active");
  } else if (window.location.pathname == "/members") {
    $(tabs[1]).addClass("active");
  } else if (window.location.pathname == "/events") {
    $(tabs[2]).addClass("active");
  } else if (window.location.pathname == "/relations") {
    $(tabs[3]).addClass("active");
  } else if (window.location.pathname == "/apply") {
    $(tabs[4]).addClass("active");
  }
});