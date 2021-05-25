<template>
  <div>
    <h3>Search</h3>
    <div class="d-flex">
      <input
        v-model="filterString"
        type="text"
        class="input-mesage flex-fill me-2"
        placeholder="Username"
      />
    </div>
    <br />
    <div class="row">
      <div
        v-for="(user, i) in filteredList"
        v-bind:key="i"
        class="mb-2 p-1 col-xl-6 col-lg-12"
      >
        <div class="user-card p-2 d-flex flex-wrap">
          <img
            :src="$store.getters['api'] + '/profiles/' + user.image"
            alt=""
            height="90"
            width="90"
            class="rounded-circle me-4"
          />
          <div>
            <strong class="user-name">{{ user.name }}</strong>
            <div>{{ user.desc }}</div>
            <div class="text-muted">{{ user._id }}</div>
          </div>
          <div class="flex-fill"></div>
          <div class="pt-4">
            <button
              v-if="!user.petitionSended"
              @click="
                sendFriendRequest(user._id);
                user.petitionSended = true;
              "
              class="btn btn-primary"
            >
              Send friend request
            </button>
            <button v-else class="btn btn-primary w-100" disabled>
              Petition sended
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filterString: "",
      users: [],
    };
  },
  methods: {
    sendFriendRequest(to) {
      console.log(to);
      this.axios
        .post(
          this.$store.getters["api"] + "/FriendRequest/send",
          { idUser: to },
          {
            headers: {
              Authorization: `Bearer ${window.localStorage.token}`,
            },
          }
        )
        .then((response) => {
          console.log(response);
        })
        .catch(function(error) {
          console.error(error);
        })
        .then(() => {});
    },
  },
  computed: {
    filteredList: function() {
      if (this.filterString == "") return this.users;
      var tempArray = [];
      for (const user of this.users) {
        if (
          user.name.includes(this.filterString) ||
          user._id.includes(this.filterString)
        ) {
          tempArray.push(user);
        }
      }
      return tempArray;
    },
  },
  mounted() {
    this.axios
      .get(this.$store.getters["api"] + "/user/all", {
        headers: {
          Authorization: `Bearer ${window.localStorage.token}`,
        },
      })
      .then((response) => {
        this.users = response.data.users;
      })
      .catch(function(error) {
        console.error(error);
      })
      .then(() => {});
  },
};
</script>

<style scoped>
.user-card {
  background-color: var(--light-dark-bg);
  border-radius: 5px;
}

.user-name {
  font-size: 24px;
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
</style>
