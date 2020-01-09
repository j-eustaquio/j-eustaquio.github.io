/*
    Purpose: Design & Prints - Online Store JavaScript Item Object Constructor Codes
    Author: Jhimlie Eustaquio
    Date Created: December 2, 2019
    Reference Requirements: Project Online Store v1.3
*/

// Create Store Item Objects
function StoreItem(id, nm, prc, qty, maxQty, cat, shipCost, revws, desc, img) {
    this.id = id; // String Example: PID0001
    this.name = nm; // String
    this.price = prc; // Float (Canadian Dollars)
    this.quantityOnHand = qty; // Integer
    this.maxPerCustomer = maxQty; // Integer
    this.category = cat; //String
    this.costOfShipping = shipCost; // Float
    this.reviews = revws; // Array
    this.description = desc; // String
    this.image = img; // String

    /* Update Reviews Object Method */
    this.updateReviews = function (newReview){
        this.reviews.push(newReview);
    }
    
}

// Create Cart Item Objects
function CartItem(id, prc, qty, shipCost) {
    this.id = id; //String
    this.price = prc; // Float (Default: Canadian Dollars)
    this.qty = qty; // Integer
    this.shipping = shipCost; // Float

    /* Update Quantity Object Method */
    this.updateQty = function (newQty){
        this.qty = newQty;
    }

    /* Get Subtotal */
    this.getSubtotal = function() {
        return this.price * this.qty;
    }

}