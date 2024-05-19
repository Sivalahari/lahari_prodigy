document.addEventListener("DOMContentLoaded", function() {
    // Get all the navigation links
    const navLinks = document.querySelectorAll("nav ul li a");

    // Add event listeners to each navigation link
    navLinks.forEach(function(navLink) {
        // Add event listener for mouseenter (hover) event
        navLink.addEventListener("mouseenter", function() {
            // Change the background color of the navigation link on hover
            this.style.backgroundColor = "#777"; // Change to desired hover color
        });

        // Add event listener for mouseleave (hover out) event
        navLink.addEventListener("mouseleave", function() {
            // Change the background color back to its original color when hover out
            const index = Array.from(this.parentElement.parentElement.children).indexOf(this.parentElement);
            switch (index) {
                case 0:
                    this.style.backgroundColor = "#ffcc00"; // Home
                    break;
                case 1:
                    this.style.backgroundColor = "#ff6f00"; // About
                    break;
                case 2:
                    this.style.backgroundColor = "#ff3d00"; // Services
                    break;
                case 3:
                    this.style.backgroundColor = "#d50000"; // Contact
                    break;
                default:
                    this.style.backgroundColor = ""; // Default color
                    break;
            }
        });
    });
});
