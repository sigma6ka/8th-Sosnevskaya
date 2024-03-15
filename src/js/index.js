import mobileNav from "./modules/mobile-nav.js";
import {
  startDragging,
  drag,
  endDragging,
} from "./modules/mouseScrollControl.js";
mobileNav();

document
  .querySelector(".advantages__container")
  .addEventListener("mousedown", startDragging);
document
  .querySelector(".advantages__container")
  .addEventListener("mousemove", drag);
document
  .querySelector(".advantages__container")
  .addEventListener("mouseup", endDragging);

import Swiper from "swiper/bundle";
import "swiper/css/bundle";

// init Swiper:
const swiper = new Swiper(".swiper", {
  // Optional parameters
	loop: true,
	slidesPerView: 'auto',
	initialSlide: 1,
	spaceBetween: 20, 
  parallax: true,
  speed: 1000,

  keyboard: {
    enabled: true,
  },

});
