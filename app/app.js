'use strict';

// Defining Angular app model with all other dependent modules
var componentizeApp = angular.module('componentizeApp',['ngRoute',
	'comNavigationModule','contentContainerModule', 'contentContainerModule','comNavigationModule','houseInTableModule','houseInMapModule']);

componentizeApp.config(function($routeProvider, $locationProvider, $httpProvider) {
	$locationProvider.html5Mode(true);
	// Declaration of the default route if neither of the controllers
	// is supporting the request path
	$routeProvider.otherwise({ redirectTo: '/'});

	// Settings for http communications
	$httpProvider.defaults.useXDomain = true;
	delete $httpProvider.defaults.headers.common['X-Requested-With'];


});


