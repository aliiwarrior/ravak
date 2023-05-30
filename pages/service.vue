<template>
  <div class="servicePage alternate">
    <MouseEffect />
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
      <div class="myService1">
        <img
          class="service1"
          @click="openThis('myService1')"
          src="/images/serviceImg1.jpg"
          alt="service"
        />
        <div class="service1Text">RAZAK Pharmacy Website</div>
        <a href="www.google.com" class="service1Link">
          Visit Website <img src="/icons/yellowExport.svg" alt="export" />
        </a>
        <img
          src="/icons/xIcon.svg"
          alt="close"
          class="xIcon"
          @click="closeThis('myService1')"
        />
      </div>
      <div class="myService2">
        <img
          class="service2"
          @click="openThis('myService2')"
          src="/images/serviceImg2.jpg"
          alt="service"
        />
        <div class="service2Text">RAZAK Pharmacy Website</div>
        <a href="www.google.com" class="service2Link">
          Visit Website <img src="/icons/yellowExport.svg" alt="export" />
        </a>
        <img
          src="/icons/xIcon.svg"
          alt="close"
          class="xIcon"
          @click="closeThis('myService2')"
        />
      </div>
      <div class="myService3">
        <img
          class="service3"
          @click="openThis('myService3')"
          src="/images/serviceImg3.jpg"
          alt="service"
        />
        <div class="service3Text">RAZAK Pharmacy Website</div>
        <a href="www.google.com" class="service3Link">
          Visit Website <img src="/icons/yellowExport.svg" alt="export" />
        </a>
        <img
          src="/icons/xIcon.svg"
          alt="close"
          class="xIcon"
          @click="closeThis('myService3')"
        />
      </div>
      <div class="myService4">
        <img
          class="service4"
          @click="openThis('myService4')"
          src="/images/serviceImg4.jpg"
          alt="service"
        />
        <div class="service4Text">RAZAK Pharmacy Website</div>
        <a href="www.google.com" class="service4Link">
          Visit Website <img src="/icons/yellowExport.svg" alt="export" />
        </a>
        <img
          src="/icons/xIcon.svg"
          alt="close"
          class="xIcon"
          @click="closeThis('myService4')"
        />
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
export default {
  data() {
    return {
      prevServiceWidth: "",
      prevServiceScale: "",
      prevServiceHeight: "",
      prevServicePosition: "",
      prevServiceTop: "",
      prevServiceLeft: "",
      prevServiceZIndex: "",
    };
  },
  mounted() {
    setTimeout(() => {
      this.serviceAnime();
      const links = document.getElementsByTagName("a");
      for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("mouseenter", () => {
          this.$store.commit("turnOn");
        });
        links[i].addEventListener("mouseout", () => {
          this.$store.commit("turnOff");
        });
      }
    }, 10);
  },
  methods: {
    serviceAnime() {
      gsap.registerPlugin(ScrollTrigger);
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".servicePage",
          start: "top top",
          end: "+=6000",
          scrub: true,
          // markers: true,
        },
      });
      tl.to(".rotateTitle", { scale: 20, duration: 3 });
      tl.to(".rotateTitle", { display: "none", duration: 0.5 });
      tl.to(".year2018", { scale: 1, duration: 1 });
      tl.to(".num ", { scale: 20, duration: 4 });
      tl.to(".num", { display: "none", duration: 0.5 });
      tl.to(".myService1, .myService2, .myService3, .myService4", {
        scale: 2,
        duration: 5,
      });
    },
    openThis(className) {
      var getClass = document.getElementsByClassName(className)[0];
      getClass.style.transition = "all 1s";
      getClass.style.width = "100vw";
      getClass.style.scale = "1";
      getClass.style.height = "100vh";
      getClass.style.position = "fixed";
      getClass.style.top = "0";
      getClass.style.left = "0";
      getClass.style.zIndex = "9";
      document
        .getElementsByClassName(className)[0]
        .getElementsByTagName("img")[0].style.width = "22%";
      document
        .getElementsByClassName(className)[0]
        .getElementsByTagName("img")[0].style.height = "auto";
      document
        .getElementsByClassName(className)[0]
        .getElementsByTagName("img")[0].style.zIndex = "9";
      document
        .getElementsByClassName(className)[0]
        .getElementsByTagName("div")[0].style.zIndex = "9";
      document
        .getElementsByClassName(className)[0]
        .getElementsByTagName("a")[0].style.zIndex = "9";
      document
        .getElementsByClassName(className)[0]
        .getElementsByClassName("xIcon")[0].style.width = "20px";
      document
        .getElementsByClassName(className)[0]
        .getElementsByClassName("xIcon")[0].style.height = "20px";
      document
        .getElementsByClassName(className)[0]
        .getElementsByClassName("xIcon")[0].style.display = "block";
      setTimeout(() => {
        document
          .getElementsByClassName(className)[0]
          .getElementsByTagName("div")[0].style.transition = "all 1s";
        document
          .getElementsByClassName(className)[0]
          .getElementsByTagName("a")[0].style.transition = "all 1s";
        document
          .getElementsByClassName(className)[0]
          .getElementsByTagName("div")[0].style.display = "block";
        document
          .getElementsByClassName(className)[0]
          .getElementsByTagName("a")[0].style.display = "block";
        setTimeout(() => {
          document
            .getElementsByClassName(className)[0]
            .getElementsByTagName("div")[0].style.opacity = "1";
          document
            .getElementsByClassName(className)[0]
            .getElementsByTagName("a")[0].style.opacity = "1";
        }, 500);
      }, 500);
      var TopScroll = window.pageYOffset || document.documentElement.scrollTop;
      var LeftScroll =
        window.pageXOffset || document.documentElement.scrollLeft;

      // if scroll happens, set it to the previous value
      window.onscroll = () => {
        window.scrollTo(LeftScroll, TopScroll);
      };
    },
    closeThis(className) {
      var getClass = document.getElementsByClassName(className)[0];
      if (className == "myService1") {
        getClass.style.width = "250px";
        getClass.style.height = "140px";
        getClass.style.left = "23%";
        getClass.style.top = "33%";
        getClass.style.zIndex = "6";
      } else if (className == "myService2") {
        getClass.style.width = "184px";
        getClass.style.height = "104.53px";
        getClass.style.left = "60%";
        getClass.style.top = "12%";
        getClass.style.zIndex = "5";
      } else if (className == "myService3") {
        getClass.style.width = "201.79px";
        getClass.style.height = "113px";
        getClass.style.left = "32%";
        getClass.style.top = "37%";
        getClass.style.zIndex = "4";
      } else {
        getClass.style.width = "173px";
        getClass.style.height = "96.88px";
        getClass.style.left = "57%";
        getClass.style.top = "30%";
        getClass.style.zIndex = "3";
      }
      getClass.style.position = "relative";

      document
        .getElementsByClassName(className)[0]
        .getElementsByTagName("img")[0].style.width = "100%";
      document
        .getElementsByClassName(className)[0]
        .getElementsByTagName("img")[0].style.height = "100%";
      document
        .getElementsByClassName(className)[0]
        .getElementsByTagName("div")[0].style.display = "none";
      document
        .getElementsByClassName(className)[0]
        .getElementsByTagName("a")[0].style.display = "none";
      document
        .getElementsByClassName(className)[0]
        .getElementsByTagName("div")[0].style.opacity = "0";
      document
        .getElementsByClassName(className)[0]
        .getElementsByTagName("a")[0].style.opacity = "0";
      document
        .getElementsByClassName(className)[0]
        .getElementsByClassName("xIcon")[0].style.display = "none";
      window.onscroll = () => {};
    },
  },
  watch: {
    "$route.path"() {
      this.$store.commit("turnOff");
      setTimeout(() => {
        const links = document.getElementsByTagName("a");
        for (var i = 0; i < links.length; i++) {
          links[i].addEventListener("mouseenter", () => {
            this.$store.commit("turnOn");
          });
          links[i].addEventListener("mouseout", () => {
            this.$store.commit("turnOff");
          });
        }
      }, 100);
    },
  },
};
</script>

<style>
</style>