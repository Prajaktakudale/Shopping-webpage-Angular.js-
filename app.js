(function() {
  var app = angular.module('gemStore', []);

  app.controller('StoreController', function() {
    this.products = gems;
  });

  app.controller("TabController", function() {
    this.tab = 1;

    this.isSet = function(checkTab) {
      return this.tab === checkTab;
    };

    this.setTab = function(setTab) {
      this.tab = setTab;
    };
  });

  app.controller('GalleryController', function(){
    this.current = 0;

    this.setCurrent = function(imageNumber){
      this.current = imageNumber;
    };
  });

  app.controller("ReviewController", function(){

    this.review = {};

    this.addReview = function(product){
      product.reviews.push(this.review);
      this.review = {};
    };
  });

  var gems = [{
      name: 'Pencil',
      description: "Bold Pencils Dark and thick lead for effortless writing Soft wood for easy sharpening.",
      price: 10.50,
      color: '#CCC',
      faces: 14,
      images: [
              "/Users/prajaktakudale/Angular/ASS/pencil.jpg"
      ],
      reviews: [{
        stars: 5,
        body: "I love this pencil!",
        author: "praju@example.com",
      }]
    }, {
      name: 'Eraser',
      description: "Made up of soft high quality material Erases graphite perfectly without damaging the paper.",
      price: 12.70,
      color: '#EEE',
      faces: 12,
      images: [
              "/Users/prajaktakudale/Angular/ASS/era.jpg"
      ],
      reviews: [{
        stars: 3,
        body: "This Earaser is OK OK ...",
        author: "me@example.com",
      }]
    }, {
      name: 'Sharpner',
      description: "Scientifically angled blade with anti rust coating Contured body for a firm grip.",
      price: 15.90,
      color: '#000',
      faces: 6,
      images: [
              "/Users/prajaktakudale/Angular/ASS/sharp.jpg"
      ],
      reviews: [{
        stars: 4,
        body: "This Sharpner is very useful and can be used longtime.",
        author: "pk@example.com",
      }]
    }];
})();
