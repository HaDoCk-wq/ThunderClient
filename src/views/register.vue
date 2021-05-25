<template>
  <div class="center-container">
    <div class="child">
      <div class="login-container p-3 shadow">
        <h1>Register</h1>
        <br />
        <form @submit.prevent="submit">
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control input-mesage"
              id="email"
              placeholder="name@example.com"
              autofocus
              required
              v-model="email"
            />
            <label for="email">Email address</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control input-mesage"
              id="name"
              placeholder="name@example.com"
              required
              v-model="name"
            />
            <label for="name">Name</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control input-mesage"
              id="description"
              placeholder="name@example.com"
              required
              v-model="desc"
            />
            <label for="description">Description</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="password"
              class="form-control input-mesage"
              id="password"
              placeholder="password"
              required
              v-model="password"
            />
            <label for="password">Password</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="password"
              class="form-control input-mesage"
              id="passwordRepeat"
              placeholder="password"
              v-model="passwordRepeat"
              required
            />
            <label for="passwordRepeat">Repeat password</label>
          </div>
          <div class="d-flex flex-wrap">
            <router-link to="/login">Do you have an acount?</router-link>
            <div class="flex-fill"></div>
            <button type="submit" class="btn btn-primary">
              Register
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
      name: "",
      password: "",
      passwordRepeat: "",
      email: "",
      desc: "",
      error: false,
      errorString: "",
      loading: false,
    };
  },
  methods: {
    submit() {
      this.loading = true;
      this.axios
        .post(this.$store.getters["api"] + "/user/register", {
          name: this.name,
          password: this.password,
          email: this.email,
          desc: this.desc,
          passwordRepeat: this.passwordRepeat,
          image: "default.png",
        })
        .then((response) => {
          if (response.data.authorized) {
            window.localStorage.setItem("token", response.data.token);
            console.log(response.data.user);
            this.$store.commit("setUser", response.data.user);
            this.$router.push("/channels/chat");
          } else {
            this.error = true;
            this.errorString = response.data.errorString;
          }
        })
        .catch(function(error) {
          //this.errorString = error.data.errorString;
          console.log(error);
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

.border-progress-line {
  border-radius: var(--border-radius);
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

.slide-fade-enter-active {
  transition: all 0.8s ease;
}
.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
