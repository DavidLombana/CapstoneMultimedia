document.addEventListener("DOMContentLoaded", function () {
    const blocks = document.querySelectorAll(".block");

    blocks.forEach((block) => {
        block.addEventListener("click", function () {
            this.classList.toggle("flipped");
        });
    });
});

let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.style.top = "-80px";  // Hide navbar (adjust based on your navbar height)
    } else {
        navbar.style.top = "0";  // Show navbar
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Prevent negative scroll values
});
