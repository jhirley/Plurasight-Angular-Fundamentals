//eventThumbnail.js
'use strict';

eventsApp.directive('eventThumbnail', function() {
	return {
		restrict: 'E',
		replace: true,  //jf replaces diretive with templateUrl instead of appending
		templateUrl: '/templates/directives/eventThumbnail.html',
		scope: {
			event: "="
		//	event: "=event" //jf &, @, =
		}
	};
});
