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
      { title: "Что нужно знать", url: "/GuidePage" },
      { title: "Упражнения", url: "/ConstructorPage" },
      { title: "Помощь профи", url: "/TrainerPage" },
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
      { id: 1, title: "Home", url: "./" },
      { id: 2, title: "Гайд", url: "./GuidePage" },
      { id: 3, title: "Упражнения", url: "./ConstructorPage" },
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
      {
        id: 7,
        name: "Подтягивания прямым хватом",
        desc: "Это упражнение развивает мышцы верхней части спины, бицепсы и предплечья.",
        tegs: ["Спина", "Бицепс", "Предплечья"],
        img: "Ex7.jpg",
        url: "",
      },
      {
        id: 8,
        name: "Разведение гантелей в стороны",
        desc: "Это упражнение направлено на развитие мышц плеч, особенно средней дельты.",
        tegs: ["Дельты"],
        img: "Ex8.jpg",
        url: "",
      },
      {
        id: 9,
        name: "Болгарский сплит-присяд",
        desc: "Это упражнение замечательно работает с бедрами, ягодицами и является хорошей альтернативой классическому приседанию.",
        tegs: ["Ягодицы", "Бедра"],
        img: "Ex9.jpg",
        url: "",
      },
      {
        id: 10,
        name: "Разгибание рук за головой",
        desc: "Это упражнение направлено на развитие трицепса. Оказывает меньшее давление на локти.",
        tegs: ["Трицепс"],
        img: "Ex10.jpg",
        url: "",
      },
      {
        id: 11,
        name: "Шраги со штангой стоя",
        desc: "Это упражнение помогает развивать мышцы верхней части спины и шеи.",
        tegs: ["Трапеция"],
        img: "Ex11.jpg",
        url: "",
      },
      {
        id: 12,
        name: "Сгибание на бицепс бедра",
        desc: "Это упражнение направлено на тренировку и развитие бицепса бедра.",
        tegs: ["Бедра"],
        img: "Ex12.jpg",
        url: "",
      },
      {
        id: 13,
        name: "Тяга верхнего блока",
        desc: "Это упражнение развивает мышцы верхней части спины, плечи и бицепсы.",
        tegs: ["Спина", "Дельты", "Бицепсы", "Предплечья"],
        img: "Ex13.jpg",
        url: "",
      },
      {
        id: 14,
        name: "Разгибание ног в тренажере",
        desc: "Это упражнение направлено развитие квадрицепса.",
        tegs: ["Квадрицепс"],
        img: "Ex14.jpg",
        url: "",
      },
      {
        id: 15,
        name: "Бицепс на скамье скотта",
        desc: "Это упражнение сосредотачивается на развитии бицепсов и помогает избежать использования других мышц в процессе.",
        tegs: ["Бицепс", "Предплечье"],
        img: "Ex15.jpg",
        url: "",
      },
      {
        id: 16,
        name: "Сведение рук в кроссовере низ",
        desc: "Отлично развивает нижние отделы грудных мышц.",
        tegs: ["Грудь", "Дельты"],
        img: "Ex16.jpg",
        url: "",
      },
      {
        id: 17,
        name: "Тяга к подбородку",
        desc: "Отлично развивает дельты, передний и средний пучек.",
        tegs: ["Дельты", "Трапеция"],
        img: "Ex17.jpg",
        url: "",
      },
      {
        id: 18,
        name: "Сведение рук в кроссовере верх",
        desc: "Включает верхний и средний отдел грудных мышц.",
        tegs: ["Грудь", "Дельты"],
        img: "Ex18.jpg",
        url: "",
      },
      {
        id: 19,
        name: "Французкий жим",
        desc: "Качает трицепс, отлично растягивает длинную головку.",
        tegs: ["Трицпес"],
        img: "Ex19.jpg",
        url: "",
      },
      {
        id: 20,
        name: "Тяга верхнего блока обратным хватом",
        desc: "Отлично развивает широчайшие мышцы спины, также хорошо работает бицепс.",
        tegs: ["Спина", "Бицепс"],
        img: "Ex20.jpg",
        url: "",
      },
      {
        id: 21,
        name: "Икры в тренажере стоя",
        desc: "Это упражнение направлено на тренировку и укрепление мышц икр.",
        tegs: ["Икры"],
        img: "Ex21.jpg",
        url: "",
      },
      {
        id: 22,
        name: "Икры в тренажере стоя",
        desc: "Это упражнение направлено на тренировку и укрепление мышц икр.",
        tegs: ["Икры"],
        img: "Ex22.jpg",
        url: "",
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
      { id: 11, text: "Икры" },
      { id: 12, text: "Трапеция" },
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
    GuideImgList: [
      {
        id: 1,
        url: "Guide1.jpg",
        text: "Система Split-тренировки предполагает разделение тренировочной программы на отдельные дни, посвященные работе с определенными группами мышц. Обычно используются следующие разделения: разделение по группам мышц (грудь/трицепс, спина/бицепс, ноги/плечи) или разделение по конкретным мышцам (грудные мышцы, спина, ноги, плечи, бицепсы, трицепсы).",
        title: "Split-тренировка",
      },
      {
        id: 2,
        url: "Guide2.jpg",
        text: "Система Full Body предполагает выполнение упражнений для всех основных групп мышц в одной тренировке. Этот подход обеспечивает стимуляцию всего организма за одну тренировку и может быть особенно полезен для начинающих спортсменов или тех, кто хочет тренироваться несколько раз в неделю.",
        title: "Full Body",
      },
      {
        id: 3,
        url: "Guide3.jpg",
        text: "Система Push-Pull разделяет упражнения на две категории: толкающие (push) и тянущие (pull). В одной тренировке вы выполняете упражнения, которые 'толкают' (например, жим штанги лежа, отжимания) и в другой — упражнения, которые 'тянут' (например, подтягивания, тяга штанги к подбородку).",
        title: "Push-Pull",
      },
    ],
    activeButton: 1,
    activeType: 1,
  },
  getters: {},
  mutations: {
    SET_CART: (state, cartData) => {
      state.Cart = cartData;
    },
    ADD__EXERCISE(state, { exercise }) {
      state.Cart.push(exercise);
      localStorage.setItem("Cart", JSON.stringify(state.Cart));
    },
    DEL__EXERCISE: (state, id) => {
      const index = state.Cart.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.Cart.splice(index, 1);
        localStorage.setItem("Cart", JSON.stringify(state.Cart));
      }
    },
    CLEAR__CART(state) {
      state.Cart.splice(0, state.Cart.length);
      localStorage.setItem("Cart", JSON.stringify(state.Cart));
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
  },
  actions: {
    LOAD_CART: ({ commit }) => {
      const cartData = JSON.parse(localStorage.getItem("Cart")) || [];
      commit("SET_CART", cartData);
    },
  },
  modules: {},
});
