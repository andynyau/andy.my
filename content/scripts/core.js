$(document).on('click', '.sub-menu-link', function () {
    $(this).toggleClass('expand');
    $(this).closest('li').find('.sub-menu').toggleClass('expand');
})

$('#btnMenuToggle').on('click', function () {
    $(this).closest('.nav').toggleClass('expand');
});

$(window).bind('scroll',function(e){
	parallaxScroll();
});
  
function parallaxScroll(){
	var scrolled = $(window).scrollTop();
	$('#parallax-lvl-0').css('top',(0-(scrolled*.1))+'px');
	$('#parallax-lvl-1').css('top',(0-(scrolled*.3))+'px');
	$('#parallax-lvl-2').css('top',(0-(scrolled*.7))+'px');
	$('#parallax-lvl-3').css('top',(0-(scrolled*1))+'px');
}

$(document).ready(function () {	
	var body = document.body;
	var html = document.documentElement;

	var maxHeight = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
	var maxWidth = document.body.scrollWidth - 400;
	
	$('#c0-1').css('top', (maxHeight * 0.3) + 60 + 'px');
	$('#c0-1').css('left', (maxWidth * 0.1) + 'px');
	$('#c0-2').css('top', (maxHeight * 0.6) + 60 + 'px');
	$('#c0-2').css('left', (maxWidth * 0.9) + 'px');
	$('#c0-3').css('top', (maxHeight * 0.2) + 60 + 'px');
	$('#c0-3').css('left', (maxWidth * 0.8) + 'px');

	$('#c1-1').css('top', (maxHeight * 0.05) + 60 + 'px');
	$('#c1-1').css('left', (maxWidth * 0.9) + 'px');
	$('#c1-2').css('top', (maxHeight * 0.4) + 60 + 'px');
	$('#c1-2').css('left', (maxWidth * 0.1) + 'px');
	$('#c1-3').css('top', (maxHeight * 0.55) + 60 + 'px');
	$('#c1-3').css('left', (maxWidth * 0.15) + 'px');

	$('#c2-1').css('top', (maxHeight * 0.3) + 60 + 'px');
	$('#c2-1').css('left', (maxWidth * 0.2) + 'px');
	$('#c2-2').css('top', (maxHeight * 0.2) + 60 + 'px');
	$('#c2-2').css('left', (maxWidth * 0.9) + 'px');
	$('#c2-3').css('top', (maxHeight * 0.7) + 60 + 'px');
	$('#c2-3').css('left', (maxWidth * 0.7) + 'px');

	$('#c3-1').css('top', (maxHeight * 1) + 60 + 'px');
	$('#c3-1').css('left', (maxWidth * 0.1) + 'px');
	$('#c3-2').css('top', (maxHeight * 0.5) + 60 + 'px');
	$('#c3-2').css('left', (maxWidth * 0.8) + 'px');
	$('#c3-3').css('top', (maxHeight * 0.1) + 60 + 'px');
	$('#c3-3').css('left', (maxWidth * 0.1) + 'px');
});
