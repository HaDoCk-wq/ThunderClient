<template>
    <div>
        <router-view />
    </div>
</template>

<script>
export default {
    mounted() {
        //window.localStorage.removeItem("token");
        this.$router.push("/channels/chat/main");
    },
};
</script>
