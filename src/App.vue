<script setup>
import NavigationBar from "./components/NavigationBar.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <NavigationBar />
  <h1>hello world</h1>
  <RouterView />
</template>

<style scoped></style>
