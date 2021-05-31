<template>
    <div>
        <div class="menu-wraper" :class="{ open: navbarOpened }">
            <MenuNav />
            <SideNav />
        </div>
        <main class="main-content">
            <div class="w-100 h-100">
                <router-view />
            </div>
        </main>
        <transition name="bounce">
            <div
                v-if="callOpen"
                class="modal fade show d-block"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-hidden="true"
            >
                <div class="modal-dialog modal-dialog-centered modal-sm">
                    <div class="modal-content">
                        <div class="modal-body">
                            <img
                                :src="
                                    $store.getters['api'] +
                                    '/profiles/' +
                                    callerImg
                                "
                                alt="User Calling"
                                height="270"
                                width="270"
                                class="rounded-circle mb-4"
                            />

                            <h3 style="color: white" class="mb-3">
                                <strong> {{ callerName }} </strong><br />
                                <div class="text-muted" style="font-size: 20px">
                                    is calling...
                                </div>
                            </h3>
                            <div class="d-flex">
                                <div class="flex-fill"></div>
                                <div
                                    class="me-5 awnser rounded-circle"
                                    @click="callOpen = false"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="currentColor"
                                        class="bi bi-telephone-x-fill"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zm9.261 1.135a.5.5 0 0 1 .708 0L13 2.793l1.146-1.147a.5.5 0 0 1 .708.708L13.707 3.5l1.147 1.146a.5.5 0 0 1-.708.708L13 4.207l-1.146 1.147a.5.5 0 0 1-.708-.708L12.293 3.5l-1.147-1.146a.5.5 0 0 1 0-.708z"
                                        />
                                    </svg>
                                </div>
                                <div
                                    @click="enterCall()"
                                    class="rounded-circle refuse"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="currentColor"
                                        class="bi bi-telephone-forward-fill"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zm10.761.135a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708z"
                                        />
                                    </svg>
                                </div>
                                <div class="flex-fill"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
        <div
            v-if="callOpen"
            class="position-fixed h-100 w-100 background-modal"
        ></div>
        <audio
            v-if="callOpen"
            :src="$store.getters['api'] + '/call.mp3'"
            autoplay
            loop
        ></audio>
        <div v-if="!cookiesAceptades()" class="fixed-bottom p-4 w-100 cookies">
            <div
                class="d-flex p-3 rounded shadow"
                style="background-color: var(--light-dark-bg); color: white"
            >
                <div class="flex-fill me-4">
                    In thunder we use cookies to manage your session. If you
                    have any question you can see our
                    <a
                        href="https://github.com/HaDoCk-wq/ThunderClient/blob/main/Cookie-Policy.md"
                        >cookies policy</a
                    >
                </div>
                <button @click="aceptarCookies()" class="btn btn-primary">
                    Agree
                </button>
            </div>
        </div>
        <ButtonOpenNav />
    </div>
</template>

<script>
import MenuNav from "../components/menuNav/menuNav.vue";
import SideNav from "../components/sideNav/sideNav.vue";
import ButtonOpenNav from "../components/buttonOpenNav/ButtonOpenNav";

export default {
    components: { MenuNav, ButtonOpenNav, SideNav },
    data() {
        return {
            callOpen: false,
            roomToJoin: "",
            callerName: "",
            callerImg: "",
        };
    },
    computed: {
        navbarOpened() {
            return this.$store.getters["navbarState"];
        },
        userLoaded() {
            return this.$store.getters["user"];
            // Or return basket.getters.fruitsCount
            // (depends on your design decisions).
        },
    },
    sockets: {
        connect: function () {
            console.log("socket connected");
        },
        "emit-call": function (data) {
            if (!this.$store.getters["userInCall"]) {
                console.log("el server diu", data);
                this.roomToJoin = data[1];
                this.callerName = data[3];
                this.callerImg = data[2];
                this.callOpen = true;
            }
        },
    },
    methods: {
        enterCall() {
            this.callOpen = false;
            this.$store.commit("setChatId", this.roomToJoin);
            this.$store.commit("navigateTo", "chat");
            this.$store.commit("userEnterCall");
            this.$router.push("/channels/call/" + this.roomToJoin);
        },
        cookiesAceptades() {
            return !localStorage.getItem("cookieAccepted") === null;
        },
        aceptarCookies() {
            localStorage.cookieAccepted == true;
        },
    },
    mounted() {
        this.$store.commit("refreshUser");
    },
    watch: {
        userLoaded(newUser, oldUser) {
            console.warn("User", this.$store.getters["user"]._id);

            this.$socket.emit("listen-call", this.$store.getters["user"]._id);
            console.log(newUser, oldUser);
        },
    },
};
</script>

<style scoped>
.modal-content {
    background-color: var(--light-dark-bg);
}
/* .modal {
    background-color: white;
    opacity: 0.1;
} */

.rounded {
    border-radius: 6px !important;
}

.bounce-enter-active {
    animation: bounce-in 0.5s;
}
.bounce-leave-active {
    animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.3);
    }
    100% {
        transform: scale(1);
    }
}

.background-modal {
    z-index: 1;
    opacity: 0.3;
    background-color: black;
}

.awnser {
    background-color: var(--bs-red);
    padding: 15px;
    cursor: pointer;
}

.refuse {
    background-color: var(--bs-green);
    padding: 15px;
    cursor: pointer;
}

.cookies {
    position: fixed;
    z-index: 10000;
}
</style>