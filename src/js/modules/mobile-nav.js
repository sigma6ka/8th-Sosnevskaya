function mobileNav() {
  const navBtns = document.querySelectorAll(".mobile-nav-btn");
  const nav = document.querySelector(".mobile-nav");
  const linkPhone = document.querySelector(".link-phone");

  navBtns.forEach((navBtn) => {
    navBtn.addEventListener("click", function () {
      if (this.closest("header")) {
				nav.firstElementChild.classList.toggle("header-padding");
      } else if (this.closest("footer")) {
				nav.firstElementChild.classList.toggle("footer-padding");
      }

      this.classList.toggle("active");
			document.body.classList.toggle('no-scroll');
      nav.classList.toggle("active");
      linkPhone.classList.toggle("hidden");
      // All children btns
      let children = this.querySelectorAll("*");
      children.forEach((child) => child.classList.toggle("active"));
      // All children navigation
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
