;(function(window, document, $) {

    EmberSample.Router.map(function() {
        this.route('products');
        this.route("newProduct", {path: "/products/new"});
        this.route("editProduct", {path: "/product/:product_id"} )
    });

}(window, document, $));
