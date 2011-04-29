(function($){
  // like horizontally scrolling tiles
  $(function(){
	var inner_hole = $('div.inner_hole');
 	var inner_hole_width = inner_hole.width();
	for(var i = 0; i < 17; i++){
	  $('<div class="tile"/>').css({
		'position':'relative',
		'float':'left',
	  }).appendTo(inner_hole);
	}
	var div_tiles = $('div.tile', inner_hole);
	var target_imgs = div_tiles.map(function(i){
	  return $('<img>').attr({
		'src':'img/images-' + i + '.jpeg'
	  }).css({
		'position':'relative',
		'width':33,
	  }).appendTo(this)[0];
	});
	var helper_imgs = div_tiles.map(function(){
	  return $(this).find('img').clone().addClass('helper').css({
		'position':'absolute',
		'z-index':-1
	  }).prependTo(this)[0];
	});
	helper_imgs
	.bind('hover_over', function(){
	  $(this).show().animate({
		'width':222, 'margin-left':0, 'top':44}, 'fast');
	}).bind('hover_prev', function(){
	  $(this).show().animate({
		'width':99, 'margin-left':-55, 'top':44}, 'fast');
	}).bind('hover_next', function(){
	  $(this).show().animate({
		'width':99, 'margin-left':188, 'top':44}, 'fast')
	}).bind('hover_prev_other', function(){
	  $(this).hide().css({
		'width':33, 'margin-left':0, 'top':0
	  });
	}).bind('hover_next_other', function(){
	  $(this).hide().css({
		'width':33, 'margin-left':0, 'top':0
	  });
	});
	target_imgs.mouseenter(function(e){
	  $(this).css({
	  }).parent().find('.helper').trigger('hover_over').end()
	  .prev().find('.helper').trigger('hover_prev').end()
	  .prevAll().find('.helper').trigger('hover_prev_other').end().end().end()
	  .next().find('.helper').trigger('hover_next').end()
	  .nextAll().find('.helper').trigger('hover_next_other').end().end().end()
	}).mouseleave(function(e){
	  $(this).css({
	  });
	});
  });
})(jQuery);
