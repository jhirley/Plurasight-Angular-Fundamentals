//EventThumbnailSpec.js   ng directive test
'use strict';

describe('eventThumbnail', function(){
	var el;

	beforeEach(module('eventsApp'));
	beforeEach(module('/templates/directives/eventThumbnail.html'));
	
	beforeEach(inject(function($compile, $rootScope) {
		var scope = $rootScope.$new();
		scope.event = {
			name:'Angular Expe', 
			date: '1/1/2010', 
			time:'10:30', 
			location: {address:'12345',city:'New Yord', province:'NY'},
			id: 1
		}

		el = angular.element('<event-thumbnail event="event"/>');
		$compile(el)(scope);
		scope.$digest();
	}));

	it('should bind the data', function() {
		expect(el.text()).toContain('Angular Expe');
	})

});