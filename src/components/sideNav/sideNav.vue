<template>
    <div class="side-nav position-relative">
        <div style="overflow: auto" class="side-nav-content">
            <SideAdd v-if="$store.getters.navigation == 'add'" />
            <SideCalls v-if="$store.getters.navigation == 'calls'" />
            <SideChat v-if="$store.getters.navigation == 'chat'" />
            <SideGroups v-if="$store.getters.navigation == 'groups'" />
            <SideFriends v-if="$store.getters.navigation == 'friends'" />
        </div>
        <div class="user-info p-2 position-absolute bottom-0">
            <div class="row">
                <div class="col-8">
                    <strong>{{ $store.getters["user"].name }}</strong>
                    <br />
                    <div class="toggeler-desc-id">
                        <div class="desc-toggle">
                            {{ $store.getters["user"].desc }}
                        </div>
                        <div class="id-toggle">
                            {{ $store.getters["user"]._id }}
                        </div>
                    </div>
                </div>
                <div class="col-2 d-flex p-1">
                    <div class="mic p-1" @click="logout()">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="26"
                            fill="currentColor"
                            class="bi bi-door-open-fill"
                            viewBox="0 0 16 16"
                        >
                            <path
                                d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15H1.5zM11 2h.5a.5.5 0 0 1 .5.5V15h-1V2zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z"
                            />
                        </svg>
                    </div>
                </div>
                <div
                    class="col-2 d-flex p-1"
                    @click="$store.commit('toggleMicMuted')"
                >
                    <div v-if="!$store.getters['micMuted']" class="mic p-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="26"
                            fill="currentColor"
                            class="bi bi-mic-fill"
                            viewBox="0 0 16 16"
                        >
                            <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                            <path
                                d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"
                            />
                        </svg>
                    </div>
                    <div v-else class="mic p-1 red-color">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="26"
                            fill="currentColor"
                            class="bi bi-mic-mute-fill"
                            viewBox="0 0 16 16"
                        >
                            <path
                                d="M13 8c0 .564-.094 1.107-.266 1.613l-.814-.814A4.02 4.02 0 0 0 12 8V7a.5.5 0 0 1 1 0v1zm-5 4c.818 0 1.578-.245 2.212-.667l.718.719a4.973 4.973 0 0 1-2.43.923V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 1 0v1a4 4 0 0 0 4 4zm3-9v4.879L5.158 2.037A3.001 3.001 0 0 1 11 3z"
                            />
                            <path
                                d="M9.486 10.607 5 6.12V8a3 3 0 0 0 4.486 2.607zm-7.84-9.253 12 12 .708-.708-12-12-.708.708z"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SideAdd from "./sideAdd";
import SideCalls from "./sideCalls";
import SideChat from "./sideChat";
import SideGroups from "./sideGroups";
import SideFriends from "./sideFriends";

export default {
    components: { SideAdd, SideCalls, SideChat, SideGroups, SideFriends },

    data: function () {
        return {
            muted: false,
        };
    },
    methods: {
        logout() {
            window.localStorage.removeItem("token");
            this.$router.push("/login");
        },
    },
};
</script>

<style scoped>
.mic:hover {
    background-color: var(--light-bg);
}
.mic {
    border-radius: 4px;
    cursor: pointer;
}
.side-nav-content {
    margin-bottom: calc(var(--menu-nav-width) - 15px);
}

::-webkit-scrollbar {
    width: 7px;
}

::-webkit-scrollbar-track {
    background: var(--light-dark-bg);
}

::-webkit-scrollbar-thumb {
    background: var(--dark-bg);
    border-radius: 9px;
}

::-webkit-scrollbar-thumb:hover {
    background: var(--mid-dark-bg);
}

.red-color {
    color: var(--bs-red);
}

.toggeler-desc-id:hover > .desc-toggle {
    display: none;
}

.toggeler-desc-id:hover > .id-toggle {
    display: unset;
}

.desc-toggle {
    display: unset;
}

.id-toggle {
    display: none;
    font-size: 15px;
}
</style>
