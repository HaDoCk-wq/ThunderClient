<template>
    <div class="menu-wraper" :class="{ open: navbarOpened }">
        <MenuNav />
        <SideNav />
    </div>
    <main class="main-content">
        <div class="container-fluid">
            <router-view />
        </div>
    </main>
    <ButtonOpenNav />
</template>

<script>
import MenuNav from "./components/menuNav/menuNav.vue";
import SideNav from "./components/sideNav/sideNav.vue";
import ButtonOpenNav from "./components/buttonOpenNav/ButtonOpenNav";

export default {
    components: { MenuNav, ButtonOpenNav, SideNav },
    computed: {
        navbarOpened() {
            return this.$store.getters["navbarState"];
        },
    },
};
</script>