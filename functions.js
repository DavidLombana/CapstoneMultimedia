document.addEventListener("DOMContentLoaded", function () {
    const blocks = document.querySelectorAll(".block img");

    blocks.forEach(img => {
        img.addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.2)"; // Expand image
            this.style.transition = "transform 0.3s ease-in-out";
        });

        img.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)"; // Reset size
        });
    });
});
