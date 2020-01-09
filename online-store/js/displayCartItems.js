/*
    displayCartItems()
    Purpose: Display Cart Items in a Dynamically Generated table
    Parameter: None
    Return: None 
*/
function displayCartItems() {

    // Reference output for table
    var cartItemsTable = document.getElementById("cartItemsTable");

    //Clear out existing table
    cartItemsTable.innerHTML = "";

    // Retrieve selected currency
    var selectedCurrency = document.getElementById("selectedCurrency");
    currency = selectedCurrency.value;

    // Create the Table element 
    var theTable = document.createElement("table");

    // Modify table css attributes
    theTable.style.border = "1px solid #999999";
    theTable.width = "100%";

    // Create rows to the table
    var tr = document.createElement("tr");

    // Is cart empty?
    if (cartItems.length == 0) {

        // Create one column
        var td = document.createElement("td");
        td.style.width = "100%";
        td.style.textAlign = "center";
        td.style.padding = "20px";

        // If there is nothing in the cart, output “No Items in Cart”
        td.innerHTML = "There are no items in your cart. <br/> Go ahead, add anything you like!";
        tr.appendChild(td);

    }

    // Create column elements
    // Column for the Image
    var col1 = document.createElement("td");
    col1.setAttribute("id", "itemPic");
    col1.style.width = "30px";
    col1.style.padding = "10px";
    col1.style.marginLeft = "20px";

    // Column for the Product ID
    var col2 = document.createElement("td");
    col2.style.width = "200px";
    col2.style.padding = "10px";

    // Column for the Price
    var col3 = document.createElement("td");
    col3.style.width = "250px";
    col3.style.padding = "10px";

    // Column for the Quantity
    var col4 = document.createElement("td");
    col4.style.width = "50px";
    col4.style.padding = "10px";

    // Column for the Sub Total
    var col5 = document.createElement("td");
    col5.style.width = "250px";
    col5.style.padding = "10px";

    // Column for Edit icon
    var col6 = document.createElement("td");
    col6.style.width = "25px";

    // Column for Delete icon
    var col7 = document.createElement("td");
    col7.style.width = "25px";

    // Create Column Headers for Product ID
    if (cartItems.length !== 0) {
        col1.appendChild(document.createTextNode("Item"));
        col1.style.marginLeft = "20px";
        col1.innerHTML += "<br/>";
        col2.appendChild(document.createTextNode("ID"));
        col2.innerHTML += "<br/>";
        col3.appendChild(document.createTextNode("Price"));
        col3.innerHTML += "<br/>";
        col4.appendChild(document.createTextNode("Quantity"));
        col4.innerHTML += "<br/>";
        col5.appendChild(document.createTextNode("Sub Total"));
        col5.innerHTML += "<br/>";
        col6.innerHTML += "<br/>";
        col7.innerHTML += "<br/>";

        tr.appendChild(col1);
        tr.appendChild(col2);
        tr.appendChild(col3);
        tr.appendChild(col4);
        tr.appendChild(col5);
        tr.appendChild(col6);
        tr.appendChild(col7);
    }

    // Creating row for each product
    var row = document.createElement("tr");

    // If cart is not empty, place each product in a column
    for (let i = 0; i < cartItems.length; i++) {

        // Reference the product
        let theProduct = cartItems[i];

        // Append item image
        var productImage = document.createElement("img");
        var theProductImageSrc = findProductByID(theProduct.id, "store").image;
        productImage.src = "images/" + theProductImageSrc;
        productImage.style.width = "90%";
        productImage.style.marginLeft = "20px";
        productImage.style.marginBottom = "5px";
        col1.innerHTML += "<br/>";
        col1.appendChild(productImage);

        // Append product id
        col2.innerHTML += "<br/>" + theProduct.id + "<br/>";

        // Append the price
        if (currency === "CAD") {
            col3.innerHTML += "<br/>" + (theProduct.price).toFixed(2) + " " + currency + "<br/>";
        } else if (currency === "PHP") {
            col3.innerHTML += "<br/>" + (theProduct.price * FX_RATE).toFixed(2) + " " + currency + "<br/>";
        }

        // Append the quantity
        col4.innerHTML += "<br/>" + theProduct.qty + "<br/>";

        // Append the subtotal
        if (currency === "CAD") {
            col5.innerHTML += "<br/>" + theProduct.getSubtotal().toFixed(2) + " " + currency + "<br/>";
        } else if (currency === "PHP") {
            col5.innerHTML += "<br/>" + (theProduct.getSubtotal() * FX_RATE).toFixed(2) + " " + currency + "<br/>";
        }

        //Append the Edit cart button
        var theEditCartBtn = document.createElement("input");
        theEditCartBtn.setAttribute("id", "editCartBtn");
        theEditCartBtn.setAttribute("type", "button");
        theEditCartBtn.setAttribute("value", "Edit");
        // Change color of the Edit Button to Gray when Edit Mode is On
        if (isEdit === true) {
            theEditCartBtn.style.background = "#999999";
            theEditCartBtn.style.color = "#FFFFFF";
        } else {
            theEditCartBtn.style.background = "#bf9521";
            theEditCartBtn.style.color = "#FFFFFF";
        }
        theEditCartBtn.style.fontWeight = "bolder";
        theEditCartBtn.style.fontSize = "10px";
        theEditCartBtn.style.borderRadius = "5px";
        theEditCartBtn.style.paddingBottom = "1px";
        theEditCartBtn.style.marginBottom = "1px";
        theEditCartBtn.addEventListener("click", function () {

            // Turn on Edit Mode
            editItem(i);
            isEdit = true;

            // View and Edit item on Cart Using Product ID
            //if(theProduct.id === ?){
            viewAndEditCartItem(theProduct.id);
            //}

        });

        col6.appendChild(document.createElement("br"));
        col6.appendChild(theEditCartBtn);
        col6.appendChild(document.createElement("br"));

        // Dec 11: Fix for filtering specific item on array
        function removeHandler(){
            document.querySelector("#editCartBtn").removeEventListener("click", myFunction);
        }

        //Append the Delete cart button
        var theRemoveToCartBtn = document.createElement("input");
        theRemoveToCartBtn.setAttribute("type", "button");
        theRemoveToCartBtn.setAttribute("value", "Delete");
        theRemoveToCartBtn.style.background = "#bf9521";
        theRemoveToCartBtn.style.color = "#FFFFFF";
        theRemoveToCartBtn.style.fontWeight = "bolder";
        theRemoveToCartBtn.style.fontSize = "10px";
        theRemoveToCartBtn.style.borderRadius = "5px";
        theRemoveToCartBtn.style.paddingBottom = "1px";
        theRemoveToCartBtn.style.marginRight = "20px";
        theRemoveToCartBtn.style.marginBottom = "1px";
        theRemoveToCartBtn.addEventListener("click", function () {

            // Call remove to cart function using cart array index
            removeToCart(i);

        });
        col7.appendChild(document.createElement("br"));
        col7.appendChild(theRemoveToCartBtn);
        col7.appendChild(document.createElement("br"));

        row.appendChild(col1); // Append Item Picture to the row
        row.appendChild(col2); // Append Product ID to the row 
        row.appendChild(col3); // Append Price to the row
        row.appendChild(col4); // Append Quantity to the row
        row.appendChild(col5); // Append Sub Total to the row 
        row.appendChild(col6); // Append Edit button to the row
        row.appendChild(col7); // Append Delete button to the row

        row.style.border = "1px solid #999999";
        row.style.verticalAlign = "top";
        row.style.textAlign = "center";
        row.style.padding = "20px";
    }

    // After each loop, append the row to main row
    tr.appendChild(row);

    // Append the main row to the table
    theTable.appendChild(tr);

    // Append to Cart Items Table
    cartItemsTable.appendChild(theTable);

    // Cart Summary
    displayCartSummary();

} // end of displayCartItems