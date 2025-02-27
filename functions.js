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


function bookAppointment() {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let adress = document.getElementById("address").value;
    let package = document.getElementById("package").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    let confirmation = document.getElementById("confirmation");

    if (name === "" || phone === "" || date === "" || time === "") {
        confirmation.style.color = "red";
        confirmation.textContent = "Please fill out all fields.";
    } else {
        confirmation.style.color = "green";
        confirmation.textContent = `Appointment booked for ${name} on ${date} ot ${adress} with ${package} at ${time}.`;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector(".btn");

    button.addEventListener("click", function() {
        button.classList.add("clicked");

        // Remove the class after animation duration
        setTimeout(() => {
            button.classList.remove("clicked");
        }, 150);
    });
});
