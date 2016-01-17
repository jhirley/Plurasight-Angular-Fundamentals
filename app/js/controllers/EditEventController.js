'use strict'

eventsApp.controller('EditEventController', function EditEventController ($scope) {
	$scope.saveEvent = function(event, newEventForm) {

		console.log(newEventForm);
		
		if(newEventForm.$valid) {
			alert(event);
		}

	};

	$scope.cancelEdit = function(){
		window.location = "/EventDetails.html"
	}
})