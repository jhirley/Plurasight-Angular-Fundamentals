'use struct';

eventsApp.controller('EventListController', 
	function EventListController($scope, eventData) {
		$scope.events = eventData.getAllEvents();
	}
);