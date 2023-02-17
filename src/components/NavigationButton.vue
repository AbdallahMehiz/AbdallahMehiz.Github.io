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
      <div v-if="showNavMenu" class="button-content">
        <router-link
          @click="showNavMenu = !showNavMenu"
          class="menu-item"
          to="/"
        >
          <i class="icon icon-home"></i>Home
        </router-link>
        <router-link
          @click="showNavMenu = !showNavMenu"
          class="menu-item"
          to="/feed"
        >
          <i class="icon icon-rss"></i>Feed
        </router-link>
        <router-link
          @click="showNavMenu = !showNavMenu"
          class="menu-item"
          to="/media"
        >
          <i class="icon icon-photo-film-music"></i>Media
        </router-link>
        <router-link
          @click="showNavMenu = !showNavMenu"
          class="menu-item"
          to="/projects"
        >
          <i class="icon icon-folder"></i>Projects
        </router-link>
        <router-link
          @click="showNavMenu = !showNavMenu"
          class="menu-item"
          to="/resume"
        >
          <i class="icon icon-document"></i>Resume
        </router-link>
        <router-link
          @click="showNavMenu = !showNavMenu"
          class="menu-item"
          to="contact"
        >
          <i class="icon icon-envelope"></i>Contact
        </router-link>
        <div
          @click="showLanguageSelector = !showLanguageSelector"
          class="menu-item"
        >
          <i class="icon icon-translate"></i>Language
          <div v-if="showLanguageSelector" class="language-selector">
            <a
              class="dropdown-item"
              :class="{ active: this.$i18n.locale === `en` }"
              @click="changeLanguage('en')"
              >English (en)</a
            >
            <a
              class="dropdown-item"
              :class="{ active: this.$i18n.locale === `fr` }"
              @click="changeLanguage('fr')"
              >Français (fr)
            </a>
            <a
              class="dropdown-item"
              :class="{ active: this.$i18n.locale === 'ar' }"
              @click="changeLanguage('ar')"
            >
              العربية (ar)</a
            >
          </div>
        </div>
        <div @click="showNavMenu = !showNavMenu" class="menu-item">
          <i class="icon icon-xmark"></i>close
        </div>
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
      showLanguageSelector: false,
    };
  },
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang;
      localStorage.setItem("language", lang);
    },
  },
};
</script>

<style scoped>
.button-container {
  direction: ltr !important;
  display: flex;
  text-align: center;
  align-items: center;
  background-color: var(--color-primary);
  height: 60px;
  width: 60px;
  border: solid 2px var(--color-secondary);
}
.button-content {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 210px;
  height: 210px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  background-color: var(--color-primary);
  padding: 8px;
}
.menu-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  cursor: pointer;
}
.icon {
  font-size: 1.8rem;
}
.language-selector {
  position: absolute;
  right: 100%;
  bottom: 0;
  height: 226px;
  display: grid;
  grid-template-rows: repeat(3, minmax(0, 1fr));
  background-color: var(--color-primary);
}
.dropdown-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  cursor: pointer;
  width: 75px;
}
.dropdown-item.active {
  background-color: var(--color-secondary);
  color: var(--color-primary);
}
</style>
