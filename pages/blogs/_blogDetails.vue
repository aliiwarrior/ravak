<template>
  <div class="blogDetails alternate">
    <div class="topDiv">
      <div class="rotateTitle">
        <h2 class="sandiego">NEWS</h2>
        <h1>Lorem ipsum dolor sit amet, consectetu</h1>
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
    <div class="blog">
      <img src="/images/blogDetail.jpg" alt="blog" />
      <div class="about d-flex">
        <div class="type">NEWS</div>
        <div class="date">2023.01.01</div>
      </div>
      <div class="title">Lorem ipsum dolor sit amet, consectetu</div>
      <p class="nimbus">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Egestas purus
        viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus
        aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi
        porta lorem mollis. Morbi tristique senectus et netus. Mattis
        pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et
        molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed
        ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at
        consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed
        enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et
        molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna.
        Dignissim diam quis enim lobortis scelerisque fermentum.. Velit ut
        tortor pretium viverra suspendisse potenti nullam. Et molestie ac
        feugiat sed lectus.
      </p>
      <div class="share">
        <div>SHARE</div>
        <img src="/icons/telegram.svg" alt="telegram" />
        <img src="/icons/instagram.svg" alt="instagram" />
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
  },
};
</script>

<style>
</style>