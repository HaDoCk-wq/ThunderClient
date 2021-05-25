<template>
    <div>chat</div>
</template>

<script>
export default {
    name: "SideChat",
    mounted() {
        this.$router.push("/channels/chat");
    },
};
</script>