var houseInTableModule = angular.module('houseInTableModule', []);
houseInTableModule.controller('houseInTableController', function($scope,$timeout,CommunicationManager) {
	$scope.title = "";
	$scope.message = "";

	CommunicationManager.subscribe("/Nav/Update", function(data) {
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
