<template>
  <div class="side-nav position-relative">
    <div style="overflow: auto;" class="side-nav-content">
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
          <div>{{ $store.getters["user"].desc }}</div>
        </div>
        <div class="col-2 d-flex p-1">
          <div class="mic p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              class="bi bi-gear-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"
              />
            </svg>
          </div>
        </div>
        <div class="col-2 d-flex p-1" @click="muted = !muted">
          <div v-if="!muted" class="mic p-1">
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
          <div v-else class="mic p-1">
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

  data: function() {
    return {
      muted: false,
    };
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
</style>
