/*
    Purpose: Design & Prints - Online Store JavaScript Display Functions
    Author: Jhimlie Eustaquio
    Date Created: November 27, 2019
    Reference Requirements: Project Online Store v1.3
*/

/*
    displayStoreItems()
    Purpose: Display Store Items in a Dynamically Generated table
    Parameter: None
    Return: None 
*/
function displayStoreItems() {

    // Reference output for table
    var storeItemsTable = document.getElementById("storeItemsTable");
    var selectedCategory = document.getElementById("selectedCategory");

    // Get Category filter
    var category = selectedCategory.value;

    //Clear out existing table
    storeItemsTable.innerHTML = "";

    // Retrieve selected currency
    var selectedCurrency = document.getElementById("selectedCurrency");
    currency = selectedCurrency.value;

    // Create the Table element 
    var theTable = document.createElement("table");

    // Modify table css attributes
    //theTable.style.border = "1px solid #999999";
    theTable.width = "100%";

    // Create rows to the table
    var tr = document.createElement("tr");

    // Place each product in a column
    for (let i = 0; i < storeItems.length; i++) {

        // Create column elements
        var td = document.createElement("td");
        td.className = "eachProduct";
        td.style.border = "1px solid #999999";
        td.style.textAlign = "center";
        td.style.padding = "20px";

        let theProduct = storeItems[i];

        // Validate category filter
        if (theProduct.category == category || category === "All") {

            // Appending the contents
            var productImage = document.createElement("img");
            productImage.src = "images/" + theProduct.image;
            productImage.style.width = "200px";
            td.appendChild(productImage);
            td.innerHTML += "<br/>ID:   " + theProduct.id + "<br/>";
            td.innerHTML += "Name:  <strong>" + theProduct.name + "</strong><br/>";
            if (currency === "CAD") {
                td.innerHTML += "Price:     <strong>" + (theProduct.price).toFixed(2) + " " + currency + "</strong><br/>";
            } else if (currency === "PHP") {
                td.innerHTML += "Price:     <strong>" + (theProduct.price * FX_RATE).toFixed(2) + " " + currency + "</strong><br/>";
            }
            td.innerHTML += "In-Stock:  " + theProduct.quantityOnHand + "<br/>";
            td.innerHTML += "Max item per customer:     " + theProduct.maxPerCustomer + "</p>";

            // The rating image
            var ratingImage = document.createElement("img");

            ratingImage.src = "images/rating.png";
            ratingImage.style.width = "30%";
            td.innerHTML += "Rating: ";
            td.appendChild(ratingImage);
            td.innerHTML += "<br/><br/>";

            // The Add to Cart Button
            var theAddCartBtn = document.createElement("input");
            theAddCartBtn.setAttribute("type", "button");
            theAddCartBtn.setAttribute("value", "Add to Cart");
            theAddCartBtn.style.background = "#bf9521";
            theAddCartBtn.style.color = "white";
            theAddCartBtn.style.fontWeight = "bolder";
            theAddCartBtn.style.fontSize = "14px";
            theAddCartBtn.style.borderRadius = "5px";
            theAddCartBtn.style.padding = "10px";
            theAddCartBtn.addEventListener("click", function () {
                console.log("THE PROD ID ::: " + theProduct.id);
                addToCart(theProduct.id);

            });

            // Append the Add to Cart Button to the column
            td.appendChild(theAddCartBtn);

            // Append the column to the row
            tr.appendChild(td);

        }

    } // end of for loop

    // Append row to the table
    theTable.appendChild(tr);

    // Append to Store Items table
    storeItemsTable.appendChild(theTable);

} // end of displayStoreItems

