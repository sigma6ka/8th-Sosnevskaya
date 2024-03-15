function mobileNav() {
  const navBtns = document.querySelectorAll(".mobile-nav-btn");
  const nav = document.querySelector(".mobile-nav");
  // const logo = document.querySelector(".logo");

  navBtns.forEach((navBtn) => {
    navBtn.addEventListener("click", function () {
      this.classList.toggle("active");
      nav.classList.toggle("active");
      let children = this.querySelectorAll("*");
      children.forEach((child) => child.classList.toggle("active"));
      let childrenNav = nav.querySelectorAll("*");
      childrenNav.forEach((child) => child.classList.toggle("active"));
      let logo = this.nextElementSibling;
      if (logo.classList.contains("logo")) {
        logo.classList.toggle("active");
      }
    });
  });
}

export default mobileNav;
