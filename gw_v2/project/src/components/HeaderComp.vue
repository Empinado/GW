<template>
  <header class="header center">
    <div class="header__left">
      <p class="header__logo_text">FIT BRO</p>
      <router-link class="header__logo" to="./">
        <svg
          class="logo"
          fill="#000000"
          width="50px"
          height="50px"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
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
      ></router-link>
    </div>
    <div class="header__right">
      <ul class="header__links">
        <router-link
          :to="link.url"
          class="header__link"
          v-for="link in links"
          :key="link.id"
        >
          {{ link.title }}
        </router-link>
      </ul>
      <div class="cart__img" @click="open">
        <svg
          width="50px"
          height="50px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.9009 9.85L21.4909 19.74C21.5109 20.01 21.3809 20.19 21.3109 20.27C21.2309 20.36 21.0609 20.5 20.7809 20.5H18.0509L20.2109 9.85H20.9009ZM22.0009 6L21.9909 6.02C22.0109 6.26 21.9909 6.51 21.9309 6.76L14.5609 20.29C14.3209 21.3 13.4209 22 12.3809 22H20.7809C22.0709 22 23.0909 20.91 22.9909 19.62L22.0009 6Z"
            fill="black"
          />
          <path
            d="M11.4502 2.24136C11.5502 1.84136 11.3002 1.43136 10.9002 1.33136C10.5002 1.24136 10.0902 1.48136 9.99023 1.88136L9.49023 3.95136H11.0302L11.4502 2.24136Z"
            fill="black"
          />
          <path
            d="M18.0509 2.20859C18.1409 1.79859 17.8809 1.40859 17.4709 1.31859C17.0709 1.22859 16.6709 1.48859 16.5809 1.89859L16.1309 3.96859H17.6709L18.0509 2.20859Z"
            fill="black"
          />
          <path
            d="M21.8198 5.33141C21.4898 4.53141 20.7098 3.96141 19.7498 3.96141H17.6698L17.1098 6.55141C17.0298 6.90141 16.7198 7.14141 16.3798 7.14141C16.3298 7.14141 16.2698 7.14141 16.2198 7.12141C15.8198 7.03141 15.5598 6.63141 15.6398 6.23141L16.1298 3.95141H11.0298L10.3998 6.55141C10.3198 6.89141 10.0098 7.12141 9.66975 7.12141C9.60975 7.12141 9.54976 7.11141 9.48975 7.10141C9.08976 7.00141 8.83975 6.60141 8.93975 6.19141L9.47975 3.94141H7.44975C6.46975 3.94141 5.59975 4.58141 5.30975 5.52141L1.09975 19.0714C0.659754 20.5214 1.72975 22.0014 3.23975 22.0014H16.3798C17.4198 22.0014 18.3198 21.3014 18.5598 20.2914L21.9298 6.76141C21.9898 6.51141 22.0098 6.26141 21.9898 6.02141C21.9698 5.78141 21.9198 5.54141 21.8198 5.33141ZM14.6998 16.7514H6.69975C6.28975 16.7514 5.94975 16.4114 5.94975 16.0014C5.94975 15.5914 6.28975 15.2514 6.69975 15.2514H14.6998C15.1098 15.2514 15.4498 15.5914 15.4498 16.0014C15.4498 16.4114 15.1098 16.7514 14.6998 16.7514ZM15.6998 12.7514H7.69975C7.28975 12.7514 6.94975 12.4114 6.94975 12.0014C6.94975 11.5914 7.28975 11.2514 7.69975 11.2514H15.6998C16.1098 11.2514 16.4498 11.5914 16.4498 12.0014C16.4498 12.4114 16.1098 12.7514 15.6998 12.7514Z"
            fill="black"
          />
        </svg>
        <div class="cart__counter" v-if="Cart.length !== 0">
          {{ Cart.length }}
        </div>
      </div>
      <div class="cart" v-show="isShow">
        <div class="cart__adviсes" @click="ANALIZE__ARR">1</div>
        <div class="cart__types" v-if="Cart.length > 0">
          <button
            class="cart__types_btn"
            v-for="type in TypesList"
            :key="type.id"
            @click="ACTIVE__TYPE(type)"
            :class="{ active: type.id === activeType }"
          >
            {{ type.name }}
          </button>
        </div>

        <div class="cart__item" v-for="item in Cart" :key="item">
          <p cart__item_title>{{ item.name }}</p>
          <button @click="DEL__EXERCISE(item.id)" class="cart__item_btn-del">
            <svg
              class="cart__item_btn-svg"
              width="20px"
              height="20px"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
            >
              <title>cross-square</title>
              <desc>Created with Sketch Beta.</desc>
              <defs></defs>
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
                sketch:type="MSPage"
              >
                <g
                  id="Icon-Set-Filled"
                  sketch:type="MSLayerGroup"
                  transform="translate(-206.000000, -1037.000000)"
                  fill="red"
                >
                  <path
                    d="M226.95,1056.54 C227.34,1056.93 227.34,1057.56 226.95,1057.95 C226.559,1058.34 225.926,1058.34 225.536,1057.95 L222,1054.41 L218.464,1057.95 C218.074,1058.34 217.441,1058.34 217.05,1057.95 C216.66,1057.56 216.66,1056.93 217.05,1056.54 L220.586,1053 L217.05,1049.46 C216.66,1049.07 216.66,1048.44 217.05,1048.05 C217.441,1047.66 218.074,1047.66 218.464,1048.05 L222,1051.59 L225.536,1048.05 C225.926,1047.66 226.559,1047.66 226.95,1048.05 C227.34,1048.44 227.34,1049.07 226.95,1049.46 L223.414,1053 L226.95,1056.54 L226.95,1056.54 Z M234,1037 L210,1037 C207.791,1037 206,1038.79 206,1041 L206,1065 C206,1067.21 207.791,1069 210,1069 L234,1069 C236.209,1069 238,1067.21 238,1065 L238,1041 C238,1038.79 236.209,1037 234,1037 L234,1037 Z"
                    id="cross-square"
                    sketch:type="MSShapeGroup"
                  ></path>
                </g>
              </g>
            </svg>
          </button>
        </div>
        <p class="cart__copy" v-if="Cart.length > 0" @click="COPY__CART">
          COPY<svg
            fill="#fff"
            width="18px"
            height="18px"
            viewBox="0 0 1920 1920"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1468.183 451.76v1468.184H0V451.76h1468.183ZM1920 0v1468.296h-338.812V338.812H451.704V0H1920ZM338.812 1016.446h790.56V903.509h-790.56v112.937Zm0 225.874h564.686v-112.937H338.812v112.937Zm0 225.988h790.56v-113.05h-790.56v113.05Z"
              fill-rule="evenodd"
            />
          </svg>
        </p>
        <button
          class="cart__item_btn-clr"
          v-if="Cart.length !== 0"
          @click="CLEAR__CART"
        >
          Очистить
        </button>

        <p class="cart__text" v-if="Cart.length == 0">
          Добавьте упражнения в список
        </p>
      </div>
    </div>
  </header>
</template>
<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "HeaderComp",
  data() {
    return {
      isShow: false,
    };
  },

  computed: {
    ...mapState(["links", "Cart", "TypesList", "activeType"]),
  },
  methods: {
    ...mapMutations([
      "DEL__EXERCISE",
      "CLEAR__CART",
      "COPY__CART",
      "ACTIVE__TYPE",
      "ANALIZE__ARR",
    ]),
    open() {
      this.isShow = !this.isShow;
    },
  },
};
</script>
<style lang="sass">

.header
    position: sticky
    top: 0
    z-index: 3
    height: 150px
    background-color: gray
    display: flex
    justify-content: space-between
    align-items: center
    box-sizing: border-box
    background-image: url("@/assets/headerImg.jpg")
    &__left
      display: flex
      flex-direction: column
      align-items: center
      background-color: #fff
      border-radius: 10px
      padding: 8px
    &__logo_text
      font-family: "Oswald", sans-serif
      font-size: 28px
      line-height: 125%
      color: black
    &__links
      display: flex
      flex-direction: row
      gap: 16px

    &__link
      font-family: "Oswald", sans-serif
      font-size: 28px
      line-height: 125%
      color: black
      transition: 0.4s
    &__right
      position: relative
      z-index: 2
      background-color: #fff
      border-radius: 10px
      padding: 8px
      align-items: center
      gap: 16px
      display: flex
      flex-direction: row
.logo
    transition: 0.4s
.logo:hover
    fill: #3586ff
.logo:active
    fill: red
.header__link:hover
    color: #3586ff
.header__link:active
    color: red
.cart
    position: absolute
    display: flex
    flex-direction: column
    z-index: 1
    width: 262px
    background-color: #3586ff
    top: 70px
    border-radius: 10px
    left: 0
    padding: 8px
    &__item
      display: flex
      align-items: center
      justify-content: space-between
      border: 1px solid #3586ff
      border-radius: 10px
      padding: 5px
      background-color: white
      font-size: 14px
      &_btn-del
        border: none
      &_btn-svg path
        transition: 0.4s
      &_btn-svg path:hover
        fill: #3586ff
      &_btn-svg path:active
        fill: black
      &_btn-clr
        margin-top: 8px
        border: none
        border-radius: 10px
        background-color: black
        color: white
        font-family: "Oswald", sans-serif
        font-size: 12px
        transition: 0.4s
      &_btn-clr:hover
        background-color: red
      &_btn-clr:active
        background-color: #3586ff
      &__text
        display: flex
        text-align: center
        font-size: 22px
        color: white
.cart__img
    position: relative
.cart__counter
    display: flex
    justify-content: center
    align-items: center
    position: absolute
    top: -8px
    width: 30px
    height: 30px
    border-radius: 50%
    background-color: orange
    font-size: 18px
.cart__copy
    text-align: center
    font-size: 18px
    color: white
.cart__types
    display: flex
    justify-content: center
    padding-bottom: 8px
    &_btn
      transition: 0,5s
      border: none
      background-color: #fff
      padding: 8px
.active
  background-color: red
  color: white
</style>
