$(document).ready(function(){

	$('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.ir-arriba').slideDown(300);
		} else {
			$('.ir-arriba').slideUp(300);
		}
	});

});

jQuery($ => {
	const $charNum = $('#charNum');
  
	$('#field').on('input', e => {
	  let len = e.target.value.length;
	  $charNum.text(1000 - len);
	}).trigger('input');
  });