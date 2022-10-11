const topItems = document.querySelectorAll(".top1pro");
const preBtn = document.querySelector("#top1-swiper-left");
const nextBtn = document.querySelector("#top1-swiper-right");
// const ballBtns = document.querySelectorAll(".btn");
const lastLeftBtn = document.querySelector("#last-swiper-left");
const lastRightBtn = document.querySelector("#last-swiper-right");
const lastItems = document.querySelectorAll(".lastpro");

const mostLeftBtn = document.querySelector("#most-swiper-left");
const mostRightBtn = document.querySelector("#most-swiper-right");
const popularItems = document.querySelectorAll(".moving_slider");

const brandLogos = document.querySelectorAll(".brand-logo");
const brandRight = document.querySelector("#brand-swiper-right");
const brandLeft = document.querySelector("#brand-swiper-left");

const mainSlides = document.querySelectorAll(".slider-item");
const swipeRight = document.querySelector("#ad-swiper-right");
const swipeLeft = document.querySelector("#ad-swiper-left");
const squareBtn = document.querySelectorAll(".ad-swipe-btn");

const brandArea = document.querySelector(".brands");
const topArea = document.querySelector(".top_products");

const menuModal = document.getElementById("modal");
const menuBtn = document.querySelector(".burgeri");
const closeBtn = document.querySelector(".catface");

const typeBtns = document.querySelectorAll(".nav-tipebi");
const chosenCategory = document.querySelectorAll(".choose");

const proBtn = document.querySelectorAll(".pedigree-btn");
const pedigreeImg = document.querySelectorAll(".pedigree");



menuBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeModal);
function openMenu() {
  menuModal.classList.remove("vanish");
}
function closeModal() {
  menuModal.classList.add("vanish");
}

let activeIndex = 0;
clickNchoose();

function clickNchoose() {
  typeBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      typeBtns.forEach((btn) => {
        btn.classList.remove("mwvane");
      });
      handleChoosing(index);
      btn.classList.add("mwvane");
    });
  });
}

function chooseCategory() {
  chosenCategory.forEach((item, i) => {
    if (activeIndex === i) {
      item.classList.remove("vanish");
    } else {
      item.classList.add("vanish");
    }
  });
}
function handleChoosing(index) {
  activeIndex = index;
  chooseCategory();
}

clickNGet()
function clickNGet() {
  proBtn.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      getPedigree(index);
    });
  });
}

function showPedigree() {
  pedigreeImg.forEach((item, i) => {
    if (activeIndex === i) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}
function getPedigree(index) {
  activeIndex = index;
  showPedigree();
}


imageSlider();
initSlider();
secondSlider();
productSwipe();
brandSlider();

function imageSlider() {
  swipeRight?.addEventListener("click", showNextAd);
  swipeLeft?.addEventListener("click", showPrevAd);

  squareBtn.forEach((btn, nextIndex) => {
    btn.addEventListener("click", () => {
      squareBtn.forEach((btn) => {
        btn.classList.remove("clicked-ad");
      });

      handleBallClick(nextIndex);

      btn.classList.add("clicked-ad");
    });
  });
}
function swipeMainSlider() {
  mainSlides.forEach((item, i) => {
    if (activeIndex === i) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}
function showNextAd() {
  activeIndex = activeIndex + 1;
  if (activeIndex > mainSlides.length - 1) {
    activeIndex = 0;
  }
  swipeMainSlider();
}
function showPrevAd() {
  activeIndex = activeIndex - 1;
  if (activeIndex < 0) {
    activeIndex = mainSlides.length - 1;
  }

  swipeMainSlider();
}
function handleBallClick(nextIndex) {
  activeIndex = nextIndex;
  swipeMainSlider();
}

function initSlider() {
  nextBtn?.addEventListener("click", showNextImg);
  preBtn?.addEventListener("click", showPrevImg);
}

function moveSwiper() {
  topItems.forEach((item, i) => {
    if ((activeIndex = i)) {
      item.classList.remove("vanish");
    } else {
      item.classList.add("vanish");
    }
  });
}
function showNextImg() {
  activeIndex = activeIndex + 1;
  if ((activeIndex = topItems.length)) {
    nextBtn.classList.add("fade");
    preBtn.classList.remove("fade");
  }
  moveSwiper();
}
function moveSwiperback() {
  topItems.forEach((item, i) => {
    if (activeIndex < i) {
      item.classList.add("vanish");
    } else {
      item.classList.remove("vanish");
    }
  });
}
function showPrevImg() {
  activeIndex = activeIndex - 1;
  if ((activeIndex = 3)) {
    nextBtn.classList.remove("fade");
    preBtn.classList.add("fade");
  }
  moveSwiperback();
}

function secondSlider() {
  lastRightBtn?.addEventListener("click", showNextItem);
  lastLeftBtn?.addEventListener("click", showPrevItem);
}
function moveLastitemSwiper() {
  lastItems.forEach((item, i) => {
    if ((activeIndex = i)) {
      item.classList.remove("vanish");
    } else {
      item.classList.add("vanish");
    }
  });
}
function showNextItem() {
  activeIndex = activeIndex + 1;
  if ((activeIndex = lastItems.length)) {
    lastRightBtn.classList.add("fade");
    lastLeftBtn.classList.remove("fade");
  }
  moveLastitemSwiper();
}
function moveLastitemSwiperback() {
  lastItems.forEach((item, i) => {
    if (activeIndex < i) {
      item.classList.add("vanish");
    } else {
      item.classList.remove("vanish");
    }
  });
}
function showPrevItem() {
  activeIndex = activeIndex - 1;
  if ((activeIndex = 3)) {
    lastRightBtn.classList.remove("fade");
    lastLeftBtn.classList.add("fade");
  }
  moveLastitemSwiperback();
}
function productSwipe() {
  mostRightBtn?.addEventListener("click", showNextPop);
  mostLeftBtn?.addEventListener("click", showPrevPop);
}
function moveSlider() {
  popularItems.forEach((item, i) => {
    if (activeIndex === i) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}
function showNextPop() {
  activeIndex = activeIndex + 1;
  if (activeIndex > popularItems.length - 1) {
    activeIndex = 0;
  }
  moveSlider();
}
function showPrevPop() {
  activeIndex = activeIndex - 1;
  if (activeIndex < 0) {
    activeIndex = popularItems.length - 1;
  }
  moveSlider();
}

function brandSlider() {
  brandRight?.addEventListener("click", brandForward);
  brandLeft?.addEventListener("click", brandBackward);
}
function moveBrandsforward() {
  brandLogos.forEach((item, i) => {
    if ((activeIndex = i)) {
      item.classList.remove("vanish");
    } else {
      item.classList.add("vanish");
    }
  });
}
function brandForward() {
  activeIndex = activeIndex + 1;
  if ((activeIndex = topItems.length)) {
    brandRight.classList.add("fade");
    brandLeft.classList.remove("fade");
  }
  moveBrandsforward();
}
function moveBrandsBack() {
  brandLogos.forEach((item, i) => {
    if (activeIndex < i) {
      item.classList.add("vanish");
    } else {
      item.classList.remove("vanish");
    }
  });
}
function brandBackward() {
  activeIndex = activeIndex - 1;
  if ((activeIndex = 5)) {
    brandRight.classList.remove("fade");
    brandLeft.classList.add("fade");
  }
  moveBrandsBack();
}

let touchstartX = 0;
let touchendX = 0;

function moveitSwiper() {
  topItems.forEach((item, i) => {
    if (activeIndex === i) {
      item.classList.add("vanish");
    } else {
      item.classList.remove("vanish");
    }
  });
}
function showNextProduct() {
  activeIndex = activeIndex + 1;
  if (activeIndex > topItems.length - 1) {
    activeIndex = 0;
  }
  moveitSwiper();
}
function showPrevProduct() {
  activeIndex = activeIndex - 1;
  if (activeIndex < 0) {
    activeIndex = topItems.length - 1;
  }
  moveitSwiper();
}

function checkDirection() {
  if (touchendX < touchstartX) {
    showNextProduct();
  }

  if (touchendX > touchstartX) {
    showPrevProduct();
  }
}
topArea?.addEventListener("touchstart", (e) => {
  touchstartX = e.changedTouches[0].screenX;
});

topArea?.addEventListener("touchend", (e) => {
  touchendX = e.changedTouches[0].screenX;
  checkDirection();
});

function moveLogos() {
  brandLogos.forEach((item, i) => {
    if (activeIndex === i) {
      item.classList.add("vanish");
    } else {
      item.classList.remove("vanish");
    }
  });
}
function moveLogosleft() {
  activeIndex = activeIndex + 1;
  if (activeIndex > brandLogos.length - 1) {
    activeIndex = 0;
  }
  moveLogos();
}
function moveLogosright() {
  activeIndex = activeIndex - 1;
  if (activeIndex < 0) {
    activeIndex = brandLogos.length - 1;
  }
  moveLogos();
}

function checkDirectionforlogos() {
  if (touchendX < touchstartX) {
    moveLogosright();
  }
  if (touchendX > touchstartX) {
    moveLogosleft();
  }
}

brandArea?.addEventListener("touchstart", (e) => {
  touchstartX = e.changedTouches[0].screenX;
});

brandArea?.addEventListener("touchend", (e) => {
  touchendX = e.changedTouches[0].screenX;
  checkDirectionforlogos();
});

const seeTextBtn = document.querySelector("#drop-down");
const hideTextBtn = document.querySelector("#drop-up");
const textArea = document.querySelector(".bigtext")

seeTextBtn?.addEventListener("click", () => {
  textArea.classList.add("seetext"),
  seeTextBtn.classList.add("vanish")
  hideTextBtn.classList.remove("vanish")
})

hideTextBtn?.addEventListener("click", () => {
  textArea.classList.remove("seetext"),
  seeTextBtn.classList.remove("vanish")
  hideTextBtn.classList.add("vanish")
})


const sideBar = document.querySelector(".sidebar")
const showFilter = document.querySelector(".filter")
const filterProduct = document.querySelector("#filter")

showFilter?.addEventListener("click", () => {
  sideBar.classList.add("active")
})
filterProduct?.addEventListener("click", () => {
  sideBar.classList.remove("active")
})


const productSpace = document.getElementById("forproduct");
const navLine = document.querySelector(".product-navigation");


