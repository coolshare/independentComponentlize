var navigationModule = angular.module('navigationModule', []);
navigationModule.controller('navigationController', function($scope, $timeout) {

	this.id = "navigationController";
	$scope.getHouseData = function(){
		
		cm.publish("/HouseService/getAll");
	}

	
		
})
navigationModule.directive('navigation', function() {
    return {
    	restrict: 'E', 
    	templateUrl: 'components/Navigation/Navigation.htm',
    	controller: 'navigationController'
    };
});
