const root = document.querySelector(":root");
const themeSwitcher = document.getElementById("themeSwitcher");
const main = document.getElementById("main");

const savedTheme = localStorage.getItem("theme") || "light";
setTheme(savedTheme);

if (themeSwitcher) {
  themeSwitcher.addEventListener("click", () => {
    console.log("Botão clicado!");
    toggleTheme();
  });
} else {
  console.error("Elemento com ID 'themeSwitcher' não encontrado.");
}

function toggleTheme() {
  const currentTheme = main.dataset.theme;
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  setTheme(newTheme);
}

function setTheme(theme) {
  if (theme === "dark") {
    root.style.setProperty("--background-color", "#161513");
    root.style.setProperty("--font-color", "#ffffff");
    root.style.setProperty("--primary-color", "#222222");
    main.dataset.theme = "dark";
    themeSwitcher.innerHTML = '<i class="fas fa-sun"></i>';
    localStorage.setItem("theme", "dark");
  } else {
    root.style.setProperty("--background-color", "#f2f2f2");
    root.style.setProperty("--font-color", "#333333");
    root.style.setProperty("--primary-color", "#f2f2f2");
    main.dataset.theme = "light";
    themeSwitcher.innerHTML = '<i class="fas fa-moon"></i>';
    localStorage.setItem("theme", "light");
  }
}
