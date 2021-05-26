<template>
  <div class="center-container">
    <div class="child">
      <div class="login-container p-3 shadow">
        <h1>Login</h1>
        <br />
        <form @submit.prevent="submit">
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control input-mesage"
              id="floatingInput"
              placeholder="name@example.com"
              autofocus
              required
              v-model="email"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="password"
              class="form-control input-mesage"
              id="email"
              placeholder="password"
              required
              v-model="password"
            />
            <label for="email">Password</label>
          </div>
          <div class="d-flex flex-wrap">
            <router-link to="/register">Create an acount?</router-link>
            <div class="flex-fill"></div>
            <button type="submit" class="btn btn-primary">
              Login
            </button>
          </div>
        </form>
        <transition name="slide-fade">
          <div v-if="error" class="alert alert-danger d-flex mt-2" role="alert">
            <div><strong>Error: </strong> {{ errorString }}</div>
            <div class="flex-fill"></div>
            <button
              type="button"
              class="btn-close"
              @click="error = false"
            ></button>
          </div>
        </transition>
        <div
          v-if="loading"
          class="progress-line border-progress-line mt-2"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      error: false,
      errorString: "",
      loading: false,
    };
  },
  methods: {
    submit() {
      this.loading = true;
      this.axios
        .post(this.$store.getters["api"] + "/user/login", {
          password: this.password,
          email: this.email,
        })
        .then((response) => {
          if (response.data.authorized) {
            window.localStorage.setItem("token", response.data.token);
            console.log(response.data.user);

            this.$store.commit("setUser", response.data.user);
            this.$router.push("/channels/chat/main");
          } else {
            this.error = true;
            this.errorString = response.data.errorString;
          }
        })
        .catch(function(error) {
          //this.errorString = error.data.errorString;
          console.log(error);
          this.error = true;
          this.errorString = "This user does not exist";
        })
        .then(() => {
          this.loading = false;
        });
    },
  },
};
</script>

<style scoped>
.center-container {
  position: fixed;
  height: 100%;
  width: 100%;
  margin: auto;
}

.child {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  height: 100%;
  padding: 10px;
}

.login-container {
  width: 100%;
  max-width: 920px;
  background-color: var(--mid-dark-bg);
  border-radius: var(--border-radius);
  color: var(--color-white);
}

.input-mesage {
  background-color: var(--light-bg);
  border: 3px solid var(--dark-bg);
  color: white;
}

.input-mesage:focus {
  border-bottom-color: var(--bs-blue);
  transition: border-bottom-color ease 0.5s;
}
</style>
