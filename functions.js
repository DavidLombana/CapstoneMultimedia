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
    let address = document.getElementById("adress").value;
    let packageSelected = document.getElementById("Package").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    let confirmation = document.getElementById("confirmation");

    // Define package prices
    let packagePrices = {
        "Basic": "$50",
        "Deluxe": "$80",
        "Premium": "$120"
    };

     // Get the selected package price
     let price = packagePrices[packageSelected];

     // Validate input fields
     if (name === "" || phone === "" || address === "" || date === "" || time === "") {
         confirmation.style.color = "red";
         confirmation.textContent = "Please fill out all fields.";
     } else {
         confirmation.style.color = "green";
         confirmation.innerHTML = `
             Appointment booked for <strong>${name}</strong> on <strong>${date}</strong> at <strong>${address}</strong> 
             with <strong>${packageSelected}</strong> package at <strong>${time}</strong>. 
             <br> <strong>Price: ${price}</strong>
         `;
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

document.addEventListener("DOMContentLoaded", function () {
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

