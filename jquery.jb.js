/*
Copyright [2012] [Fingertip Tech, INC]

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
-->
*/
// use JB Namespace to prevent naming conflicts
var jb = {
	player : {
		"isPlaying": false,
		"url" : null,
		"play" : function () {
			"use strict";
		},
		"stop" : function () {
			"use strict";
		},
		"pause" : function () {
			"use strict";
		}
	},
	url : {
		"get" : function () {
			"use strict";
		}
	},
	series : {
		get : function () {
			"use strict";
			var callback = function () {
				"use strict";
				$('div#series-holder > ul#series-list').listview();
			}
			var url = 'http://feeds.feedburner.com/AllJupiterBroadcastingShowsOgg';
			$('div#series-holder').rss(url, {
				layoutTemplate: '<ul data-role=\"listview\" data-theme=\"g\" id=\"series-list\">{entries}</ul>',
				entryTemplate: '<li><h2>{title}</h2><p>{shortBody}</p></li>'
			}, 
			callback);
		},
		firstGet : true
	}
};
//jb.player.play();
