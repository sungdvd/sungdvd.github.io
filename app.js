(function() {
  var app = angular.module('store', ['RatingTutorial']);


  app.controller('StoreController', function(){
    this.products = product;

    this.addPost = function(post) {
      this.products.push(post);
      this.products = {};
    };

  });

  app.controller("ReviewController", function(){
    this.review = {};

    this.addReview = function(product) {
      this.review.createdOn = Date.now();
      product.reviews.push(this.review);
      this.review = {};
    };

  });

  
  app.controller('PanelController', function(){
  	this.tab = 1;

  	this.selectTab = function(setTab) {
  		this.tab = setTab;
  	};
  	this.isSelected = function(checkTab) {
  		return this.tab == checkTab;
  	};
  });


  app.controller('GalleryController', function(){
    this.current = 0;
    this.setCurrent = function(newGallery){
      this.current = newGallery || 0;
    };
  });
 
  app.directive('productPanels', function() {
    return {
      restrict: 'E',
      templateUrl: 'product-panels.html'
    };
  });
  app.controller('PanelController', function(){
    this.tab = 1;

    this.selectTab = function(setTab) {
      this.tab = setTab;
    };
    this.isSelected = function(checkTab) {
      return this.tab == checkTab;
    };
  });


  var product = [
    { 
    	name: 'Strawberry OG', 
    	price: 40.00, 
    	description: 'Made from real Strawberries', 
    	canPurchase: true,
    	specs: "9.5/10",
      reviews: [
      {
        ratings: '5',
        body: "Has to be the best strawberry in town.",
        author: "Mary"
      },
      {
        ratings: '1',
        body: "I mean... it's a strawberry",
        author: "Blueberry"
      }],
    	images: [
    	"PerfectStrawberry.jpg"],
      weight: '9 kg',
      color: 'Gold',
      available: 'Yes'
		},
    { 
    	name: 'Dank Tank', 
    	price: 15.95, 
    	specs: '4/5',
    	description: 'So dank, hits like a tank', 
    	canPurchase: true,
      reviews: [
      {
        ratings: '5', 
        body: "Ran me over.",
        author: "John"
      },
      {
        ratings: '5',
        body: "I thought I was buying an actual tank.",
        author: "Arnold"
      }],
    	images: [
    	"download.jpg"],
      weight: '2 lbs',
      color: 'Green',
      available: 'Yes'
    },
    { 
    	name: 'Holy Grail', 
    	price: 19.99, 
    	specs: '3.5/5',
    	description: 'The holiest grail of them all', 
    	canPurchase: true,
    	images: [
    	"HOLY-GRAIL.jpg"],
      reviews: [
      {
        ratings: '4', 
        body: "This saved my life.",
        author: "Priest"
      },
      {
        ratings: '1',
        body: "Fake. I have the real one.",
        author: "Harrison Ford"
      }],
      weight: '15 kg',
      color: 'Gold',
      available: 'Yes'

    },
    { 
    	name: 'Blueberry', 
    	price: 19.95, 
    	specs: '4/5',
    	description: 'Just a blueberry', 
    	canPurchase: true,
    	ratings: "6/10",
    	images: [
    	"blueberry.jpg"]
    },
    { 
    	name: 'Ice', 
    	price: 39.95, 
    	specs: '4.9/5',
    	description: 'Name says it all', 
    	canPurchase: true,
    	ratings: "10/10",
    	images: [
    	"ice.jpg"]
   }
  ];
})();