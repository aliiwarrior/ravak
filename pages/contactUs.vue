<template>
  <div class="contactUs alternate">
    <div class="topDiv">
      <div class="rotateTitle">
        <h2 class="sandiego">CONTACT</h2>
        <h1>GET IN TOUCH</h1>
      </div>
      <div class="bottomOfDiv d-flex justify-content-between">
        <div class="scroll align-items-center d-flex flex-column">
          <div class="scrollTitle">SCROLL DOWN</div>
          <div class="yellowLine"></div>
        </div>
      </div>
    </div>
    <div class="body">
      <div class="horizonLine"></div>
      <div class="fromRight">
        <div class="verticalLine"></div>
        <div class="form nimbus">
          <label>Full Name </label>
          <input type="text" placeholder="Mehrdad Mozaffari" />
          <label>E-mail Address</label>
          <input type="text" placeholder="Mehrdad@dayanagency.com" />
          <label>E-mail Address</label>
          <textarea placeholder="Start your message" rows="3"></textarea>
          <button>SEND</button>
        </div>
      </div>
      <div class="informations">
        <h3>EMAIL ADDRESS</h3>
        <div class="email nimbus">Info@dayanagency.com</div>
        <h3>PHONE NUMBER</h3>
        <div class="phone nimbus">( +98 ) 86 9100 9001</div>
        <div class="socials">
          <img src="/icons/telegram.svg" alt="telegram" />
          <img src="/icons/instagram.svg" alt="instagram" />
          <img src="/icons/linkedin.svg" alt="linkedin" />
        </div>
        <h3>IraN , Markazi</h3>
        <div class="address nimbus">Arak , Shahid Rajaei St ,</div>
        <div class="address nimbus">Jannat St ,</div>
        <div class="address nimbus">No 12.</div>
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