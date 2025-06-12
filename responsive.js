// responsive.js
function adjustLayout() {
    const screenWidth = window.innerWidth;

    // Adjust styles based on screen width
    if (screenWidth <= 768) {
        // Mobile styles
        document.body.style.fontSize = "14px";
        document.body.style.padding = "10px";
    } else if (screenWidth <= 1024) {
        // Tablet styles
        document.body.style.fontSize = "16px";
        document.body.style.padding = "20px";
    } else {
        // Laptop/desktop styles
        document.body.style.fontSize = "18px";
        document.body.style.padding = "30px";
    }

    // You can add more adjustments here as needed
}

// Adjust layout on page load
window.onload = adjustLayout;

// Adjust layout on window resize
window.onresize = adjustLayout;
