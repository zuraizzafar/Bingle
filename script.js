var top_offset = $('.header-area').height() - 100;
// $('.main-menu nav ul').onePageNav({
// 	currentClass: 'active',
// 	scrollOffset: top_offset,
// });

$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 200) {
		$("nav").removeClass("bg-purp");
	} else {
		$("nav").addClass("bg-purp");
	}
});