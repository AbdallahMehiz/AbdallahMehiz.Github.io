<template>
  <div>
    <div class="button-container">
      <div
        v-if="!showNavMenu"
        @click="showNavMenu = !showNavMenu"
        class="button-icon"
      >
        Show Menu
      </div>
      <div
        v-if="showNavMenu"
        @click="showNavMenu = !showNavMenu"
        class="button-content"
      >
        <a>Home </a>
        <a>Feed </a>
        <a>Media </a>
        <a>Projects </a>
        <a>Resume </a>
        <a>Contact </a>
        <a>Language </a>
        <a>Close </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavigationButton",
  components: {},
  setup() {
    return {};
  },
  data() {
    return {
      showNavMenu: false,
    };
  },
};
</script>

<style scoped>
.button-container {
  display: flex;
  text-align: center;
  align-items: center;
  background-color: #dcd8c0;
  height: 60px;
  width: 60px;
  border: solid 2px #454138;
}
.button-content {
  position: absolute;
  right: 0;
  width: 15rem;
  height: 15rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background-color: #dcd8c0;
}
</style>
