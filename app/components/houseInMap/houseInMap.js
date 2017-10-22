
var houseInMapModule = angular.module('houseInMapModule', []);
houseInMapModule.controller('houseInMapController', function ($scope, $timeout) {

	var mapProp= {
			center:new google.maps.LatLng(37.52,-122.07),
			zoom:10,
			mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
	
	cm.subscribe("/addToMap", function(data) {
		$timeout(function() {
			$scope.lat = data.lat;
			$scope.long = data.long;
			var myAddress = new google.maps.LatLng($scope.lat,$scope.long);
			var marker = new google.maps.Marker({position:myAddress});
			marker.setMap(map);
		})		
	}, this);
	
	  
});
	

houseInMapModule.directive('houseInMap', function() {
    return {
    	restrict: 'E', 
    	templateUrl: 'components/houseInMap/houseInMap.htm',
    	controller: 'houseInMapController'
    };
});
