// closing side menu
const menuToggle = document.querySelector(".menu-toggle");
const sideBar = document.querySelector(".sidebar");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  sideBar.classList.toggle("active");
});
