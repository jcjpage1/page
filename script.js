document.addEventListener("DOMContentLoaded", function() {
    var sections = document.querySelectorAll('.section');

    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        var windowHeight = (window.innerHeight || document.documentElement.clientHeight);
        return (rect.top <= windowHeight);
    }

    function showSections() {
        sections.forEach(function(section) {
            if (isInViewport(section)) {
                section.classList.add('active');
            }
        });
    }

    // Show sections when the page loads
    showSections();

    // Show sections when scrolling
    window.addEventListener('scroll', showSections);
});
