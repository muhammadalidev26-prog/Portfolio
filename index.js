document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  if (!hamburger || !navMenu) {
    console.error("Hamburger or Nav Menu element not found in DOM.");
    return;
  }
  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    navMenu.classList.toggle("active");
  });
  document.addEventListener("click", (e) => {
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
      navMenu.classList.remove("active");
    }
  });
  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  });
});

// Theme toggle button behavior
const root = document.documentElement;
const toggleBtn = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

// Set the correct icon on page load (theme class already applied by inline head script)
updateThemeIcon();

toggleBtn.addEventListener("click", () => {
  if (root.classList.contains("dark")) {
    root.classList.replace("dark", "light");
    localStorage.setItem("theme", "light");
  } else {
    root.classList.replace("light", "dark");
    localStorage.setItem("theme", "dark");
  }
  updateThemeIcon();
});

function updateThemeIcon() {
  if (root.classList.contains("dark")) {
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
  } else {
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
  }
}
