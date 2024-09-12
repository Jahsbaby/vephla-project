// Add this script to your HTML file or an external JS file

document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.createElement('button');
    menuButton.textContent = '☰'; // Hamburger icon
    menuButton.style.cssText = `
        position: fixed;
        top: 10px;
        right: 10px;
        z-index: 1001;
        background-color: white;
        color: black;
        border: none;
        padding: 10px 15px;
        font-size: 20px;
        cursor: pointer;
    `;
    document.body.appendChild(menuButton);

    const navBar = document.querySelector('.nav-bar');

    menuButton.addEventListener('click', function() {
        navBar.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!navBar.contains(event.target) && event.target !== menuButton) {
            navBar.classList.remove('active');
        }
    });
});