'use strict';

angular.module('componentizeApp.about', ['ngRoute'])

// Routing configuration for this module
.config(['$routeProvider',function($routeprovider){
	$routeprovider.when('/about', {
		controller: 'AboutController',
		templateUrl: 'components/views/aboutView.html'
	});
}])

// Controller definition for this module
.controller('AboutController', ['$scope', function($scope) {

	init();

	function init(){
	
	};

	this.message = "Hello About!";

}]);