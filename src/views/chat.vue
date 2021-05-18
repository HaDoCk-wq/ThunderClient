<template>
    <div @click="emit">chat</div>
</template>

<script>
export default {
    sockets: {
        connect: function () {
            console.log("socket connected");
        },
        customEmit: function (data) {
            console.log("el server diu", data);
        },
    },
    methods: {
        emit() {
            this.$socket.emit("join-room", "cum2", "cum3");
        },
    },
    mounted() {
        console.log(this.$store.getters["api"]);
        this.$socket.emit("join-room", "cum2", "cum3");
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
</style>