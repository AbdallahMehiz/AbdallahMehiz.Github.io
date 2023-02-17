<template>
  <router-link class="button" :to="btnLink">
    <slot></slot>
    {{ btnText }}
  </router-link>
</template>

<script>
export default {
  name: "CustomRouterButton",
  props: {
    btnText: {
      type: String,
      default: "Button",
    },
    btnLink: {
      type: String,
      default: "#",
    },
  },
  setup() {
    return {};
  },
};
</script>

<style scoped>
.button {
  padding: 0.5rem;
  font-size: 1em;
  background-color: var(--color-button);
  cursor: pointer;
  transition-duration: 0.2s;
  transition-property: color, background-color, box-shadow;
  position: relative;
  z-index: 1;
}
.button:hover {
  box-shadow: 0.2em 0.2em 0.1em 0 #bab5a1;
}
.button:before {
  content: "";
  transition: all 0.2s;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.button:after {
  content: "";
  transition: all 0.2s;
  transition-timing-function: ease-out;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 0;
  background-color: var(--color-secondary);
  z-index: -1;
}
.button:hover {
  background-color: transparent;
  color: var(--color-primary);
}
.button:hover:before {
  top: -0.2rem;
  bottom: -0.2rem;
  border: solid var(--color-secondary);
  border-width: 0.1rem 0;
}
.button:hover:after {
  width: 100%;
}
.button:active {
  color: var(--color-secondary);
}
.button:active:after {
  background-color: var(--color-secondary);
}
</style>
