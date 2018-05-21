$(document).ready(function(){
	var nav = $(".navbar");
 	$(document).scroll(function () {
    	nav.toggleClass('scrolled', $(this).scrollTop() > ($(window).height()/3)/*nav.height()*/);
  	});
});