// main.js

document.addEventListener('DOMContentLoaded', (event) => {
    // Highlight current page in navigation
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add more interactive features as needed
});

// Function to load demo content dynamically
function loadDemo(demoName) {
    const demoContainer = document.getElementById('demo-container');
    // This is a placeholder. You'll need to implement the actual loading logic
    demoContainer.innerHTML = `<h2>${demoName} Demo</h2><p>Loading ${demoName} demo...</p>`;
    // Here you would typically fetch the demo content or initialize the demo
}

// Example function for the business analysis form
function submitAnalysisRequest(event) {
    event.preventDefault();
    // Add form submission logic here
    alert('Thank you for your interest. We will contact you shortly.');
}
