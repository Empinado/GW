<template>
  <div class="Guide center">
    <section class="Giude__title-conteiner rel">
      <img
        class="Guide__img"
        :src="require(`@/assets/question.jpg`)"
        alt="Guide__img"
      />
      <h1 class="Guide__title">Что нужно знать?</h1>
    </section>

    <h2 class="Guide__subtitle">
      Системы тренировок в зале: Split, Full Body и Push-Pull
    </h2>

    <p class="Guide__text">
      При выборе системы тренировок для занятий в зале, важно учитывать
      индивидуальные цели, физическую подготовку и предпочтения. Три из наиболее
      популярных систем тренировок — Split, Full Body и Push-Pull — предлагают
      различные подходы к организации тренировочных программ.
    </p>
    <div
      class="Guide__item"
      v-for="guide in GuideImgList"
      :key="guide.id"
      :class="{ reverse: guide.title === 'Full Body' }"
    >
      <section class="Guide__item_left">
        <img
          class="Guide__text_img"
          :src="require(`@/assets/${guide.url}`)"
          alt="Guide__img"
        />
      </section>
      <section class="Guide__item_right">
        <h2 Guide__subtitle>{{ guide.title }}</h2>
        <p class="Guide__text">{{ guide.text }}</p>
      </section>
    </div>
    <h2 class="Guide__subtitle">Какая система лучше?</h2>
    <p class="Guide__text">
      Выбор системы тренировок зависит от ваших целей и физической подготовки.
      Split-тренировка может быть эффективной для опытных спортсменов, которые
      хотят уделить больше внимания каждой группе мышц. Full Body может быть
      хорошим выбором для новичков или тех, кто хочет тренироваться несколько
      раз в неделю. Push-Pull подходит для тех, кто хочет эффективно разделить
      нагрузку на разные группы мышц. Важно помнить, что каждая система
      тренировок имеет свои преимущества и недостатки. Решение о выборе системы
      тренировок должно быть обоснованным и основываться на ваших индивидуальных
      целях и возможностях.
    </p>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "GuideComp",
  computed: {
    ...mapState(["GuideImgList"]),
  },
};
</script>
<style lang="sass" scoped>


.Guide
    padding-top: 64px
    display: flex
    align-items: center
    flex-direction: column
    gap: 40px
    &__title-conteiner

    &__title
        position: absolute
        z-index: 1
        top: 120px
        left: 44px
        color: white
        -webkit-text-stroke: 1px black
    &__img
        height: 300px
        width: 500px
        border-radius: 60px
    &__item
        display: flex
        flex-direction: row
        &_left
            width: 500px
        &_right
            width: 1fr
            display: flex
            flex-direction: column
            text-align: center
            justify-content: space-evenly
    &__subtitle
        padding: 16px
        border-radius: 60px
        background-color: #3586ff
        text-align: center
        color: white
    &__text
        padding: 16px
        border-radius: 60px
        background-color: black
        text-align: center
        color: white
        &_img
            height: 370px
            width: 350px

.rel
    position: relative
.reverse
    flex-direction: row-reverse
</style>
