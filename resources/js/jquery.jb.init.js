$(document).ready(function () {
	'use strict';
	var feedMap;
	feedMap = {};
	feedMap['JBlive.AM'] = { 'url': 'http://www.jblive.am',
		'type': 'audio/mp3',
		'size': -1
		};
	feedMap['JBlive.FM'] = { 'url': 'http://www.jblive.fm',
		'type': 'audio/mp3',
		'size': -1
		};
	$(document).data('feedMap', feedMap);
});