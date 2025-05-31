angular.
  module('phonecatApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/home', {
          template: '<home-page></home-page>'
        }).
        when('/products', {
          template: '<product-list></product-list>'
        }).
        when('/phones', {
          template: '<phone-list></phone-list>'
        }).
        when('/phones/:phoneId', {
          template: '{{$ctrl.phoneId}} <phone-detail></phone-detail>'
        }).
        otherwise('/home');
    }
  ]);