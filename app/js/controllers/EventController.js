//EventController.js
'use strict';

eventsApp.controller('EventController', function EventController($scope, eventData, $log) {

	$scope.boolValue = true;

	$scope.mystyle = {color:'red'};

	$scope.myclass = "blue";

	$scope.buttonDisabled = true;

	$scope.amount = 42;

	$scope.snippet = '<span	style="color:red">Hi There</span>';

	$scope.sortorder = 'name';

	eventData.getEvent()
		.success(function (event){$scope.event = event; })
		.error(function (data, status, headers, config) {
			$log.warn(data, status, headers(), config);
		});

	$scope.upVoteSession = function (session) {
		session.upVoteCount++;
	};


	$scope.downVoteSession = function (session) {
		session.upVoteCount--;
	};
});