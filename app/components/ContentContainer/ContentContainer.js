var contentContainerModule = angular.module('contentContainerModule', []);
contentContainerModule.controller('contentContainerController', function($scope, $timeout) {
	//Add an id field to the owner so that we can use a map to container subscribers to prevent
	//redundantly subscribing. We use "this"(the controller) as owner so that we can 
	//use the controller as the caller (this) when invoke the subscription handler.
	this.id = "contentContainerController";
	

	
		
})
contentContainerModule.directive('contentContainer', function() {
    return {
    	restrict: 'E', 
    	templateUrl: 'components/ContentContainer/ContentContainer.htm',
    	controller: 'contentContainerController'
    };
});
