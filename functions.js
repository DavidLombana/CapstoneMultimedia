document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".block img");

    images.forEach((img) => {
        img.addEventListener("mouseenter", function () {
            img.style.transform = "scale(1.2)";
            img.style.transition = "transform 0.3s ease-in-out";
        });

        img.addEventListener("mouseleave", function () {
            img.style.transform = "scale(1)";
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const blocks = document.querySelectorAll(".block");

    blocks.forEach((block) => {
        block.addEventListener("click", function () {
            block.classList.toggle("flipped");
        });
    });
});

