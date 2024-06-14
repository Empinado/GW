<template>
  <div>
    <HeaderComp />
    <!-- <TopContent /> -->
    <!-- <TrainerBanner /> -->
    <ExercisesComp />
    <!-- <FooterComp /> -->
  </div>
</template>
<script>
import "@/assets/styles/styles.sass";
import "@/assets/styles/mixins.sass";
import "@/assets/styles/variables.sass";
import HeaderComp from "./components/HeaderComp.vue";
// import FooterComp from "./components/FooterComp.vue";
// import TopContent from "./components/TopContent.vue";
// import TrainerBanner from "./components/TrainerBanner.vue";
import ExercisesComp from "./components/ExercisesComp.vue";

export default {
  name: "App",
  components: {
    HeaderComp,
    // FooterComp,
    // TopContent,
    // TrainerBanner,
    ExercisesComp,
  },
};
</script>

<style lang="sass"></style>
