<template>
  <div class="mouseEffect" :class="{ goMouse: $store.state.goMouse }"></div>
</template>

<script>
import { gsap } from "gsap";
export default {
  mounted() {
    gsap.set(".mouseEffect", { xPercent: -50, yPercent: -50 });

    const ball = document.querySelector(".mouseEffect");
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };
    const speed = 1;

    const xSet = gsap.quickSetter(ball, "x", "px");
    const ySet = gsap.quickSetter(ball, "y", "px");

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    });

    gsap.ticker.add(() => {
      const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;
      xSet(pos.x);
      ySet(pos.y);
    });
  },
};
</script>

<style>
</style>