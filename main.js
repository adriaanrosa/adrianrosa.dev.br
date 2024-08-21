const root = document.querySelector(":root");
const themeSwitcher = document.getElementById("themeSwitcher");
const main = document.getElementById("main");

if (themeSwitcher) {
  themeSwitcher.addEventListener("click", () => {
    console.log("Botão clicado!");
    toggleTheme();
  });
} else {
  console.error("Elemento com ID 'themeSwitcher' não encontrado.");
}

function toggleTheme() {
  if (main.dataset.theme === "dark") {
    root.style.setProperty("--background-color", "#F4F4F4");
    root.style.setProperty("--font-color", "#333333");
    root.style.setProperty("--primary-color", "#F4F4F4");
    main.dataset.theme = "light";
    themeSwitcher.innerHTML = '<i class="fas fa-moon"></i>';
  } else {
    root.style.setProperty("--background-color", "#161513");
    root.style.setProperty("--font-color", "#ffffff");
    root.style.setProperty("--primary-color", "#222222");
    main.dataset.theme = "dark";
    themeSwitcher.innerHTML = '<i class="fas fa-sun"></i>';
  }
}

if (main.dataset.theme === "dark") {
  themeSwitcher.innerHTML = '<i class="fas fa-sun"></i>';
} else {
  themeSwitcher.innerHTML = '<i class="fas fa-moon"></i>';
}
