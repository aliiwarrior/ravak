<template>
  <div class="servicePage alternate">
    <Header />
    <div class="topDiv">
      <div class="rotateTitle">
        <h2 class="sandiego">PROJECTS</h2>
        <h1>WEBSITES</h1>
      </div>
      <div class="bottomOfDiv d-flex justify-content-between">
        <div class="scroll align-items-center d-flex flex-column">
          <div class="scrollTitle">SCROLL DOWN</div>
          <div class="yellowLine"></div>
        </div>
      </div>
    </div>
    <div class="year2018">
      <div class="num sandiego">2018</div>
      <img src="/images/serviceImg1.jpg" class="service1" alt="service" />
      <img src="/images/serviceImg2.jpg" class="service2" alt="service" />
      <img src="/images/serviceImg3.jpg" class="service3" alt="service" />
      <img src="/images/serviceImg4.jpg" class="service4" alt="service" />
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
export default {
  mounted() {
    setTimeout(() => {
      // this.titleRotate();
      this.serviceAnime();
    }, 10);
  },
  methods: {
    // titleRotate() {
    //   const multiple = 25;
    //   const mouseOverContainer = document.getElementsByTagName("body")[0];
    //   const element = document.getElementsByClassName("rotateTitle")[0];

    //   function transformElement(x, y) {
    //     let box = element.getBoundingClientRect();
    //     let calcX = -(y - box.y - box.height / 2) / multiple;
    //     let calcY = (x - box.x - box.width / 2) / multiple;
    //     if (calcX < -30) {
    //       calcX = -30;
    //     }
    //     element.style.transform =
    //       "rotateX(" +
    //       calcX +
    //       "deg) " +
    //       "rotateY(" +
    //       calcY +
    //       "deg)" +
    //       "perspective(500px) scale3d(1, 1, 1)";
    //   }

    //   mouseOverContainer.addEventListener("mousemove", (e) => {
    //     window.requestAnimationFrame(function () {
    //       transformElement(e.clientX, e.clientY);
    //     });
    //   });

    //   mouseOverContainer.addEventListener("mouseleave", (e) => {
    //     window.requestAnimationFrame(function () {
    //       element.style.transform = "rotateX(0) rotateY(0) ";
    //     });
    //   });
    // },
    serviceAnime() {
      gsap.registerPlugin(ScrollTrigger);
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".servicePage",
          start: "top top",
          end: "+=6000",
          scrub: true,
          markers: true,
        },
      });
      tl.to(".rotateTitle", { scale: 20, duration: 3 });
      tl.to(".rotateTitle", { display: "none", duration: 0.5 });
      tl.to(".year2018", { scale: 5, duration: 12 });
      tl.to(".year2018", { display: "none", duration: 0.5 });
    },
  },
};
</script>

<style>
</style>