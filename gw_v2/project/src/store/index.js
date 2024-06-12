import { createStore } from "vuex";

export default createStore({
  state: {
    topBanner: {
      title: "FIT BRO",
      img: "gym.jpg",
      name: "topBannerImg",
      text: "Это проект, призванный помочь вам составить свою идеальную программу тренировок для зала.",
    },
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
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
