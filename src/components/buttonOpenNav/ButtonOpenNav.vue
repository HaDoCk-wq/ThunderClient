<template>
    <button
        @click="toggleNavbar"
        class="button-open-nav rounded-circle shadow"
        :class="{ rotated: navbarOpened }"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            fill="currentColor"
            class="bi bi-arrow-right-short"
            viewBox="0 0 16 16"
        >
            <path
                fill-rule="evenodd"
                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
            />
        </svg>
    </button>
</template>

<script>
export default {
    name: "ButtonOpenNav",
    data: function () {
        return {};
    },
    methods: {
        toggleNavbar() {
            this.$store.commit("navbarToggle");
            this.opened = !this.opened;
        },
    },
    computed: {
        navbarOpened() {
            return this.$store.getters["navbarState"];
        },
    },
};
</script>

<style scoped>
.button-open-nav {
    position: fixed;
    z-index: 10;
    background-color: var(--bs-blue);
    border: none;
    bottom: 0;
    right: 0;
    margin-bottom: var(--menu-nav-width);
    margin-right: 10px;
    padding: 8px;
    display: none;
}

@media (max-width: 926px) {
    .button-open-nav {
        display: block;
    }
}

.rotated {
    -o-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg); /* How many times it'll rotate = degrees÷360 */
    transition: transform 0.4s;
}
</style>
