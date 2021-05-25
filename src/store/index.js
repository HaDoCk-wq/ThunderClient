import { createStore } from "vuex";

export default createStore({
  state: {
    navbarOpen: false,
    navigationSelected: "chat",
    lastChatId: "",
    mainApiUrl: "http://localhost:3000",
    user: {
      image: "default.png"
    }
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
    user: (state) => {
      return state.user;
    },
  },
  mutations: {
    navbarToggle(state) {
      state.navbarOpen = !state.navbarOpen;
    },
    setNavbar(state, navState) {
      state.navbarOpen = navState;
    },
    navigateTo(state, nav) {
      state.navigationSelected = nav;
    },
    setChatId(state, newChatId) {
      state.lastChatId = newChatId;
    },
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {},
  modules: {},
});
