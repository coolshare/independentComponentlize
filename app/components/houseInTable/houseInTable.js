var houseInTableModule = angular.module('houseInTableModule', []);
houseInTableModule.controller('houseInTableController', function($scope,$timeout) {
			
	$scope.addToMap = function(x) {
		cm.publish("/addToMap",x);
	}
	
	cm.subscribe("/HouseService/getAll/Response", function(data) {
		$timeout(function() {
			$scope.houses = data;
		})
		
	}, this);
	
	cm.subscribe("/HouseService/getCols/Response", function(data) {
		$timeout(function() {
			$scope.cols = data;
		})
		
	}, this);
	
	cm.publish("/HouseService/getCols");
});


houseInTableModule.directive('houseInTable', function() {
    return {
    	restrict: 'E', 
    	templateUrl: 'components/houseInTable/houseInTable.htm',
    	controller: 'houseInTableController'
    };
});
