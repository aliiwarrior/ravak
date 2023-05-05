<template>
  <div class="blogs alternate">
    <div class="topDiv">
      <div class="rotateTitle">
        <h2 class="sandiego">OUR</h2>
        <h1>BLOG & NEWS</h1>
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
    <div class="blogsAndNews">
      <div class="filters">
        <div class="category">Category</div>
        <span class="littleLine"></span>
        <div
          class="filter nimbus"
          @click="filter = 1"
          :class="{ active: filter == 1 }"
        >
          <span class="circle" v-if="filter == 1"> </span>
          All
        </div>
        <div
          class="filter nimbus"
          @click="filter = 2"
          :class="{ active: filter == 2 }"
        >
          <span class="circle" v-if="filter == 2"> </span>
          News
        </div>
        <div
          class="filter nimbus"
          @click="filter = 3"
          :class="{ active: filter == 3 }"
        >
          <span class="circle" v-if="filter == 3"> </span>
          Blog
        </div>
      </div>
      <div class="list">
        <router-link
          to="/blogs/1"
          class="blog"
          v-for="blog in blogs"
          :key="blog.id"
        >
          <img :src="blog.image" alt="blog" />
          <div class="about d-flex">
            <div class="type">{{ blog.type }}</div>
            <div class="date">{{ blog.date }}</div>
          </div>
          <p class="nimbus">{{ blog.text }}</p>
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
  data() {
    return {
      filter: 1,
      blogs: [
        {
          id: 0,
          type: "NEWS",
          image: "/images/homeBlog1.jpg",
          date: "2023.01.01",
          text: "Lorem ipsum dolor sit amet, consectetur...",
        },
        {
          id: 1,
          type: "BLOG",
          image: "/images/homeBlog2.jpg",
          date: "2023.01.01",
          text: "Lorem ipsum dolor sit amet, consectetur...",
        },
        {
          id: 2,
          type: "NEWS",
          image: "/images/homeBlog3.jpg",
          date: "2023.01.01",
          text: "Lorem ipsum dolor sit amet, consectetur...",
        },
        {
          id: 3,
          type: "NEWS",
          image: "/images/homeBlog1.jpg",
          date: "2023.01.01",
          text: "Lorem ipsum dolor sit amet, consectetur...",
        },
        {
          id: 4,
          type: "BLOG",
          image: "/images/homeBlog2.jpg",
          date: "2023.01.01",
          text: "Lorem ipsum dolor sit amet, consectetur...",
        },
        {
          id: 5,
          type: "NEWS",
          image: "/images/homeBlog3.jpg",
          date: "2023.01.01",
          text: "Lorem ipsum dolor sit amet, consectetur...",
        },
      ],
    };
  },
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