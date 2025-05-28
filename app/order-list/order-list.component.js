// Register `phoneList` component, along with its associated controller and template
angular.
  module('orderList').
  component('orderList', {  // This name is what AngularJS uses to match to the `<phone-list>` element.
    templateUrl: 'order-list/order-list.template.html',
    controller: ['$http',
      function OrderListController($http) {
        var self = this;
        self.orderProp = 'title';
        
        $http.get('phones/orders.json').then(function(response) {
          self.orders = response.data;
        });
      }
    ]

  });