var houseInTableModule = angular.module('houseInTableModule', []);
houseInTableModule.controller('houseInTableController', function($scope,$timeout) {
	$scope.title = "";
	$scope.message = "";

	cm.subscribe("/Nav/Update", function(data) {
		$timeout(function() {
			$scope.title = data.Label;
		}, 0)
	}, this);
	
	
})
	

houseInTableModule.directive('houseInTable', function() {
    return {
    	restrict: 'E', 
    	templateUrl: 'components/houseInTable/houseInTable.htm',
    	controller: 'houseInTableController'
    };
});
