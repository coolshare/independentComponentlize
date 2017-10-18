var houseInMapModule = angular.module('houseInMapModule', []);
houseInMapModule.controller('houseInMapController', function($scope,$timeout) {
	$scope.title = "";
	$scope.message = "";

	cm.subscribe("/Nav/Update", function(data) {
		$timeout(function() {
			$scope.title = data.Label;
		}, 0)
	}, this);
	
})
	

houseInMapModule.directive('houseInMap', function() {
    return {
    	restrict: 'E', 
    	templateUrl: 'components/houseInMap/houseInMap.htm',
    	controller: 'houseInMapController'
    };
});
