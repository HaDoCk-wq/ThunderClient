<template>
    <div class="h-100 w-100">
        <div
            class="main-call h-100 w-100 video-grid"
            id="Dish"
            style="overflow: auto"
            ref="videoGrid"
        ></div>
        <div
            class="wrapper-input p-1 d-flex fixed-bottom call-bar"
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
            <!-- <div class="rounded-circle me-5" @click="peerScreen">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-cast"
                    viewBox="0 0 16 16"
                >
                    <path
                        d="m7.646 9.354-3.792 3.792a.5.5 0 0 0 .353.854h7.586a.5.5 0 0 0 .354-.854L8.354 9.354a.5.5 0 0 0-.708 0z"
                    />
                    <path
                        d="M11.414 11H14.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h3.086l-1 1H1.5A1.5 1.5 0 0 1 0 10.5v-7A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v7a1.5 1.5 0 0 1-1.5 1.5h-2.086l-1-1z"
                    />
                </svg>
            </div> -->
            <div
                class="rounded-circle penjar"
                @click="$router.push('/channels/chat/main')"
            >
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
</template>

<script>
//import moment from "moment";
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
            streams: {},
            newStream: null,
            typing: 0,
            peervue: null,
            peers: {},
            userId: null,
            tempPeer: null,
            counter: 0,
            tempStream: null,
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
        peer() {
            this.streams = {};
            navigator.mediaDevices
                .getUserMedia({
                    video: true,
                    audio: true,
                })
                .then((stream) => {
                    //this.$refs["videoGrid"]

                    const myVideo = document.createElement("video");
                    myVideo.muted = true;

                    var peer = new Peer(
                        this.$store.getters["user"]._id,
                        this.$store.getters["peerObject"]
                    );

                    this.addVideoStream(myVideo, stream);

                    this.tempPeer = peer;
                    console.warn("new peer");

                    console.log("Peer:", peer, this.$peer);

                    peer.on("call", (call) => {
                        call.answer(stream);
                        const video = document.createElement("video");
                        call.on("stream", (userVideoStream) => {
                            console.warn("adding peer stream", call.peer);

                            this.addVideoStream(video, userVideoStream);
                            this.peers[call.peer] = call;
                        });
                        call.on("close", () => {
                            console.error("removing stream");
                            video.remove();
                        });
                    });

                    this.sockets.subscribe("user-conected", (userId) => {
                        this.connectToNewUser(userId, stream);
                    });

                    this.sockets.subscribe("user-disconnected", (userId) => {
                        console.warn("disconected");
                        console.error("removing peer", userId);

                        if (this.peers[userId]) this.peers[userId].close();
                    });

                    this.sockets.subscribe("leaved-call", (userId) => {
                        console.warn("disconected");
                        if (this.peers[userId]) this.peers[userId].close();
                        //location.reload();
                    });

                    peer.on("open", (id) => {
                        console.log("open peer");
                        this.$socket.emit(
                            "join-call",
                            "call" + this.$route.params.id,
                            id
                        ); //  + this.chatId
                        this.userId = id;
                        console.log("peer id", id);
                    });

                    //this.tempStream = stream;
                });
        },
        addVideoStream(video, stream) {
            video.srcObject = stream;
            video.addEventListener("loadedmetadata", () => {
                video.play();
            });
            this.$refs["videoGrid"].append(video);
        },
        connectToNewUser(userId, stream) {
            const call = this.tempPeer.call(userId, stream);
            const video = document.createElement("video");
            call.on("stream", (userVideoStream) => {
                this.addVideoStream(video, userVideoStream);
            });
            call.on("close", () => {
                console.warn("conection lost");
                video.remove();
            });
            console.error("peer", userId);
            this.peers[userId] = call;
        },
        peerScreen() {
            this.streams = {};
            navigator.mediaDevices
                .getDisplayMedia({
                    video: true,
                    audio: true,
                })
                .then((stream) => {
                    //this.$refs["videoGrid"]

                    const myVideo = document.createElement("video");
                    myVideo.muted = true;

                    this.addVideoStream(myVideo, stream);
                    console.warn("new peer");

                    console.log("Peer:", this.tempPeer);

                    this.tempPeer.on("call", (call) => {
                        call.answer(stream);
                        const video = document.createElement("video");
                        call.on("stream", (userVideoStream) => {
                            console.warn("adding peer stream", call.peer);

                            this.addVideoStream(video, userVideoStream);
                            this.peers["cast" + call.peer] = call;
                        });
                        call.on("close", () => {
                            console.error("removing stream");
                            video.remove();
                        });
                    });

                    this.sockets.subscribe("user-conected", (userId) => {
                        this.connectToNewUser("cast" + userId, stream);
                    });

                    this.sockets.subscribe("user-disconnected", (userId) => {
                        console.warn("disconected");
                        console.error("removing peer", "cast" + userId);

                        if (this.peers["cast" + userId])
                            this.peers["cast" + userId].close();
                    });

                    this.sockets.subscribe("leaved-call", (userId) => {
                        console.warn("disconected");
                        if (this.peers["cast" + userId])
                            this.peers["cast" + userId].close();
                        //location.reload();
                    });

                    this.tempPeer.on("open", (id) => {
                        console.log("open peer");
                        this.$socket.emit(
                            "join-call",
                            "call" + this.$route.params.id,
                            id
                        ); //  + this.chatId
                    });

                    //this.tempStream = stream;
                });
        },
    },
    mounted() {
        this.peer();
    },
    beforeUnmount() {
        // console.log("user id", this.userId, this.$route.params.id);
        // this.tempStream.getTracks().forEach(function (track) {
        //     track.stop();
        // });
        this.$socket.emit(
            "leave-call",
            "call" + this.$route.params.id,
            this.userId
        );

        //this.tempPeer.destroy();
        //this.window.call.close();

        console.log("temp peer disconect");
        // console.log(
        //     "teeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeemp peer",
        //     this.tempPeer
        // );
        // this.tempPeer.destroy();
        location.reload();
    },
    updated() {},
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
            this.peer();

            console.log(newUser, oldUser);
        },
    },
};
</script>

<style>
/* .video-grid {
    /* display: grid;
    grid-template-columns: repeat(auto-fill, 520px);
    grid-auto-rows: 400px; */
/* 
    display: flex;
    flex-wrap: wrap;
    height: calc(100% - calc(var(--menu-nav-width) - 10px));
    overflow: auto; */
/* flex-flow: row;
    flex-direction: row; 
} */

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

/* Container */
#Dish {
    display: flex;
    align-content: center;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    position: absolute;

    left: 0px;
    bottom: 0px;
    top: 0px;
    right: 0px;
}
/* Camera */
video {
    position: relative;
    vertical-align: middle;
    align-self: center;
    overflow: hidden;
    display: inline-block;
    animation: show 0.4s ease;
    object-fit: cover;
    margin: 4px;
    border-radius: 15px !important;
}

/* #Dish div video {
    box-shadow: 0px 12px 22px rgba(0, 0, 0, 0.4);
    object-fit: cover;
    border-radius: 10px;
} */

@keyframes show {
    0% {
        opacity: 0;
        transform: scale(0.4) translateY(20px);
    }
    100% {
        opacity: 1;
        transform: scale(1) translateY(0);
    }
}
</style>
