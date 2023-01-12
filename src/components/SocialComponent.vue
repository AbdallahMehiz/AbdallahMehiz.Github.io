<template>
  <figure>
    <div class="socials-icons" :href="socialLink">
      <img :src="socialIcon" />
    </div>
    <figcaption>{{ socialPlatform }}</figcaption>
  </figure>
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
.socials-icons svg path {
  fill: #3f3b33;
  transition: 600ms;
}
figure:hover {
  background-color: #3f3b33;
}
figure:hover .socials-icons svg path {
  fill: #dcd8c0;
}
img {
  max-width: inherit;
  max-height: inherit;
}
.socials-icons {
  max-width: 80px;
  max-height: 80px;
  margin: 3px 0;
}
figure {
  max-width: 80px;
  max-height: 100px;
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: box;
  display: flex;
  -webkit-box-orient: vertical;
  -moz-box-orient: vertical;
  -o-box-orient: vertical;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  margin: 0;
  margin-bottom: 1rem;
  background-color: #dcd8c0;
  padding: 0rem 0.5rem;
  transition: 600ms;
}
figure > :not(figcaption) {
  margin: 0.5rem;
  transition: 600ms;
}
figure > figcaption {
  -webkit-box-ordinal-group: -1;
  -moz-box-ordinal-group: -1;
  -o-box-ordinal-group: -1;
  -ms-flex-order: -1;
  -webkit-order: -1;
  order: 4;
  margin: -0.5rem;
  padding: 0.2rem 0.5rem;
  text-align: center;
  font-size: 1.2rem;
  background-color: #454138;
  color: #bab5a1;
  transition: 600ms;
}
iframe {
  border: 0.1rem solid #bab5a1;
}
</style>
