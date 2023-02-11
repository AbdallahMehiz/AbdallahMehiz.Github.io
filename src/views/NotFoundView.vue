<template>
  <div class="not-found-view">
    <h1 class="title">{{ $t("message.notFound.header") }}</h1>
    <h2 class="subtitle">{{ $t("message.notFound.subtitle") }}</h2>
    <p class="description">
      {{ $t("message.notFound.description") }}
    </p>
    <CustomButton
      class="button"
      :btnText="$t(`message.notFound.button`)"
      btnLink="/"
    />
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
