angular.
  module('core.product').
  factory('Product', ['$resource',
    function($resource) {
      return $resource('products/:productID.json', {}, {
        query: {
          method: 'GET',
          params: {productID: 'products'},
          isArray: true
        }
      });
    }
  ]);

  