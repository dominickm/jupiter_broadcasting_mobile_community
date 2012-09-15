$(function () {
	'use strict'
	$('#latest').click( function () {
		if (jb.latest.firstGet === true){
			jb.latest.firstGet = false;
			jb.latest.get();
		}
	});
});