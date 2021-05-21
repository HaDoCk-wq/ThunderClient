import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueSocketIO from 'vue-socket.io';
import socketio from 'socket.io-client';
import "./registerServiceWorker";
import "./assets/scss/custom.scss";
import "./assets/css/App.css";


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
    connection: socketio('http://192.168.1.201:3000'), //options object is Optional
    vuex: {
      store,
      actionPrefix: "SOCKET_",
      mutationPrefix: "SOCKET_"
    }
  })
  )
  .use(router)
  .mount("#app");
