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
                    <div
                        class="top-button"
                        @click="
                            $socket.emit(
                                'call',
                                chattingUser._id,
                                $route.params.id,
                                $store.getters['user'].image,
                                $store.getters['user'].name
                            );
                            $store.commit('userEnterCall');
                            $router.push('/channels/call/' + $route.params.id);
                        "
                    >
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
                    <button type="submit" class="btn btn-primary">Send</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import moment from "moment";
//import Peer from "peerjs";

export default {
    data: function () {
        return {
            message: "",
            mesages: [],
            loading: false,
            chattingUser: {
                image: "default.png",
            },
            streams: {},
            newStream: null,
            typing: 0,
            peervue: null,
            peers: {},
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
        // "user-conected": function(data) {
        //   console.log("user conected", data);
        // },
        // "user-conected": function(userId) {
        //   const call = peer.call(userId, stream);
        //   const video = document.createElement("video");
        //   call.on("stream", (userVideoStream) => {
        //     this.streams.push(userVideoStream);
        //   });
        //   call.on("close", () => {
        //     video.remove();
        //   });

        //   peers[userId] = call;

        //   //   call.on("close", (userVideoStream) => {
        //   //     //this.streams = [];
        //   //     // for (const stream of this.streams) {
        //   //     //     if (stream.userId != userId) {
        //   //     //         this.streams.push({
        //   //     //             stream: userVideoStream,
        //   //     //             id: userId,
        //   //     //         });
        //   //     //     }
        //   //     // }
        //   //     console.log(userVideoStream);
        //   //   });
        // },
    },
    methods: {
        emit() {
            if (this.message != "") {
                this.$socket.emit(
                    "message",
                    this.$route.params.id,
                    this.message,
                    this.$store.getters["user"]
                );

                this.axios
                    .post(
                        this.$store.getters["api"] +
                            "/messages/add/" +
                            this.$route.params.id,
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
            //return currentDate;
            return moment(currentDate).startOf("minute").fromNow();
        },
        showTyping() {
            // now 'this' is referencing the Vue object and not the 'setTimeout' scope
            this.typing++;
            setTimeout(() => this.typing--, 500);
        },
        peer() {
            this.$store.commit("navigateTo", "chat");
            //this.$store.commit("setNavbar", false);
            this.$store.commit("setChatId", this.$route.params.id);
            this.$store.commit("refreshUser");
            this.populateMessages();

            this.$socket.emit("join-room", this.$route.params.id);
            this.$socket.emit(
                "listen-writing",
                "write" + this.$route.params.id
            );

            // if (this.chatId != "main") {
            //     this.streams = {};
            //     navigator.mediaDevices
            //         .getUserMedia({
            //             video: true,
            //             //audio: true,
            //         })
            //         .then((stream) => {
            //             this.streams["own"] = stream;
            //             this.newStream = stream;

            //             var peer = new Peer(
            //                 undefined,
            //                 this.$store.getters["peerObject"]
            //             );

            //             console.log("Peer:", peer, this.$peer);

            //             peer.on("call", (call) => {
            //                 call.answer(stream);
            //                 call.on("stream", (userVideoStream) => {
            //                     console.log("stream");
            //                     this.streams["test"] = userVideoStream;
            //                 });
            //             });

            //             this.sockets.subscribe("user-conected", (userId) => {
            //                 console.log("user conected", userId);

            //                 const call = peer.call(userId, stream);
            //                 // peer.call(userId, stream).on(
            //                 //     "stream",
            //                 //     (userVideoStream) => {
            //                 //         console.log("stream");
            //                 //         this.streams[userId] = userVideoStream;
            //                 //         console.log("moooolt stream");
            //                 //     }
            //                 // );

            //                 // peer.call(userId, stream).on("close", () => {
            //                 //     console.log("closed");
            //                 // });

            //                 call.on("stream", (userVideoStream) => {
            //                     console.log("stream");
            //                     this.streams[userId] = userVideoStream;
            //                     console.log("moooolt stream");
            //                 });

            //                 call.on("close", () => {
            //                     console.log("closed");
            //                     //this.streams.delete(userId);
            //                     delete this.streams[userId];
            //                 });

            //                 this.peers[userId] = call;
            //             });

            //             this.sockets.subscribe(
            //                 "user-disconnected",
            //                 (userId) => {
            //                     console.log("disconected");
            //                     if (this.peers[userId])
            //                         this.peers[userId].close();
            //                 }
            //             );

            //             peer.on("open", (id) => {
            //                 console.log("open peer");
            //                 this.$socket.emit("join-call", "call", id); //  + this.chatId
            //             });
            //         });
            // }
        },
    },
    mounted() {
        this.peer();
    },
    updated() {
        if (this.chatId != "main") {
            this.$refs.afterChat.scrollIntoView({ behavior: "smooth" });
        }
    },
    created() {},
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

            //this.peer();

            console.log("new user", newUser, "old user", oldUser);
        },
    },
};
</script>

<style scoped>
.video-grid {
    /* display: grid;
    grid-template-columns: repeat(auto-fill, 520px);
    grid-auto-rows: 400px; */

    display: flex;
    flex-wrap: wrap;
    /* height: calc(100% - calc(var(--menu-nav-width) - 10px)); */
    overflow: auto;
    /* flex-flow: row;
    flex-direction: row; */
}

video {
    width: 300px;
    height: 300px;
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

.call-bar {
    z-index: 510;
    margin-left: calc(var(--side-nav-width) + var(--menu-nav-width));
    width: calc(100% - calc(var(--side-nav-width) + var(--menu-nav-width)));
}

@media (max-width: 926px) {
    .call-bar {
        margin-left: 0;
        width: 100%;
    }
}
</style>
