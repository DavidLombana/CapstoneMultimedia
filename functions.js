document.addEventListener("DOMContentLoaded", function () {
    const blocks = document.querySelectorAll(".block");

    blocks.forEach((block) => {
        block.addEventListener("click", function () {
            this.classList.toggle("flipped");
        });
    });

    const button = document.querySelector(".btn");
    if (button) {
        button.addEventListener("click", function () {
            button.classList.add("clicked");

            // Remove the class after animation duration
            setTimeout(() => {
                button.classList.remove("clicked");
            }, 150);
        });
    }

    const hiddenElements = document.querySelectorAll(".hidden");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target); // Stop observing once it's visible
                }
            });
        },
        { threshold: 0.3 } // Element becomes visible when 30% in view
    );

    hiddenElements.forEach((element) => observer.observe(element));
});

function flipCard(card) {
    card.querySelector(".card").classList.toggle("flipped");
}

let lastScrollTop = 0;
const navbars = document.querySelectorAll('.navbar');

window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    navbars.forEach(navbar => {
        navbar.style.top = scrollTop > lastScrollTop ? "-80px" : "0";
    });
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

document.addEventListener("DOMContentLoaded", function () {
    // Event listener for appointment booking button
    const bookButton = document.querySelector("button");
    if (bookButton) {
        bookButton.addEventListener("click", bookAppointment);
    }
});

function bookAppointment() {
    let name = document.getElementById("name").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let address = document.getElementById("address").value.trim();
    let packageSelected = document.getElementById("Package").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    let confirmation = document.getElementById("confirmation");

    // Package prices
    let packagePrices = {
        "Basic": "$50",
        "Deluxe": "$80",
        "Premium": "$120"
    };

    let price = packagePrices[packageSelected];

    // Validate input fields
    if (!name || !phone || !address || !date || !time) {
        confirmation.style.color = "red";
        confirmation.textContent = "Please fill out all fields.";
        return;
    }

    // Display confirmation
    confirmation.style.color = "green";
    confirmation.innerHTML = `
        Appointment booked for <strong>${name}</strong> on <strong>${date}</strong> at <strong>${address}</strong> 
        with <strong>${packageSelected}</strong> package at <strong>${time}</strong>. 
        <br> <strong>Price: ${price}</strong>
    `;
}
