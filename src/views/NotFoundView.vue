<template>
  <div class="not-found-view">
    <h1 class="title">{{ $t("notFound.header") }}</h1>
    <h2 class="subtitle">{{ $t("notFound.subtitle") }}</h2>
    <p class="description">
      {{ $t("notFound.description") }}
    </p>
    <CustomRouterButton
      class="button"
      :btnText="$t(`notFound.button`)"
      btnLink="/"
    />
  </div>
</template>

<script>
import CustomRouterButton from "../components/CustomRouterButton.vue";
export default {
  name: "NotFoundView",
  setup() {
    return {};
  },
  components: { CustomRouterButton },
};
</script>

<style scoped>
h2 {
  width: fit-content;
}
</style>
