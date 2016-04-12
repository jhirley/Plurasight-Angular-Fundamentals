//EventListControllerSpec.js
'use strict';

	describe('EventListController', function(){
		var $controllerConststructor;
		var scope;
		var mockEventData;

		beforeEach(module("eventsApp"));

		beforeEach(inject(function($controller, $rootScope){
			$controllerConststructor = $controller;
			scope = $rootScope.$new();
			mockEventData = sinon.stub({getAllEvents: function(){}})
		}))

		it('should set the scope events to the results of eventData.getAllEvents', function(){
			var mockEvents = {};
			mockEventData.getAllEvents.returns(mockEvents);

			$controllerConststructor("EventListController", 
				{'$scope':scope, eventData: mockEventData})

			expect(scope.events).toBe(mockEvents);
		})
	});