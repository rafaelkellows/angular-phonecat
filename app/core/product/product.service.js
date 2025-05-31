angular.
  module('core.product').
  factory('Product', ['$resource',
    function($resource) {
      return $resource('product-list/:phoneId.json', {}, {
        query: {
          method: 'GET',
          params: {phoneId: 'products'},
          isArray: true
        }
      });
    }
  ]);