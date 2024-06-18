<template>
  <div>
    <TopContent />
    <TrainerBanner />
  </div>
</template>
<script>
import TopContent from "@/components/TopContent.vue";
import TrainerBanner from "@/components/TrainerBanner.vue";

export default {
  name: "HomePage",

  components: {
    TopContent,
    TrainerBanner,
  },
};
</script>
<style lang="sass"></style>
