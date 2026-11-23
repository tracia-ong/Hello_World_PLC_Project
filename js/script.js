
document.addEventListener("DOMContentLoaded", () => {

  const currentPage = document.body.dataset.page;

  // Shared Navigation Bar
  const header = document.getElementById("siteHeader");

  header.className = "site-header";

  header.innerHTML = `
    <div class="container navbar">

      <a href="index.html" class="logo">
        ☕ Hello <span>World!</span>
      </a>

      <button
        class="menu-toggle"
        id="menuToggle"
        aria-label="Toggle navigation"
        aria-controls="navLinks"
        aria-expanded="false">
        ☰
      </button>

      <nav class="nav-links" id="navLinks"
           aria-label="Main navigation">

        <a href="index.html"
           class="${currentPage === 'home' ? 'active' : ''}">
          Home
        </a>

        <a href="background.html"
           class="${currentPage === 'background' ? 'active' : ''}">
          Background
        </a>

        <details class="dropdown
          ${currentPage === 'basic-elements' ? 'active' : ''}">

          <summary>Basic Elements</summary>

          <div class="dropdown-menu">

            <a href="basic-elements.html#names-bindings">
              Names and Bindings
            </a>

            <a href="basic-elements.html#expressions">
              Expressions and Assignment
            </a>

            <a href="basic-elements.html#control-structures">
              Control Structures
            </a>

            <a href="basic-elements.html#subprograms">
              Subprograms
            </a>

          </div>
        </details>

        <a href="sample-application.html"
           class="${currentPage === 'sample-application' ? 'active' : ''}">
          Sample Application
        </a>

        <a href="references.html"
           class="${currentPage === 'references' ? 'active' : ''}">
          References
        </a>

      </nav>
    </div>
  `;

  // Mobile Menu
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", (event) => {
    const dropdown = document.querySelector(".dropdown");

    if (dropdown && !dropdown.contains(event.target)) {
      dropdown.open = false;
    }
  });

  // Highlight active navigation link
  document.querySelectorAll(".nav-links a.active")
    .forEach(link => link.setAttribute("aria-current", "page"));

  // Shared Footer
  const footer = document.getElementById("siteFooter");

  footer.className = "site-footer";

  footer.innerHTML = `
    <div class="container">

      <p>
        ☕ Hello World! | Java Web & Spring Boot
      </p>

      <p>
        TPL6213 Programming Language Concept
      </p>

      <p>
        © 2026 Hello World! Group Project
      </p>

    </div>
  `;

  // Support direct navigation to a section on initial load
  if (window.location.hash) {
    const targetId = decodeURIComponent(
      window.location.hash.slice(1)
    );
    const target = document.getElementById(targetId);

    if (target) {
      target.scrollIntoView();
    }
  }

});
