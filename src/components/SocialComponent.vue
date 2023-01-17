<template>
  <a :href="socialLink" target="blank">
    <figure>
      <div class="socials-icons" :alt="socialPlatform">
        <img onload="SVGInject(this)" :src="socialIcon" />
      </div>
      <figcaption>{{ socialPlatform }}</figcaption>
    </figure>
  </a>
</template>

<script>
import SVGInjectInstance from "@iconfu/svg-inject";

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

<style lang="sass" scoped>
a
 text-decoration: none

.socials-icons
  margin: 0
svg
  width: 80px
  height: 80px
  fill: #3f3b33
  transition: 600ms
  align-self: center !important
figure:hover
  background-color: #3f3b33
figure:hover
  .socials-icons svg
    fill: white
  figcaption
    transition: 100ms !important
    font-weight: 600
figure
  height: 120px
  width: 100%
  align-items: center
  justify-content: space-between
  display: flex
  flex-direction: column
  margin: 0
  background-color: #dcd8c0
  transition: 600ms
  padding-top: 0.3rem
  :not(figcaption)
    margin: 0rem
  figcaption
    order: 4
    width: 100%
    padding: 0.2rem, 0rem
    text-align: center
    font-size: 1.2rem
    background-color: #3f3b33
    color: #bab5a1
    transition: 600ms
</style>
