<template>
  <div>
    <HeaderComp />
    <TopContent />
    <FooterComp />
  </div>
</template>
<script>
import "@/assets/styles/styles.sass";
import "@/assets/styles/mixins.sass";
import "@/assets/styles/variables.sass";
import HeaderComp from "./components/HeaderComp.vue";
import FooterComp from "./components/FooterComp.vue";
import TopContent from "./components/TopContent.vue";

export default {
  name: "App",
  components: {
    HeaderComp,
    FooterComp,
    TopContent,
  },
};
</script>

<style lang="sass"></style>
