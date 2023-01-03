<template>
  <nav class="navbar">
    <div class="button">
      <router-link to="/blog">Blog</router-link>
    </div>
    <div class="button">
      <router-link to="/Projects">Projects</router-link>
    </div>
    <div class="button">
      <router-link to="/Resume">Resume</router-link>
    </div>
    <div class="button">
      <router-link to="/Contact">Contact</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavigationBar",
  setup() {
    return {};
  },
};
</script>

<style src="../style/NavigationBar.css"></style>
