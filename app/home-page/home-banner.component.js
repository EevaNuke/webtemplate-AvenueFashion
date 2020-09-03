angular.
module('homePage').
component('homeBanner', {
	templateUrl: 'home-page/home-banner.template.html',
	controller: ['$http', function PhoneListController($http) {
		this.name = "home banner";
		/*$http.get('phones/phones.json').then(function(response) {
			self.phones = response.data;
		  });*/
	  }]
  });
  