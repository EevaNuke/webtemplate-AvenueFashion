angular.
module('homepageBanner').
component('homepageBanner', {
	templateUrl: 'homepage-banner/homepage-banner.template.html',
	controller: ['$http', function PhoneListController($http) {
		this.name = "home banner";
		/*$http.get('phones/phones.json').then(function(response) {
			self.phones = response.data;
		  });*/
	  }]
  });
  