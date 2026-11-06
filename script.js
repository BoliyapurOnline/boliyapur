const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("contactForm").addEventListener("submit", event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const name = form.get("name");
  const reply = form.get("reply");
  const message = form.get("message");
  const subject = encodeURIComponent("Boliyapur Community Website - Message");
  const body = encodeURIComponent(`নাম: ${name}\nযোগাযোগ: ${reply}\n\nবার্তা:\n${message}`);
  // Replace the email address below with the community's real inbox.
  window.location.href = `mailto:YOUR-EMAIL@example.com?subject=${subject}&body=${body}`;
});
