import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueSocketIO from 'vue-socket.io';
import socketio from 'socket.io-client';
import axios from 'axios'
import VueAxios from 'vue-axios'
// import VuePeerJS from 'vue-peerjs';
// import Peer from 'peerjs';
import "./registerServiceWorker";
import "./assets/scss/custom.scss";
import "./assets/css/App.css";
import './registerServiceWorker'


// const SocketInstance = socketio.connect('http://localhost:3000', {
//   // query: {
//   //   token: window.localStorage.getItem('auth')
//   // }
// });


//const options = { path: '/' }; //Options object to pass into SocketIO

createApp(App)
  .use(store)
  .use(new VueSocketIO({
    debug: true,
    connection: socketio('http://192.168.172.179:3000'), //options object is Optional
    vuex: {
      store,
      actionPrefix: "SOCKET_",
      mutationPrefix: "SOCKET_"
    }
  }))
  .use(VueAxios, axios)
  // .use(VuePeerJS, new Peer(undefined, {
  //   host: "192.168.172.179",
  //   port: "3010",
  // }))
  .use(router)
  .mount("#app");


