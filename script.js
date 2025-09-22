function Showrecipe(button) { //Function used by the dropdown buttons in the different cuisine html 
    var card = button.closest('.recipe-card'); // Finds the nearest recipe card making sure it only affects the clicked card
    var content = card.querySelector('.dropdown-content'); // Finds the content of the clikked card
    if (content.style.display === "block") { // If the content is visible the function hides it
        content.style.display = "none";
        button.querySelector('.arrow').innerHTML = "&#x25BC;";// This line changes the arrow direction
    } else {
        content.style.display = "block"; // If the content is hidden the function shows it
        button.querySelector('arrow').innerHTML = "&#x25B2;"; 
    } 
}