// mobile nav toggle
const toggle = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
  links.classList.toggle("show");
});

// smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    const targetId = link.getAttribute("href").slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: "smooth"
      });
      links.classList.remove("show");
    }
  });
});

// prevent real submit for now
document.querySelector(".contact-form").addEventListener("submit", e => {
  e.preventDefault();
  alert("Thank you for reaching out! This demo form does not yet send emails.");
});
