// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneList').
  component('phoneList', {  // This name is what AngularJS uses to match to the `<phone-list>` element.
    templateUrl: 'phone-list/phone-list.template.html',
    controller: ['$http',
      function PhoneListController($http) {
        var self = this;
        self.orderProp = 'name';

        $http.get('phones/phones.json').then(function(response) {
          self.phones = response.data;
        });
      }
    ]

  });