<template>
    <div>
        <br />
        <h1 class="ms-3">Chat</h1>
        <div
            v-for="(channel, i) in $store.getters['user'].channels"
            v-bind:key="i"
            class="user-card p-2 pb-0 d-flex h-100"
            :class="
                $store.getters['lastChatId'] == channel.channel
                    ? 'selected'
                    : ''
            "
            @click="
                $store.commit('setNavbar', false);
                $store.commit('setChatId', channel.channel);
                $router.push('/channels/chat/' + channel.channel);
            "
        >
            <img
                :src="$store.getters['api'] + '/profiles/' + channel.user.image"
                height="60"
                width="60"
                alt="User image"
                class="me-2 rounded-circle"
            />
            <div class="pt-1">
                <strong> {{ channel.user.name }} </strong>
                <p>{{ channel.user.desc }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SideChat",
    mounted() {
        //this.$router.push("/channels/chat");
        console.log("avans 1");
        //this.$store.commit("refreshUser");
        console.log("despres 1");
    },
};
</script>

<style scoped>
.user-card {
    margin: 8px;
    cursor: pointer;
    border-radius: 4px;
}

.user-card:hover {
    background-color: var(--light-bg);
}

.user-card.selected {
    background-color: var(--light-bg);
}
</style>
