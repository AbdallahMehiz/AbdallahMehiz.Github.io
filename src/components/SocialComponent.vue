<template>
  <a :href="socialLink" target="blank">
    <figure>
      <div class="socials-icons" :alt="socialPlatform">
        <font-awesome-icon :icon="socialIcon" />
      </div>
      <figcaption>{{ socialPlatform }}</figcaption>
    </figure>
  </a>
</template>

<script>
export default {
  name: "SocialComponent",
  props: {
    socialPlatform: String,
    socialLink: String,
    socialIcon: String,
  },
  setup() {
    return {};
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.socials-icons {
  margin: 0;
}
svg {
  width: 80px;
  height: 80px;
  color: #454138;
  transition: 600ms;
  align-self: center !important;
}
figure:hover {
  background-color: #3f3b33;
}
figure:hover figcaption {
  transition: 100ms !important;
  font-weight: 600;
}
figure:hover svg {
  color: white;
}
figure {
  height: 120px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -moz-box-orient: vertical;
  -o-box-orient: vertical;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  margin: 0;
  background-color: #dcd8c0;
  transition: 600ms;
  padding-top: 0.3rem;
}
figure > :not(figcaption) {
  margin: 0rem;
  transition: 600ms;
}
figure > figcaption {
  -webkit-box-ordinal-group: -1;
  -moz-box-ordinal-group: -1;
  -o-box-ordinal-group: -1;
  -ms-flex-order: -1;
  -webkit-order: -1;
  order: 4;
  width: 100%;
  padding: 0.2rem, 0rem;
  text-align: center;
  font-size: 1.2rem;
  background-color: #3f3b33;
  color: #bab5a1;
  transition: 600ms;
}
</style>
