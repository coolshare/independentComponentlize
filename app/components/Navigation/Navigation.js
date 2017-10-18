var navigationModule = angular.module('navigationModule', []);
navigationModule.controller('navigationController', function($scope, $timeout) {
	//Add an id field to the owner so that we can use a map to container subscribers to prevent
	//redundantly subscribing. We use "this"(the controller) as owner so that we can 
	//use the controller as the caller (this) when invoke the subscription handler.
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
