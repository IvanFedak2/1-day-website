// $(document).on('click', ".carousel-button-right",function(){ 
// 	var carusel = $(this).parents('.carousel');
// 	right_carusel(carusel);
// 	return false;
// });
// $(document).on('click',".carousel-button-left",function(){ 
// 	var carusel = $(this).parents('.carousel');
// 	left_carusel(carusel);
// 	return false;
// });
// function left_carusel(carusel){
//    var block_width = $(carusel).find('.carousel-block').outerWidth();
//    $(carusel).find(".carousel-items .carousel-block").eq(-1).clone().prependTo($(carusel).find(".carousel-items")); 
//    $(carusel).find(".carousel-items").css({"left":"-"+block_width+"px"});
//    $(carusel).find(".carousel-items .carousel-block").eq(-1).remove();    
//    $(carusel).find(".carousel-items").animate({left: "0px"}, 200); 
// }
// function right_carusel(carusel){
//    var block_width = $(carusel).find('.carousel-block').outerWidth();
//    $(carusel).find(".carousel-items").animate({left: "-"+ block_width +"px"}, 200, function(){
// 	  $(carusel).find(".carousel-items .carousel-block").eq(0).clone().appendTo($(carusel).find(".carousel-items")); 
//       $(carusel).find(".carousel-items .carousel-block").eq(0).remove(); 
//       $(carusel).find(".carousel-items").css({"left":"0px"}); 
//    }); 
// }
// $(function() {
// 	auto_right('.carousel:first');
// })
// function auto_right(carusel){
// 	setInterval(function(){
// 		if (!$(carusel).is('.hover'))
// 			right_carusel(carusel);
// 	}, 3000)
// }
// $(document).on('mouseenter', '.carousel', function(){$(this).addClass('hover')})
// $(document).on('mouseleave', '.carousel', function(){$(this).removeClass('hover')})



// // const delay = 3000; //ms

// // const slides = document.querySelector(".carousel-wrapper");
// // const slidesCount = slides.childElementCount;
// // const maxLeft = (slidesCount - 1) * 100 * -1;

// // let current = 0;

// // function changeSlide(next = true) {
// //   if (next) {
// //     current += current > maxLeft ? -100 : current * -1;
// //   } else {
// //     current = current < 0 ? current + 100 : maxLeft;
// //   }

// //   slides.style.left = current + "%";
// // }

// // let autoChange = setInterval(changeSlide, delay);
// // const restart = function() {
// //   clearInterval(autoChange);
// //   autoChange = setInterval(changeSlide, delay);
// // };

// // // Controls
// // document.querySelector(".carousel-button-right").addEventListener("click", function() {
// //   changeSlide();
// //   restart();
// // });

// // document.querySelector(".carousel-button-left").addEventListener("click", function() {
// //   changeSlide(false);
// //   restart();
// // });
