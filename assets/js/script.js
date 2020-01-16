$(document).ready(function($) {

	/*Sticky nav bar*/
	var nav_bar = $(".nav-container");
	var posic = nav_bar.offset();

	$(window).scroll(function() {

		if( $(this).scrollTop() > posic.top ) {
			$(".nav-container").addClass('nav-top');
		} else {
			$(".nav-container").removeClass('nav-top');
		}
	});

	/* SCROLL ON DESKTOP */
	$("#menu-link-1").click(function(event) {
		var slide01 = $(".title-3").offset().top;
		slide01-="80";
		$("html, body").animate({
			scrollTop: slide01
		},800);
	});

	$("#menu-link-2").click(function(event) {
		var slide02 = $(".title-4").offset().top;
		slide02-="100";
		$("html, body").animate({
			scrollTop: slide02
		},800);
	});

	$("#menu-link-3").click(function(event) {
		var slide03 = $(".title-5").offset().top;
		slide03-="80";
		$("html, body").animate({
			scrollTop: slide03
		},800);
	});

	$("#menu-link-4").click(function(event) {
		var slide04 = $(".title-6").offset().top;
		slide04-="50";
		$("html, body").animate({
			scrollTop: slide04
		},800);
	});

	/*Botón de informes */
	$("#inf-form").click(function(event) {
		var slide04 = $(".title-6").offset().top;
		slide04-="50";
		$("html, body").animate({
			scrollTop: slide04
		},800);
	});
	/* /. SCROLL ON DESKTOP */


	/* SCROLL ON MOBILE */
	$("#link-1").click(function(event) {
		var slide01 = $(".title-3").offset().top;
		slide01-="50";
		$("html, body").animate({
			scrollTop: slide01
		},800);
	});

	$("#link-2").click(function(event) {
		var slide02 = $(".title-4").offset().top;
		slide02-="50";
		$("html, body").animate({
			scrollTop: slide02
		},800);
	});

	$("#link-3").click(function(event) {
		var slide03 = $(".title-5").offset().top;
		slide03-="50";
		$("html, body").animate({
			scrollTop: slide03
		},800);
	});

	$("#link-4").click(function(event) {
		var slide04 = $(".title-6").offset().top;
		slide04-="50";
		$("html, body").animate({
			scrollTop: slide04
		},800);
	});

	/*Botón de informes*/
	$("#inf-form").click(function(event) {
		var slide04 = $(".title-6").offset().top;
		slide04-="50";
		$("html, body").animate({
			scrollTop: slide04
		},800);
	});
	/* SCROLL ON MOBILE */

});