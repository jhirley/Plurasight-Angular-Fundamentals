//upvote.js
'use strict';

eventsApp.directive('upvote', function() {
	return {
		restrict: 'E',
		replace: true,  //jf replaces diretive with templateUrl instead of appending
		templateUrl: '/templates/directives/upvote.html',
		scope: {
			upvote: "&",  //& is a function or method
			downvote: "&",
			count: "="
		//jf &, @, =
		//jf @ = literal string instead of a value
		}
	};
});
