angular.
module('productPage').
component('productPage', {
	templateUrl: 'product-page/product-page.template.html',
	controller: ['$scope', '$http', '$routeParams', "$location", "$anchorScroll", 
	function ProductPageController($scope, $http, $routeParams, $location, $anchorScroll) {
		var self = this;
		
		$http.get('products/' + $routeParams.productId + '.json').then(function(response) {
			self.product = response.data;
			
					// setup product image
			self.createSlider(self.product.img);
			self.showArrows();
			
					// set default quantity as 1
			self.setQty(1);
			
					// set detailed description as default open
			self.setDesc('description');
		  });
		
		
		/* ------------------------------------------------------------
							add product to cart 
		------------------------------------------------------------ */
		
		self.addToCart = function addToCart() {
			var prod = {
				"id": self.product.id,
				"name": self.product.name,
				"img": self.product.img[0], 
				"price": self.product.price,
				"quantity": 1
			};
			
			$scope.$parent.cart.push(prod);
		};
		
		/* ------------------------------------------------------------
								set product options 
		------------------------------------------------------------ */

		self.setQty = function setQty(what) {
			if(what == "+") {
				self.selected_quantity++;
			  } else if(what == "-" && self.selected_quantity>1) {
				self.selected_quantity--;
			  } else if(!isNaN(what)) {
				self.selected_quantity = Math.floor(what);
			  }
		  };
		
		
		/* ------------------------------------------------------------
							set detailed description 
		------------------------------------------------------------ */

		self.setDesc = function setDesc(what) {
					// activate tab
			var more_info_tabs = document.getElementById("more_info_tabs");
			var more_info_content = document.getElementById("more_info_content");
			
			for(var i=0; i<more_info_tabs.childNodes.length; i++) {
				if(more_info_tabs.childNodes[i].className == "active") { 
					more_info_tabs.childNodes[i].classList.remove("active");		// if there is active
					more_info_content.childNodes[i].classList.remove("active");		// if there is active
					break;
				  }
			  }
			
			document.getElementById(what+"_tab").classList.add("active");		// add active class to a tab
			document.getElementById(what+"_content").classList.add("active");		// add active class to content box
		  };
		
		
		/* ------------------------------------------------------------
								product image slider 
		------------------------------------------------------------ */
		
		var big_img_width = document.getElementById("big_image_box").offsetWidth;
		
		var current_big_img = 1;

		self.createSlider = function createSlider(images) {
			document.getElementById("slider_content").style.width = (images.length*big_img_width)+"px";			// so it fits all images in line
		  };
		  
		self.showArrows = function showArrows() {
			document.getElementById("slider_arrow_left").style.display = "block";
			document.getElementById("slider_arrow_right").style.display = "block";
			
			if(current_big_img==1) document.getElementById("slider_arrow_left").style.display = "none";			// disappear left on first image	
			if(current_big_img==self.product.img.length) document.getElementById("slider_arrow_right").style.display = "none";			// disappear right on last image
		  };

		self.slideImage = function slideImage(where) {
			if(where=="left" && current_big_img>1) {		// it's not first image
				document.getElementById("slider_content").style.marginLeft = "-"+((current_big_img-2)*big_img_width)+"px";
				current_big_img--;
				self.showArrows();
			  } else if(where=="right" && current_big_img<self.product.img.length) {		// it's not last image
				document.getElementById("slider_content").style.marginLeft = "-"+(current_big_img*big_img_width)+"px";
				current_big_img++;
				self.showArrows();
			  }
		  };
		
		/* ------------------------------------------------------------
							end of product image slider 
		------------------------------------------------------------ */
		
		
		/* ------------------------------------------------------------
								scrolling 
		------------------------------------------------------------ */

		self.scrollTo = function scrollTo(what) {
			$location.hash(what);
			$anchorScroll.yOffset = 150;
			$anchorScroll();
		  };
		
	  }]
  });
