<template>
  <!-- <footer class="footer center">
    <div class="footer__socials">
      <p class="header__logo_text">FIT BRO</p>
      <a class="footer__logo" href="./">
        <svg
          class="logo"
          fill="#000000"
          width="50px"
          height="50px"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>ionicons-v5-m</title>
          <path
            d="M193.69,152.84a16,16,0,0,1,29.64,2.56l36.4,121.36,30-59.92a16,16,0,0,1,28.62,0L345.89,272h96.76A213.08,213.08,0,0,0,464,176.65C463.37,114.54,413.54,64,352.92,64c-48.09,0-80,29.54-96.92,51-16.88-21.49-48.83-51-96.92-51C98.46,64,48.63,114.54,48,176.65A211.13,211.13,0,0,0,56.93,240h93.18Z"
          />
          <path
            d="M321.69,295.16,304,259.78l-33.69,67.38A16,16,0,0,1,256,336q-.67,0-1.38-.06a16,16,0,0,1-14-11.34l-36.4-121.36-30,59.92A16,16,0,0,1,160,272H69.35q14,29.29,37.27,57.66c18.77,22.88,52.8,59.46,131.39,112.81a31.84,31.84,0,0,0,36,0c78.59-53.35,112.62-89.93,131.39-112.81a316.79,316.79,0,0,0,19-25.66H336A16,16,0,0,1,321.69,295.16Z"
          />
          <path
            d="M464,272H442.65a260.11,260.11,0,0,1-18.25,32H464a16,16,0,0,0,0-32Z"
          />
          <path
            d="M48,240a16,16,0,0,0,0,32H69.35a225.22,225.22,0,0,1-12.42-32Z"
          /></svg
      ></a>
    </div>
  </footer> -->
  <footer class="footer center">
    <div class="waves">
      <div class="wave" :id="wave.id" v-for="wave in waves" :key="wave"></div>
    </div>
    <ul class="social-icon">
      <li class="social-icon__item">
        <a
          class="social-icon__link"
          :href="icon.url"
          v-for="icon in icons"
          :key="icon"
        >
          <img
            class="social-icon__img"
            :src="require(`@/assets/svg/${icon.img}`)"
            alt="icon.name"
          />
        </a>
      </li>
    </ul>
    <ul class="menu">
      <li class="menu__item" v-for="link in linksFooter" :key="link">
        <a class="menu__link" :href="link.url">{{ link.title }}</a>
      </li>
    </ul>
    <p>&copy;2024 FIT BRO | All Rights Reserved</p>
  </footer>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "FotterComp",

  computed: {
    ...mapState(["waves", "linksFooter", "icons"]),
  },
};
</script>
<style lang="sass" scoped>
// .footer
//     height: 150px
//     background-color: gray
//     display: flex
//     justify-content: space-between
//     align-items: center
//     box-sizing: border-box
//     background-image: url("@/assets/headerImg.jpg")
//     &__socials
//       display: flex
//       flex-direction: column
//       align-items: center
//       background-color: #fff
//       border-radius: 10px
//       padding: 8px
// .logo
//     transition: 0.4s
// .logo:hover
//     fill: red
// .logo:active
//     fill: gray

@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap")

.footer
  position: relative
  width: 100%
  background: #3586ff
  min-height: 100px
  padding: 20px 50px
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column
  margin-top: 96px



.social-icon,
.menu
  position: relative
  display: flex
  justify-content: center
  align-items: center
  margin: 10px 0
  flex-wrap: wrap

.social-icon__img
    width: 45px
    height: 45px

.social-icon__item,
.menu__item
  list-style: none
.social-icon__link
  font-size: 2rem
  color: #fff
  margin: 0 10px
  display: inline-block
  transition: 0.5s

.social-icon__link:hover
  transform: translateY(-10px)
.social-icon__link:active
  transform: scale(1, 0.5)

.menu__link
  font-size: 1.2rem
  color: #fff
  margin: 0 10px
  display: inline-block
  transition: 0.5s
  text-decoration: none
  opacity: 0.75
  font-weight: 300


.menu__link:hover
  opacity: 1


.footer p
  color: #fff
  margin: 15px 0 10px 0
  font-size: 1rem
  font-weight: 300


.wave
  position: absolute
  top: -100px
  left: 0
  width: 100%
  height: 100px
  background: url("https://i.ibb.co/wQZVxxk/wave.png")
  background-size: 1000px 100px


.wave#wave1
  z-index: 1000
  opacity: 1
  bottom: 0
  animation: animateWaves 4s linear infinite


.wave#wave2
  z-index: 999
  opacity: 0.5
  bottom: 10px
  animation: animate 4s linear infinite !important


.wave#wave3
  z-index: 1000
  opacity: 0.2
  bottom: 15px
  animation: animateWaves 3s linear infinite


.wave#wave4
  z-index: 999
  opacity: 0.7
  bottom: 20px
  animation: animate 3s linear infinite


@keyframes animateWaves
  0%
    background-position-x: 1000px

  100%
    background-positon-x: 0px



@keyframes animate
  0%
    background-position-x: -1000px

  100%
    background-positon-x: 0px
</style>
