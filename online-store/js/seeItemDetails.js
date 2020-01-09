/*
    seeItemDetails()
    Purpose: Retrieve product and alert item details and reviews
    Parameter: None
    Return: None
*/
function seeItemDetails(){

    var itemDetails = "";

    // Retrieve product id
    var reviewProductId = document.getElementById("reviewProductId");

    // Find the Product using the helper function findProductByID()
    var theProduct = findProductByID(reviewProductId.value, "store");

    // Retrieve selected currency
    var selectedCurrency = document.getElementById("selectedCurrency");
    currency = selectedCurrency.value;

    //var isValid = validateInput(theProduct, "validateID");
    document.getElementById("validateID").innerHTML = "";
    reviewProductId.className = " default";

    //if(isValid === true){
    if(theProduct !== null){
        itemDetails += "Item Details: \n";
        itemDetails += "Product ID: " + theProduct.id + "\n";
        itemDetails += "Product Name: " + theProduct.name + "\n";
        if (currency === "CAD") {
            itemDetails += "Price: " + theProduct.price.toFixed(2) + " " + currency + "\n";
        } else if (currency === "PHP") {
            itemDetails += "Price: " + (theProduct.price * FX_RATE).toFixed(2) + " " + currency + "\n";
        }
        itemDetails += "Quantity Available: " + theProduct.quantityOnHand + "\n";
        itemDetails += "Max Per Customer: " + theProduct.maxPerCustomer + "\n";
        if (currency === "CAD") {
            itemDetails += "Cost of Shipping: " + theProduct.costOfShipping.toFixed(2) + " " + currency + "\n\n";
        } else if (currency === "PHP") {
            itemDetails += "Cost of Shipping: " + (theProduct.price * FX_RATE).toFixed(2) + " " + currency + "\n\n";
        }
        itemDetails += "Description: \n";
        itemDetails += theProduct.description + "\n\n";
        itemDetails += "Reviews: \n"; 

        // Display each reviews per product
        for(var i = 0; i < theProduct.reviews.length; i++){
            itemDetails += theProduct.reviews[i] + "\n";
        }

    } else {
        itemDetails = "Product ID Not Found!";
    }

    // alert item details and reviews
    alert(itemDetails);

}