<template>
  <div class="fix">
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
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "FooterComp",

  computed: {
    ...mapState(["waves", "linksFooter", "icons"]),
  },
};
</script>
<style lang="sass" scoped>

@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap")

.fix
  position: absolute
  bottom: 0
  height: 100px
  width: 100%
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
  margin-top: 150px
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
