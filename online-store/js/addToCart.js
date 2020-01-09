/*
    addToCart()
    Purpose: Add To Cart by using productId
    Parameter: productId
    Return: None
*/
function addToCart(productId){

    var thisProduct = findProductByID(productId, "store");
    console.log(thisProduct);

    // Find the product in the cart item
    var productInCart = findProductByID(productId, "cart");
    console.log(productInCart);

    if(productInCart === null){
        // Add a new entry on the cart
        cartItems.push(new CartItem(productId, thisProduct.price, 1, thisProduct.costOfShipping));
    } else if (productInCart.id === productId && productInCart.qty < thisProduct.maxPerCustomer) {
        // Add 1 to the same product
        var theQuantity = parseInt(productInCart.qty) + 1; //Dec 11: Fix for adding quantity after edit
        productInCart.updateQty(theQuantity);
    }

    // Reload Cart Items
    displayCartItems(); // Cart Items will also load the summary calculations

}