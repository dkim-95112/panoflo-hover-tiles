(function($){
  // like horzontally scrolling tiles
  $(function(){
	var inner_hole = $('#my-panoflo.inner_hole');
 	var inner_hole_width = inner_hole.width();
	for(var i = 0; i < 55; i++){
	  $('<div class="tile"/>').css({
		'position':'absolute',
		'float':'left',
		'left':inner_hole_width/55 * i
	  }).append(
		$('<img style="width:100%" src="wn_nav.png"/>')
	  ).appendTo(inner_hole);
	}
	var tiles = $('div.tile', inner_hole);
	tiles.mouseenter(function(e){
	  $(this)
	  .siblings()
	  .removeClass('prev next hover').end()
	  .prev().addClass('prev').end()
	  .next().addClass('next').end()
	  .removeClass('prev next').addClass('hover')
	});
  });
})(jQuery);
