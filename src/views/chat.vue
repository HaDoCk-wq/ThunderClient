<template>
    <div class="h-100 w-100">
        <div class="h-100 w-100 container" v-if="$route.params.id == 'main'">
            <br />
            <h1 v-if="$store.getters['user'].channels != 0" class="ms-3 mb-4">
                Select a friend to chat
            </h1>
            <div
                v-for="(channel, i) in $store.getters['user'].channels"
                v-bind:key="i"
                class="user-card p-2 pb-0 d-flex"
                @click="
                    $router.push('/channels/chat/' + channel.channel);
                    $store.commit('setChatId', channel.channel);
                "
            >
                <img
                    :src="
                        $store.getters['api'] +
                        '/profiles/' +
                        channel.user.image
                    "
                    height="55"
                    width="55"
                    alt="User image"
                    class="me-4 rounded-circle"
                />
                <div class="pt-1">
                    <strong> {{ channel.user.name }} </strong>
                    <p>{{ channel.user.desc }}</p>
                </div>
            </div>
            <div v-if="$store.getters['user'].channels == 0">
                <h1 class="ms-3 mb-4">Add friends to chat</h1>
                <button
                    class="ms-3 btn btn-primary"
                    @click="$router.push('/channels/friends')"
                >
                    Search friends
                </button>
            </div>
        </div>
        <div
            v-else
            class="w-100 h-100 d-flex"
            style="flex-direction: column; overflow: auto"
        >
            <div
                v-if="$store.getters['inCall']"
                class="position-absolute d-flex h-100 w-100 main-call"
                style="flex-direction: column"
            >
                <div
                    v-for="(stream, i) in streams"
                    v-bind:key="i"
                    class="video-grid p-3"
                >
                    <video
                        :srcObject.prop="stream.stream"
                        autoplay
                        class="video"
                    ></video>
                </div>
                <div class="flex-fill"></div>
                <div
                    class="w-100 wrapper-input p-1 d-flex"
                    style="flex-direction: row !important"
                >
                    <div class="flex-fill"></div>

                    <div
                        v-if="$store.getters['micMuted']"
                        class="rounded-circle me-5 microphone microphone-muted"
                        @click="$store.commit('toggleMicMuted')"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
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
                    <div
                        v-else
                        class="rounded-circle me-5 microphone"
                        @click="$store.commit('toggleMicMuted')"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
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
                    <div class="rounded-circle penjar">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            fill="currentColor"
                            class="bi bi-telephone-x-fill"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zm9.261 1.135a.5.5 0 0 1 .708 0L13 2.793l1.146-1.147a.5.5 0 0 1 .708.708L13.707 3.5l1.147 1.146a.5.5 0 0 1-.708.708L13 4.207l-1.146 1.147a.5.5 0 0 1-.708-.708L12.293 3.5l-1.147-1.146a.5.5 0 0 1 0-.708z"
                            />
                        </svg>

                        <div class="flex-fill"></div>
                    </div>
                    <div class="flex-fill"></div>
                </div>
            </div>
            <div
                class="p-2 d-flex top-bar"
                :class="!$store.getters['inCall'] ? 'sticky-top' : ''"
            >
                <img
                    :src="
                        $store.getters['api'] +
                        '/profiles/' +
                        chattingUser.image
                    "
                    alt=""
                    width="60"
                    height="60"
                    class="me-3 rounded-circle"
                />
                <div class="me-4">
                    <strong class="mt-2 title-name">
                        {{ chattingUser.name }}
                    </strong>
                    <br />
                    <div v-if="typing > 0">typing...</div>
                    <div v-else>
                        {{ chattingUser.desc }}
                    </div>
                </div>

                <div class="flex-fill"></div>
                <div class="p-2">
                    <div class="top-button">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            fill="currentColor"
                            class="bi bi-telephone-fill"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                            />
                        </svg>
                    </div>
                </div>
            </div>
            <div
                class="d-flex p-2 h-100 chat-wrapper flex-fill"
                style="flex-direction: column; overflow: auto"
            >
                <div
                    v-for="(mesage, i) in mesages"
                    :key="i"
                    class="p-2 message"
                >
                    <div class="d-flex">
                        <img
                            :src="
                                $store.getters['api'] +
                                '/profiles/' +
                                mesage.sender.image
                            "
                            height="50"
                            width="50"
                            alt="Profile image"
                            class="rounded-circle me-3"
                        />
                        <div class="text-break" style="white-space: pre-wrap">
                            <div class="mb-1 d-flex">
                                <div class="me-3">
                                    <strong>{{ mesage.sender.name }}</strong>
                                </div>
                                <div
                                    class="text-muted mt-0"
                                    style="font-size: 15px"
                                >
                                    {{ formatMessageData(mesage.timestamp) }}
                                </div>
                            </div>
                            <div class="mt-1">
                                {{ mesage.content }}
                            </div>
                        </div>
                    </div>
                </div>
                <div ref="afterChat"></div>
            </div>
            <div
                v-if="loading"
                class="progress-line border-progress-line"
            ></div>
            <div class="w-100 wrapper-input">
                <form @submit.prevent="emit" class="d-flex flex-wrap">
                    <input
                        v-model="message"
                        type="text"
                        class="me-2 flex-fill input-mesage"
                        maxlength="1000"
                        :placeholder="' Chat with ' + chattingUser.name"
                        @keyup="
                            $socket.emit(
                                'write',
                                'write' + chatId,
                                $store.getters['user']._id
                            )
                        "
                    />
                    <button type="submit" class="btn btn-primary">envia</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import moment from "moment";
import Peer from "peerjs";

export default {
    data: function () {
        return {
            message: "",
            mesages: [],
            loading: false,
            chattingUser: {
                image: "default.png",
            },
            streams: [],
            newStream: null,
            typing: 0,
            peervue: null,
        };
    },
    sockets: {
        connect: function () {
            console.log("socket connected");
        },
        newMessage: function (data) {
            console.log("el server diu", data);
            this.mesages.push(data);
        },
        writing: function (data) {
            console.log(data);
            if (data != this.$store.getters["user"]._id) {
                this.showTyping();
            }
        },
        "user-conected": function (userId) {
            console.log("user connected", userId);
            const call = this.peervue.call(userId, this.newStream);
            call.on("stream", (userVideoStream) => {
                this.streams.push({ stream: userVideoStream, id: userId });
            });
            call.on("close", (userVideoStream) => {
                //this.streams = [];
                // for (const stream of this.streams) {
                //     if (stream.userId != userId) {
                //         this.streams.push({
                //             stream: userVideoStream,
                //             id: userId,
                //         });
                //     }
                // }
                console.log(userVideoStream);
            });
        },
    },
    methods: {
        emit() {
            if (this.message != "") {
                this.$socket.emit(
                    "message",
                    this.chatId,
                    this.message,
                    this.$store.getters["user"]
                );

                this.axios
                    .post(
                        this.$store.getters["api"] +
                            "/messages/add/" +
                            this.chatId,
                        {
                            message: this.message,
                        },
                        {
                            headers: {
                                authorization: `Bearer ${window.localStorage.token}`,
                            },
                        }
                    )
                    .then((response) => {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.error(error);
                    })
                    .then(() => {});

                this.message = "";
            }
        },
        populateMessages() {
            console.log("popu");
            if (this.chatId != "main") {
                this.axios
                    .get(
                        this.$store.getters["api"] +
                            "/messages/all/" +
                            this.chatId,
                        {
                            headers: {
                                Authorization: `Bearer ${window.localStorage.token}`,
                            },
                        }
                    )
                    .then((response) => {
                        console.log(response);
                        this.chattingUser = response.data.userToChat;
                        this.mesages = response.data.messages;
                    })
                    .catch(function (error) {
                        console.error(error);
                    })
                    .then(() => {
                        console.log("Populate messages ");
                        //this.$refs.afterChat.scrollIntoView();
                        this.$refs.afterChat.scrollIntoView();
                    });
            }
        },
        formatMessageData(currentDate) {
            return moment(currentDate).startOf("minute").fromNow();
        },
        showTyping() {
            // now 'this' is referencing the Vue object and not the 'setTimeout' scope
            this.typing++;
            setTimeout(() => this.typing--, 500);
        },
    },
    mounted() {
        this.$store.commit("navigateTo", "chat");
        //this.$store.commit("setNavbar", false);
        this.$store.commit("setChatId", this.$route.params.id);
        this.$store.commit("refreshUser");
        this.populateMessages();

        this.$socket.emit("join-room", "write" + this.chatId);
        this.$socket.emit("listen-writing", "write" + this.chatId);

        this.peervue = new Peer(undefined, {
            host: "/",
            port: this.$store.getters["peerport"],
        });

        this.peervue.on("open", (id) => {
            this.$socket.emit("join-call", "call" + this.chatId, id);
        });

        navigator.mediaDevices
            .getUserMedia({
                video: true,
                audio: true,
            })
            .then((stream) => {
                this.streams.push({ stream: stream, id: "own" });
                this.newStream = stream;

                this.peervue.on("call", (call) => {
                    call.answer(stream);
                });

                this.$socket.on("user-conected", () => {
                    // console.log("calling");
                    // const call = this.peervue.call(userId, stream);
                    // call.on("stream", (userVideoStream) => {
                    //     this.streams.push(userVideoStream);
                    // });
                    // call.on("close", (userVideoStream) => {
                    //     this.streams.push(userVideoStream);
                    // });
                });
            });
    },
    updated() {
        if (this.chatId != "main") {
            this.$refs.afterChat.scrollIntoView({ behavior: "smooth" });
        }
    },
    computed: {
        chatId() {
            return this.$store.getters["lastChatId"];
            // Or return basket.getters.fruitsCount
            // (depends on your design decisions).
        },
    },
    watch: {
        chatId(newUser, oldUser) {
            this.populateMessages();

            // Our fancy notification (2).
            console.log("test");
            this.$socket.emit("leave-room", oldUser);
            this.$socket.emit("join-room", this.chatId);

            this.$socket.emit("leave-writing", "write" + oldUser);
            this.$socket.emit("listen-writing", "write" + this.chatId);

            console.log(newUser, oldUser);
        },
    },
};
</script>

<style scoped>
.video-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, 520px);
    grid-auto-rows: 400px;
}

video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
}

.wrapper-input {
    background-color: var(--light-dark-bg);
    height: calc(var(--menu-nav-width) - 10px);
    padding: 12px;
}

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

.user-card {
    margin: 8px;
    cursor: pointer;
    border-radius: 4px;
}

.user-card:hover {
    background-color: var(--light-dark-bg);
}

.title-name {
    font-size: 20px;
}

.top-bar {
    border-bottom: 2px solid var(--light-dark-bg);
}

.top-button {
    padding: 10px;
    padding-top: 7px;
    border-radius: 4px;
    cursor: pointer;
}
.top-button:hover {
    background-color: var(--light-dark-bg);
    color: var(--bs-green);
    transition: all 0.3s;
}

.message {
    /* border-bottom: 2px solid var(--light-dark-bg); */
    margin-bottom: 10px;
}

.main-call {
    z-index: 500;
    background-color: var(--light-bg);
}

.microphone {
    background-color: var(--light-bg);
    width: calc(var(--menu-nav-width) - 10px);
    padding: 12px;
    padding-left: 15px;
    cursor: pointer;
}

.microphone-muted {
    color: var(--bs-red);
}

.penjar {
    background-color: var(--bs-red);
    width: calc(var(--menu-nav-width) - 10px);
    padding: 12px;
    padding-left: 13px;
    cursor: pointer;
}
</style>
