$(window).on('scroll', function() {
	var scrollCoef = 0.003;

	$('.main__sedtion').css({
		opacity: $(window).scrollRight() * scrollCoef
	})
});