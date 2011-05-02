(function($){    // like horizontally scrolling tiles
  // id:$id
  var round = Math.round;
  var slice = Array.prototype.slice;
  var settings = {
	'image_list':[],
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
	  'width':33, 'left':0,
	},
	'hover_animate':{
	  'duration':100,
	  'over':{
		'width':222, 'left':0,
	  },
	  'next':{
		'width':99, 'left':188,
	  },
	  'prev':{
		'width':99,'left':-55,
	  }
	}
  };
  var methods = { // plugin convention
	init: function(options){
	  options && $.extend(true, settings, options);
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
  $.fn.hover_tile = function(method){ // plugin convention
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
