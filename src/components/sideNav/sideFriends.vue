<template>
    <div>Friends</div>
</template>

<script>
export default {
    name: "SideSearch",
    mounted() {
        this.$router.push("/channels/friends");
    },
};
</script>