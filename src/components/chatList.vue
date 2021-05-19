<template>
  <div v-for="(mesage, i) in messages" :key="i" class="p-2">
    <div class="d-flex">
      <img
        src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
        height="50"
        width="50"
        alt="Profile image"
        class="rounded-circle me-2  "
      />
      <div>
        <p class="mb-1">
          <strong> Anrau Costa </strong>
        </p>
        {{ mesage }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatList",
  props: ["messages"],
  emits: ["rendered"],
  mounted() {
    this.$emit("rendered");
  },
};
</script>
