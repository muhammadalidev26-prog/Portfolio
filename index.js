document.addEventListener("DOMContentLoaded", () => {
  // Use querySelector so it works with class or ID
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  if (!hamburger || !navMenu) {
    console.error("Hamburger or Nav Menu element not found in DOM.");
    return;
  }

  hamburger.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevents click from immediately closing menu
    navMenu.classList.toggle("active");
  });

  // Close menu when clicking outside of it
  document.addEventListener("click", (e) => {
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
      navMenu.classList.remove("active");
    }
  });

  // Close menu when a link inside is clicked
  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  });
});

// Theme Switching
const root = document.documentElement;
const toggleBtn = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

// Check if the user has already chosen a theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  root.classList.add(savedTheme);
} else {
  // Otherwise use the system preference
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  root.classList.add(prefersDark ? "dark" : "light");
}

// Set the correct icon on page load
updateThemeIcon();

// Toggle theme when button is clicked
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

// Updates the Font Awesome icon
function updateThemeIcon() {
  if (root.classList.contains("dark")) {
    // Show sun icon because clicking it will switch to light mode
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
  } else {
    // Show moon icon because clicking it will switch to dark mode
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
  }
}