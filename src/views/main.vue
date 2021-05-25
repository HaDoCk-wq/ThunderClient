<template>
  <div class="menu-wraper" :class="{ open: navbarOpened }">
    <MenuNav />
    <SideNav />
  </div>
  <main class="main-content">
    <div class="w-100 h-100">
      <router-view />
    </div>
  </main>
  <ButtonOpenNav />
</template>

<script>
import MenuNav from "../components/menuNav/menuNav.vue";
import SideNav from "../components/sideNav/sideNav.vue";
import ButtonOpenNav from "../components/buttonOpenNav/ButtonOpenNav";

export default {
  components: { MenuNav, ButtonOpenNav, SideNav },
  computed: {
    navbarOpened() {
      return this.$store.getters["navbarState"];
    },
  },
  mounted() {
    console.log(`Bearer ${window.localStorage.token}`);
    this.axios
      .post(
        this.$store.getters["api"] + "/user/getUser",
        { token: window.localStorage.token },
        {
          headers: {
            Authorization: `Bearer ${window.localStorage.token}`,
          },
        }
      )
      .then((response) => {
        this.$store.commit("setUser", response.data.user);
        console.log(response);
      })
      .catch(function(error) {
        console.error(error);
      })
      .then(() => {});
  },
};
</script>
