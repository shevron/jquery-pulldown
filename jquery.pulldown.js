/**
 * jquery-pulldown: jQuery based pulldown menu button plugin
 *
 * This program is free software. It comes without any warranty, to
 * the extent permitted by applicable law. You can redistribute it
 * and/or modify it under the terms of the Do What The Fuck You Want
 * To Public License, Version 2, as published by Sam Hocevar. See
 * http://sam.zoy.org/wtfpl/COPYING for more details. 
 **/ 

(function($){
	$.fn.pulldown = function(options) {
		
		var defaults = {  
			pulledClass:    'pulled',
			hideOnMouseOut: true,
			easing:         'swing',
		};
		var options = $.extend(defaults, options);
		
		return this.each(function() {
			var container = $(this);
			var handle = $('button', this);
			var menu = $('ul', this);
			
			menu.hide();
			
			handle.click(function() {
				menu.toggle(options.easing, function(){
					container.toggleClass(options.pulledClass);
				});
			});
			
			if (options.hideOnMouseOut) {
				container.hideTimer = null;
				container.mouseout(function() {
					container.hideTimer = setTimeout(function() {
						menu.hide(options.easing, function() {
							container.removeClass(options.pulledClass);
						});
					}, 10);
				});
				container.mouseover(function() {
					if (container.hideTimer) {
						clearTimeout(container.hideTimer);
					}
				});
			}
		});
	};  
})(jQuery);
