<template>
    <div>
        <br />
        <h1 class="ms-3">Groups</h1>
        <p class="ms-3 text-muted">Select a public group to join</p>
        <div
            v-for="(channel, i) in groups"
            v-bind:key="i"
            class="user-card p-2 pb-0 d-flex h-100"
            :class="$route.params.id == channel.channel ? 'selected' : ''"
            @click="
                $store.commit('setNavbar', false);
                $store.commit('currentGroup', {
                    name: channel.name,
                    desc: channel.desc,
                });
                $router.push('/channels/groups/chat/' + channel.channel);
            "
        >
            <div class="pt-1">
                <strong> {{ channel.name }} </strong>
                <p>{{ channel.desc }}</p>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: "SideGroups",
    data() {
        return {
            groups: [],
        };
    },
    mounted() {
        this.axios
            .get(this.$store.getters["api"] + "/groups/all/", {
                headers: {
                    authorization: `Bearer ${window.localStorage.token}`,
                },
            })
            .then((response) => {
                this.groups = response.data;
                console.log(response);
            })
            .catch(function (error) {
                console.error(error);
            })
            .then(() => {});
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