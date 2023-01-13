<template>
  <div class="ContactView">
    <h1>socials</h1>
    <EarlyDevNotice class="DevNotice" />
    <FigureComponent class="notice" />
    <div class="socials">
      <SocialComponent
        v-for="social in socials"
        :key="social.socialPlatform"
        :socialPlatform="social.socialPlatform"
        :socialIcon="social.socialIcon"
        :socialLink="social.socialLink"
      />
    </div>
  </div>
</template>

<script>
import FigureComponent from "../components/FigureComponent.vue";
import SocialComponent from "../components/SocialComponent.vue";
import EarlyDevNotice from "../components/EarlyDevNotice.vue";
import socials from "../../data/socials.json";

export default {
  name: "ContactView",
  data: () => {
    console.log(socials);
    return {
      socials: socials.socials,
    };
  },
  setup() {
    return {};
  },
  components: { FigureComponent, SocialComponent, EarlyDevNotice },
};
</script>

<style>
.ContactView {
  max-width: 1240px;
}
.DevNotice {
  grid-area: DevNotice;
}
h1 {
  grid-area: header;
}
.notice {
  grid-area: notice;
}
.socials {
  grid-area: socials;
  display: grid;
  grid-template-columns: repeat(9, minmax(0, 1fr));
  grid-template-rows: auto;
  grid-gap: 1rem;
}
.ContactView {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    "header header header ... ... DevNotice DevNotice DevNotice"
    "notice notice notice notice notice notice notice notice"
    "socials socials socials socials socials socials socials socials";
  overflow: scroll;
}
</style>
