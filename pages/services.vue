<template>
  <div class="projects alternate">
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
    <div class="ourServices">
      <div class="menu">
        <router-link
          to="/portfolio?service1"
          class="menu--item item1"
          @mouseenter="getBackground"
          @mouseleave="removeBackground"
        >
          WEBDESIGN
        </router-link>
        <router-link
          to="/portfolio?service2"
          class="menu--item item2"
          @mouseenter="getBackground"
          @mouseleave="removeBackground"
        >
          SOCIAL MEDIA
        </router-link>
        <router-link
          to="/portfolio?service3"
          class="menu--item item3"
          @mouseenter="getBackground"
          @mouseleave="removeBackground"
        >
          MEDIA PRODUCTION
        </router-link>
        <router-link
          to="/portfolio?service3"
          class="menu--item item4"
          @mouseenter="getBackground"
          @mouseleave="removeBackground"
        >
          CONTENT
        </router-link>
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
      this.menuAnimation1();
      this.menuAnimation2();
      this.menuAnimation3();
      this.menuAnimation4();
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
    menuAnimation1() {
      gsap.registerPlugin(ScrollTrigger);
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".item1",
          start: "top 85%",
          end: "bottom top",
          scrub: true,
          // markers: true,
        },
      });
      tl.to(".item1", { transform: " perspective(0px)" });
      tl.to(".item1", { transform: "rotateX(0deg)" });
      tl.to(".item1", { transform: "rotateX(-80deg) perspective(300px)" });
    },
    menuAnimation2() {
      gsap.registerPlugin(ScrollTrigger);
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".item2",
          start: "top 85%",
          end: "bottom top",
          scrub: true,
          // markers: true,
        },
      });
      tl.to(".item2", { transform: " perspective(0px)" });
      tl.to(".item2", { transform: "rotateX(0deg) " });
      tl.to(".item2", { transform: "rotateX(-80deg) perspective(500px)" });
    },
    menuAnimation3() {
      gsap.registerPlugin(ScrollTrigger);
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".item3",
          start: "top 85%",
          end: "bottom top",
          scrub: true,
          // markers: true,
        },
      });
      tl.to(".item3", { transform: " perspective(0px)" });
      tl.to(".item3", { transform: "rotateX(0deg) " });
      tl.to(".item3", { transform: "rotateX(-80deg) perspective(500px)" });
    },
    menuAnimation4() {
      gsap.registerPlugin(ScrollTrigger);
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".item4",
          start: "top 85%",
          end: "bottom top",
          scrub: true,
          // markers: true,
        },
      });
      tl.to(".item4", { transform: " perspective(0px)" });
      tl.to(".item4", { transform: "rotateX(0deg) " });
      tl.to(".item4", { transform: "rotateX(-80deg) perspective(500px)" });
    },
    getBackground() {
      document.getElementsByClassName("mainLayout")[0].style.backgroundSize =
        "cover";
      document.getElementsByClassName("mainLayout")[0].style.backgroundImage =
        "url('/images/homeMenuBack.jpg')";

      document.getElementsByClassName("ourServices")[0].style.background =
        "inherit";
      document.getElementsByClassName("lines")[0].style.zIndex = "-1";
    },
    removeBackground() {
      document.getElementsByClassName("mainLayout")[0].style.backgroundSize =
        "auto";

      document.getElementsByClassName(
        "mainLayout"
      )[0].style.backgroundImage = `repeating-linear-gradient(
          to right,
          transparent,
          transparent 58.5px,
          #828282 58.5px,
          #828282 59.5px
        ),
        repeating-linear-gradient(
          to bottom,
          transparent,
          transparent 58.5px,
          #828282 58.5px,
          #828282 59.5px
        ),
        url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAUVBMVEWFhYWDg4N3d3dtbW17e3t1dXWBgYGHh4d5eXlzc3OLi4ubm5uVlZWPj4+NjY19fX2JiYl/f39ra2uRkZGZmZlpaWmXl5dvb29xcXGTk5NnZ2c8TV1mAAAAG3RSTlNAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAvEOwtAAAFVklEQVR4XpWWB67c2BUFb3g557T/hRo9/WUMZHlgr4Bg8Z4qQgQJlHI4A8SzFVrapvmTF9O7dmYRFZ60YiBhJRCgh1FYhiLAmdvX0CzTOpNE77ME0Zty/nWWzchDtiqrmQDeuv3powQ5ta2eN0FY0InkqDD73lT9c9lEzwUNqgFHs9VQce3TVClFCQrSTfOiYkVJQBmpbq2L6iZavPnAPcoU0dSw0SUTqz/GtrGuXfbyyBniKykOWQWGqwwMA7QiYAxi+IlPdqo+hYHnUt5ZPfnsHJyNiDtnpJyayNBkF6cWoYGAMY92U2hXHF/C1M8uP/ZtYdiuj26UdAdQQSXQErwSOMzt/XWRWAz5GuSBIkwG1H3FabJ2OsUOUhGC6tK4EMtJO0ttC6IBD3kM0ve0tJwMdSfjZo+EEISaeTr9P3wYrGjXqyC1krcKdhMpxEnt5JetoulscpyzhXN5FRpuPHvbeQaKxFAEB6EN+cYN6xD7RYGpXpNndMmZgM5Dcs3YSNFDHUo2LGfZuukSWyUYirJAdYbF3MfqEKmjM+I2EfhA94iG3L7uKrR+GdWD73ydlIB+6hgref1QTlmgmbM3/LeX5GI1Ux1RWpgxpLuZ2+I+IjzZ8wqE4nilvQdkUdfhzI5QDWy+kw5Wgg2pGpeEVeCCA7b85BO3F9DzxB3cdqvBzWcmzbyMiqhzuYqtHRVG2y4x+KOlnyqla8AoWWpuBoYRxzXrfKuILl6SfiWCbjxoZJUaCBj1CjH7GIaDbc9kqBY3W/Rgjda1iqQcOJu2WW+76pZC9QG7M00dffe9hNnseupFL53r8F7YHSwJWUKP2q+k7RdsxyOB11n0xtOvnW4irMMFNV4H0uqwS5ExsmP9AxbDTc9JwgneAT5vTiUSm1E7BSflSt3bfa1tv8Di3R8n3Af7MNWzs49hmauE2wP+ttrq+AsWpFG2awvsuOqbipWHgtuvuaAE+A1Z/7gC9hesnr+7wqCwG8c5yAg3AL1fm8T9AZtp/bbJGwl1pNrE7RuOX7PeMRUERVaPpEs+yqeoSmuOlokqw49pgomjLeh7icHNlG19yjs6XXOMedYm5xH2YxpV2tc0Ro2jJfxC50ApuxGob7lMsxfTbeUv07TyYxpeLucEH1gNd4IKH2LAg5TdVhlCafZvpskfncCfx8pOhJzd76bJWeYFnFciwcYfubRc12Ip/ppIhA1/mSZ/RxjFDrJC5xifFjJpY2Xl5zXdguFqYyTR1zSp1Y9p+tktDYYSNflcxI0iyO4TPBdlRcpeqjK/piF5bklq77VSEaA+z8qmJTFzIWiitbnzR794USKBUaT0NTEsVjZqLaFVqJoPN9ODG70IPbfBHKK+/q/AWR0tJzYHRULOa4MP+W/HfGadZUbfw177G7j/OGbIs8TahLyynl4X4RinF793Oz+BU0saXtUHrVBFT/DnA3ctNPoGbs4hRIjTok8i+algT1lTHi4SxFvONKNrgQFAq2/gFnWMXgwffgYMJpiKYkmW3tTg3ZQ9Jq+f8XN+A5eeUKHWvJWJ2sgJ1Sop+wwhqFVijqWaJhwtD8MNlSBeWNNWTa5Z5kPZw5+LbVT99wqTdx29lMUH4OIG/D86ruKEauBjvH5xy6um/Sfj7ei6UUVk4AIl3MyD4MSSTOFgSwsH/QJWaQ5as7ZcmgBZkzjjU1UrQ74ci1gWBCSGHtuV1H2mhSnO3Wp/3fEV5a+4wz//6qy8JxjZsmxxy5+4w9CDNJY09T072iKG0EnOS0arEYgXqYnXcYHwjTtUNAcMelOd4xpkoqiTYICWFq0JSiPfPDQdnt+4/wuqcXY47QILbgAAAABJRU5ErkJggg==')`;
      document.getElementsByClassName("ourServices")[0].style.background =
        "linear-gradient(to bottom,rgba(17, 17, 17, 0),rgba(17, 17, 17, 0.6),rgba(17, 17, 17, 0.9),#111111,#111111,#111111,#111111,#111111,#111111,rgba(17, 17, 17, 0.9),rgba(17, 17, 17, 0.6),rgba(17, 17, 17, 0))";
      document.getElementsByClassName("lines")[0].style.zIndex = "1";
    },
  },
};
</script>

<style>
</style>