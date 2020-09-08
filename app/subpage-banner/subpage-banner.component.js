angular.
module('subpageBanner').
component('subpageBanner', {
	templateUrl: 'subpage-banner/subpage-banner.template.html',
	controller: ['$http', '$routeParams', 
	function SubpageBannerController($http, $routeParams) {
		var self = this;
		
		if($routeParams.productId) {		// it's a product detalis page
			self.page_name = "Product <span class=\"thin\">view</span>";
			
			$http.get('products/' + $routeParams.productId + '.json').then(function(response) {
				var product = response.data;
				
				self.page_path = "Mens - Casuals - Hoodies & sewatshirts - <span class=\"colored\">"+product.name+"</span>";
			  });
		  }
	  }]
  });
  