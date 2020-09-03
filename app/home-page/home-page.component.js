angular.
module('homePage').
component('homePage', {
	templateUrl: 'home-page/home-page.template.html',
	controller: ['$http', function PhoneListController($http) {
		this.name = "world";
		
		this.items = [
			
		];
		
		/*$http.get('phones/phones.json').then(function(response) {
			self.phones = response.data;
		  });*/
	  }]
  });
