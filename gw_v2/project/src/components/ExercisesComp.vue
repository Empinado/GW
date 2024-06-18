<template>
  <div class="Exercises center">
    <div class="Exercises__filter">
      <button
        class="Exercises__filter_btn"
        v-for="item in Filters"
        :key="item.id"
        @click="FILTER__ARR(item)"
        :class="{ active: item.id === activeButton }"
      >
        {{ item.text }}
      </button>
    </div>
    <div class="Exercises__container">
      <div
        class="Exercises__item"
        v-for="exercise in FilterExercises"
        :key="exercise.id"
      >
        <img
          class="Exercises__item_img"
          :src="require(`@/assets/exercises/${exercise.img}`)"
          alt="Ex_img"
        />
        <div class="Exercises__item__block">
          <h2 class="Exercises__item__block_title">{{ exercise.name }}</h2>
          <p class="Exercises__item__block_text">{{ exercise.desc }}</p>
          <a
            class="Exercises__item__block_link"
            :href="exercise.url"
            target="_blank"
            >Техника выполнения</a
          >
        </div>
        <div class="Exercises__item__block_teg">
          <ul class="Exercises__item__block_ul">
            <li
              class="Exercises__item__block_li"
              v-for="teg in exercise.tegs"
              :key="teg"
            >
              {{ teg }}
            </li>
          </ul>
        </div>
        <button @click="ADD__EXERCISE({ exercise })" class="Exercises__btn">
          ДОБАВИТЬ
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "ExercisesComp",
  data() {
    return {};
  },
  computed: {
    ...mapState(["Exercises", "Filters", "FilterExercises", "activeButton"]),
  },
  methods: {
    ...mapMutations(["ADD__EXERCISE", "FILTER__ARR"]),
  },
};
</script>
<style lang="sass" scoped>
a:link
    color: #3586ff
a:visited
    color: #3586ff
a:hover
    color: black
a:active
    color: red
.Exercises
    padding-bottom: 96px
    &__filter
      background-color: #3586ff
      z-index: 2
      width: 100%
      position: sticky
      top: 150px
      padding: 8px
      display: flex
      flex-wrap: wrap
      gap: 8px
      justify-content: center
      &_btn
        transition: 0.4s
        border-radius: 20px
        background-color: black
        border: none
        width: 100px
        height: 50px
        color: white
    &__container
        display: flex
        flex-direction: column
        gap: 50px
        margin-top: 50px
    &__item
        position: relative
        display: flex
        justify-content: space-between
        height: 200px
        border: 2px solid #3586ff
        border-radius: 60px 0px 0px 60px
        box-sizing: border-box
        &_img
          border-right: 2px solid #3586ff
          max-width: 350px
          border-radius: 60px 0px 0px 60px
        &__block
            display: flex
            width: 100%
            flex-direction: column
            justify-content: space-between
            &_title
              display: flex
              padding-left: 24px
              width: 100%
              display: flex
              align-items: center
              text-align: left
              background-color: #3586ff
              font-size: 24px
              color: white

            &_text
                display: flex
                width: 100%
                padding-top: 8px
                padding-left: 24px
                font-size: 18px

            &_teg
              display: flex
              height: 100%
            &_ul
                display: flex
                flex-direction: column
                align-items: center
                justify-content: center
                gap: 15px
                width: 120px
                border-left: 2px solid #3586ff
            &_li
                font-size: 22px
            &_link
                display: flex
                justify-content: center
                font-size: 16px


    &__btn
        font-family: "Oswald", sans-serif
        font-size: 20px
        line-height: 125%
        color: black
        height: 80px
        width: 160px
        border: none
        color: white
        border-radius: 60px
        background-color: #3586ff
        position: absolute
        top: 28%
        left: 7%
        opacity: 0
        transition: 0.4s
    &__item:hover .Exercises__btn
        opacity: 1
    &__btn:hover
        background-color: black
    &__btn:hover .Exercises__item_img
        opacity: 0.5
    &__btn:active
        background-color: red
.active
  background-color: red

@media (max-width: 1024px)
  .Exercises
    &__btn
      left: 13%
    &__item
      &__block_text
        overflow: scroll
      &_img
        width: 33%
      &__block_li
        font-size: 18px

@media (max-width: 767px)
  .Exercises
    &__filter
      top: 200px
    &__btn
      top: 60px
      left: 90px
    &__item
      flex-direction: column
      justify-content: center
      height: 100%
      border-radius: 60px 60px 0px 0px
      &_img
        width: 100%
        border-radius: 60px 60px 0px 0px
      &__block_title
        justify-content: center
        padding-left: 0
        text-align: center
      &__block_text
        padding: 8px
      &__block_teg
        justify-content: center
        border-top: 2px solid #3586ff
      &__block_ul
        flex-direction: row
        border-left: 0
</style>
