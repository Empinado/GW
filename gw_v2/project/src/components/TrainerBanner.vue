<template>
  <div class="banner center">
    <div class="banner__container">
      <img
        class="banner__container_img"
        :src="require(`@/assets/${banner.img}`)"
        alt="banner_img"
        v-for="banner in banners"
        :key="banner"
      />
    </div>
    <h2 class="banner__subtitle">{{ TrainerBannerText.subtitle }}</h2>
    <div class="banner__bottom">
      <div class="banner__text-container">
        <p class="banner__text">{{ TrainerBannerText.text1 }}</p>
        <p class="banner__text">{{ TrainerBannerText.text2 }}</p>
        <p class="banner__text">{{ TrainerBannerText.text3 }}</p>
      </div>
      <div class="banner__img">
        <img src="@/assets/TrainerBanner.jpg" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "TrainerBanner",

  computed: {
    ...mapState(["banners", "TrainerBannerText"]),
  },
};
</script>
<style lang="sass">
.banner

    &__container
        display: flex
        flex-direction: row
        justify-content: space-between
        padding-bottom: 60px
        &_img
            width: 350px
            border-radius: 50%
            border: 1px solid #3586ff
            transition: 0.5s
        &_img:hover
            transform: translateY(-10px)
            opacity: 0.8
            -webkit-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.5)
            -moz-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.5)
            box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.5)
    &__bottom
        display: flex
        flex-direction: row
        justify-content: space-between
    &__subtitle
        text-align: center
        padding-bottom: 64px
    &__text-container
        display: flex
        flex-direction: column
        gap: 16px
        text-align: center
        width: 50%
        padding: 16px
        border-radius: 40px
        border: 1px solid #3586ff
    &__text
        color: #3586ff
</style>
