<template lang>
  <section class="page404 center">
    <div class="page404_text">
      <h1 class="page404_text__title">404</h1>
      <p class="page404_text__description">
        Извините, страница по вашему запросу не найдена
      </p>

      <router-link to="/HomePage" class="page404_text__link">
        Назад на главную
      </router-link>
    </div>
  </section>
</template>
<script>
export default {
  name: "ErrorComp",
};
</script>
<style lang="sass" scoped>
.page404
    display: flex
    height: 800px
    margin-bottom: 50px
    flex-direction: column
    align-items: center
    justify-content: center

    &_text
        display: flex
        flex-direction: column
        align-items: center
        width: 569px
        gap: 44px

        &__title
            color: red
            font-family: Jost
            font-size: 250px
            font-style: normal
            font-weight: 400
            line-height: 70%

        &__description
            color: black
            font-family: Jost
            font-size: 35px
            font-style: normal
            font-weight: 400
            line-height: 150%
            letter-spacing: 0.35px
            text-align: center

        &__link
            display: flex
            gap: 10px
            align-items: center
            color: white
            font-family: Jost
            font-size: 18px
            font-weight: 600
            padding: 26px 49px 26px 48px
            border-radius: 18px
            background: #272727

            &:hover
                cursor: pointer
                filter: brightness(1.9)

            &:active
                filter: brightness(1.0)
</style>
