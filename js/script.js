//class active
const navbarList = document.querySelector(".navbar-list");
// const nav = document.querySelector(nav ul);

//ketika menu di click
document.querySelector("#menu").onclick = () => {
  navbarList.classList.toggle("active");
};

//klik diluar sidebar untuk menghilangkan menu
const Menu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!Menu.contains(e.target) && !navbarList.contains(e.target)) {
    navbarList.classList.remove("active");
  }
});
