function filterByCategory(products) {
    return function (category) {
        return products.filter(function(product) {
            return product.category === category;
        });
    };
}
var products = [
    { name: "Shirt", category: "Clothing" },
    { name: "pants", category: "Clothing" },
    { name: "hat", category: "Acccessories" },
    { name: "sunglasses", category: "Accessories" },
];
var clothingProducts = filterByCategory(products)("CSlothind");
console.log(clothingProducts);