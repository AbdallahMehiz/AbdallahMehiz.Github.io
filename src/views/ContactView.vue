<template>
  <div class="ContactView">
    <h1>socials page</h1>
    <FigureComponent class="notice" />
    <div class="socials">
      <SocialComponent />
      <SocialComponent />
      <SocialComponent />
      <SocialComponent />
      <SocialComponent />
      <SocialComponent />
      <SocialComponent />
      <SocialComponent />
      <SocialComponent />
      <SocialComponent />
      <SocialComponent />
      <SocialComponent />
      <SocialComponent />
      <SocialComponent />
    </div>
  </div>
</template>

<script>
import FigureComponent from "../components/FigureComponent.vue";
import SocialComponent from "../components/SocialComponent.vue";

export default {
  name: "ContactView",
  setup() {
    return {};
  },
  components: { FigureComponent, SocialComponent },
};
</script>

<style>
h1 {
  grid-area: header;
}
.notice {
  grid-area: notice;
}
.socials {
  grid-area: socials;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  align-items: center;
  justify-items: center;
}
.ContactView {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    "header header header ... ... ... ... ..."
    "notice notice notice notice notice notice notice notice"
    "socials socials socials socials socials socials socials socials";
  overflow: scroll;
}
</style>
