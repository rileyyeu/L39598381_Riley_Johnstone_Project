// Get references to the menu button, navigation links container, and the icon inside the button
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

// Add an event listener to the menu button for the "click" event
menuBtn.addEventListener("click", (e) => {
    // Toggle the "open" class on the navLinks container, which will show or hide the menu
    navLinks.classList.toggle("open");

    // Check if the "open" class is present on the navLinks element
    const isOpen = navLinks.classList.contains("open");

    // Change the menu icon based on whether the menu is open or closed
    // If open, set the icon to "ri-close-line", otherwise set it to "ri-menu-line"
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});
