function loadApp() {

	var flipbook = $('.flipbook');


	if (flipbook.width()==0 || flipbook.height()==0) {
		setTimeout(loadApp, 10);
		return;
	}

	$('.flipbook .double').scissor();

	$('.flipbook').turn({
			elevation: 50,
			gradients: true,
			autoCenter: true

	});
}

yepnope({
	test : Modernizr.csstransforms,
	yep: ['js/turn.min.js'],
	nope: ['js/turn.html4.min.js'],
	both: ['js/scissor.min.js', 'css/artgallery.css'],
	complete: loadApp
});

function visibleBook() {
  document.querySelector('.book').style.visibility = `visible`
}

setTimeout(visibleBook, 800);
