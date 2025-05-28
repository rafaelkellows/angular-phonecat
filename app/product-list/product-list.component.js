// Register `phoneList` component, along with its associated controller and template
angular.
  module('productList').
  component('productList', {  // This name is what AngularJS uses to match to the `<phone-list>` element.
    templateUrl: 'product-list/product-list.template.html',
    controller: ['$http',
      function ProductListController($http) {
        var self = this;
        self.orderProp = 'title';
        
        $http.get('product-list/products.json').then(function(response) {
          self.orders = response.data;
        });
      }
    ]

  });