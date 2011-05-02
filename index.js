(function($){
  // id:$id
  var image_list = (function(){ // test image_list
	var r = [];
	for(var i = 0; i < 17; i++){
	  r.push('img/images-' + i + '.jpeg');
	}
	return r;
  })();
  var options = {
	'image_list':image_list,
	'div_tile_css':{
	  'position':'relative',
	},
	'img_tile_css':{
	  'position':'relative',
	  'float':'left',
	  'width':33,
	},
	'hover_css':{
	  'position':'absolute',
	  'width':33, 'left':0, 'bottom':0,
	},
	'hover_animate':{
	  'duration':100,
	  'over':{
		'width':222, 'left':0, 'bottom':0,
	  },
	  'next':{
		'width':99, 'left':188, 'bottom':0,
	  },
	  'prev':{
		'width':99,'left':-55, 'bottom':0,
	  }
	}
  };
  $(function(){ // document.ready alias
	$('#my-hover-tile').hover_tile(options);
	$('#my-hover-tile-syntax').load('index.js');
  });
})(jQuery);
