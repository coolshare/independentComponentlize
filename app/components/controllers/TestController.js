'use strict';

angular.module('componentizeApp.test', ['ngRoute'])

// Routing configuration for this module
.config(['$routeProvider',function($routeprovider){
	$routeprovider.when('/test', {
		controller: 'TestController',
		templateUrl: 'components/views/testView.html'
	});
}])

// Controller definition for this module
.controller('TestController', ['$scope', function($scope) {

	init();

	function init(){
	
	};

	this.message = "Hello Test!";

}]);