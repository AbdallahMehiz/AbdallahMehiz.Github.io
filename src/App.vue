<script setup>
import NavigationBar from "./components/NavigationBar.vue";
import NavPattern from "./components/Pattern.vue";
import NavigationButton from "./components/NavigationButton.vue";
</script>

<template>
  <div class="app" :class="{ arabic: $i18n.locale === `ar` }">
    <NavigationBar class="navbar" />
    <NavPattern class="pattern" />
    <RouterView class="RouterView" />
    <NavigationButton class="navigation-button" />
    <NavPattern class="footer" />
  </div>
</template>

<style scoped>
.pattern {
  grid-area: pattern;
  border-top: 2px solid #4d493e;
}
.RouterView {
  grid-area: RouterView;
}
.footer {
  margin-top: 20px;
  grid-area: footer;
}
@media (max-width: 1000px) {
  .RouterView {
    grid-template-areas: "pattern" "RouterView" "footer";
  }
  .navbar {
    display: none;
  }
  .navigation-button {
    display: block;
  }
}
@media (min-width: 1001px) {
  .navigation-button {
    display: none;
  }
}
.navigation-button {
  z-index: 2;
  position: fixed;
  bottom: 2rem;
  right: 2rem;
}
</style>
