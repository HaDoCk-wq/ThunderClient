<template>
    <div class="row">
        <div
            v-for="(user, i) in users"
            v-bind:key="i"
            class="mb-2 p-1 col-xl-4 col-md-6 col-sm-12"
        >
            <div class="user-card p-2 d-flex">
                <img
                    src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
                    alt=""
                    height="50"
                    width="50"
                    class="rounded-circle me-2"
                />
                <div>
                    <strong>{{ user.name }}</strong>
                    <p>{{ user.desc }}</p>
                </div>
                <div class="flex-fill"></div>
                <div class="pt-2">
                    <button
                        v-if="!user.petitionSended"
                        @click="user.petitionSended = true"
                        class="btn btn-primary"
                    >
                        Send friend request
                    </button>
                    <button v-else class="btn btn-primary" disabled>
                        Petition sended
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            users: [],
        };
    },
    mounted() {
        this.axios
            .get(this.$store.getters["api"] + "/user/all", {
                headers: {
                    Authorization: `Bearer ${window.localStorage.token}`,
                },
            })
            .then((response) => {
                this.users = response.data.users;
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
    background-color: var(--light-dark-bg);
}
</style>