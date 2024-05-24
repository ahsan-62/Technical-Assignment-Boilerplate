document
  .getElementById("user-menu-button")
  .addEventListener("click", function () {
    const menu = document.getElementById("user-menu");
    menu.classList.toggle("hidden");
  });

document.addEventListener("click", function (event) {
  const menu = document.getElementById("user-menu");
  const button = document.getElementById("user-menu-button");
  if (!button.contains(event.target) && !menu.contains(event.target)) {
    menu.classList.add("hidden");
  }
});
