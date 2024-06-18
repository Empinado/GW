<template>
  <div>
    <HeaderComp />
    <router-view></router-view>
    <FooterComp />
  </div>
</template>
<script>
import "@/assets/styles/styles.sass";
import "@/assets/styles/mixins.sass";
import "@/assets/styles/variables.sass";
import HeaderComp from "./components/HeaderComp.vue";
import FooterComp from "./components/FooterComp.vue";

export default {
  name: "App",
  components: {
    HeaderComp,
    FooterComp,
  },
};
</script>

<style lang="sass"></style>
