'use strict';

eventsApp
	.directive('greeting', function() {
		return {
			priority: 1,
			restrict: 'E',
			replace: true,  //jf replaces diretive with templateUrl instead of appending
			template: "<button class='btn' ng-click='sayHello()'>Say Hello</button>",
			controller: 'GreetingController'
			// controller: '@',
			// name: 'ctrl'
		};
	})
	.directive('finnish', function(){
		return{
			priority: 2,
			restrict: 'A',
			require: 'greeting',
			link: function(scope, element, attrs, controller) {
				controller.addGreeting('hei');
			}
		}
	})
	.directive('hindi', function(){
		return{
			priority: 1,
			terminal: true, //no directives with a lower prority will execute
			restrict: 'A',
			require: 'greeting',
			link: function(scope, element, attrs, controller) {
				controller.addGreeting('namashdi');
			}
		}
	})

eventsApp.controller('GreetingController', 
	function GreetingController($scope) {
		var greetings=['hello'];
		$scope.sayHello = function() {
			alert(greetings.join());
		}
		this.addGreeting = function(greeting){
			greetings.push(greeting);
		}
	});