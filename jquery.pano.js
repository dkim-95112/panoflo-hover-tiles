(function($){
  // like horzontally scrolling tiles
  $(function(){
	var inner_hole = $('div.inner_hole');
 	var inner_hole_width = inner_hole.width();
 	var inner_hole_left = inner_hole.offset().left;
	var tile = $('img.tile');
	for(var i = 0; i < 11; i++){
	  var r = tile.clone().css({
		'position':'relative',
		'visibility': 'visible',
//		'left':inner_hole_width/11 * i,
	  }).attr({
		'src':'img/Photo ' + i + '.jpg'
	  }).appendTo(inner_hole);
	}
	var tiles = $('img.tile');
	tiles.mouseenter(function(e){
	  var hover = $(this);
	  hover.css({
		'border':'1px solid magenta'
	  });
	  var dst_src_map = {
		'img.hover':{'elem':hover},
		'img.left':{'elem':hover.prev()},
		'img.right':{'elem':hover.next()}
	  };
	  var hover_left = hover.offset().left;
	  for(var dst_key in dst_src_map){
		var dst_elem = $(dst_key);
		var src = dst_src_map[dst_key];
		if(src.elem.length){
		  dst_elem.attr({
			'src':src.elem.attr('src')
		  }).css({
			'visibility':'visible',
			'left':hover_left - inner_hole.offset().left,
		  })
		} else {
		  dst_elem.attr({
			'src':'wn_nav.png'
		  }).css({
			'visibility':'hidden'
		  });
		}
	  }
	}).mouseleave(function(e){
	  var hover = $(this);
	  hover.css({
		'border':'none'
	  });
	})
  });
})(jQuery);
