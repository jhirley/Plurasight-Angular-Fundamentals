//EditProfileControllerSpec.js
'use strict';

describe('EditProfileControllerSpec', function(){

	var $controllerConststructor;
	var scope;
	var mockgravatarUrlBuilder;

	beforeEach(module("eventsApp"));

	beforeEach(inject(function($controller, $rootScope){
		$controllerConststructor = $controller;
		scope = $rootScope.$new();
		mockgravatarUrlBuilder = sinon.stub({buildGravatarUrl: function(){}})
	}))

	it('should build the gravatar with the given email', function(){
	// 	var mockEvents = {};
	// 	mockgravatarUrlBuilder.getAllEvents.returns(mockEvents);

	 	$controllerConststructor("EditProfileController", 
	 		{'$scope':scope, gravatarUrlBuilder: mockgravatarUrlBuilder})

	 	var email = "joe@joe.com";
	 	scope.getGravatarUrl(email);
		expect(mockgravatarUrlBuilder.buildGravatarUrl.calledWith(email)).toBe(true);
	})
});