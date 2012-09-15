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
		'play' : function (url) {
			'use strict';
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
	'url' : {
		'get' : function () {
			'use strict';
		}
	},
	'latest' : {
		'get' : function () {
			'use strict';
			var callback = function () {
				$('div#latest-holder > ul#latest-list').listview();
			}, url = 'http://feeds.feedburner.com/AllJupiterBroadcastingShowsOgg';
			$('div#latest-holder').rss(url, {
				layoutTemplate: '<ul data-role="listview" data-theme="a" id="latest-list">{entries}</ul>',
				entryTemplate: '<li data-icon=\"play\"><a href=\"#{title}\" class=\"ui-link-inherit\"><img src=\"./images/icon-disk.png\" class=\"ui-li-thumb\"><h3 class=\"ui-li-heading\">{title}</h3><p class=\"ui-li-desc\">{shortBody}</p></a></li>'
			}, callback);
		},
		'firstGet' : true
	}
};
