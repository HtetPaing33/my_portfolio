const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

document.getElementById("year").textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const projectData = {
  flight: {
    type: "University Project",
    title: "Flight Booking System",
    text: "A university project focused on analysing requirements and designing UML diagrams following SDLC methodologies. This section can later be expanded into a full case study with diagrams, screenshots, technologies and your contribution.",
    tags: ["UML", "SDLC", "Requirements Analysis"]
  },
  lan: {
    type: "Networking Project",
    title: "Local Area Network (LAN) Design",
    text: "A group university assignment involving the design and configuration of a local area network topology while applying basic networking principles.",
    tags: ["Networking", "LAN", "Topology"]
  }
};

const modal = document.getElementById("projectModal");
const modalClose = document.getElementById("modalClose");

document.querySelectorAll(".project-btn").forEach(button => {
  button.addEventListener("click", () => {
    const project = projectData[button.dataset.project];
    if (!project) return;

    document.getElementById("modalType").textContent = project.type.toUpperCase();
    document.getElementById("modalTitle").textContent = project.title;
    document.getElementById("modalText").textContent = project.text;

    const tags = document.getElementById("modalTags");
    tags.innerHTML = project.tags.map(tag => `<span>${tag}</span>`).join("");

    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
  });
});

function closeModal() {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
}

modalClose.addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {
  if (event.target === modal) closeModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModal();
});
