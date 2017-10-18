var comNavigationModule = angular.module('comNavigationModule', []);
 
comNavigationModule.controller('comNavigationController', function($scope,$timeout,$rootScope,$http,CommunicationManager, ServiceCommunication) {	

    $scope.getHouseData = function(){
    	//publish to communication manager
    	CommunicationManager.publish("/getHouse",fileName);
      	
    	CommunicationManager.subscribe("/getHouse", function(data) {
    		$timeout(function() {
    			$scope.title = data.Label;
    		}, 0)
    	}, this);
    	
    	
    };
    
 comNavigationModule.directive('comNavigation', function() {
  return {
    restrict: 'E',
    transclude: 'true',
    templateUrl: 'components/comNavigation/comNavigation.htm',
    controller: 'comNavigationController'
  };
});
});