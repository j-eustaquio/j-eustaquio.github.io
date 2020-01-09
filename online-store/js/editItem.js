function editItem(theBtn) {

    // Turn on or off edit mode whenever button is clicked!
    isEdit = !isEdit;
    console.log("Edit clicked!")

}

function viewAndEditCartItem(productId) {

    // Retrieve selected currency
    var selectedCurrency = document.getElementById("selectedCurrency");
    currency = selectedCurrency.value;

    // Find the product from Store Items
    var theProduct = findProductByID(productId, "cart");
    console.log(theProduct);

    // Set the item detail to visible
    var editItemOnCart = document.getElementById("editItemOnCart");
    editItemOnCart.style.display = "block";

    // Append the image
    var editItemImage = document.getElementById("editItemImage");
    editItemImage.src = "images/" + findProductByID(productId, "store").image;
    editItemImage.style.width = "30%";

    // Append the ID
    var editItemID = document.getElementById("editItemID");
    editItemID.innerHTML = "Product ID:   " + theProduct.id;

    // Append the ID
    var editItemName = document.getElementById("editItemName");
    editItemName.innerHTML = "Product Name:   " + findProductByID(productId, "store").name;

    // Append the quantity
    let quantity = 1;
    var editItemSelectedQty = document.getElementById("editItemSelectedQty");
    editItemSelectedQty.setAttribute("type", "number");
    editItemSelectedQty.setAttribute("value", quantity);
    editItemSelectedQty.setAttribute("min", 1);
    editItemSelectedQty.setAttribute("max", findProductByID(productId, "store").maxPerCustomer);
    editItemSelectedQty.style.width = "30px";
    editItemSelectedQty.value = 1; // Dec 11: Fix for resetting values of quantity each time an item is editted.

    // Append the "Save Changes" Done Editing Button
    var editItemDoneBtn = document.getElementById("editItemDoneBtn");
    editItemDoneBtn.setAttribute("type", "button");
    editItemDoneBtn.setAttribute("value", "Save Changes");
    editItemDoneBtn.style.background = "#bf9521";
    editItemDoneBtn.style.color = "white";
    editItemDoneBtn.style.fontWeight = "bolder";
    editItemDoneBtn.style.fontSize = "14px";
    editItemDoneBtn.style.borderRadius = "5px";
    editItemDoneBtn.style.padding = "10px";
    editItemDoneBtn.style.display = "block";


    // On change of quantity
    editItemSelectedQty.addEventListener("change", function () {

        console.log("ON CHANGE : THE PROD ID ::: " + theProduct.id); // correct product id per click!
        console.log("editItemSelectedQty.value::: " + editItemSelectedQty.value);

        document.getElementById("qtyMsg").innerHTML = "";
        editItemSelectedQty.className = "defaultField";
        editItemDoneBtn.style.display = "block";

        // Validate Qty values
        try {

            // If cart is empty
            if(theProduct === null){
                editItemOnCart.style.display = "none";
            }

            // If Qty is more than the current stock
            if (editItemSelectedQty.value > findProductByID(productId, "store").quantityOnHand) {
                document.getElementById("qtyMsg").innerHTML = "Sorry, not enough stock!";
                editItemSelectedQty.className += " notEnoughStock";
                document.getElementById("qtyMsg").style.color = "orange";
                editItemDoneBtn.style.display = "none";
            }

            // If Qty is more than Max per Customer
            if (editItemSelectedQty.value <= findProductByID(productId, "store").quantityOnHand && editItemSelectedQty.value > findProductByID(productId, "store").maxPerCustomer) {
                document.getElementById("qtyMsg").innerHTML = "Maximum of " + findProductByID(productId, "store").maxPerCustomer + " per customer.";
                editItemSelectedQty.className += " maxReached";
                document.getElementById("qtyMsg").style.color = "blue";
                editItemDoneBtn.style.display = "none";
            }

            // If Qty is equals to zero
            if (editItemSelectedQty.value === "0") {
                editItemDoneBtn.setAttribute("display", "none");
                document.getElementById("qtyMsg").innerHTML = "Quantity must be greater than zero!";
                document.getElementById("qtyMsg").style.color = "red";
                editItemSelectedQty.className += " invalid";
                editItemDoneBtn.style.display = "none";
            }

            // If Qty is valid
            if (editItemSelectedQty.value > 0 || editItemSelectedQty.value <= findProductByID(productId, "store").maxPerCustomer) {
                //editItemSelectedQty.className += " valid";
                quantity = editItemSelectedQty.value;
            }
        } catch (err) {
            console.log(err);
        }

        console.log("ON CHANGE : QUANTITY ::: " + quantity); // correct quantity per click!

    });

    editItemDoneBtn.addEventListener("click", function () {

        console.log("THE PROD ID ::: " + theProduct.id);
        console.log("THE NEW QTY ::: " + editItemSelectedQty.value);

        var theProductToChange = findProductByID(theProduct.id, "cart");

        theProductToChange.updateQty(editItemSelectedQty.value);

        // Display Cart Items
        displayCartItems();

        // Set Item Detail View to hidden
        editItemOnCart.style.display = "none";

        // Set Edit button to default color
        isEdit = false;

    });

}