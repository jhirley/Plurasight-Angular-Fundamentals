'use struct';

eventsApp.controller('TimeoutSampleController', 
	function TimeoutSampleController($scope, $interval) {
		$scope.name = 0;
		var promise = $interval(function (){
				$scope.name++;
			}, 1000*1
		);

		$scope.cancel = function() {
			$interval.cancel(promise);
		}
	}
);