///////////// Toast//////////////////
function showToast() {
  var x = document.getElementById("toast");
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}

function classToggle() {
  const navs = document.querySelectorAll(".side-navigation");
  navs.forEach((nav) => nav.classList.toggle("side-navToggleShow"));
}

document
  .querySelector(".hamburger-menu--toggle")
  .addEventListener("click", classToggle);
  

function toggleIcon(x) {
  x.classList.toggle("fa-times");
}
