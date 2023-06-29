<template>
  <div class="aboutUs alternate">
    <div class="topDiv">
      <div class="rotateTitle">
        <h2 class="sandiego">THIS IS</h2>
        <h1>WHO WE ARE</h1>
      </div>
      <div class="bottomOfDiv d-flex justify-content-between">
        <div class="scroll align-items-center d-flex flex-column">
          <div class="scrollTitle">SCROLL DOWN</div>
          <div class="yellowLine"></div>
        </div>
      </div>
    </div>
    <div class="yellowBorder">
      <div></div>
    </div>
    <div class="section1">
      <div class="title">
        Marketing Agency is one of the most modern and up-to-date ways of
        marketing your services or products.
      </div>
      <p class="nimbus">
        Designing a beautiful website, idea generation, management and
        implementation of all kinds of online campaigns and the production of
        creative content is the specialty of
        <router-link to="/">DAYAN</router-link>
        powerful marketing team.
      </p>
      <img src="/images/aboutUsImg1.jpg" alt="about us" />
    </div>
    <div class="section2">
      <div class="title">
        Our <span>Responsibility</span>
        is to create a better world and make our customers happy.
      </div>
      <div class="rightDiv">
        <p class="nimbus">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas
          purus viverra accumsan in nisl nisi
        </p>
      </div>
      <img src="/images/aboutUsImg2.jpg" alt="about us" />
    </div>
    <div class="ourTeam">
      <div class="head">
        <div class="title">OUR TEAM</div>
        <div class="yellowLine"></div>
      </div>
      <div class="body">
        <div class="team">
          <img src="/images/team1.jpg" alt="team" />
          <div class="effect">
            <img src="/icons/linkedinWhiteBack.svg" alt="linkedin" />
            <div>
              <div class="position">CEO</div>
              <div class="name">MEHRDAD MOZAFARI</div>
            </div>
          </div>
          <div class="effect2"></div>
        </div>
        <div class="team">
          <img src="/images/team2.jpg" alt="team" />
          <div class="effect">
            <img src="/icons/linkedinWhiteBack.svg" alt="linkedin" />
            <div>
              <div class="position nimbus">CEO</div>
              <div class="name">MEHRDAD MOZAFARI</div>
            </div>
          </div>
          <div class="effect2"></div>
        </div>
        <div class="team">
          <img src="/images/team3.jpg" alt="team" />
          <div class="effect">
            <img src="/icons/linkedinWhiteBack.svg" alt="linkedin" />
            <div>
              <div class="position">CEO</div>
              <div class="name">MEHRDAD MOZAFARI</div>
            </div>
          </div>
          <div class="effect2"></div>
        </div>
        <div class="team">
          <img src="/images/team4.jpg" alt="team" />
          <div class="effect">
            <img src="/icons/linkedinWhiteBack.svg" alt="linkedin" />
            <div>
              <div class="position">CEO</div>
              <div class="name">MEHRDAD MOZAFARI</div>
            </div>
          </div>
          <div class="effect2"></div>
        </div>
        <div class="team">
          <img src="/images/team5.jpg" alt="team" />
          <div class="effect">
            <img src="/icons/linkedinWhiteBack.svg" alt="linkedin" />
            <div>
              <div class="position">CEO</div>
              <div class="name">MEHRDAD MOZAFARI</div>
            </div>
          </div>
          <div class="effect2"></div>
        </div>
        <div class="team">
          <img src="/images/team6.jpg" alt="team" />
          <div class="effect">
            <img src="/icons/linkedinWhiteBack.svg" alt="linkedin" />
            <div>
              <div class="position">CEO</div>
              <div class="name">MEHRDAD MOZAFARI</div>
            </div>
          </div>
          <div class="effect2"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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