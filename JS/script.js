/* ==================================================
 RAIXEZ PORTFOLIO - JAVASCRIPT
================================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ANIMACIONES AOS */
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: false,
      offset: 80,
      mirror: true
    });
  }

  /* NAVBAR AL HACER SCROLL */
  const navbar = document.getElementById("mainNavbar");

  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 40) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  }

  /* MARCAR PÁGINA ACTUAL */
  const currentPage = document.body.dataset.page;

  if (currentPage) {
    const pageLinks = document.querySelectorAll("[data-page-link]");
    pageLinks.forEach((link) => {
      if (link.dataset.pageLink === currentPage) {
        link.classList.add("active");
      }
    });
  }

  /* CERRAR MENÚ EN MÓVIL AL HACER CLIC */
  const mobileLinks = document.querySelectorAll(".navbar .nav-link");
  const menu = document.getElementById("menuNavegacion");

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (menu && window.innerWidth < 992) {
        if (typeof bootstrap !== "undefined" && bootstrap.Collapse) {
          const collapse = bootstrap.Collapse.getOrCreateInstance(menu);
          if (collapse) {
            collapse.hide();
          }
        }
      }
    });
  });

  /* AÑO AUTOMÁTICO EN EL FOOTER */
  const copyright = document.getElementById("copyright");

  if (copyright) {
    copyright.textContent = `© ${new Date().getFullYear()} Raixez`;
  }

});