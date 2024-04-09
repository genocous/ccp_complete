window.onload = function() {
    // Get references to the button and the navigation menu
    var toggleNavButton = document.getElementById("toggleNavButton");
    var mainNav = document.getElementById("mainNav");

    // Add event listener to the button to toggle the visibility of the navigation menu
    toggleNavButton.addEventListener("click", function() {
        // Toggle the 'hidden' class on the navigation menu
        mainNav.classList.toggle("hidden");
    });
};
