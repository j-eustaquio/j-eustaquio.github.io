/* 
    currencyChange()
    Purpose: Selected currency should be displayed
    Parameter: amount
    Output: converted amount
*/

function currencyChange(amount) {

    // Retrieve selected currency
    var selectedCurrency = document.getElementById("selectedCurrency");
    currency = selectedCurrency.value;

    var convertedAmount = 0;

    if (currency === "PHP") {
        //return amount * FX_RATE;
        convertedAmount = amount * FX_RATE;
    } else if (currency === "CAD") {
        convertedAmount = amount / FX_RATE;
    }

    // Re-initializing display arrays
    // NOTE: Temp Cart Items will be deleted!!!
    displayStoreItems();
    displayCartItems();

    return convertedAmount;
} //end of currencyChange