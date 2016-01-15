//EventController.js
'use strict';

eventsApp.controller('EventController', function EventController($scope) {

	$scope.boolValue = true;

	$scope.mystyle = {color:'red'};

	$scope.myclass = "blue";

	$scope.buttonDisabled = true;

	$scope.snippet = '<span	style="color:red">Hi There</span>';

	$scope.event = {
		name: 'Angular Boot Camp',
		date: '1/1/2016',
		time: '7:12 pm',
		location: {
			address: 'Google Headquarters',
			city: 'Mountain View',
			providence: 'Ca'
		},
		imageUrl: '/img/angularjs-logo.png',
		sessions: [
			{
				name: 'Drectives Masterclass'
				,creatorName: 'Bob Smith'
				,durration: '1 hr'
				,level: 'Advanced'
				,abstract: 'In this sesssion you will learn the ins and outs of directives'
				,upVoteCount: 3
			},
			{
				name: 'Scopes for fun and profit'
				,creatorName: 'John Doe'
				,durration: '1 hr'
				,level: 'Intro'
				,abstract: 'In this sesssion you will learn the ins and outs of Scopes'
				,upVoteCount: 5
			},
			{
				name: 'Well behaved controllers'
				,creatorName: 'Bob Doe'
				,durration: '1 hr'
				,level: 'Advanced'
				,abstract: 'In this sesssion you will learn the ins and outs of controllers'
				,upVoteCount: 12
			}
		]
	}

	$scope.upVoteSession = function (session) {
		session.upVoteCount++;
	};


	$scope.downVoteSession = function (session) {
		session.upVoteCount--;
	};
});