<template>
  <main class="main center">
    <section class="main__left">
      <img
        class="main__img"
        :src="require(`@/assets/${topBanner.img}`)"
        :alt="topBanner.name"
      />
    </section>
    <section class="main__right">
      <h1 class="main__title">{{ topBanner.title }}</h1>
      <p class="main__text">{{ topBanner.text }}</p>
      <ul class="main__ul">
        <li class="main__li" v-for="item in topList" :key="item">
          <svg
            fill="#000000"
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            id="check-mark-square-2"
            data-name="Flat Color"
            xmlns="http://www.w3.org/2000/svg"
            class="icon flat-color"
          >
            <path
              id="primary"
              d="M22,9.24V20a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V4A2,2,0,0,1,4,2H18.76a1,1,0,0,1,.7,1.71L12,11.17,9.41,8.59A2,2,0,0,0,6,10a2,2,0,0,0,.59,1.42l4,4a2,2,0,0,0,2.83,0l6.88-6.88A1,1,0,0,1,22,9.24Z"
              style="fill: rgb(0, 0, 0)"
            ></path>
            <path
              id="secondary"
              d="M12,15a1,1,0,0,1-.71-.29l-4-4A1,1,0,1,1,8.71,9.29L12,12.59l8.29-8.3a1,1,0,1,1,1.42,1.42l-9,9A1,1,0,0,1,12,15Z"
              style="fill: rgb(53, 134, 255)"
            ></path>
          </svg>
          {{ item.text }}
        </li>
      </ul>
      <div class="main__buttons">
        <button class="main__button" v-for="button in topButtons" :key="button">
          <router-link class="main__button_link" :to="button.url">{{
            button.title
          }}</router-link>
        </button>
      </div>
    </section>
  </main>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "TopContent",
  computed: {
    ...mapState(["topBanner", "topList", "topButtons"]),
  },
};
</script>
<style lang="sass" scoped>
.main
    display: flex
    flex-direction: row
    margin-top: 64px
    margin-bottom: 96px
    &__left
        width: 50%
    &__img
        border-radius: 50%
        max-width: 600px
    &__right
        width: 50%

    &__title
        text-align: center
        padding-bottom: 40px
    &__text
        text-align: center
        font-size: 22px
    &__ul
        padding-left: 35px
    &__li
        display: flex
        align-items: center
        gap: 8px
    &__buttons
        display: flex
        gap: 16px
        justify-content: space-between
        padding-left: 35px
        padding-top: 50px

    &__button
        display: flex
        align-items: center
        background-color: #3586ff
        height: 75px
        border-radius: 20px
        padding: 16px
        border: none

        transition: 0.3s
    &__button:hover
        background-color: black
    &__button:active
        background-color: red
    &__button_link
      font-family: "Oswald", sans-serif
      font-size: 24px
      line-height: 125%
      color: #fff
</style>
