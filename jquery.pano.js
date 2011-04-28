(function($){
  // like horzontally scrolling tiles
  $(function(){
	var inner_hole = $('div.inner_hole');
 	var inner_hole_width = inner_hole.width();
	for(var i = 0; i < 11; i++){
	  $('<div class="tile"/>').css({
		'position':'absolute',
		'left':inner_hole_width/11 * i,
	  }).appendTo(inner_hole);
	}
	var div_tiles = $('div.tile', inner_hole);
	var target_imgs = div_tiles.map(function(i){
	  return $('<img>').attr({
		'src':'img/Photo ' + i + '.jpg'
	  }).css({
		'position':'absolute',
		'width':33,
	  }).appendTo(this)[0];
	});
	var helper_imgs = div_tiles.map(function(){
	  return $(this).find('img').clone().addClass('helper').css({
		'top':33,
	  }).hide().prependTo(this)[0];
	});
	helper_imgs.bind('hover_over', function(){
	  $(this).show().animate({
		'width':222, 'margin-left':0
	  }, 'fast');
	}).bind('hover_prev', function(){
	  $(this).show().animate({
		'width':99, 'margin-left':-77
	  }, 'fast');
	}).bind('hover_prev_other', function(){
	  $(this).hide();
	}).bind('hover_next', function(){
	  $(this).show().animate({
		'width':99, 'margin-left':199
	  }, 'fast');
	}).bind('hover_next_other', function(){
	  $(this).hide();
	});
	target_imgs.mouseenter(function(e){
	  $(this).css({
		'border':'1px solid magenta'
	  }).parent().find('.helper').trigger('hover_over').end()
	  .prev().find('.helper').trigger('hover_prev').end()
	  .prevAll().find('.helper').trigger('hover_prev_other').end().end().end()
	  .next().find('.helper').trigger('hover_next').end()
	  .nextAll().find('.helper').trigger('hover_next_other').end().end().end()
	}).mouseleave(function(e){
	  $(this).css({
		'border':'none'
	  });
	});
  });
})(jQuery);
