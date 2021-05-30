<template>
    <div>
        <!-- class="h-100" style="overflow: auto; position: absolute !important;" -->
        <br />
        <h1 class="ms-3">Friends</h1>
        <p class="ms-3 text-muted">Select one to go chat with them</p>
        <div
            v-for="(channel, i) in $store.getters['user'].channels"
            v-bind:key="i"
            class="user-card p-2 pb-0 d-flex h-100"
            @click="
                $store.commit('setNavbar', false);
                $router.push('/channels/chat/' + channel.channel);
                $store.commit('setChatId', channel.channel);
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
    name: "SideSearch",
    mounted() {
        //this.$router.push("/channels/friends");
        //this.$store.commit("refreshUser");
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
