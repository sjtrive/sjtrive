document.addEventListener("DOMContentLoaded", () => {
  // Inicializar animación Lottie del preloader
  const containerLoader = document.getElementById("lottie-loader");
  if (containerLoader && typeof lottie !== "undefined") {
    lottie.loadAnimation({
      container: containerLoader,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "logo/Carga.json",
    });
  }

  // SCROLL EFFECTS
  const navbar = document.getElementById("navbar");
  const logoWrapper = document.getElementById("logo-wrapper");

  window.addEventListener("scroll", () => {
    const isScrolled = window.scrollY > 50;
    navbar?.classList.toggle("scrolled", isScrolled);
    logoWrapper?.classList.toggle("scrolled", isScrolled);
  });

  // MENÚ MÓVIL
  const menuToggle = document.getElementById("menu-toggle");
  const navegacion = document.querySelector(".navegacion");

  menuToggle?.addEventListener("click", () => {
    navegacion?.classList.toggle("activo");
    menuToggle?.classList.toggle("activo");
  });

  navegacion?.querySelectorAll("a").forEach((enlace) => {
    enlace.addEventListener("click", () => {
      navegacion?.classList.remove("activo");
      menuToggle?.classList.remove("activo");
    });
  });

  // ANIMACIONES LOTTIE
  const containerApertura = document.getElementById("logo-apertura");
  const containerCierre = document.getElementById("logo-cierre");

  if (
    logoWrapper &&
    typeof lottie !== "undefined" &&
    containerApertura &&
    containerCierre
  ) {
    const animApertura = lottie.loadAnimation({
      container: containerApertura,
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: "logo/Apertura.json",
    });

    const animCierre = lottie.loadAnimation({
      container: containerCierre,
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: "logo/Cierre.json",
    });

    logoWrapper.addEventListener("mouseenter", () => {
      containerCierre.classList.remove("active");
      containerApertura.classList.add("active");
      animApertura.goToAndPlay(0, true);
    });

    logoWrapper.addEventListener("mouseleave", () => {
      containerApertura.classList.remove("active");
      containerCierre.classList.add("active");
      animCierre.goToAndPlay(0, true);
    });
  }
});

// Evento que se dispara cuando TODOS los recursos (imágenes, CSS, etc.) han cargado
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    setTimeout(() => {
      preloader.classList.add("oculto");
      document.body.classList.remove("cargando");
    }, 500);
  }
});
