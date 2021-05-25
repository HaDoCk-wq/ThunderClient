<template>
  <div>
    <div class="row">
      <transition-group name="slide-fade">
        <div
          v-for="(request, i) in friendRequests"
          v-bind:key="i"
          class="mb-2 p-1 col-xl-6 col-lg-12"
        >
          <div class="user-card p-2 d-flex flex-wrap">
            <img
              :src="$store.getters['api'] + '/profiles/' + request.from.image"
              alt=""
              height="90"
              width="90"
              class="rounded-circle me-4"
            />
            <div>
              <strong class="user-name">{{ request.from.name }}</strong>
              <div>{{ request.from.desc }}</div>
              <div class="text-muted">{{ request.from._id }}</div>
            </div>
            <div class="flex-fill"></div>
            <div class="pt-4 d-flex">
              <button
                class="btn btn-danger p-0 boto-selection me-2"
                @click="deleteFriendRequest(request._id, i)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  class="bi bi-x-lg"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"
                  />
                </svg>
              </button>
              <button
                class="btn btn-success p-0 boto-selection me-4"
                @click="acceptFriendRequest(request._id, i)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  class="bi bi-check2"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </transition-group>
    </div>
    <transition name="fade">
      <h2 v-if="friendRequests.length == 0 && dataLoaded">
        You dont have any friend request
      </h2>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      friendRequests: [],
      dataLoaded: false,
    };
  },
  methods: {
    deleteFriendRequest(friendRequest, iterador) {
      this.friendRequests.splice(iterador, 1);
      this.axios
        .post(
          this.$store.getters["api"] + "/FriendRequest/refuse",
          { request: friendRequest },
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
    acceptFriendRequest(friendRequest, iterador) {
      this.friendRequests.splice(iterador, 1);
      this.axios
        .post(
          this.$store.getters["api"] + "/FriendRequest/accept",
          { request: friendRequest },
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
  mounted() {
    this.axios
      .get(this.$store.getters["api"] + "/FriendRequest/", {
        headers: {
          Authorization: `Bearer ${window.localStorage.token}`,
        },
      })
      .then((response) => {
        this.friendRequests = response.data.FriendRequest;
      })
      .catch(function(error) {
        console.error(error);
      })
      .then(() => {
        this.dataLoaded = true;
      });
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

.boto-selection {
  width: 50px !important;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
