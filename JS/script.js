/* ==================================================
 RAIXEZ PORTFOLIO
 JAVASCRIPT
================================================== */


/* ==================================================
 INICIAR AOS
================================================== */

document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 900,
    easing: "ease-out-cubic",
    once: false,
    offset: 80,
    mirror: true
  });
});


/* ==================================================
 NAVBAR AL HACER SCROLL
================================================== */

const navbar = document.getElementById("mainNavbar");

window.addEventListener("scroll", () => {
  if (!navbar) return;

  if (window.scrollY > 40) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});


/* ==================================================
 MARCAR PÁGINA ACTUAL
================================================== */

const currentPage = document.body.dataset.page;
const pageLinks = document.querySelectorAll("[data-page-link]");

pageLinks.forEach((link) => {
  const linkPage = link.dataset.pageLink;

  if (linkPage === currentPage) {
    link.classList.add("active");
  }
});


/* ==================================================
 CERRAR MENÚ DE BOOTSTRAP EN CELULAR
================================================== */

const mobileLinks = document.querySelectorAll(".navbar .nav-link");

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const menu = document.getElementById("menuNavegacion");
    if (!menu) return;

    if (window.innerWidth < 992) {
      const collapse = bootstrap.Collapse.getInstance(menu);
      if (collapse) {
        collapse.hide();
      }
    }
  });
});


/* ==================================================
 AÑO AUTOMÁTICO
================================================== */

const copyright = document.getElementById("copyright");

if (copyright) {
  copyright.textContent = `© ${new Date().getFullYear()} Raixez. Todos los derechos reservados.`;
}