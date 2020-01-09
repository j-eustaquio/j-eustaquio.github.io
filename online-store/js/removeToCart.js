/*
    removeToCart()
    Purpose: Remove items to cart
    Parameter: Cart Array Index
    Return: None
*/
function removeToCart(index){

    cartItems.splice(index, 1); // number of items to delete = 1

    // Reload cart times
    displayCartItems();

}

