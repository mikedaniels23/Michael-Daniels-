// Mobile menu toggle
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger?.addEventListener("click", () => {
  const isOpen = hamburger.getAttribute("aria-expanded") === "true";
  hamburger.setAttribute("aria-expanded", String(!isOpen));
  mobileMenu.hidden = isOpen;
});

// Close menu on link click
mobileMenu?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    hamburger.setAttribute("aria-expanded", "false");
    mobileMenu.hidden = true;
  });
});

// Footer year
document.getElementById("year").textContent = String(new Date().getFullYear());

// Contact form: open user's email app with a prefilled message (no backend required)
const form = document.getElementById("contactForm");
const note = document.getElementById("formNote");

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const subject = encodeURIComponent(`Website inquiry from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

  // Change this email if needed
  const to = "Mikerdaniels23@gmail.com";
  window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;

  note.textContent = "If your email app didn’t open, you can also email me directly at Mikerdaniels23@gmail.com.";
});
