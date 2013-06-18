'use strict';

/**
 * Sets up the application
 */
var jb = function () {
	jb.simpleRender('#header-template', '#header', {applicationName: jb._APP_NAME}, 'html');
	jb.feed.get(jb.feed._OGG_FEED, function(results){
		jb.feed.render(results);
	});
};

//The application's name
jb._APP_NAME = 'Jupiter Broadcasting Community Edition';

/**
 * Renders the template on the page
 * @template: The template name to render
 * @target: The target to render the html to
 * @object: The data to render in the template
 * @method: The way to render, e.g. 'html' or 'append'
 */
jb.simpleRender = function(template, target, object, method) {
	var source = $(template).html();
	var template = Handlebars.compile(source);
	$(target)[method](template(object));
};


//Feed namespace
jb.feed = {};

//Ogg feed url
jb.feed._OGG_FEED = 'http://feeds.feedburner.com/AllJupiterBroadcastingShowsOgg';

//Default number of feed entries
jb.feed.numEntries = 10;

/**
 * Gets the feed that is passed in and returns the results
 * @url: The url of the feed to get
 * @callback: a callback function for the feed -- function(results)
 */
jb.feed.get = function(url, callback) {
	var feed;
	feed = new google.feeds.Feed(url);
	feed.setNumEntries(this.numEntries);
	feed.load(callback);
}

/**
 * Renders the feed list
 * @feed: The feed to render
 */
jb.feed.render = function(feed) {
	jb.simpleRender('#feedlist-template', '#body', feed, 'html');
}
