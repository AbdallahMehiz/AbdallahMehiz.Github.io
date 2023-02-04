<template>
  <div class="not-found-view">
    <h1 class="title">404</h1>
    <h2 class="subtitle">Page not found</h2>
    <p class="description">
      The page you are looking for does not exist. Please check the URL and try
      again.
    </p>
    <CustomButton class="button" btnText="Go back to home" btnLink="/" />
  </div>
</template>

<script>
import CustomButton from "../components/CustomButton.vue";
export default {
  name: "NotFoundView",
  setup() {
    return {};
  },
  components: { CustomButton },
};
</script>

<style scoped>
h2 {
  width: fit-content;
}
</style>
