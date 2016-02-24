'use strict';

var templateExampleVar='<div style="padding-left: 20px; padding-right: 20px"><button type="button" class="btn" ng-click="reload()">Reload</button><h1>templatetest</h1></div>';
var eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute'])
	.config(function ($routeProvider, $locationProvider) {
		$routeProvider
		.when('/newEvent', {
			templateUrl : 'templates/NewEvent.html',
			controller : 'EditEventController'
		}).when('/events', {
			templateUrl : 'templates/EventList.html',
			controller : 'EventListController'
		}).when('/event/:eventId', {
			templateUrl : 'templates/EventDetails.html',
			controller : 'EventController'
		}).when('/sampleDirective', {
			templateUrl : 'templates/SampleDirective.html',
			controller : 'SampleDirectiveController'
		}).when('/templateexample', {
			template: templateExampleVar,
			controller : 'SampleDirectiveController'
		}).otherwise({redirectTo: '/events'});
		$locationProvider.html5Mode(true);
	});
	// .factory('myCache', function ($cacheFactory) {
	// 	return $cacheFactory('myCache', {capacity:3})
	// })