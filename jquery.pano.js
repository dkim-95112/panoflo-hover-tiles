(function($){
  // variation of http://valums.com/scroll-menu-jquery/
  $(function(){
	var scrolling_face = $('div.scrolling_face');
	for(var i = 0; i < 55; i++){
	  $('<div class="tile"/>').css({
		'position':'relative',
		'float':'left'
	  }).append(
		$('<img style="width:100%" src="wn_nav.png"/>')
	  ).appendTo(scrolling_face);
	}
	var tiles = $('.tile', scrolling_face);
	tiles.mouseenter(function(e){
	  $(this).siblings().removeClass('prev next hover').end()
	  .removeClass('prev next').addClass('hover')
	  .prev().addClass('prev').end()
	  .next().addClass('next').end();

	  scrolling_face.width(function(){
		var w = 0;
		tiles.each(function(){ w += $(this).width()});
		return w;
	  });
	});
	var outer_hole = $('div.outer_hole');
	var inner_hole = $('div.inner_hole');
	inner_hole.mousemove(function(e){
	  var t = $(this);
	  var o = t.offset();
	  var px = (e.pageX - o.left)/t.width();
	  var py = (e.pageY - o.top)/t.height();
	  scrolling_face.css({
		'left': px * (inner_hole.width() - scrolling_face.width()),
		'top': py * (inner_hole.height() - scrolling_face.height()),
	  });
	});
  });
})(jQuery);




// 	reach_i: [ 'lefty', 'fronty', 'righty']
// 	, i_fronty: [ undefined]
// 	, extend_i: []
// 		,
// 	options: {
// 		// display resolution limits # of image tiles that can be indexed
// 		wiggle_room: 30
// 			,
// 		image_link_i: [] // image links
// 			,
// 		folder: { id: "img"}
// 			,
// 		ready_i: { draggable: {}, load: {}, mousemove: {}}
// 			,
// 		load_callback: {}
// 			,
// 		tile: {	ready_i: {// draggable: {}
// 		}}
// 	}
// 		,
// 	bende:r function( bend_i) { try {
// 		for( var bend in bend_i)
// 			this[ bend]
// 				( bend_i[ bend])
// 				;
// 		return this // is chain-able
// 			;
// 	} catch( e) { throw e;}}
// 		,
// 	wiggle: function( val) { try { // center-based position
// 		var wideness_this = this.width() >> 1
// 		, wideness_parent = this.parent().width() >> 1
// 		, feel_wideness = wideness_parent - wideness_this
// 			;
// 		return val == undefined
// 			? this.position().left - feel_wideness
// 			: this.css( "left", val + feel_wideness)
// 			;
// 	} catch( e) { throw e;}}
// 		,
// 	wideness: function( val) { try {
// 		if( val == undefined) {	return this.width() >> 1
// 			;
// 		} else { this.width( val << 1); return this // is chain-able
// 			;
// 		}
// 	} catch( e) { throw e;}}
// 		,
// 	get_fronty: function() { try {
// 		var i_fronty = this.i_fronty[ 0]
// 			;
// 		if( i_fronty == undefined) return $( [])
// 			;
// 		var fronty = this.find( '.fronty')
// 			;
// 		if( fronty.length < 1) throw "sanity"
// 			;
// 		return fronty
// 			;
// 	} catch( e) { throw e;}}
// 		,
// 	get_backy: function() { try {
// 		var i_fronty = this.i_fronty[ 0]
// 			;
// 		if( i_fronty == undefined) return $( [])
// 			;
// 		var backy
// 			= this.find( i_fronty == 0 ? '.righty' : '.lefty')
// 			;
// 		if( backy.length < 1) throw "sanity"
// 			;
// 		return backy
// 			;
// 	} catch( e) { throw e;}}
// 		,
// 	get_fronty_wideness: function() { try {
// 		return this.fronty_wideness
// 			|| ( this.fronty_wideness = this.get_fronty().wideness())
// 			;
// 	} catch( e) { throw e;}}
// 		,
// 	get_backy_wideness: function() { try {
// 		return this.backy_wideness
// 			|| ( this.backy_wideness = this.get_backy().wideness())
// 			;
// 	} catch( e) { throw e;}}
// 		,
// 	get_tile_i: function() { try {
// 		var extend_i = this.extend_i
// 			;
// 		return extend_i.length > 1
// 			? extend_i.slice( 1, extend_i.length -1)
// 			: []
// 			;
// 	} catch( e) { throw e;}}
// }
// 	;
// complexi.flip = function( i_to) { try {
// 	var pano = this, i_from = pano.i_fronty[ 0]
// 		;
// 	if( i_to == i_from) throw "sanity"
// 		;
// 	var	tile_i = pano.get_tile_i()
// 	, wiggle_room = pano.options.wiggle_room
// 	, wiggle_stepped = Math.min( wiggle_room, parseInt(
// 		( wiggle_room <<1) * ( i_to / ( tile_i.length -1)))
// 			- wiggle_room
// 	)
// 		;
// 	$( "#m_wiggle_stepped")
// 		.text( "wiggle_stepped." + wiggle_stepped)
// 		;
// 	var peg_max = i_to == tile_i.length -1 ? 1 : 0
// 	, peg_min = i_to == 0 ? 1 : 0
// 	, backy_wideness = pano.get_backy_wideness()
// 	, fronty_wideness = pano.get_fronty_wideness()
// 	, left =  wiggle_stepped + ( fronty_wideness - backy_wideness)
// 	, offset_i = [ 0
// 		, ( peg_max + peg_min) * backy_wideness
// 		, peg_min * ( backy_wideness <<1)
// 	]
// 	, reach_i = [].concat( pano.reach_i)
// 	, flip_i = pano.extend_i.slice( i_to, i_to +3)
// 	, flipped_i = i_from == undefined
// 		? [ undefined, undefined, undefined]
// 		: pano.extend_i.slice( i_from, i_from +3)
// 			;
// 	// reverse flip order depending
// 	i_from != undefined && i_to > i_from
// 		&& [ flip_i, flipped_i, reach_i, offset_i]
// 			.map( function( i) {
// 				i = i.reverse()
// 					;
// 			})
// 				;
// 	flip_i
// 		.map( function( flip, i) {
// 			var from = $( flipped_i[ i] || [])
// 			, class_name = reach_i[ i]
// 			, to = $( flip || []).css( "left", left + offset_i[ i])
// 				;
// 			if( from.length > 0) from.removeAttr( "style", "left")
// 				;
// 			// if( from.length > 0 && to.length > 0) {
// 			// 	from.effect( "transfer"
// 			// 		, {	to: to
// 			// 			, className: class_name
// 			// 			, callback: transfer_callback
// 			// 	})
// 			// 		;
// 			// } else {
// 				from != undefined && from.length > 0
// 					 && from.removeClass( class_name)
// 					 ;
// 				to.length > 0
// 					 && to.addClass( class_name)
// 					 ;
// //			}
// 	})
// 		;
// 	pano.i_fronty[ 0] = i_to
// 		;
// } catch( e) { throw e;}}
// 	;
// var load_json = function( e) {
// 	var pano = $( this)
// 		;
// 	return $.getJSON(
// 		"http://localhost/image_folders/ls", {
// 			elem_id: pano.attr( "id")
// 			, folder_id: pano.options.folder.id
// 		}
// 		, json_callback
// 	)
// 		;
// }
// 	;
// var json_callback = function( data) {
// 	var elem_id = data[ 'elem_id']
// 	, pano = $( "#" + elem_id)
// 	, path = "/" + data[ 'folder_id'] + "/"
// 	, file_i = data[ 'file_i']
// 	, image_link_i = file_i.map( function( file) { return path + file;})
// 		;
// 	return pano.options.load_callback.call( pano
// 		, { image_link_i: image_link_i }
// 	)
// 		;
// }
// 	;
// var load_local = function( e) {
//       var pano = $( this)
//       , image_link_i = [      // put file links here
// 'img/Photo 1.jpg'
// , 'img/Photo 10.jpg'
// , 'img/Photo 11.jpg'
// , 'img/Photo 12.jpg'
// , 'img/Photo 13.jpg'
// , 'img/Photo 14.jpg'
// , 'img/Photo 15.jpg'
// , 'img/Photo 16.jpg'
// , 'img/Photo 17.jpg'
// , 'img/Photo 18.jpg'
// , 'img/Photo 19.jpg'
// , 'img/Photo 2.jpg'
// , 'img/Photo 20.jpg'
// , 'img/Photo 21.jpg'
// , 'img/Photo 22.jpg'
// , 'img/Photo 23.jpg'
// , 'img/Photo 24.jpg'
// , 'img/Photo 25.jpg'
// , 'img/Photo 26.jpg'
// , 'img/Photo 27.jpg'
// , 'img/Photo 28.jpg'
// , 'img/Photo 29.jpg'
// , 'img/Photo 3.jpg'
// , 'img/Photo 30.jpg'
// , 'img/Photo 31.jpg'
// , 'img/Photo 32.jpg'
// , 'img/Photo 33.jpg'
// , 'img/Photo 34.jpg'
// , 'img/Photo 35.jpg'
// , 'img/Photo 36.jpg'
// , 'img/Photo 37.jpg'
// , 'img/Photo 38.jpg'
// , 'img/Photo 39.jpg'
// , 'img/Photo 40.jpg'
// , 'img/Photo 41.jpg'
// , 'img/Photo 42.jpg'
// , 'img/Photo 43.jpg'
// , 'img/Photo 44.jpg'
// , 'img/Photo 45.jpg'
// , 'img/Photo 46.jpg'
// , 'img/Photo 47.jpg'
// , 'img/Photo 48.jpg'
// , 'img/Photo 49.jpg'
// , 'img/Photo 5.jpg'
// , 'img/Photo 50.jpg'
// , 'img/Photo 51.jpg'
// , 'img/Photo 52.jpg'
// , 'img/Photo 53.jpg'
// , 'img/Photo 54.jpg'
// , 'img/Photo 55.jpg'
// , 'img/Photo 56.jpg'
// , 'img/Photo 57.jpg'
// , 'img/Photo 58.jpg'
// , 'img/Photo 6.jpg'
// , 'img/Photo 7.jpg'
// , 'img/Photo 8.jpg'
// , 'img/Photo 9.jpg'
// 	]
// 		;
// 	return pano.options.load_callback.call( pano
// 		, { image_link_i: image_link_i }
// 	)
// 		;
// }
// 	;
// var my_load_callback = function( options) {
// 	var pano = this
// 		;
// 	options = $.extend( pano.options, options)
// 		;
// 	var image_link_i = options.image_link_i
// 	, wiggle_room = options.wiggle_room
// 		;
// 	if( ( wiggle_room <<1) < image_link_i.length) {
// 		throw "image count too high for room allowed"
// 			;
// 	}
// 	var tile_i = pano.get_tile_i()
// 		;
// 	image_link_i
// 		.map( function( image_link, i) {
// 			return ( i < tile_i.length
// 				? $( tile_i[ i])
// 				: $('<img class="tile">', pano)
// 					.bender( options.tile.ready_i)
// 					.appendTo( pano)
// 				)
// 				.attr( "src", image_link)
// 				;
// 		})
// 			;
// 	// prepare extended 'tile' array for slicing
// 	[ [ []], pano.find( '.tile').get(), [ []]]
// 		.map( function( i) {
// 			$.merge( pano.extend_i, i)
// 				;
// 	})
// 		;
// 	return pano.flip( image_link_i.length >>1)
// 		;
// }
// var my_mousemove = function( e) {
// 	var pano = $( this)
// 		;
// 	// debug indicator bars
// 	var pano_parent = pano.parent()
// 	, pano_left = pano.position().left
// 	, pano_wideness = pano.wideness()
// 	, pano_wiggle = pano.wiggle()
// 		;
// 	meter.call( $( "#m_pano", pano_parent), {
// 		text: "pano.left." + pano_left
// 		, wideness: pano_wideness
// 		, wiggle: pano_wiggle
// 	})
// 		;
// 	var offset_page_pano_center = pano_left + pano_wideness
// 	, wiggle = e.pageX - offset_page_pano_center
// 	, wiggle_room = pano.options.wiggle_room
// 		;
// 	meter.call( $( "#m_wiggle", pano_parent), {
// 		text: "wiggle." + wiggle
// 		, wideness: Math.abs( wiggle)
// 		, wiggle: pano_wiggle
// 	})
// 		;
// 	meter.call( $( "#m_wiggle_room", pano_parent), {
// 		text: "wiggle_room." + wiggle_room
// 		, wideness: wiggle_room
// 		, wiggle: pano_wiggle
// 	})
// 		;
// 	var wiggle_ratio = wiggle / wiggle_room
// 		;
// 	$( "#m_wiggle_ratio").text( "wiggle ratio." + wiggle_ratio)
// 		;
// 	var tile_i = pano.get_tile_i()
// 	, tile_i_wideness = tile_i.length >>1
// 	, i_to = Math.max( 0, Math.min( tile_i.length -1
// 		, tile_i_wideness + parseInt(
// 			tile_i_wideness * wiggle_ratio
// 	)))
// 	, i_from = pano.i_fronty[ 0]
// 		;
// 	$( "#m_next_i").text( "i_to." + i_to + ".i_from." + i_from)
// 		;
// 	i_to != i_from && pano.flip( i_to)
// 		;
// }
// 	;
// var transfer_callback = function( args) { debugger;
// 	return this
// 		.wiggle( args.wiggle)
// 		;
// 	// on-page debug indicators
// 	var pano_meter = $( "#m_pano")
// 		;
// 	meter.call( $( '#m_' + args.options.className, pano_meter), {
// 		text: args.options.className + ".left." + this.position().left
// 		, wideness: this.wideness()
// 		, wiggle: this.wiggle()
// 	})
// 		;
// }
// 	;
// // debug - page indicator bar
// var meter = function( o) { try {
// 	// 'text()' will nuke all kids, so use child container for text
// 	var my_first_kid = this.find( ':first-child')
// 	, my_text = my_first_kid.length > 0 ? my_first_kid : this
// 		;
// 	my_text.text( o.text
// 		+ "(wdns." + o.wideness
// 		+ ".wggl." + o.wiggle + ")"
// 	)
// 		;
// 	this.wideness( o.wideness).wiggle( o.wiggle)
// 		;
// } catch( e) { throw e;}}
// 	;
// complexi.options.ready_i.mousemove = my_mousemove
// 	;
// complexi.options.ready_i.load = load_local //load_json
// 	;
// complexi.options.load_callback = my_load_callback
// 	;
// $.fn.extend( complexi) // plug-in
// 	;
// $(function(){
//   $('#my-panoflo').each(function(){
// 	var pano = $(this);
// 	pano.bender(pano.options.ready_i)
// 	.triggerHandler( 'load');
//   });
// });

// })(jQuery);
