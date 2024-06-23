// navigation.js
document.addEventListener('DOMContentLoaded', function() {
    // Load the navigation
    fetch('navigation.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('afterbegin', data);
            highlightCurrentPage();
        });
});

function highlightCurrentPage() {
    // Get the current page filename
    var path = window.location.pathname;
    var page = path.split("/").pop();

    // Remove .html from the filename
    page = page.replace('.html', '');

    // If it's the home page, set page to 'home'
    if (page === '' || page === 'index') {
        page = 'home';
    }

    // Find the corresponding navigation link and add the 'active' class
    var navLink = document.querySelector(`.nav-link[data-page="${page}"]`);
    if (navLink) {
        navLink.classList.add('active');
    }
}
