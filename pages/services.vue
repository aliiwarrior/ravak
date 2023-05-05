<template>
  <div class="services alternate">
    <div class="topDiv">
      <div class="rotateTitle">
        <h2 class="sandiego">OUR</h2>
        <h1>SERVICES</h1>
      </div>
      <div class="bottomOfDiv d-flex justify-content-between">
        <div class="scroll align-items-center d-flex flex-column">
          <div class="scrollTitle">SCROLL DOWN</div>
          <div class="yellowLine"></div>
        </div>
      </div>
    </div>
    <div class="lines">
      <div class="horizonLine"></div>
      <div class="verticalLine"></div>
    </div>
    <div class="allServices">
      <div class="service service1">
        <div class="text text1">
          <h3>WEBSITES</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
      </div>
      <div class="service service2">
        <div class="text text2">
          <h3>SOCIAL MEDIA</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
      </div>
      <div class="service service3">
        <div class="text text3">
          <h3>MEDIA PRODUCTION</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
export default {
  layout: "main",
  mounted() {
    setTimeout(() => {
      this.titleRotate();
      this.serviceAnime();
    }, 10);
  },
  methods: {
    titleRotate() {
      const multiple = 25;
      const mouseOverContainer = document.getElementsByTagName("body")[0];
      const element = document.getElementsByClassName("rotateTitle")[0];

      function transformElement(x, y) {
        let box = element.getBoundingClientRect();
        let calcX = -(y - box.y - box.height / 2) / multiple;
        let calcY = (x - box.x - box.width / 2) / multiple;
        if (calcX < -30) {
          calcX = -30;
        }
        element.style.transform =
          "rotateX(" +
          calcX +
          "deg) " +
          "rotateY(" +
          calcY +
          "deg)" +
          "perspective(500px) scale3d(1, 1, 1)";
      }

      mouseOverContainer.addEventListener("mousemove", (e) => {
        window.requestAnimationFrame(function () {
          transformElement(e.clientX, e.clientY);
        });
      });

      mouseOverContainer.addEventListener("mouseleave", (e) => {
        window.requestAnimationFrame(function () {
          element.style.transform = "rotateX(0) rotateY(0) ";
        });
      });
    },
    serviceAnime() {
      gsap.registerPlugin(ScrollTrigger);
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".allServices",
          start: "top top",
          end: "+=4000",
          scrub: true,
          //   markers: true,
        },
      });
      tl.to(".allServices", { position: "fixed" });
      tl.to(".text1", { paddingTop: "0px", duration: 1 });
      tl.to(".allServices", { top: "-100vh", duration: 1 });
      tl.to(".text2", { paddingTop: "0px", duration: 1 });
      tl.to(".allServices", { top: "-200vh", duration: 1 });
      tl.to(".text3", { paddingTop: "0px", duration: 1 });
      tl.to(".allServices", { top: "-300vh", duration: 1 });
    },
  },
};
</script>

<style>
</style>