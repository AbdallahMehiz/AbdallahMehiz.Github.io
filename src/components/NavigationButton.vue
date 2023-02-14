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
        <router-link class="menu-item" to="/">
          <i class="icon icon-home"></i>Home
        </router-link>
        <router-link class="menu-item" to="/feed">
          <i class="icon icon-rss"></i>Feed
        </router-link>
        <router-link class="menu-item" to="/media">
          <i class="icon icon-photo-film"></i>Media
        </router-link>
        <router-link class="menu-item" to="/projects">
          <i class="icon icon-book"></i>Projects
        </router-link>
        <router-link class="menu-item" to="/resume">
          <i class="icon icon-file"></i>Resume
        </router-link>
        <router-link class="menu-item" to="contact">
          <i class="icon icon-envelope"></i>Contact
        </router-link>
        <div class="menu-item">change lang</div>
        <div class="menu-item">close</div>
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
  bottom: 0;
  width: 210px;
  height: 210px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  background-color: #dcd8c0;
  padding: 8px;
}

.menu-item {
  display: flex;
  flex-direction: column;
}
.icon {
  font-size: 1.8rem;
}
</style>
