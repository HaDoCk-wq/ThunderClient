<template>
  <div>
    <!-- class="h-100" style="overflow: auto; position: absolute !important;" -->
    <br />
    <h1 class="ms-3">Friends</h1>
    <div
      v-for="(user, i) in $store.getters['user'].friends"
      v-bind:key="i"
      class="user-card w-100 p-2 pb-0 d-flex h-100"
    >
      <img
        :src="$store.getters['api'] + '/profiles/' + user.image"
        height="60"
        width="60"
        alt="User image"
        class="me-2"
      />
      <div class="pt-1">
        <strong> {{ user.name }} </strong>
        <p>{{ user.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideSearch",
  mounted() {
    this.$router.push("/channels/friends");
  },
};
</script>

<style scoped>
.user-card {
  border-bottom: 1px solid var(--mid-dark-bg);
}
</style>
