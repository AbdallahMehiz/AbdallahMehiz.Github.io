<template>
  <div class="navigation-bar">
    <div class="items">
      <div class="fitem"></div>
      <router-link class="item" to="/">
        <button class="button">
          <i class="icon-home icon"></i>
          Home
        </button>
      </router-link>
      <router-link class="item" to="/feed">
        <button class="button">
          <i class="icon-rss icon"></i>
          Feed
        </button>
      </router-link>
      <router-link class="item" to="/resume">
        <button class="button">
          <i class="icon-file icon"></i>
          Resume
        </button>
      </router-link>
      <router-link class="item" to="/contact">
        <button class="button">
          <i class="icon-envelope icon"></i>
          Contact
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  name: "NavigationBar",
  setup() {
    return {};
  },
};
</script>

<style scoped>
.navigation-bar {
  grid-area: nav;
}
.icon {
  display: inline-block;
  color: #bab5a1;
  background-color: #454138;
  margin-right: 0.3rem;
  transition: 0.2s;
  border: 3px solid #454138;
  font-size: 0.8rem;
}
.items {
  width: 100%;
  padding: calc((50px - 30px) / 2) 0;
  display: flex;
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
  width: 100px;
  font-size: 1em;
  text-rendering: optimizeLegibility;
  border: none;
  outline: none;
  appearance: none;
  border-radius: 0;
  background-color: #bab5a1;
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
  background-color: #454138;
  z-index: -1;
}
button:hover .icon {
  background-color: #dcd8c0;
  color: #454138;
  border: 3px solid #dcd8c0;
}
.button:hover {
  background-color: transparent;
  color: #dcd8c0;
}
.button:hover:before {
  top: -0.2rem;
  bottom: -0.2rem;
  border: solid #454138;
  border-width: 0.1rem 0;
}
.button:hover:after {
  width: 100%;
}

.button:active {
  color: #454138;
}
.button:active:after {
  background-color: #dcd8c0;
}
.router-link-active .button {
  background-color: rgba(0, 0, 0, 0);
}
.router-link-active {
  animation: blink 1.6s infinite, expandbottomborder 0.2s;
  color: #dcd8c0;
  pointer-events: none;
  height: 40px;
}
.router-link-active .button .icon {
  background-color: #dcd8c0;
  color: #454138;
  border: 3px solid #dcd8c0;
}
@keyframes blink {
  0% {
    background-color: #454138;
  }
  50% {
    background-color: #6b6557;
  }
  100% {
    background-color: #454138;
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
</style>
