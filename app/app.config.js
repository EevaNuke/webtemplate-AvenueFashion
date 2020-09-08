angular.
module('aveApp').
config(['$routeProvider',
	function config($routeProvider) {
		$routeProvider.
			when('/', {
				template: '<homepage-banner></homepage-banner> <homepage></homepage>'
			}).
			when('/product/:productId', {
				template: '<subpage-banner></subpage-banner> <product-page></product-page>'
			}).
			otherwise('/');
	  }
  ]);