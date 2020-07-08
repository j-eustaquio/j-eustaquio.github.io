/*
    openMenu()
    Purpose: Open Nav Menu on Mobile View
    Parameter: None
    Return: None 
*/
function openMenu() {

    // Reference nav links
    var links = document.getElementById("navLinks");

    if (links.style.display === "block") {
        links.style.display = "none";
    } else {
        links.style.display = "block";
    }
}