<template>
  <div class="h-100 w-100">
    <div class="h-100 w-100 container" v-if="$route.params.id == 'main'">
      <br />
      <h1 v-if="$store.getters['user'].channels != 0" class="ms-3 mb-4">
        Select a friend to chat
      </h1>
      <div
        v-for="(channel, i) in $store.getters['user'].channels"
        v-bind:key="i"
        class="user-card p-2 pb-0 d-flex"
        :class="$store.getters['lastChatId'] == channel._id ? 'selected' : ''"
        @click="
          $router.push('/channels/chat/' + channel._id);
          $store.commit('setChatId', channel._id);
        "
      >
        <img
          :src="$store.getters['api'] + '/profiles/' + channel.user.image"
          height="60"
          width="60"
          alt="User image"
          class="me-2"
        />
        <div class="pt-1">
          <strong> {{ channel.user.name }} </strong>
          <p>{{ channel.user.desc }}</p>
        </div>
      </div>
      <div v-if="$store.getters['user'].channels == 0">
        <h1 class="ms-3 mb-4">Add friends to chat</h1>
        <button
          class="ms-3 btn btn-primary"
          @click="$router.push('/channels/friends')"
        >
          Search friends
        </button>
      </div>
    </div>
    <div v-else class="w-100 h-100 d-flex" style="flex-direction: column">
      <div
        class="d-flex p-2 h-100 chat-wrapper flex-fill"
        style="flex-direction: column; overflow: auto"
      >
        <div v-for="(mesage, i) in mesages" :key="i" class="p-2">
          <div class="d-flex">
            <img
              src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
              height="50"
              width="50"
              alt="Profile image"
              class="rounded-circle me-2"
            />
            <div class="text-break" style="white-space: pre-wrap">
              <p class="mb-1">
                <strong> Anrau Costa </strong>
              </p>
              {{ mesage }}
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div ref="bforeChat"></div>
      </div>
      <div v-if="loading" class="progress-line border-progress-line"></div>
      <div class="w-100 wrapper-input">
        <form @submit.prevent="emit" class="d-flex flex-wrap">
          <input
            v-model="message"
            type="text"
            class="me-2 flex-fill input-mesage"
            maxlength="1000"
          />
          <button type="submit" class="btn btn-primary">envia</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      message: "",
      mesages: [],
      loading: false,
    };
  },
  sockets: {
    connect: function() {
      console.log("socket connected");
    },
    customEmit: function(data) {
      console.log("el server diu", data);
      this.mesages.push(data);
      this.$refs.bforeChat.scrollIntoView({ behavior: "smooth" });
    },
  },
  methods: {
    emit() {
      if (this.message != "") {
        console.log(this.message);
        this.$socket.emit("message", this.message);
        this.message = "";
      }
    },
    populateMessages() {
      this.axios
        .get(this.$store.getters["api"] + "/messages/all/" + this.chatId, {
          headers: {
            Authorization: `Bearer ${window.localStorage.token}`,
          },
        })
        .then((response) => {
          console.log(response);
        })
        .catch(function(error) {
          console.error(error);
        })
        .then(() => {});
    },
  },
  mounted() {
    this.$socket.emit("join-room", "test");
    this.$store.commit("navigateTo", "chat");
    this.$store.commit("setNavbar", false);
    this.$store.commit("setChatId", this.$route.params.id);
    this.$store.commit("refreshUser");
  },
  computed: {
    chatId() {
      return this.$store.getters["lastChatId"];
      // Or return basket.getters.fruitsCount
      // (depends on your design decisions).
    },
  },
  watch: {
    chatId(newUser, oldUser) {
      // Our fancy notification (2).
      this.populateMessages();
      console.log(newUser, oldUser);
    },
  },
};
</script>

<style scoped>
#video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-auto-rows: 300px;
}

video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.wrapper-input {
  background-color: var(--light-dark-bg);
  height: calc(var(--menu-nav-width) - 10px);
  padding: 12px;
}

.input-mesage {
  background-color: var(--light-bg);
  border: 2px solid var(--dark-bg);
  box-sizing: initial;
  height: 32px;
  color: white;
}

.input-mesage:focus {
  border-bottom: 3px solid var(--bs-blue);
  transition: border-bottom 0.1s;
}

textarea:focus,
input:focus {
  outline: none;
}

.user-card {
  margin: 8px;
  cursor: pointer;
  border-radius: 4px;
}

.user-card:hover {
  background-color: var(--light-dark-bg);
}
</style>
