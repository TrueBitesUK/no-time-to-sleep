const menuButton = document.getElementById("menuButton");
const mobileNav = document.getElementById("mobileNav");
const year = document.getElementById("year");

if (menuButton && mobileNav) {
  menuButton.addEventListener("click", () => {
    const isOpen = mobileNav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

if (year) year.textContent = new Date().getFullYear();

const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(contactForm);
    const type = data.get("enquiryType") || "General enquiry";
    const name = data.get("name") || "";
    const company = data.get("company") || "";
    const email = data.get("email") || "";
    const website = data.get("website") || "";
    const details = data.get("details") || "";

    const subject = `No Time To Sleep - ${type}`;
    const body = [
      `Enquiry type: ${type}`,
      `Name: ${name}`,
      `Company: ${company}`,
      `Email: ${email}`,
      `Website: ${website}`,
      "",
      "Details:",
      details
    ].join("\n");

    window.location.href = `mailto:mattrhoades1986@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
