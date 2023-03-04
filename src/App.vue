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
  <p style="text-align: center; margin: 0.5rem 0">
    Inspired by Nier Automata, made by Abdallah Mehiz using
    <i class="icon icon-vuejs"></i>
  </p>
</template>

<style scoped>
.pattern {
  grid-area: pattern;
  border-top: 2px solid var(--color-secondary);
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
