class ProductStorage {
    // Add Product
    static addProduct(p:Product):void {
        // Get exsisting products from local storage
        let prods = ProductStorage.getAllProducts();
        // Add the product
        prods.push(p);
        // Turn it into a JSON string again
        let data = JSON.stringify(prods);
        // Re-add it back to local storage
        localStorage.setItem("prods", data);
    }

    // Retrieve all products
    /**
     * Returns all products, or returns an empty array if no products are stored.
     */
    static getAllProducts():Product[] {
        let data = localStorage.getItem("prods");
        if(data == null)
            return new Array<Product>();
        return <Product[]>JSON.parse(data);
    }

    // Get number of products
    static getNumOfProducts():Number {
        return ProductStorage.getAllProducts().length;
    }
}