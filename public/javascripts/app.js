'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {templateUrl: 'partials/partial1.ejs', controller: 'MyCtrl1'});
    $routeProvider.when('/view2', {templateUrl: 'partials/partial2.ejs', controller: MyCtrl2});
    $routeProvider.otherwise({redirectTo: '/view1'});
  }]);

  
  function AppCtrl($scope, $http){
  	$http.get('/users').success(function(data){
  		$scope.name = "Zippy's App Manager";
  	});
  };
  /*
  function MyCtrl1($scope){
  	$scope.text = "hello";
  }*/
  
  function MyCtrl2($scope){
  	$scope.text = "test";
  }
