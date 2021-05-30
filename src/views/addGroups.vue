<template>
    <div>
        <br />
        <br />
        <br />
        <br />
        <div class="container">
            <h1 class="ms-3">Add groups</h1>
            <p class="ms-3 text-muted">Create public groups to join</p>
            <form @submit.prevent="crearGroup" class="">
                <label for="name" class="mb-1">Name</label>
                <br />

                <input
                    v-model="name"
                    type="text"
                    class="input-mesage w-100"
                    id="name"
                    maxlength="1000"
                    required
                    placeholder="Name of the new group"
                />
                <br />
                <br />
                <label for="desc" class="mb-1">Description of de group</label>
                <br />

                <input
                    v-model="desc"
                    type="text"
                    class="input-mesage w-100"
                    id="desc"
                    maxlength="1000"
                    placeholder="Description of the new group"
                    required
                />
                <br />
                <br />
                <div class="d-flex">
                    <div class="flex-fill"></div>
                    <button type="submit" class="btn btn-primary">
                        Create
                    </button>
                </div>
            </form>
            <div v-if="error" class="alert alert-danger mt-4" role="alert">
                <strong>Error:</strong> {{ errorStr }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: "",
            desc: "",
            error: false,
            errorStr: "",
        };
    },
    methods: {
        crearGroup() {
            this.axios
                .post(
                    this.$store.getters["api"] + "/groups/add/",
                    {
                        name: this.name,
                        desc: this.desc,
                    },
                    {
                        headers: {
                            authorization: `Bearer ${window.localStorage.token}`,
                        },
                    }
                )
                .then((response) => {
                    if (response.data.authorized) {
                        this.error = false;
                        this.errorStr = "";
                        console.log(response);
                        this.$router.push(
                            "/channels/groups/chat/" +
                                response.data.group.channel
                        );
                    } else {
                        this.error = true;
                        this.errorStr = response.data.errorString;
                    }
                    console.log(response);
                })
                .catch(function (error) {
                    console.error(error);
                })
                .then(() => {});
        },
    },
};
</script>

<style scoped>
.input-mesage {
    background-color: var(--light-bg);
    border: 2px solid var(--dark-bg);
    box-sizing: initial;
    height: 32px;
    color: white;
}

.input-mesage:focus {
    border-bottom: 3px solid var(--bs-blue);
    transition: border-bottom 0.1s;
}

textarea:focus,
input:focus {
    outline: none;
}
</style>