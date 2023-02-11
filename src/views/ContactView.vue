<template>
  <div class="ContactView">
    <div class="header">
      <h1>{{ $t("message.socials.header") }}</h1>
      <h3>{{ $t("message.socials.description") }}</h3>
    </div>
    <EarlyDevNotice class="DevNotice" />
    <FigureComponent
      :figureTitle="$t(`message.socials.notice.title`)"
      :figureText="$t(`message.socials.notice.message`)"
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

<style scoped>
h1 {
  margin: 0;
}
.DevNotice {
  grid-area: DevNotice;
}
.header {
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
    "header header header header ... DevNotice DevNotice DevNotice"
    "notice notice notice notice notice notice notice notice"
    "socials socials socials socials socials socials socials socials";
  overflow: scroll;
}
</style>
