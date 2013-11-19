/* Controllers */
var AppControllers = angular.module('controllers', []);

AppControllers.controller('MyCtrl1', ['$scope', '$http', 
	function($scope, $http){
		$http.get('/users').success(function(data){
			$scope.results = data.places;	
		});
		
	}//End of MyCtrl1 Function
]);
