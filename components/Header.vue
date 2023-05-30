<template>
  <div class="header alternate">
    <div class="head d-flex justify-content-between align-items-end">
      <img src="/images/logo.png" alt="logo" class="logo" />
      <div class="yellowLine"></div>
      <div class="rightHead d-flex align-items-center">
        <div>MENU</div>
        <img
          src="/icons/bar.svg"
          @mouseenter="$store.commit('turnOn')"
          @mouseout="$store.commit('turnOff')"
          @click="openMenu"
          class="bar"
          alt="bar"
        />
      </div>
    </div>
    <div class="openMenu">
      <div class="menu">
        <router-link to="/" class="menuItem">
          <span v-if="link == 1" class="sandiego">YOU ARE HERE</span>
          <div :class="{ activeMenu: link == 1 }">HOME</div>
        </router-link>
        <router-link to="/aboutUs" class="menuItem">
          <span v-if="link == 2" class="sandiego">YOU ARE HERE</span>
          <div :class="{ activeMenu: link == 2 }">WHO WE ARE</div>
        </router-link>
        <router-link to="/services" class="menuItem">
          <span v-if="link == 3" class="sandiego">YOU ARE HERE</span>
          <div :class="{ activeMenu: link == 3 }">SERVICES</div>
        </router-link>
        <router-link to="/projects" class="menuItem">
          <span v-if="link == 4" class="sandiego">YOU ARE HERE</span>
          <div :class="{ activeMenu: link == 4 }">PROJECTS</div>
        </router-link>
        <router-link to="/contactUs" class="menuItem">
          <span v-if="link == 5" class="sandiego">YOU ARE HERE</span>
          <div :class="{ activeMenu: link == 5 }">PROJECTS</div>
        </router-link>
        <router-link to="/" class="menuItem">
          <span v-if="link == 1" class="sandiego">YOU ARE HERE</span>
          <div :class="{ activeMenu: link == 1 }">HOME</div>
        </router-link>
        <router-link to="/aboutUs" class="menuItem">
          <span v-if="link == 2" class="sandiego">YOU ARE HERE</span>
          <div :class="{ activeMenu: link == 2 }">WHO WE ARE</div>
        </router-link>
        <router-link to="/services" class="menuItem">
          <span v-if="link == 3" class="sandiego">YOU ARE HERE</span>
          <div :class="{ activeMenu: link == 3 }">SERVICES</div>
        </router-link>
        <router-link to="/projects" class="menuItem">
          <span v-if="link == 4" class="sandiego">YOU ARE HERE</span>
          <div :class="{ activeMenu: link == 4 }">PROJECTS</div>
        </router-link>
        <router-link to="/contactUs" class="menuItem">
          <span v-if="link == 5" class="sandiego">YOU ARE HERE</span>
          <div :class="{ activeMenu: link == 5 }">PROJECTS</div>
        </router-link>
      </div>
      <div class="d-flex flex-column rightMenu justify-content-between">
        <img
          src="/icons/xIcon.svg"
          @click="closeMenu"
          class="xIcon"
          alt="x icon"
        />
        <div class="socials d-flex flex-column">
          <router-link to="/">
            <img src="/icons/telegram.svg" class="telegram" alt="telegram" />
          </router-link>
          <router-link to="/">
            <img src="/icons/linkedin.svg" class="linkedin" alt="linkedin" />
          </router-link>
          <router-link to="/">
            <img src="/icons/instagram.svg" class="instagram" alt="instagram" />
          </router-link>
        </div>
        <div class="terms">
          <div>Terms & Privacy</div>
          <div>@2023 Dayan Agency</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import gsap from "gsap";
export default {
  data() {
    return {
      link: 1,
    };
  },
  mounted() {
    this.infiniteMenu();
  },
  methods: {
    infiniteMenu() {
      const menu = document.querySelector(".menu");
      const items = document.querySelectorAll(".menuItem");
      let menuHeight = menu.clientHeight;
      let itemHeight = items[0].clientHeight;
      let wrapHeight = items.length * itemHeight;
      let scrollSpeed = 0;
      let oldScrollY = 0;
      let scrollY = 0;
      let y = 0;
      const lerp = (v0, v1, t) => {
        return v0 * (1 - t) + v1 * t;
      };
      const dispose = (scroll) => {
        gsap.set(items, {
          y: (i) => {
            return i * itemHeight + scroll;
          },
          modifiers: {
            y: (y) => {
              const s = gsap.utils.wrap(
                -itemHeight,
                wrapHeight - itemHeight,
                parseInt(y)
              );
              return `${s}px`;
            },
          },
        });
      };
      dispose(0);
      const handleMouseWheel = (e) => {
        scrollY -= e.deltaY;
        this.menuItems = document
          .querySelectorAll(".menuItem")[0]
          .style.transform.split(",")[1]
          .split(")")[0];
      };
      let touchStart = 0;
      let touchY = 0;
      let isDragging = false;
      const handleTouchStart = (e) => {
        touchStart = e.clientY || e.touches[0].clientY;
        isDragging = true;
        menu.classList.add("is-dragging");
      };
      const handleTouchMove = (e) => {
        if (!isDragging) return;
        touchY = e.clientY || e.touches[0].clientY;
        this.menuItems = document
          .querySelectorAll(".menuItem")[0]
          .style.transform.split(",")[1]
          .split(")")[0];
        scrollY += (touchY - touchStart) * 2.5;
        touchStart = touchY;
      };
      const handleTouchEnd = () => {
        isDragging = false;
        menu.classList.remove("is-dragging");
      };
      menu.addEventListener("mousewheel", handleMouseWheel);
      menu.addEventListener("touchstart", handleTouchStart);
      menu.addEventListener("touchmove", handleTouchMove);
      menu.addEventListener("touchend", handleTouchEnd);
      menu.addEventListener("mousedown", handleTouchStart);
      menu.addEventListener("mousemove", handleTouchMove);
      menu.addEventListener("mouseleave", handleTouchEnd);
      menu.addEventListener("mouseup", handleTouchEnd);
      menu.addEventListener("selectstart", () => {
        return false;
      });
      window.addEventListener("resize", () => {
        menuHeight = menu.clientHeight;
        itemHeight = items[0].clientHeight;
        wrapHeight = items.length * itemHeight;
      });
      const render = () => {
        requestAnimationFrame(render);
        y = lerp(y, scrollY, 0.1);
        dispose(y);
        scrollSpeed = y - oldScrollY;
        oldScrollY = y;
      };
      render();
    },
    openMenu() {
      const menu = document.getElementsByClassName("openMenu")[0];
      document
        .getElementsByClassName("header")[0]
        .getElementsByClassName("head")[0].style.zIndex = "0";
      menu.style.zIndex = "8";
      menu.style.opacity = "1";
    },
    closeMenu() {
      const menu = document.getElementsByClassName("openMenu")[0];
      document
        .getElementsByClassName("header")[0]
        .getElementsByClassName("head")[0].style.zIndex = "8";
      menu.style.opacity = "0";
      setTimeout(() => {
        menu.style.zIndex = "-1";
      }, 1000);
    },
  },
  watch: {
    "$route.path"() {
      this.closeMenu();
      if (this.$route.path == "/") {
        this.link = 1;
      } else if (this.$route.path == "/aboutUs") {
        this.link = 2;
      }
    },
  },
};
</script>
