/*
Copyright [2012] [Fingertip Tech, INC]

 Licensed under the Apache License, Version 2.0 (the 'License');
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an 'AS IS' BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
-->
*/
// use JB Namespace to prevent naming conflicts
var jb = {
	'player' : {
		'isPlaying': false,
		'url' : null,
		'play' : function (key) {
			'use strict';
			var feedMap, htmlPlayer;
			$('#nowplayingtitle').replaceWith('<h1 id="nowplayingtitle" class="ui-title" role="heading" aria-level="1">' + key + '</h1>');
			$.mobile.changePage('#now-playing');
			feedMap = $(document).data('feedMap');
			htmlPlayer = $('#player')[0];
			htmlPlayer.src = feedMap[key].url;
			htmlPlayer.play();
		},
		'stop' : function () {
			'use strict';
		},
		'pause' : function () {
			'use strict';
		},
		'resume' : function () {
			'use strict';
		}
	},
	'latest' : {
		'get' : function () {
			'use strict';
			var feed;
			feed = new google.feeds.Feed('http://feeds.feedburner.com/AllJupiterBroadcastingShowsOgg');
			feed.load(function (result) {
				var entry, rssListStrring, feedMap;
				if (!result.error) {
					if ($(document).data('feedMap')) {
						feedMap = $(document).data('feedMap');
					} else {
						feedMap = {};
					}
					rssListStrring = '<ul data-role="listview" data-theme="a" id="latest-list"></ul>';
					$('div#latest-holder').html(rssListStrring);
					$.each(result.feed.entries, function () {
						entry = this;
						$('#latest-list').append('<li data-icon="play"><a ' +
							'href="#" onclick="jb.player.play(\'' + entry.title + '\')" ' +
							'class="ui-link-inherit"><img src="./resources/images/icon-disk.png" ' +
							'class="ui-li-thumb"><h3 class="ui-li-heading">' + entry.title +
							'</h3><p class="ui-li-desc">' + entry.contentSnippet + '</p></a></li>');
						//Object containing url,size and type eg.audio/mp3
						feedMap[entry.title] = entry.mediaGroups[0].contents[0];
					});
					//Store the urls on the document because it safe to say
					//thats not going to be deleted and its accessable everywhere
					$(document).data('feedMap', feedMap);
					$('div#latest-holder > ul#latest-list').listview();
				} else {
					//I'll handle this more gracefully later
					console.log('Error getting feed');
				}
			});
		},
		'firstGet' : true
	}
};
