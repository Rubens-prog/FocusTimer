const toggleModeButton = document.querySelector("#toggle-mode");
const getModeStorage = localStorage.getItem("darkMode");
let darkMode = true;

if (getModeStorage == "false") {
  document.documentElement.classList.add("light");
}

toggleModeButton.addEventListener("click", (event) => {
  const mode =
    localStorage.getItem("darkMode") == "true" ? "LightMode" : "DarkMode";

  event.currentTarget.querySelector("span").textContent = `${mode} ativado!`;

  document.documentElement.classList.toggle("light");

  toggleValueInLocalStorage("darkMode");
});

function toggleValueInLocalStorage(key) {
  if (getModeStorage === null) {
    localStorage.setItem(key, "false");
  } else {
    const currentValue = localStorage.getItem(key);
    localStorage.setItem(key, currentValue === "true" ? "false" : "true");
  }
}
