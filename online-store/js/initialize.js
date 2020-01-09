/*
    initialize()
    Purpose: Load date, populate store items with 15 objects and categories. Display store and cart items
    Parameter: None
    Return: None 
*/

// Declare constants 
const FX_RATE = 38.24; // 1 CAD = 38.24 PHP As of Nov 27, 2019
const TAX = 0.13; // Apply 13% HST

// Initialize global arrays for each object
var storeItems = [];
var cartItems = [];

var isEdit = false;

function initialize() {

    // Set current date and time
    var today = new Date();
    console.log(today);

    // Reference the current date
    var currentDate = document.getElementById("currentDate");

    // Initialize 15 objects
    storeItems.push(new StoreItem("PID0001", "Aloha", 50, 20, 5, "Pillows", 15, ["Awesome Product", "Beautiful Design", "Love it!"], "I'm a product description.", "aloha.png"));
    storeItems.push(new StoreItem("PID0002", "Birds Of Paradise", 25, 50, 5, "Pillows", 10, ["Good fabric", "Unique style", "Nice color"], "I'm a product description.", "birdsofparadise.png"));
    storeItems.push(new StoreItem("PID0003", "Cherry Blossom", 25, 50, 5, "Pillows", 10, ["Good fabric", "Unique style", "Nice color"], "I'm a product description.", "cherryblossom.png"));
    storeItems.push(new StoreItem("PID0004", "Coconut Trees", 50, 20, 5, "Bed Sheet", 10, ["Love the color!", "Great product"], "I'm a product description.", "coconuttrees.png"));
    storeItems.push(new StoreItem("PID0005", "Feathers", 50, 20, 5, "Pillows", 10, ["Awesome Product", "Beautiful Design", "Love it!"], "I'm a product description.", "feathers.png"));
    storeItems.push(new StoreItem("PID0006", "Fern", 40, 30, 2, "Wall Decor", 10, ["Great design!", "Nice colors!", "Beautiful!"], "I'm a product description.", "fern.png"));
    storeItems.push(new StoreItem("PID0007", "Flamingo", 50, 20, 5, "Pillows", 10, ["Awesome Product", "Beautiful Design", "Love it!"], "I'm a product description.", "flamingo.png"));
    storeItems.push(new StoreItem("PID0008", "Gumamela", 50, 20, 5, "Bed Sheet", 10, ["Love the color!", "Great product"], "I'm a product description.", "gumamela.png"));
    storeItems.push(new StoreItem("PID0009", "Leaves", 50, 20, 5, "Bed Sheet", 10, ["Love the color!", "Great product"], "I'm a product description.", "leaves.png"));
    storeItems.push(new StoreItem("PID0010", "Lilies of the Valley", 25, 50, 5, "Pillows", 10, ["Good fabric", "Unique style", "Nice color"], "I'm a product description.", "liliesofthevalley.png"));
    storeItems.push(new StoreItem("PID0011", "Palm", 40, 30, 2, "Wall Decor", 10, ["Great design!", "Nice colors!", "Beautiful!"], "I'm a product description.", "palm.png"));
    storeItems.push(new StoreItem("PID0012", "Pineapple", 40, 30, 2, "Wall Decor", 10, ["Great design!", "Nice colors!", "Beautiful!"], "I'm a product description.", "pineapple.png"));
    storeItems.push(new StoreItem("PID0013", "Toucan", 50, 20, 5, "Pillows", 10, ["Awesome Product", "Beautiful Design", "Love it!"], "I'm a product description.", "toucan.png"));
    storeItems.push(new StoreItem("PID0014", "Tropical Prints", 40, 30, 2, "Wall Decor", 10, ["Great design!", "Nice colors!", "Beautiful!"], "I'm a product description.", "tropicalprints.png"));
    storeItems.push(new StoreItem("PID0015", "Wild Orchids", 50, 20, 5, "Pillows", 10, ["Awesome Product", "Beautiful Design", "Love it!"], "I'm a product description.", "wildorchids.png"));

    // Style date display
    currentDate.innerHTML = today;

    // Display Store Items
    displayStoreItems();

    // Display Cart Items
    displayCartItems();

} // end of initialize()