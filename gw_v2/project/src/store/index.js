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
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
