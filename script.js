document.addEventListener("DOMContentLoaded", function() {
    var content = document.querySelector('.content');
    window.addEventListener('scroll', function() {
        if (isInViewport(content)) {
            content.classList.add('show');
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
