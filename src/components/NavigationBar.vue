<template>
  <div class="navigation-bar">
    <div class="items">
      <div class="fitem"></div>
      <router-link class="item" to="/">
        <button class="button">
          <i class="icon-home icon"></i>
          Mehiz.xyz
        </button>
      </router-link>
      <router-link class="item" to="/feed">
        <button class="button">
          <i class="icon-rss icon"></i>
          {{ $t("navigationbar.feed") }}
        </button>
      </router-link>
      <router-link class="item" to="/media">
        <button class="button">
          <i class="icon-photo-film-music icon"></i>
          {{ $t("navigationbar.media") }}
        </button>
      </router-link>
      <router-link class="item" to="/projects">
        <button class="button">
          <i class="icon-folder icon"></i>
          {{ $t("navigationbar.projects") }}
        </button>
      </router-link>
      <router-link class="item" to="/resume">
        <button class="button">
          <i class="icon-document icon"></i>
          {{ $t("navigationbar.resume") }}
        </button>
      </router-link>
      <router-link class="item" to="/contact">
        <button class="button">
          <i class="icon-envelope icon"></i>
          {{ $t("navigationbar.contact") }}
        </button>
      </router-link>
      <div class="item">
        <div class="dropdown-container">
          <button
            :class="{ busy: showDropdown }"
            class="dropdownbtn"
            @click="showDropdown = !showDropdown"
            style="width: fit-content"
          >
            <i class="icon icon-translate"></i>
            {{ $t("languageName") }}({{ $t("language") }})
          </button>
          <div class="dropdown-content" v-if="showDropdown">
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
              >Fran??ais (fr)</a
            >
            <a
              class="dropdown-item"
              :class="{ active: this.$i18n.locale === `ar` }"
              @click="changeLanguage('ar')"
              >?????????????? (ar)</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  name: "NavigationBar",
  components: {
    RouterLink,
  },
  setup() {
    return {};
  },
  data() {
    return {
      showDropdown: false,
    };
  },
  methods: {
    showDropdownmenu() {
      this.showDropdown = !this.showDropdown;
    },
    changeLanguage(lang) {
      this.$i18n.locale = lang;
      localStorage.setItem("language", lang);
    },
  },
};
</script>

<style scoped>
@media (max-width: 100px) {
  .navigation-bar {
    display: none;
  }
}
.navigation-bar {
  height: 50px;
  grid-area: nav;
}
.icon {
  display: inline-block;
  color: var(--color-text-primary);
  background-color: var(--color-secondary);
  margin-right: 0.3rem;
  transition: 0.2s;
  border: 3px solid var(--color-secondary);
  font-size: 0.8rem;
}
.items {
  width: 100%;
  padding: calc((50px - 30px) / 2);
  display: flex;
}
.item:last-child {
  margin-left: auto;
}
.fitem {
  min-width: 2rem;
  height: 30px;
  background-image: linear-gradient(
    90deg,
    rgba(77, 73, 62, 0.2),
    rgba(77, 73, 62, 0.2) 14px,
    transparent 14px,
    transparent 20px,
    rgba(77, 73, 62, 0.2) 20px,
    rgba(77, 73, 62, 0.2) 23px,
    transparent 23px
  );
}
.item {
  margin: 0 0.5rem;
}
.button {
  display: flex;
  align-items: center;
  padding: 0.3rem 0.5rem;
  height: 30px;
  max-width: 10rem;
  min-width: 7rem;
  font-size: 1em;
  text-rendering: optimizeLegibility;
  border: none;
  outline: none;
  appearance: none;
  border-radius: 0;
  background-color: var(--color-button);
  color: inherit;
  font-family: inherit;
  letter-spacing: inherit;
  font-weight: inherit;
  cursor: pointer;
  transition-duration: 0.2s;
  transition-property: color, background-color, box-shadow;
  position: relative;
  z-index: 1;
}
.button:hover {
  box-shadow: 0.2em 0.2em 0.1em 0 #bab5a1;
}
.button:before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.button:after {
  content: "";
  transition: all 0.2s;
  transition-timing-function: ease-out;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 0;
  background-color: var(--color-secondary);
  z-index: -1;
}
button:hover .icon {
  background-color: var(--color-primary);
  color: var(--color-secondary);
  border: 3px solid var(--color-primary);
}
.button:hover {
  background-color: transparent;
  color: var(--color-text-primary);
}
.button:hover:before {
  top: -0.2rem;
  bottom: -0.2rem;
  border: solid var(--color-secondary);
  border-width: 0.1rem 0;
}
.button:hover:after {
  width: 100%;
}

.router-link-active .button {
  background-color: transparent;
}
.router-link-active {
  animation: blink 1.6s infinite, expandbottomborder 0.2s;
  color: var(--color-text-primary-light);
  pointer-events: none;
  height: 40px;
}
.router-link-active .button .icon {
  background-color: var(--color-primary);
  color: var(--color-text-secondary);
  border: 3px solid var(--color-primary);
}
@keyframes blink {
  0% {
    background-color: var(--color-secondary);
  }
  50% {
    background-color: #6b6557;
  }
  100% {
    background-color: var(--color-secondary);
  }
}
@keyframes expandbottomborder {
  0% {
    height: 30px;
  }
  100% {
    height: 40px;
  }
}

.dropdownbtn {
  display: flex;
  align-items: center;
  padding: 0.3rem 0.5rem;
  height: 30px;
  width: 100px;
  font-size: 1em;
  text-rendering: optimizeLegibility;
  border: none;
  outline: none;
  appearance: none;
  border-radius: 0;
  background-color: var(--color-button);
  color: inherit;
  font-family: inherit;
  letter-spacing: inherit;
  font-weight: inherit;
  cursor: pointer;
  transition-duration: 0.2s;
  transition-property: color, background-color, box-shadow;
  position: relative;
  z-index: 1;
}
.dropdownbtn:hover {
  box-shadow: 0.2em 0.2em 0.1em 0 #bab5a1;
}
.dropdownbtn:before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.dropdownbtn:after {
  content: "";
  transition: all 0.2s;
  transition-timing-function: ease-out;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 0;
  background-color: var(--color-secondary);
  z-index: -1;
}
.dropdownbtn:hover {
  background-color: transparent;
  color: var(--color-text-primary);
}
.dropdownbtn:hover:before {
  top: -0.2rem;
  bottom: -0.2rem;
  border: solid var(--color-secondary);
  border-width: 0.1rem 0;
}
.dropdownbtn:hover:after {
  width: 100%;
}
.dropdown-container {
  position: relative;
}
.dropdown-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  right: 100%;
  top: 0;
  background-color: rgba(220, 216, 192, 0.9);
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}
.dropdown-item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30px;
}
.dropdown-item:hover {
  cursor: pointer;
}
.active {
  color: var(--color-text-primary-light);
  animation: blink 1.6s infinite;
}
.arabic .icon {
  margin: 0 0 0 0.3rem;
}

.arabic .item:last-child {
  margin: 0 auto 0 0;
}
.arabic .dropdown-content {
  position: absolute;
  right: 0;
  top: 0;
  transform: translate(100%, 0);
}
.arabic .fitem {
  transform: rotate(180deg);
}
.arabic .button:after {
  right: 0;
}
.disabled {
  pointer-events: none;
  opacity: 0.8;
}
</style>
