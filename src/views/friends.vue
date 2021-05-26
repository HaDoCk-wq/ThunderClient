<template>
    <div class="h-100" style="overflow: auto">
        <br />
        <div class="p-3 pb-0 sticky-top sticky-topbar">
            <div class="d-flex">
                <button
                    :class="selected == 'request' ? 'selected' : ''"
                    @click="selected = 'request'"
                    class="button-nav"
                >
                    Friend request
                </button>
                <button
                    :class="selected == 'search' ? 'selected' : ''"
                    @click="selected = 'search'"
                    class="button-nav"
                >
                    Search
                </button>
                <div class="flex-fill top-bar"></div>
            </div>
        </div>
        <div class="p-3">
            <FriendsRequest v-if="selected == 'request'" />
            <SearchFriends v-if="selected == 'search'" />
        </div>
    </div>
</template>

<script>
import FriendsRequest from "../components/friendRequests";
import SearchFriends from "../components/searchFriends";

export default {
    components: { FriendsRequest, SearchFriends },

    data() {
        return {
            selected: "request",
        };
    },
    mounted() {
        this.$store.commit("navigateTo", "friends");
        this.$store.commit("setNavbar", false);
        this.$store.commit("refreshUser");
    },
};
</script>

<style scoped>
.button-nav {
    padding: 5px;
    background-color: var(--light-dark-bg);
    border: none;
    color: white;
    padding: 8px;
    padding-bottom: 9px;
}

.selected {
    border-bottom: 4px solid var(--bs-blue);
    padding-bottom: 5px;
}

.top-bar {
    border-bottom: 3px solid var(--light-dark-bg);
}

.sticky-topbar {
    background-color: var(--light-bg);
}
</style>
