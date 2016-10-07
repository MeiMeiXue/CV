$(function() {

	$(window).load(function() {
		$('.preloader').delay(1500).fadeOut(1000); // set duration in brackets    
	});
	$('.container').css('background', 'rgba(255,255,255,0)');
	$('body').backstretch([
		"img/bg_01.jpg",
		"img/bg_02.jpg"
	], {
		duration: 2500,
		fade: 1500
	});

})