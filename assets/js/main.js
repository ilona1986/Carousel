import Carousel from "./swipe-carousel.js";

const carousel = new Carousel({
   
    containerID: '#myCarousel',
    // slideID: '.item',
    interval:  1000,
    isPlaying: false
  
});

carousel.init();