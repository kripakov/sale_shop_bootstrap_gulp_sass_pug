$(document).ready(function() {
	$('.hv').hover(function() {
		console.log($(this).eq())
		var $eq = $(this).eq();
	    $(this).css("color", "#FFF")
	    $(this).next().css("color", "#FFF")
	    $('.height-bdr-clr').eq($eq).css("background-color", "#57c5a0")
	  }, function() {
	    $(this).removeAttr('style');
	    $(this).next().removeAttr('style');
	    $('.height-bdr-clr').removeAttr('style');
  	});
})