<template>
  <div class="mainLayout">
    <Header />
    <Nuxt />
    <Footer />
    <MouseEffect />
  </div>
</template>
<script>
export default {
  mounted() {
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
    }, 10);
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