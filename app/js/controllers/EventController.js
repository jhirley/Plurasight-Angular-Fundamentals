//EventController.js
'use strict';

eventsApp.controller('EventController', function EventController($scope, eventData) {

	$scope.boolValue = true;

	$scope.mystyle = {color:'red'};

	$scope.myclass = "blue";

	$scope.buttonDisabled = true;

	$scope.amount = 42;

	$scope.snippet = '<span	style="color:red">Hi There</span>';

	$scope.sortorder = 'name';

	eventData.getEvent().$promise
		.then(function (event) { $scope.event = event; console.log(event);})
		.catch( function (response) {console.log(response);});

	$scope.upVoteSession = function (session) {
		session.upVoteCount++;
	};


	$scope.downVoteSession = function (session) {
		session.upVoteCount--;
	};
});