/* | Bounce.js |
 * | Prabhat Kumar
 * | 08:09:44 PM; 19/12/2012
 * | Copyright © 2012. All Rights Reserved.
 */
;(function($){
  $.fn.bounce = function(options){
		// it creates default settings...
		var settings = {
			bounceHeight:'20px',
			dropDownSpeed:300,
			delay:400
		};
		// load the settings...
		if(options){
			$.extend(settings,options);
		}
		// run it.
		return this.each(function(){
			// create a variable for $(this)...
			var $this = $(this),
			// grab the item's height, passing 'true' on outerHeight includes margins...
			itemheight = $this.outerHeight(true);
			// wrap the targeted element in a <div>
			// this will allow to use absolute positioning,
			// on the child without losing the element's natural height.
			$this.wrap('<div class="bounce"/>');
			// target the newly created element, give it the exact height as the targeted element and
			// doing this to mimic it's physical space when animating 'Position' it's relative,
			// to setup more relative positioning on the child element.
			$('.bounce').css({
				height:itemheight,
				position:'relative'
			});
			// hide the element...
			$this.hide();
			// remove from view whilst hidden, equivalent to element height.
			$this.animate({
				top:"-" + itemheight
			},
				// after negative animation on the invisible element, add position relative,
				// to show the element to make it visible again, but offscreen still...
				function(){
					$(this).css({
						position:'relative'
					}).show();
				});
			// delay by settings... *****
			// animate at the declared bounceHeight.
			$this.delay(settings.delay).animate({
				top:settings.bounceHeight
			},
			// animate it at the declared dropDownSpeed.
			// this speed applies to both animations...
			settings.dropDownSpeed,
			// run the last animation to bring it to the top again...
			function(){
				$this.animate({
					top:0
				});
			});
		});
	};
})(jQuery);
