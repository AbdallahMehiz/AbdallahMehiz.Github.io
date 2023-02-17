<template>
  <a :href="socialLink" target="blank">
    <figure>
      <div :alt="socialPlatform">
        <i class="socials-icons" :class="socialIcon"></i>
      </div>
      <figcaption>{{ socialPlatform }}</figcaption>
    </figure>
  </a>
</template>

<script>
export default {
  name: "SocialComponent",
  props: {
    socialPlatform: {
      type: String,
      default: "Social Platform",
    },
    socialLink: {
      type: String,
      default: "#",
    },
    socialIcon: {
      type: String,
      default: "icon-home",
    },
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
  font-size: 6em;
  transition: 300ms;
}
figure:hover {
  background-color: var(--color-secondary);
}
figure:hover figcaption {
  transition: 100ms !important;
  font-weight: 600;
}
figure:hover .socials-icons {
  color: var(--color-text-primary-light);
}
figure {
  width: 100%;
  align-items: center;
  -webkit-box-orient: vertical;
  -moz-box-orient: vertical;
  -o-box-orient: vertical;
  display: flex;
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
  background-color: var(--color-secondary);
  color: var(--color-text-primary);
  transition: 600ms;
}
</style>
