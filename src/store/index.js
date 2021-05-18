import { createStore } from "vuex";

export default createStore({
  state: {
    navbarOpen: false,
    navigationSelected: "chat",
    lastChatId: "",
    mainApiUrl: "http://localhost:3000"
  },
  getters: {
    navbarState: (state) => {
      return state.navbarOpen;
    },
    navigation: (state) => {
      return state.navigationSelected;
    },
    lastChatId: (state) => {
      return state.lastChatId;
    },
    api: (state) => {
      return state.mainApiUrl;
    },
  },
  mutations: {
    navbarToggle(state) {
      state.navbarOpen = !state.navbarOpen;
    },
    navigateTo(state, nav) {
      state.navigationSelected = nav;
    },
    setChatId(state, newChatId) {
      state.lastChatId = newChatId;
    },
  },
  actions: {},
  modules: {},
});
