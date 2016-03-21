'use strict';

eventsApp.directive('mySample', function($compile) {
	return {
		restrict: 'AEC',  //jf Attribute, Element <my-sample />, CLass <div class="my-sample" />, M Comment
		template: "<input type='text' ng-model='sampleData' /> {{sampleData}} <br/>",
		scope: {

		}
	};
});