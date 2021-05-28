import { createStore } from "vuex";
import axios from 'axios'


export default createStore({
  state: {
    navbarOpen: false,
    navigationSelected: "chat",
    lastChatId: "main",
    chattingUser: {},
    mainApiUrl: "http://localhost:3000",
    user: {
      image: "default.png"
    },
    friendsPetitons: []
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
    ChattingUser: (state) => {
      return state.chattingUser;
    },
    friendsPetitons: (state) => {
      return state.friendsPetitons;
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
    setChattingUser(state, user) {
      state.chattingUser = user;
    },
    refreshUser(state) {
      console.log("refresh user")
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
        .then(() => {

          axios
            .get(state.mainApiUrl + "/FriendRequest/", {
              headers: {
                Authorization: `Bearer ${window.localStorage.token}`,
              },
            })
            .then((response) => {
              state.friendsPetitons = response.data.FriendRequest;
            })
            .catch(function (error) {
              console.error(error);
            })
            .then(() => {
            });

        });

    }
  },
  actions: {},
  modules: {},
});
