<script setup>
import NavigationBar from "./components/NavigationBar.vue";
import Pattern from "./components/Pattern.vue";
import NavigationButton from "./components/NavigationButton.vue";
</script>

<template>
  <div class="app" :class="{ arabic: $i18n.locale === `ar` }">
    <NavigationBar class="navbar" />
    <Pattern class="pattern" />
    <RouterView class="RouterView" />
    <NavigationButton class="navigation-button" />
    <Pattern class="footer" />
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
.navigation-button {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
}
</style>
