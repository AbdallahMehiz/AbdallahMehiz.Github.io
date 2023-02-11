<script setup>
import NavigationBar from "./components/NavigationBar.vue";
import Pattern from "./components/Pattern.vue";
</script>

<template>
  <div class="app" :class="{ arabic: this.$i18n.locale === `ar` }">
    <NavigationBar class="navbar" />
    <Pattern class="pattern" />
    <RouterView class="RouterView" />
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
</style>
