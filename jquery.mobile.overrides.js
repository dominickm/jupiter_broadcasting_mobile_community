$(document).bind("mobileinit", function () {
	'use strict';
	// Apply overrides here
	//
	// Default Transistions:
	$.mobile.defaultPageTransition = "none";
	// Graphical Performance Fix
	$.mobile.transitionFallbacks.slideout = "none";
});
