const themeToggle = document.getElementById("buttontoggle");

const applyTheme = (mode) => {
  document.body.classList.toggle("dark", mode === "dark");
  themeToggle.textContent = mode === "dark" ? "Light mode" : "Dark mode";
  localStorage.setItem("theme", mode);
};

applyTheme(localStorage.getItem("theme"));

themeToggle.addEventListener("click", () => {
  const newTheme = document.body.classList.contains("dark") ? "light" : "dark";
  applyTheme(newTheme);
});
