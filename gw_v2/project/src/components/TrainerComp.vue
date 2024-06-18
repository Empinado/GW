<template>
  <div class="Trainer center">
    <img class="Trainer__img" src="@/assets/Trainer.jpg" alt="Trainer__img" />
    <section class="Trainer__container">
      <h2 class="Trainer__container_subtitle">Экономия времени</h2>
      <p class="Trainer__container_text">
        Мы прекрасно знаем, что начать разбираться в науке по уходу и улучшению
        собственной физической формы непросто и времязатратно. В этом и
        заключается цель нашего сайта. Упростить первые шаги любого человека,
        который решил взяться за свое здоровье.
      </p>
      <p class="Trainer__container_text">
        В случае, если вы затрудняетесь в формировании вашей системы тренировок,
        плана питания, вас интерисует другие глубинные аспекты фитнеса, мы
        предлагаем услугу онлайн ведения.
      </p>
      <p class="Trainer__container_text">
        Вы можете заполнить простую форму ниже и люди, которые давно сделали
        свои первые шаги в индустрии любительского и профессионального спорта ,
        помогут в достижении ваших целей.
      </p>
      <form class="form" action="#">
        <input class="form_input" type="text" placeholder="Цель" required />
        <input class="form_input" type="email" placeholder="Почта" required />
        <button class="form_btn" type="#">Отправить</button>
      </form>
    </section>
  </div>
</template>
<script>
export default {
  name: "TrainerComp",
};
</script>
<style lang="sass" scoped>
.Trainer
  padding-top: 64px
  display: flex
  flex-direction: row
  &__img
    padding: 16px
    width: 500px
    border-radius: 100px
  &__container
    padding: 16px
    display: flex
    gap: 20px
    flex-direction: column
    &_subtitle
      text-align: center
    &_text
.form
  padding: 24px
  display: flex
  flex-direction: row
  justify-content: center
  padding-top: 24px
  background-color: black
  border-radius: 40px
  gap: 8px
  &_input
    border-radius: 16px
    padding: 8px
    border: none
    outline: none
  &_btn
    border-radius: 16px
    padding: 8px
    height: 50px
    width: 100px
    color: white
    background-color: #3586ff
    border: none
    font-family: "Oswald", sans-serif
    transition: 0.4s
    &:hover
      background-color: red
    &:active
      background-color: white
      color: black
</style>
