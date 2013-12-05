/* Controllers */
var AppControllers = angular.module('controllers', []);

AppControllers.controller('MyCtrl1', ['$scope', '$http', 
	function($scope, $http){
		$http.get('/users').success(function(data){
			$scope.results = data.places;
			$scope.count = data.places.length;	
		});
		
		$scope.test2 = "Hello Derek";
		
	}//End of MyCtrl1 Function
]);
