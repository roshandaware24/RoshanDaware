const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData.entries());

        fetch("https://formsubmit.co/ajax/roshandaware2005@gmail.com", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {

            console.log(data);

            if (data.success === "true" || data.success === true) {

                formMessage.textContent = "Message sent successfully!";
                contactForm.reset();

            } else {

                formMessage.textContent = "Message could not be sent.";

            }

        })
        .catch(error => {

            console.log(error);
            formMessage.textContent = "Unable to send message.";

        });

    });
}


function toggleMenu() {
    const menu = document.querySelector(".nav-links");
    menu.classList.toggle("show");
}

// ================= FAQ ACCORDION =================

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {

    question.addEventListener("click", () => {

        const currentItem = question.parentElement;
        const currentAnswer = currentItem.querySelector(".faq-answer");

        document.querySelectorAll(".faq-item").forEach(item => {

            if (item !== currentItem) {
                item.classList.remove("active");
                item.querySelector(".faq-answer").style.maxHeight = null;
            }

        });

        currentItem.classList.toggle("active");

        if (currentItem.classList.contains("active")) {
            currentAnswer.style.maxHeight = currentAnswer.scrollHeight + "px";
        } else {
            currentAnswer.style.maxHeight = null;
        }

    });

});
