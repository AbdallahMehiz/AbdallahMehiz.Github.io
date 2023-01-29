<script setup>
import NavigationBar from "./components/NavigationBar.vue";
import Pattern from "./components/Pattern.vue";
</script>

<template>
  <NavigationBar class="navbar" />
  <Pattern class="pattern" />
  <RouterView class="RouterView" />
</template>

<style scoped>
.pattern {
  grid-area: pattern;
  border-top: 2px solid #4d493e;
}
</style>
