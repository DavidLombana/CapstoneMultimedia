document.addEventListener("DOMContentLoaded", function () {
    const blocks = document.querySelectorAll(".block");

    blocks.forEach((block) => {
        block.addEventListener("click", function () {
            this.classList.toggle("flipped");
        });
    });
});

