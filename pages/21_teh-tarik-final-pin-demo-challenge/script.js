import gsap from "gsap";

import { ScrollTrigger, ScrollSmoother } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
  smooth: 1,
  effects: true,
});

gsap.to("#textpath", {
  attr: { startOffset: "-200%" },
  ease: "power1.in",
  duration: 2,
  scrollTrigger: {
    trigger: ".hero-container",
    start: "top top",
    end: "+=300%",
    pin: true,
    scrub: 1,
  },
});

const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".scroll-container",
    start: "top top",
    end: "+=200%",
    scrub: true,
    pin: true,
  },
});

timeline
  .to(".scroll-container", {
    x: "-125vw",
  })
  .to(
    ".man",
    {
      left: "50%",
    },
    "<",
  );

const timeline2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".proud-container .img-box",
    start: "top 50%",
    end: "+=100%",
    scrub: true,
  },
});

timeline2
  .to(".left-hand", {
    x: "10vw",
  })
  .to(
    ".right-hand",
    {
      x: "-10vw",
    },
    "<",
  )
  .to(".touching-star", {
    scale: 14,
    duration: 2,
  })
  .to(
    ".touching-star path",
    {
      fill: "#d6322f",
    },
    "<",
  );

const timeline3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".color-change-container",
    start: "top top",
    end: "+=600%",
    scrub: true,
    pin: true,
  },
});

const animateImages = (targets, bottomValue) => {
  return gsap.to(targets, {
    bottom: bottomValue,
    duration: 1,
    ease: "power1.inOut",
  });
};

timeline3
  .to(".first-box", {
    ease: "power1.inOut",
    onComplete: () => {
      animateImages([".img1", ".img2", ".img3"], "-50vh");
      animateImages([".img4", ".img5", ".img6"], "5%");
    },
  })
  .to(".sec-box", {
    clipPath: "circle(100% at 50% 50%)",
    ease: "power1.inOut",
    onReverseComplete: () => {
      animateImages([".img1", ".img2", ".img3"], "5%");
      animateImages([".img4", ".img5", ".img6"], "-50%");
    },
    onComplete: () => {
      animateImages([".img4", ".img5", ".img6"], "-50vh");
      animateImages([".img7", ".img8", ".img9"], "5%");
    },
  })
  .to(".third-box", {
    clipPath: "circle(100% at 50% 50%)",
    ease: "power1.inOut",
    onReverseComplete: () => {
      animateImages([".img4", ".img5", ".img6"], "5%");
      animateImages([".img7", ".img8", ".img9"], "-50%");
    },
  });
