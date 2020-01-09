/* 
    displayCartSummary()
    Purpose: Display cart summary and order totals
    Paramter: None
    Return: None
*/
function displayCartSummary() {

    // Reference for cart summary display
    var cartSummary = document.getElementById("cartSummary");

    // Retrieve selected currency
    var selectedCurrency = document.getElementById("selectedCurrency");
    currency = selectedCurrency.value;

    // Clear out existing input
    cartSummary.innerHTML = "";

    var itemsSubtotal = 0;
    var estimatedShipping = 0;
    var subtotal = 0;
    var estimatedTax = 0;
    var orderTotal = 0;

    for (var i = 0; i < cartItems.length; i++) {

        var theProduct = cartItems[i];

        itemsSubtotal += theProduct.price * theProduct.qty;
        // Sum up the total of shipping cost for each item
        estimatedShipping += findProductByID(theProduct.id, "store").costOfShipping; 

    }

    // Compute for Order Totals with Tax
    subtotal += itemsSubtotal + estimatedShipping;
    estimatedTax += subtotal * TAX;
    orderTotal += subtotal + estimatedTax;

    //Output the cart summary
    if (currency === "CAD") {

        cartSummary.innerHTML += "Items Subtotal : " + itemsSubtotal.toFixed(2) + " " + currency + "<br/>";
        cartSummary.innerHTML += "Estimated Shipping: " + estimatedShipping.toFixed(2) + " " + currency + "<br/><br/>";
        cartSummary.innerHTML += "Subtotal : " + subtotal.toFixed(2) + " " + currency + "<br/>";
        cartSummary.innerHTML += "Estimated Tax : " + estimatedTax.toFixed(2) + " " + currency + "<br/><br/>";
        cartSummary.innerHTML += "<strong>Order Total: " + orderTotal.toFixed(2) + " " + currency + "</strong><br/><br/>";

    } else if (currency === "PHP") {

        cartSummary.innerHTML += "Items Subtotal PHP : " + (itemsSubtotal * FX_RATE).toFixed(2) + " " + currency + "<br/>";
        cartSummary.innerHTML += "Estimated Shipping: " + (estimatedShipping * FX_RATE).toFixed(2) + " " + currency + "<br/><br/>";
        cartSummary.innerHTML += "Subtotal : " + (subtotal * FX_RATE).toFixed(2) + " " + currency + "<br/>";
        cartSummary.innerHTML += "Estimated Tax : " + (estimatedTax * FX_RATE).toFixed(2) + " " + currency + "<br/><br/>";
        cartSummary.innerHTML += "<strong>Order Total: " + (orderTotal * FX_RATE).toFixed(2) + " " + currency + "</strong><br/><br/>";

    }

} // end of displayCartSummary