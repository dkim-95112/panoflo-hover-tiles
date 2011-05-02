(function($){    // like horizontally scrolling tiles
  var round = Math.round;
  var slice = Array.prototype.slice;

  var image_list = (function(){ // test image_list
	var r = [];
	for(var i = 0; i < 17; i++){
	  r.push('img/images-' + i + '.jpeg');
	}
	return r;
  })();

  var settings = {
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
	  'width':33, 'left':0, 'top':44,
	},
	'hover_animate':{
	  'duration':100,
	  'over':{
		'width':222, 'left':0, 'top':44,
	  },
	  'next':{
		'width':99, 'left':188, 'top':44
	  },
	  'prev':{
		'width':99,'left':-55, 'top':44
	  }
	}
  };
  var methods = {
	init: function(options){
	  options && $.extend(settings, options);
	  this.append(function(){
		return settings.image_list.map(function(src){
		  return '<div class="tile"><img src="' + src +
			'" class="tile"/><img src="' + src +
			'" class="hover"/></div>';
		}).join("");
	  });
	  var div_tiles = this.find('div.tile').css(settings.div_tile_css);
	  var img_tiles = this.find('img.tile').css(settings.img_tile_css)
	  .mouseenter(function(e){
		$(this).parent().find('img.hover').trigger('hover.over').end()
		.prev().find('img.hover').trigger('hover.prev').end()
		.prevAll().find('img.hover').trigger('hover.other').end()
		.end().end()
		.next().find('img.hover').trigger('hover.next').end()
		.nextAll().find('img.hover').trigger('hover.other')
	  });
	  var hover_imgs = this.find('img.hover').hide()
 	  .css(settings.hover_css)
	  .bind('hover.over', function(){
		$(this).show().animate(
		  settings.hover_animate.over,
		  settings.hover_animate.duration)
	  }).bind('hover.prev', function(){
		$(this).show().animate(
		  settings.hover_animate.prev,
		  settings.hover_animate.duration)
	  }).bind('hover.next', function(){
		$(this).show().animate(
		  settings.hover_animate.next,
		  settings.hover_animate.duration)
	  }).bind('hover.other', function(){
		$(this).hide().css(settings.hover_css);
	  });
	}
  };
  $.fn.hover_tile = function(method){ // plugin
	if(methods[ method]){
	  return methods[ method].apply(this, slice.call(arguments, 1));
    } else {
	  if(typeof method === 'object' || ! method){
		return methods.init.apply( this, arguments);
	  } else {
		$.error('Method ' +  method + ' does not exist on jQuery.tile');
	  }
	}
  };
})(jQuery);
