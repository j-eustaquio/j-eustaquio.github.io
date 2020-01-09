/*
    validateInput()
    Purpose: Validate Input Boxes, Change CSS ClassName and Output Validation Messages next to input elements
    Parameter(s): 
        thefield - the input field
        theMsgElement - the message element id
    Return: Boolean
*/
function validateInput(thefield, theMsgElement) {

    // Default values
    if(theMsgElement !== null){
        document.getElementById("validateID").innerHTML = "";
        document.getElementById("validateMsg").innerHTML = "";
    }
    document.getElementById(thefield.id).className = " default";

    try {
        console.log("thefield.id :::" + thefield.id);
        console.log("thefield.value :::" + thefield.value);
        var theProduct = findProductByID(thefield.value, "store");

        // If Product ID is empty
        if (thefield.value === null || thefield.value === "") {
            console.log("return false - invalid");
            document.getElementById(theMsgElement).innerHTML = "Must not be empty!";
            document.getElementById(theMsgElement).style.color = "red";
            document.getElementById(theMsgElement).style.fontSize = "12px";
            document.getElementById(thefield.id).className += " invalid";
            return false;
        }
        else if (theProduct == null && thefield.id === "reviewProductId") {
            console.log("return false - invalid");
            document.getElementById(theMsgElement).innerHTML = "Product ID Not Found!";
            document.getElementById(theMsgElement).style.color = "red";
            document.getElementById(theMsgElement).style.fontSize = "12px";
            document.getElementById(thefield.id).className += " invalid";
            return false;
        }
        // If Product ID is Valid
        else if (thefield.id === "reviewProductId" && thefield.value === theProduct.id) {
            console.log("theProduct.id:::" + theProduct.id);
            console.log("return true - valid");
            document.getElementById("validateID").innerHTML = "";
            document.getElementById(thefield.id).className += " default";
            return true;
        }
        // If Message Text is not empty
        else if (thefield.id === "reviewMsg" && thefield.value !== "") {
            console.log("return true - valid");
            document.getElementById("validateMsg").innerHTML = "";
            document.getElementById(thefield.id).className += " default";
            return true;
        }
    } catch (err) {
        console.log(err);
        return false;
    }

} // end of validateInput