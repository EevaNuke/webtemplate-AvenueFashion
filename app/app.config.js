angular.
module('aveApp').
config(['$routeProvider',
	function config($routeProvider) {
		$routeProvider.
			when('/', {
				template: '<home-banner></home-banner> <home-page></home-page>'
			}).
			/*when('/phones/:phoneId', {
				template: '<phone-detail></phone-detail>'
			}).*/
			otherwise('/');
	  }
  ]);