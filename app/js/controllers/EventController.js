//EventController.js
'use strict';

eventsApp.controller('EventController', function EventController($scope, eventData, $routeParams, $route) {

	// $scope.boolValue = true;

	// $scope.mystyle = {color:'red'};

	// $scope.myclass = "blue";

	// $scope.buttonDisabled = true;

	// $scope.amount = 42;

	// $scope.snippet = '<span	style="color:red">Hi There</span>';

	$scope.sortorder = 'name';

	$scope.event = eventData.getEvent($routeParams.eventId);
	// eventData.getEvent().$promise
	// 	.then(function (event) { $scope.event = event; console.log(event);})
	// 	.catch( function (response) {console.log(response);});

	$scope.upVoteSession = function (session) {
		session.upVoteCount++;
	};


	$scope.downVoteSession = function (session) {
		session.upVoteCount--;
	};

	$scope.scrollToSession = function () {
		$anchorScroll();
	};
	$scope.reload = function() {
		$route.reload();
	};
});