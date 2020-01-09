/*
    findProductByID()
    Purpose: Function that will find the product by ID
    Parameter(s): 
        productID - the product ID
        array - type of array (store or cart)
    Return: the item object or NULL
*/
function findProductByID(productID, array) {

    if (array === "store"){
        for (var i = 0; i < storeItems.length; i++) {
            if (storeItems[i].id === productID) {
                // Return the Store Item Object
                return storeItems[i];
            }
        }
        return null;
    } else if (array === "cart") {
        for (var i = 0; i < cartItems.length; i++) {
            if (cartItems[i].id === productID) {
                // Return the Cart Item Object
                return cartItems[i];
            }
        }
        return null;
    }
}