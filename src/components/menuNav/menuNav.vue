<template>
    <nav class="menu-nav flex-wrap">
        <div
            class="menu-nav-item pb-2 pt-3"
            v-bind:class="[
                $store.getters.navigation == 'search' ? 'selected' : '',
            ]"
            @click="$store.commit('navigateTo', 'search')"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                class="bi bi-search w-100"
                viewBox="0 0 16 16"
            >
                <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                />
            </svg>
            <div class="w-100 mt-1 text-center">Search</div>
        </div>
        <div
            class="menu-nav-item pb-2 pt-3"
            v-bind:class="[
                $store.getters.navigation == 'chat' ? 'selected' : '',
            ]"
            @click="$store.commit('navigateTo', 'chat')"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                class="bi bi-chat-right-text-fill w-100"
                viewBox="0 0 16 16"
            >
                <path
                    d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.586a1 1 0 0 1 .707.293l2.853 2.853a.5.5 0 0 0 .854-.353V2zM3.5 3h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zm0 2.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zm0 2.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1z"
                />
            </svg>
            <div class="w-100 mt-1 text-center">Chat</div>
        </div>
        <div
            class="menu-nav-item pb-2 pt-2"
            v-bind:class="[
                $store.getters.navigation == 'groups' ? 'selected' : '',
            ]"
            @click="$store.commit('navigateTo', 'groups')"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                fill="currentColor"
                class="bi bi-people-fill w-100"
                viewBox="0 0 16 16"
            >
                <path
                    d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                />
                <path
                    fill-rule="evenodd"
                    d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
                />
                <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
            </svg>
            <div class="w-100 mt-1 text-center">Groups</div>
        </div>
        <div
            class="menu-nav-item pb-2 pt-3"
            v-bind:class="[
                $store.getters.navigation == 'calls' ? 'selected' : '',
            ]"
            @click="$store.commit('navigateTo', 'calls')"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                class="bi bi-telephone-fill w-100"
                viewBox="0 0 16 16"
            >
                <path
                    fillRule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                />
            </svg>
            <div class="w-100 mt-1 text-center">Calls</div>
        </div>
        <div
            class="menu-nav-item pb-2 pt-3"
            v-bind:class="[
                $store.getters.navigation == 'add' ? 'selected' : '',
            ]"
            @click="$store.commit('navigateTo', 'add')"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                class="bi bi-plus-square-fill w-100"
                viewBox="0 0 16 16"
            >
                <path
                    d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"
                />
            </svg>
            <div class="w-100 mt-1 text-center">Add</div>
        </div>
        <div class="flex-fill"></div>
        <div class="profile-pic">
            <img
                src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
                height="50"
                width="50"
                alt="Profile image"
                class="rounded-circle"
            />
        </div>
    </nav>
</template>

<script>
export default {
    name: "MenuNav",
    data: function () {
        return {};
    },
};
</script>

<style scoped>
.menu-nav {
    flex-direction: column;
    box-sizing: border-box;
    font-size: 13px;
}

.menu-nav-item {
    cursor: pointer;
}

.menu-nav-item:hover {
    background-color: var(--light-dark-bg);
}

.menu-nav-item.selected {
    color: var(--bs-blue);
    width: var(--menu-nav-width);
    background-color: var(--light-dark-bg);
    -webkit-box-shadow: inset 3px 0px 0px 0px var(--bs-blue);
    -moz-box-shadow: inset 3px 0px 0px 0px var(--bs-blue);
    box-shadow: inset 3px 0px 0px 0px var(--bs-blue);
    transition: box-shadow 0.3s, color 0.6s;
}

.profile-pic {
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 10px;
    width: 45px;
    height: 45px;
    cursor: pointer;
}
</style>
