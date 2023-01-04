<script setup>
import NavigationBar from "./components/NavigationBar.vue";
import Pattern from "./components/Pattern.vue";
import ContactView from "./views/ContactView.vue";
</script>

<template>
  <NavigationBar class="navbar" />
  <Pattern class="pattern" />
  <ContactView />
</template>

<style scoped>
.pattern {
  grid-area: pattern;
  border-top: 2px solid #4d493e;
}
</style>
