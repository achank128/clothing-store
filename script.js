const navMobile = document.querySelector("#nav-mobile");
const btnHamburger = document.querySelector("#btn-hamburger");
const navbar = document.querySelector("#navbar");

btnHamburger.addEventListener("click", () => {
  navbar.classList.toggle("show");
});
