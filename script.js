document.addEventListener("DOMContentLoaded", function() {
    var expandingSection = document.getElementById('expanding-section');
    window.addEventListener('scroll', function() {
        if (isInViewport(expandingSection)) {
            expandingSection.classList.add('show');
        }
    });
});

function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    var windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    return (
        (rect.top <= windowHeight)
    );
}
