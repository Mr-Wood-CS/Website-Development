(function () {
  function getItems(carousel) {
    return Array.from(carousel.querySelectorAll(".carousel-item"));
  }

  function getActiveIndex(items) {
    return Math.max(0, items.findIndex(function (item) {
      return item.classList.contains("active");
    }));
  }

  function setIndicators(carousel, index) {
    carousel.querySelectorAll(".carousel-indicators li").forEach(function (indicator, indicatorIndex) {
      indicator.classList.toggle("active", indicatorIndex === index);
    });
  }

  function showSlide(carousel, nextIndex) {
    var items = getItems(carousel);
    if (!items.length) return;

    var activeIndex = getActiveIndex(items);
    var normalizedIndex = (nextIndex + items.length) % items.length;

    items.forEach(function (item, itemIndex) {
      item.classList.toggle("active", itemIndex === normalizedIndex);
    });
    setIndicators(carousel, normalizedIndex);

    carousel.dispatchEvent(new CustomEvent("slid.bs.carousel", {
      bubbles: true,
      detail: {
        from: activeIndex,
        to: normalizedIndex
      }
    }));
  }

  function move(carousel, direction) {
    var items = getItems(carousel);
    var activeIndex = getActiveIndex(items);
    showSlide(carousel, direction === "prev" ? activeIndex - 1 : activeIndex + 1);
  }

  function startAutoplay(carousel) {
    var interval = Number(carousel.getAttribute("data-interval") || 5000);
    if (carousel.getAttribute("data-ride") !== "carousel" || interval <= 0) return;

    var timer = window.setInterval(function () {
      if (!document.hidden) move(carousel, "next");
    }, interval);

    carousel.addEventListener("mouseenter", function () {
      window.clearInterval(timer);
    });

    carousel.addEventListener("mouseleave", function () {
      timer = window.setInterval(function () {
        if (!document.hidden) move(carousel, "next");
      }, interval);
    });
  }

  function initialiseCarousel(carousel) {
    var items = getItems(carousel);
    if (!items.length) return;

    if (!carousel.querySelector(".carousel-item.active")) {
      items[0].classList.add("active");
    }

    carousel.querySelectorAll("[data-slide]").forEach(function (control) {
      control.addEventListener("click", function (event) {
        event.preventDefault();
        move(carousel, control.getAttribute("data-slide"));
      });
    });

    carousel.querySelectorAll("[data-slide-to]").forEach(function (indicator) {
      indicator.addEventListener("click", function () {
        showSlide(carousel, Number(indicator.getAttribute("data-slide-to")));
      });
    });

    startAutoplay(carousel);
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".carousel").forEach(initialiseCarousel);
  });
})();
