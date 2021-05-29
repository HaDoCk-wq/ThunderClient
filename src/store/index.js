import { createStore } from "vuex";
import axios from 'axios'


export default createStore({
  state: {
    navbarOpen: false,
    navigationSelected: "chat",
    lastChatId: "main",
    chattingUser: {},
    mainApiUrl: "http://192.168.1.201:3000",
    peerObject: {
      host: "192.168.1.201",
      port: "3010",
    },
    user: {
      image: "default.png"
    },
    friendsPetitons: [],
    inCall: false,
    micMuted: false
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
    peerObject: (state) => {
      return state.peerObject;
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
    inCall: (state) => {
      return state.inCall;
    },
    micMuted: (state) => {
      return state.micMuted;
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
    setCall(state, boolean) {
      state.inCall = boolean;
    },
    setChattingUser(state, user) {
      state.chattingUser = user;
    },
    toggleMicMuted(state) {
      state.micMuted = !state.micMuted;
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
