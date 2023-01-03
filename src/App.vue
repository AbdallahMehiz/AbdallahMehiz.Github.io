<script setup>
import NavigationBar from "./components/NavigationBar.vue";
import { RouterView } from "vue-router";
import ContactView from "./views/ContactView.vue";
</script>

<template>
  <NavigationBar />
  <ContactView />
</template>

<style scoped></style>
