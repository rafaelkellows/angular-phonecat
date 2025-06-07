angular.
  module('productList').
  component('productList', {
    templateUrl: 'product-list/product-list.template.html',
    controller: ['Product',
      function ProductListController(Product) {
        this.products = Product.query();
        this.subproducts = this.products.subProductsItens;
        /*this.orderProp = 'title';*/
      }
    ]
  });