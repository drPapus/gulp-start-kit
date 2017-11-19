// karusel
$(document).ready(function($){
	$('#menu-carousel').jqDock({labels:true, size:50, sizeMax:80});
});

$(document).ready(function($){
	$('.menu-carousel').slick({
		slidesToShow: 13,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
	});
});
// slider

