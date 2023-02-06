<template>
  <div class="ContactView">
    <h1>socials</h1>
    <EarlyDevNotice class="DevNotice" />
    <FigureComponent
      figureTitle="Notice!"
      figureText="Under here are all of my social links and contact info. A contact info being here doesn't necessarily means i use it regularly."
      class="notice"
    />
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
import socials from "/assets/data/socials.json";

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
  grid-template-columns: repeat(10, minmax(0, 1fr));
  grid-template-rows: auto;
  grid-gap: 1rem;
}
@media (max-width: 1000px) {
  .socials {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
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
