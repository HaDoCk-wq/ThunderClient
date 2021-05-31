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

const app = createApp(App);
app.use(store)
app.use(new VueSocketIO({
  debug: true,
  connection: socketio('http://localhost:3000'), //options object is Optional
  vuex: {
    store,
    actionPrefix: "SOCKET_",
    mutationPrefix: "SOCKET_"
  }
}))
app.use(VueAxios, axios)
// app.use(VuePeerJS, new Peer(undefined, {
//   host: "192.168.1.201",
//   port: "3010",
//   config: {
//     'iceServers': [
//       { url: 'stun:stun01.sipphone.com' },
//       { url: 'stun:stun.ekiga.net' },
//       { url: 'stun:stun.fwdnet.net' },
//       { url: 'stun:stun.ideasip.com' },
//       { url: 'stun:stun.iptel.org' },
//       { url: 'stun:stun.rixtelecom.se' },
//       { url: 'stun:stun.schlund.de' },
//       { url: 'stun:stun.l.google.com:19302' },
//       { url: 'stun:stun1.l.google.com:19302' },
//       { url: 'stun:stun2.l.google.com:19302' },
//       { url: 'stun:stun3.l.google.com:19302' },
//       { url: 'stun:stun4.l.google.com:19302' },
//       { url: 'stun:stunserver.org' },
//       { url: 'stun:stun.softjoys.com' },
//       { url: 'stun:stun.voiparound.com' },
//       { url: 'stun:stun.voipbuster.com' },
//       { url: 'stun:stun.voipstunt.com' },
//       { url: 'stun:stun.voxgratia.org' },
//       { url: 'stun:stun.xten.com' }
//     ]
//   }
// }))
app.use(router)
app.mount("#app");


// app.config.globalProperties.$peer = new Peer(undefined, {
//   host: "192.168.1.201",
//   port: "3010",
// });

console.log("config app", app.config)