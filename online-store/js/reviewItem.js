/*
    reviewItem()
    Purpose: Validate that the product id and review textbox has data in it.
    Parameter: Product ID
    Return: None
*/
function reviewItem() {

    // Retrieve Product ID & Review Message
    var reviewProductId = document.getElementById("reviewProductId");
    var reviewMsg = document.getElementById("reviewMsg");

    // Retrieve Message Element IDs
    var validateID = document.getElementById("validateID");
    var validateMsg = document.getElementById("validateMsg");

    // Find the Product using the helper function findProductByID()
    var theProduct = findProductByID(reviewProductId.value, "store");

    // Validate Product ID & Review Message
    isRvwPrdId = validateInput(reviewProductId, validateID);
    isRvwMsg = validateInput(reviewMsg, validateMsg);

    if (isRvwPrdId === true && isRvwMsg === true) {

        // Update storeItems object method
        theProduct.updateReviews(reviewMsg.value);
        console.log("Review Saved in TEMP storeItems");

        // Clear review message and product id
        reviewProductId.value = "";
        reviewMsg.value = "";

    }

    // If Product ID is empty and only review message is submitted 
    if (isRvwPrdId === false){
        validateID.innerHTML = "Product ID Not Found!";
        validateID.style.color = "red";
        validateID.style.fontSize = "12px";
        reviewProductId.className += " invalid";
    }
    
    // If Review Message is empty and only product id is being submitted
    if (isRvwMsg === false){
        validateMsg.innerHTML = "Must not be empty!";
        validateMsg.style.color = "red";
        validateMsg.style.fontSize = "12px";
        reviewMsg.className += " invalid";
    }

}

// Dec 11: Added Reset Review Form function to clear validations
function resetReviewForm() {

    // Retrieve Product ID & Review Message
    var reviewProductId = document.getElementById("reviewProductId");
    var reviewMsg = document.getElementById("reviewMsg");

    reviewProductId.className = "default";
    reviewMsg.className = "default";

    // Retrieve Message Element IDs
    var validateID = document.getElementById("validateID");
    var validateMsg = document.getElementById("validateMsg");

    validateID.innerHTML = "";
    validateMsg.innerHTML = "";

}