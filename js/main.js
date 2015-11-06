//What are you trying to do?, the images are already width divided?  You need to reduce or adjust the lenght so they are squares
$(document).ready(function (){
	var match = $('.galimg').css('width');
	var resizeboxes = function() {
	
	$(this).css('height', match)

};
	$('.galimg').each(resizeboxes);
	var width = $('.galimg img').css('width');
	var height = $('.galimg img').css('height'); //this does not check per image
	
	$('figure:firstChild').addClass('portrait');
});



//so far, image containers are all square and resize correctly, but the images are now too big
// if width > height (apply .landscape)
// if height > width (apply .portrait)
// for all cases, after if, center inside .galimg
// if page is resized, rerun above functions
