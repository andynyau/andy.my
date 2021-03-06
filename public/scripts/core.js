$(document).on('click', '.sub-menu-link', function () {
    $(this).toggleClass('expand');
    $(this).closest('li').find('.sub-menu').toggleClass('expand');
})

$(document).on('click', '#btnMenuToggle', function () {
//$('#btnMenuToggle').on('click', function () {
    $(this).closest('.nav').toggleClass('expand');
});

$(window).bind('scroll',function(e){
	parallaxScroll();
});
  
function parallaxScroll() {
	var scrolled = $(window).scrollTop();
	$('#parallax-lvl-0').css('top',(0-(scrolled*.1))+'px');
	$('#parallax-lvl-1').css('top',(0-(scrolled*.3))+'px');
	$('#parallax-lvl-2').css('top',(0-(scrolled*.7))+'px');
	$('#parallax-lvl-3').css('top',(0-(scrolled*1))+'px');
}

function initParallax() {
	$('.cloud-container').html('');

	var body = document.body;
	var html = document.documentElement;

	//var maxHeight = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight ) - 400;
	var offset = 400;
	if (document.body.scrollWidth <= 767) {
		offset = 200;
	}

	var maxHeight = document.body.scrollHeight - offset;
	var maxWidth = document.body.scrollWidth - offset;
	
	if (maxWidth < 0) maxWidth = 10;

	for (i=0;i<4;i++) {
		var parallaxDiv = '<div id=parallax-lvl-' + i + '></div>';
		$('.cloud-container').append(parallaxDiv)
		for (j=1;j<4;j++) {
			var cloudDiv = '<div id="c' + i + '-' + j + '" class="cloud cloud' + j + ' size' + (i+1) + '">&nbsp;</div>';
			$('#parallax-lvl-' + i).append(cloudDiv);
		}
	}

	var adjust = 0;// maxHeight - screen.height;
	if (adjust < 0) adjust = 60;

	$('#c0-1').css('top', (maxHeight * 0.3) + adjust + 'px');
	$('#c0-1').css('left', (maxWidth * 0.1) + 'px');
	$('#c0-2').css('top', (maxHeight * 0.6) + adjust + 'px');
	$('#c0-2').css('left', (maxWidth * 0.9) + 'px');
	$('#c0-3').css('top', (maxHeight * 0.2) + adjust + 'px');
	$('#c0-3').css('left', (maxWidth * 0.8) + 'px');

	$('#c1-1').css('top', (maxHeight * 0.05) + adjust + 'px');
	$('#c1-1').css('left', (maxWidth * 0.9) + 'px');
	$('#c1-2').css('top', (maxHeight * 0.4) + adjust + 'px');
	$('#c1-2').css('left', (maxWidth * 0.1) + 'px');
	$('#c1-3').css('top', (maxHeight * 0.55) + adjust + 'px');
	$('#c1-3').css('left', (maxWidth * 0.15) + 'px');

	$('#c2-1').css('top', (maxHeight * 0.3) + adjust + 'px');
	$('#c2-1').css('left', (maxWidth * 0.2) + 'px');
	$('#c2-2').css('top', (maxHeight * 0.2) + adjust + 'px');
	$('#c2-2').css('left', (maxWidth * 0.9) + 'px');
	$('#c2-3').css('top', (maxHeight * 0.7) + adjust + 'px');
	$('#c2-3').css('left', (maxWidth * 0.7) + 'px');

	$('#c3-1').css('top', (maxHeight * 1) + adjust + 'px');
	$('#c3-1').css('left', (maxWidth * 0.1) + 'px');
	$('#c3-2').css('top', (maxHeight * 1) + adjust + 'px');
	$('#c3-2').css('left', (maxWidth * 0.8) + 'px');
	$('#c3-3').css('top', (maxHeight * 0.5) + adjust + 'px');
	$('#c3-3').css('left', (maxWidth * 0.3) + 'px');
}

$(document).ready(function () {	

});

$(window).bind("resize load", function () {
	initParallax();
	parallaxScroll();
});