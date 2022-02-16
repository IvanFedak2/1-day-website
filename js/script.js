
	if (window.innerWidth > 800) {

	$(document).on('click', ".carousel-button-right",function(){ 
	let carusel = $(this).parents('.carousel');
	right_carusel(carusel);
	return false;
});
$(document).on('click',".carousel-button-left",function(){ 
	let carusel = $(this).parents('.carousel');
	left_carusel(carusel);
	return false;
});
function left_carusel(carusel){
   let block_width = $(carusel).find('.carousel-block').outerWidth();
   $(carusel).find(".carousel-items .carousel-block").eq(-1).prependTo($(carusel).find(".carousel-items"));
   $(carusel).find(".carousel-items").css({"left":"-"+block_width+"px"});
   $(carusel).find(".carousel-items .carousel-block").eq(-1);    
   $(carusel).find(".carousel-items").animate({left: "0px"}, 200); 
}
function right_carusel(carusel){
   let block_width = $(carusel).find('.carousel-block').outerWidth();
   $(carusel).find(".carousel-items").animate({left: "-"+ block_width +"px"}, 200, function(){
	  $(carusel).find(".carousel-items .carousel-block").eq(0).appendTo($(carusel).find(".carousel-items")); 
      $(carusel).find(".carousel-items .carousel-block").eq(0); 
      $(carusel).find(".carousel-items").css({"left":"0px"}); 
   }); 
}
$(function() {
	auto_right('.carousel:first');
})
function auto_right(carusel){
	setInterval(function(){
		if (!$(carusel).is('.hover'))
			right_carusel(carusel);
	}, 3000)
}
$(document).on('mouseenter', '.carousel', function(){$(this).addClass('hover')})
$(document).on('mouseleave', '.carousel', function(){$(this).removeClass('hover')})
};
