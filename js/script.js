$(window).on("load", function () {

	$(".loader .inner").fadeOut(500, function () {
		$(".loader").fadeOut(750);
	});

})




$(document).ready(function () {

	$('body').scrollspy({
		target: '#navigation',
		offset: 10
	});

	$('#slides').superslides({
		animation: 'fade',
		play: 3000,
		pagination: false
	});

	var typed = new Typed(".typed", {
		strings: ["Software Engineer.", "Java Developer.", "Front-End Developer."],
		typeSpeed: 70,
		loop: true,
		startDelay: 1000,
		showCursor: false
	});

	$('.owl-carousel').owlCarousel({
		loop: true,
		items: 4,
		dots: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				dots: true

			},
			480: {
				items: 2,
				dots: true

			},
			768: {
				items: 3,
				dots: true

			},
			938: {
				items: 4,
				dots: true

			}
		}
	});

	var skillsTopOffset = $(".skillsSection").offset().top;
	var countUpFinished = false;
	$(window).scroll(function () {
		console.log("window.pageYOffset" + window.pageYOffset);
		console.log("skillsTopOffset" + skillsTopOffset);


		if (window.pageYOffset > skillsTopOffset - $(window).height() + 50) {
			console.log("inside");

			$('.chart').easyPieChart({
				easing: 'easeInOut',
				barColor: '#fff',
				trackColor: '#1C2332',
				scaleColor: false,
				lineWidth: 10,
				size: 150,
				onStep: function (from, to, percent) {
					$(this.el).find('.percent').text(Math.round(percent));
				}
			});
		}
	});

	$("[data-fancybox]").fancybox();


	$(".items").isotope({
		filter: '*',
		animationOptions: {
			duration: 1500,
			easing: 'linear',
			queue: false
		}
	});

	$("#filters a").click(function () {

		$("#filters .current").removeClass("current");
		$(this).addClass("current");

		var selector = $(this).attr("data-filter");

		$(".items").isotope({
			filter: selector,
			animationOptions: {
				duration: 1500,
				easing: 'linear',
				queue: false
			}
		});

		return false;
	});



	$("#navigation li a").click(function (e) {
		e.preventDefault();

		var targetElement = $(this).attr("href");
		var targetPosition = $(targetElement).offset().top;
		$("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");

	});




	const nav = $("#navigation");
	const navTop = nav.offset().top;

	$(window).on("scroll", stickyNavigation);

	function stickyNavigation() {

		var body = $("body");

		if ($(window).scrollTop() >= navTop) {
			body.css("padding-top", nav.outerHeight() + "px");
			body.addClass("fixedNav");
		}
		else {
			body.css("padding-top", 0);
			body.removeClass("fixedNav");
		}




	}

});
















