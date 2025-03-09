function initSmoothScroll() {
  const menuLinks = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // Scroll suave alternativo
    // const top = section.offsetTop;
    // window.scrollTo({
    //   top: top,
    //   behavior: 'smooth',
    // });
  }

  menuLinks.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
initSmoothScroll();
