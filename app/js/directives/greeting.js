'use strict';

eventsApp
	.directive('greeting', function() {
		return {
			// priority: 1,
			replace: true,
			restrict: 'E',
			transclude: true,
			replace: true,  //jf replaces diretive with templateUrl instead of appending
			template: "<div><button class='btn' ng-click='sayHello()'>Say Hello</button><div ng-transclude></div></div>", //jf ng-transclude only works on a div 
			controller: 'GreetingController'
			// controller: '@',
			// name: 'ctrl'
		};
	})
	.directive('finnish', function(){
		return{
			// priority: 3,
			restrict: 'A',
			require: '^greeting',  //jf ^ <- look up in the DOM at parent directives
 			link: function(scope, element, attrs, controller) {
				controller.addGreeting('hei');
			}
		}
	})
	.directive('hindi', function(){
		return{
			// priority: 2,
			// terminal: true, 
			//no directives with a lower prority will execute
			restrict: 'A',
			require: '^greeting',  //jf ^ <- look up in the DOM at parent directives
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