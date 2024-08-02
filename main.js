function toggleMenu() {
  const navMenu = document.querySelector("nav");
  const menuIcon = document.querySelector(".menu-icon");

  navMenu.classList.toggle("show");

  menuIcon.classList.toggle("close-icon");
  menuIcon.innerHTML = menuIcon.classList.contains("close-icon")
    ? "&#10006;"
    : "&#9776;";
}

function hideMenu() {
  const links = document.querySelectorAll(".nav-link");
  const navMenu = document.querySelector("nav");
  const menuIcon = document.querySelector(".menu-icon");

  links.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("show");
      menuIcon.classList.remove("close-icon");
      menuIcon.innerHTML = "&#9776;";
    });
  });
}

document.addEventListener("DOMContentLoaded", hideMenu);

document.addEventListener("scroll", function () {
  var contactSection = document.getElementById("contactSection");
  var scrollPosition = window.innerHeight + window.scrollY;
  var sectionBottom = contactSection.offsetTop + contactSection.offsetHeight;

  if (scrollPosition >= sectionBottom) {
    contactSection.style.bottom = "0";
  } else {
    contactSection.style.bottom = "-50px";
  }
});

function handleFormSubmission() {
  emailjs.init("wZm83g8b4W-PGdkln");

  const form = document.getElementById("contactForm");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const templateParams = {
      name: form.name.value,
      phone: form.phone.value,
      email: form.email.value,
      message: form.message.value,
    };

    emailjs
      .send("service_qgd5a1l", "template_6k2qq5b", templateParams)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Mensagem enviada com sucesso!");
      })
      .catch((error) => {
        console.error("FAILED...", error);
        alert("Houve um erro ao enviar a mensagem. Tente novamente.");
      });
  });
}
