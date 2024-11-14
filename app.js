/////// TOGGLE MENU CODE//////\

const menuBar = document.getElementById("bar");
const menuList = document.getElementById("sm-menu");
const menuClose = document.querySelector("#close");

menuBar.addEventListener("click", () => {
  menuList.classList.add("active");
});

menuClose.addEventListener("click", () => {
  menuList.classList.remove("active");
});
