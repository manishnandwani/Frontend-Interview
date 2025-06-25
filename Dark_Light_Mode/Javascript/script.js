// Select elements
const app = document.getElementById("app");
const toggleBtn = document.getElementById("themeToggle");
const icon = document.getElementById("themeIcon");
const THEME_KEY = "theme";

// Load saved theme
let isDark = localStorage.getItem(THEME_KEY) === "dark";
applyTheme();

// Toggle event
toggleBtn.addEventListener("click", () => {
  isDark = !isDark;
  applyTheme();
  localStorage.setItem(THEME_KEY, isDark ? "dark" : "light");
});

// Apply theme changes
function applyTheme() {
  if (isDark) {
    app.classList.add("dark-mode");
    icon.textContent = "☀️";
  } else {
    app.classList.remove("dark-mode");
    icon.textContent = "🌙";
  }
}
