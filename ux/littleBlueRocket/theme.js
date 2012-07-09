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
 */
//
// Variables that are global to theme.js only
var isPlaying = false, cordovaMediaPlayer;
//
// Re-usable UI Components Code Snippets
/* 
 * Create a toolbar inside #applicationframe
 * Arguments Required:
 * @id: Sets DOM id attributes.  Accessible via the '#' + idvalue.
 */
function toolbar(id) {
	'use strict';
	return '<div class="toolbar" id="' + id + '">&nbsp;</div><div class="toolbarhr" id="toolbarhr">&nbsp;</div>';
}
/*
 * Create a tab inside a toolbar 
 * Arguments Required:
 * @id: Sets DOM id attributes.  Accessible via the '#' + idvalue.
 * @tabText: The textual value of the tab.
 * Arguments optional:
 * @isCurrentTab: Sets the CSS class to 'tabcurrent'
 * @iconURL: The iconURL location.
 */
function tab(id, tabText, isCurrentTab, iconURL) {
	'use strict';
	var tabClass = (isCurrentTab) ? 'tabcurrent' : 'tab';
	var tabIcon = (iconURL) ? iconURL : 'icon_placeholder.png';
	return '<div class="' + tabClass + '" id="' + id + '"><img class="icon32" id="icon_' + id + '" src="' + tabIcon + '">' + tabText + '</div>';
}
/* 
 * Create a button
 * Arguments required:
 * @id: Sets DOM id attributes.  Accessible via the '#' + idvalue.
 * @buttonText: The textual value of the button.
 */
function button(id, buttonText) {
	"use strict";
	return '<div id="' + id + '" class="button">' + buttonText + '</div>';
}
/* 
 * Create a centered button
 * Arguments required:
 * @id: Sets DOM id attributes.  Accessible via the '#' + idvalue.
 * @buttonText: The textual value of the button.
 */
function buttonCentered(id, buttonText) {
	"use strict";
	return '<div class="centered"><div id="' + id + '" class="button">' + buttonText + '</div></div>';
}
/* 
 * Create a horisonal ruler
 */
function hr() {
	"use strict";
	return '<div class="hr" id="hr">&nbsp;</div>';
}
/* 
 * Create a album art box
 * @id: Sets DOM id attributes.  Accessible via the '#' + idvalue.
 * @artURL: The image URL location.
 */
function albumArt(id, artURL) {
	"use strict";
	var tabIcon = (artURL) ? artURL : 'icon_placeholder.png';
	return '<div class="albumart" id="albumart"><img class="icon96" id="album_' + id + '" src="' + artURL + '"></div>';
}
/* 
 * Create a title box
 * @id: Sets DOM id attributes.  Accessible via the '#' + idvalue.
 * @titleText: The textual value of the title.
 */
function titleBox(id, titleText) {
	"use strict";
	var titleBoxText = (titleText) ? titleText : '&nbsp;';
	return '<div class="titlebox" id="' + id + '">'  + titleBoxText + '</div>';
}
//
// UI Draw Functions
function clearScreen(){
	"use strict";
	// Clear Screen
	$("#applicationframe").empty();
}
function drawToolbarTabbedNavigation1 (currentTab){
	'use strict';
	// Create UI toolbar with tabs.
	$('#applicationframe').append(toolbar('maintoolbar'));
	(currentTab == 'shows') ? $('#maintoolbar').append(tab('shows', 'Shows', true,'icon_tv_aerial.png')) : $('#maintoolbar').append(tab('shows', 'Shows', false,'icon_tv_aerial.png'));
	(currentTab == 'playing') ? $('#maintoolbar').append(tab('playing', 'Playing', true,'icon_disk.png')) : $('#maintoolbar').append(tab('playing', 'Playing', false,'icon_disk.png')); // Set isCurrent
	(currentTab == 'settings') ? $('#maintoolbar').append(tab('settings', 'Settings', true,'icon_gear.png')) : $('#maintoolbar').append(tab('settings', 'Settings', false,'icon_gear.png'));
	//
	// Handle when use clicks on a tab
	$(".tab").click(function (event) {
		//
		// Get current tab and switch it to a regular tab
		var tab = $('.tabcurrent').attr('id');
		$('#' + tab).removeClass('tabcurrent');
		$('#' + tab).addClass('tab')
		//
		// Get the tab that was clicked on and switch it to the current tab
		$('#' + $(this).attr('id')).removeClass('tab');
		$('#' + $(this).attr('id')).addClass('tabcurrent');
		//
		// Draw the page for that tab
		redrawTabs($(this).attr('id'));
	});
	$(".tabcurrent").click(function (event) {
		var tab = $('.tabcurrent').attr('id');
		$('#' + tab).removeClass('tabcurrent');
		$('#' + tab).addClass('tab');
		$('#' + $(this).attr('id')).removeClass('tab');
		$('#' + $(this).attr('id')).addClass('tabcurrent');
		redrawTabs($(this).attr('id'));
	});
	function redrawTabs(tab) {
		if(tab == 'shows') {
			clearScreen();
			drawToolbarTabbedNavigation1('shows');
		} else if (tab == 'playing') {
			clearScreen();
			drawToolbarTabbedNavigation1();
			drawCordovaMediaPlayerControls1('playing');
		} else if (tab == 'settings') {
			clearScreen();
			drawToolbarTabbedNavigation1('settings');
		}
	}

}
function drawCordovaMediaPlayerControls1() {
	$('#applicationframe').append(titleBox('titleBox1','Press Play'));
	$('#applicationframe').append(albumArt('jbLive','album_art_jblive.png'));
	if(isPlaying) {
		$('#applicationframe').append(buttonCentered('cordovaMediaPlayerControls','<img id="playerControl" class="icon24" src="icon_stop.png">'));
	} else {
		$('#applicationframe').append(buttonCentered('cordovaMediaPlayerControls','<img id="playerControl" class="icon24" src="icon_play.png">'));
	}
	$("#cordovaMediaPlayerControls").click(function (event) {
		if(isPlaying) {
			$('#playerControl').replaceWith('<img id="playerControl" class="icon24" src="icon_play.png">');
			$('#titleBox1').replaceWith(titleBox('titleBox1','Stopped.'));
			isPlaying = false;
			//
			//
			try {
				cordovaMediaPlayer.stop();
				cordovaMediaPlayer.release();
			} catch(e) {
			}
		} else {
			$('#playerControl').replaceWith('<img id="playerControl" class="icon24" src="icon_stop.png">');
			$('#titleBox1').replaceWith(titleBox('titleBox1','Streaming...'));
			isPlaying = true;
			//
			//
			try{
				cordovaMediaPlayer = new Media('http://jbradio.out.airtime.pro:8000/jbradio_b',
				// success callback
				function() {
					console.log("playAudio():Audio Success");
					
				},
				// error callback
				function(err) {
					console.log("playAudio():Audio Error: "+err);
				});
				cordovaMediaPlayer.play();
			} catch(e) {
			}
			
		}
	});
}
function drawJBFeed() {
	'use strict';
	//
	// To Do: Get XML Feed and display in a really slick way.
}
//
// When Document is ready or loaded
$(document).ready(function () {
	'use strict';
	// Draw the Toolbar
	drawToolbarTabbedNavigation1('playing');
	// Draw the mediaPlayerControls
	drawCordovaMediaPlayerControls1();
});