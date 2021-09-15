import Carousel from "./carousel.js";

class SwipeCarousel extends Carousel {
    _initListeners() {
        super._initListeners();
        this.container.addEventListener('touchstart', this._swipeStart.bind(this), { passive: true });
        this.container.addEventListener('touchend', this._swipeEnd.bind(this), { passive: true });
    }

    _swipeEnd(e) {
        this.swipeEndX = e.changedTouches[0].pageX;
        if (this.swipeStartX - this.swipeEndX < -100) this.prev();
        if (this.swipeStartX - this.swipeEndX > 100) this.next();
    }

    _swipeStart(e) {
        this.swipeStartX = e.changedTouches[0].pageX;
    }
};

export default SwipeCarousel;