import { createStore } from "vuex";

export default createStore({
  state: {
    topBanner: {
      title: "FIT BRO",
      img: "gym.jpg",
      name: "topBannerImg",
      text: "Это проект, призванный помочь вам составить свою идеальную программу тренировок для зала.",
    },
    topButtons: [
      { title: "Что нужно знать?" },
      { title: "Помощь профи" },
      { title: "Что нужно знать?" },
    ],
    topList: [
      { text: "Виды программ" },
      { text: "Лучшие упражнения" },
      { text: "Техника выполнения" },
      { text: "Процент вовлечения мыщечных групп" },
      { text: "Онлайн ведение" },
      { text: "Полезная информация" },
    ],
    links: [
      { id: 1, title: "link1" },
      { id: 2, title: "link2" },
      { id: 3, title: "link3" },
    ],
    waves: [{ id: "wave1" }, { id: "wave2" }, { id: "wave3" }, { id: "wave4" }],
    linksFooter: [
      { url: "#", title: "Home" },
      { url: "#", title: "About" },
      { url: "#", title: "Services" },
    ],
    icons: [
      { name: "vk", img: "vk.svg", url: "#" },
      { name: "youtube", img: "youtube.svg", url: "#" },
      { name: "telegram", img: "telegram.svg", url: "#" },
    ],
    banners: [
      { img: "Trainer1.jpg" },
      { img: "Trainer2.jpg" },
      { img: "Trainer3.jpg" },
    ],
    TrainerBannerText: {
      subtitle: "Достигай цели!",
      text1:
        "Наши опытные тренера обладают глубокими знаниями и высоким профессионализмом для того, чтобы помочь каждому клиенту достичь своих целей в зале",
      text2:
        "Специально разработанные программы тренировок, персональный подход и мотивационная поддержка позволят нашим клиентам раскрыть свой потенциал и добиться желаемых результатов. Наши тренеры не просто следят за выполнением упражнений, они также помогают с питанием, коррекцией техники и поддерживают клиента на пути к здоровью и физической форме",
      text3:
        "Вместе с нашей командой вы сможете преодолеть любые трудности и достичь новых вершин в своем фитнес-путешествии",
    },
    Exercises: [
      {
        id: 1,
        name: "Жим штанги лежа",
        desc: "Это упражнение отлично развивает грудные мышцы, дельты и трицепсы, помогая укрепить верхнюю часть тела и улучшить общую силу.",
        tegs: ["Грудь", "Трицепс", "Дельты"],
        img: "Ex1.jpg",
        url: "https://www.youtube.com/watch?v=haAmJyTFMKE&ab_channel=SMARTTRAININGChannel",
      },
      {
        id: 2,
        name: "Жим штанги на наклонной скамье",
        desc: "Позволяет сосредоточиться на верхней части груди, развивая и придавая форму этой области, что способствует созданию более сбалансированного развития грудных мышц.",
        tegs: ["Грудь", "Трицепс", "Дельты"],
        img: "Ex2.jpg",
        url: "https://www.youtube.com/watch?v=5OlJ6WFLWQM&ab_channel=SMARTTRAININGChannel",
      },
      {
        id: 3,
        name: "Присед со штангой",
        desc: "Отличное упражнение для развития нижней части тела, включая квадрицепсы, ягодицы и стабилизирующие мышцы кора. Помогает улучшить силу и выносливость ног.",
        tegs: ["Квадрицепс", "Ягодицы"],
        img: "Ex3.jpg",
        url: "https://www.youtube.com/watch?v=EgGx7tp7mTs&ab_channel=SMARTTRAININGChannel",
      },
      {
        id: 4,
        name: "Становая тяга",
        desc: "Развивает почти все основные группы мышц, включая спину, ягодицы, бедра и предплечья. Укрепляет спину, улучшает осанку и помогает в повседневных движениях.",
        tegs: ["Спина", "Ягодицы", "Бедра"],
        img: "Ex4.jpg",
        url: "https://www.youtube.com/watch?v=80BlWHAxPag&ab_channel=SMARTTRAININGChannel",
      },
      {
        id: 5,
        name: "Отжимания на брусьях",
        desc: "Прекрасное упражнение для развития грудных мышц, дельт и трицепсов, а также для укрепления стабилизаторов плечевого пояса.",
        tegs: ["Грудь", "Трицепс", "Дельты"],
        img: "Ex5.jpg",
        url: "https://www.youtube.com/watch?v=ORE34_2m62A&ab_channel=SMARTTRAININGChannel",
      },
      {
        id: 6,
        name: "Подъем штанги на бицепс",
        desc: "Это упражнение направлено на развитие бицепсов и предплечий, помогая улучшить силу и форму рук.",
        tegs: ["Бицепс", "Предплечья"],
        img: "Ex6.jpg",
        url: "https://www.youtube.com/watch?v=WpbyWZjmkpU&ab_channel=FreshLife28",
      },
    ],
    Cart: [],
    Filters: [
      { id: 1, text: "Все" },
      { id: 2, text: "Грудь" },
      { id: 3, text: "Дельты" },
      { id: 4, text: "Трицепс" },
      { id: 5, text: "Спина" },
      { id: 6, text: "Квадрицепс" },
      { id: 7, text: "Ягодицы" },
      { id: 8, text: "Бедра" },
      { id: 9, text: "Бицепс" },
      { id: 10, text: "Предплечья" },
    ],
    FilterExercises: [
      {
        id: 1,
        name: "Жим штанги лежа",
        desc: "Это упражнение отлично развивает грудные мышцы, дельты и трицепсы, помогая укрепить верхнюю часть тела и улучшить общую силу.",
        tegs: ["Грудь", "Трицепс", "Дельты"],
        img: "Ex1.jpg",
        url: "https://www.youtube.com/watch?v=haAmJyTFMKE&ab_channel=SMARTTRAININGChannel",
      },
      {
        id: 2,
        name: "Жим штанги на наклонной скамье",
        desc: "Позволяет сосредоточиться на верхней части груди, развивая и придавая форму этой области, что способствует созданию более сбалансированного развития грудных мышц.",
        tegs: ["Грудь", "Трицепс", "Дельты"],
        img: "Ex2.jpg",
        url: "https://www.youtube.com/watch?v=5OlJ6WFLWQM&ab_channel=SMARTTRAININGChannel",
      },
      {
        id: 3,
        name: "Присед со штангой",
        desc: "Отличное упражнение для развития нижней части тела, включая квадрицепсы, ягодицы и стабилизирующие мышцы кора. Помогает улучшить силу и выносливость ног.",
        tegs: ["Квадрицепс", "Ягодицы"],
        img: "Ex3.jpg",
        url: "https://www.youtube.com/watch?v=EgGx7tp7mTs&ab_channel=SMARTTRAININGChannel",
      },
      {
        id: 4,
        name: "Становая тяга",
        desc: "Развивает почти все основные группы мышц, включая спину, ягодицы, бедра и предплечья. Укрепляет спину, улучшает осанку и помогает в повседневных движениях.",
        tegs: ["Спина", "Ягодицы", "Бедра"],
        img: "Ex4.jpg",
        url: "https://www.youtube.com/watch?v=80BlWHAxPag&ab_channel=SMARTTRAININGChannel",
      },
      {
        id: 5,
        name: "Отжимания на брусьях",
        desc: "Прекрасное упражнение для развития грудных мышц, дельт и трицепсов, а также для укрепления стабилизаторов плечевого пояса.",
        tegs: ["Грудь", "Трицепс", "Дельты"],
        img: "Ex5.jpg",
        url: "https://www.youtube.com/watch?v=ORE34_2m62A&ab_channel=SMARTTRAININGChannel",
      },
      {
        id: 6,
        name: "Подъем штанги на бицепс",
        desc: "Это упражнение направлено на развитие бицепсов и предплечий, помогая улучшить силу и форму рук.",
        tegs: ["Бицепс", "Предплечья"],
        img: "Ex6.jpg",
        url: "https://www.youtube.com/watch?v=WpbyWZjmkpU&ab_channel=FreshLife28",
      },
    ],
    TypesList: [
      { id: 1, name: "SPLIT" },
      { id: 2, name: "FULL BODY" },
      { id: 3, name: "PUSH/PULL" },
    ],
    activeButton: 1,
    activeType: 1,
  },
  getters: {},
  mutations: {
    ADD__EXERCISE(state, { exercise }) {
      state.Cart.push(exercise);
    },
    DEL__EXERCISE(state, id) {
      const index = state.Cart.findIndex((item) => item.id == id);
      if (index !== -1) {
        state.Cart.splice(index, 1);
      }
    },
    CLEAR__CART(state) {
      state.Cart.splice(0, state.Cart.length);
    },
    FILTER__ARR(state, tag) {
      if (tag.text == "Все") {
        state.FilterExercises = state.Exercises;
      } else {
        state.FilterExercises = state.Exercises.filter((exercise) =>
          exercise.tegs.includes(tag.text)
        );
      }
      this.state.activeButton = tag.id;
    },
    COPY__CART(state) {
      const cartData = state.Cart.map((item) => {
        return item.name;
      });

      const dataToCopy = cartData.join("\n");

      navigator.clipboard
        .writeText(dataToCopy)
        .then(() => {
          alert("Данные успешно скопированы в буфер обмена");
        })
        .catch((err) => {
          alert("Ошибка копирования данных: ", err);
        });
    },
    ACTIVE__TYPE(state, type) {
      state.activeType = type.id;
    },
    ANALIZE__ARR(state) {
      state.Cart.forEach((el) => {
        console.log(el.tegs);
      });
    },
  },
  actions: {},
  modules: {},
});
