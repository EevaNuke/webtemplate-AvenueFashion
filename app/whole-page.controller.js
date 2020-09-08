angular.
module('aveApp').
controller('WholePageController', function WholePageController($scope) {
	$scope.currency = "GBP";
	
	$scope.setCurrency = function setCurrency(what) {
		$scope.currency = what;
	  }
	
	$scope.cart = [];

  });