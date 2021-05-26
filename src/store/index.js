import { createStore } from "vuex";
import axios from 'axios'


export default createStore({
  state: {
    navbarOpen: false,
    navigationSelected: "chat",
    lastChatId: "",
    mainApiUrl: "http://192.168.1.201:3000",
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
    refreshUser(state) {
      axios
        .post(
          state.mainApiUrl + "/user/getUser",
          { token: window.localStorage.token },
          {
            headers: {
              Authorization: `Bearer ${window.localStorage.token}`,
            },
          }
        )
        .then((response) => {
          state.user = response.data.user;
        })
        .catch(function (error) {
          console.error(error);
        })
        .then(() => { });
    }
  },
  actions: {},
  modules: {},
});
