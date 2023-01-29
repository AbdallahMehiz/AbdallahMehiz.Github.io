<template>
  <nav>
    <div class="idkwhattonameit"></div>
    <router-link class="unclickable button" to="/">
      <div class="icon"></div>
      <p style="display: inline; margin-left: 5px">Home</p>
      <p style="font-size: 0.8rem; display: inline">.tech</p>
    </router-link>
    <router-link class="button" to="/resume">
      <div class="icon"></div>
      Resume
    </router-link>
    <router-link class="button" to="/Contact">
      <div class="icon"></div>
      Contact
    </router-link>
  </nav>
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
.idkwhattonameit {
  min-width: 2.5rem;
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
.unclickable {
  pointer-events: none;
  cursor: default;
}
.button:hover {
  background-color: #dcd8c0;
  display: inline-block;
}
.button:hover .icon {
  background-color: #dcd8c0;
  display: inline-block;
}
.icon {
  background-color: #454138;
  display: inline-block;
  height: 15px;
  width: 15px;
  min-height: 15px;
  min-width: 15px;
  transition: 300ms;
}
nav {
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: left;
  grid-area: nav;
  color: white;
  padding-left: 2.5rem;
}

.button {
  padding: 0 0.5rem 0 0.5rem;
  text-align: left;
  margin-right: 1rem;
}

/* css code of navigation bar items from
https://github.com/metakirby5/yorha
tysm
*/

.button-disabled {
  padding: 0.5rem;
  font-size: 1em;
  border: none;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0;
  background-color: #dcd8c0;
  color: inherit;
  font-family: inherit;
  letter-spacing: inherit;
  font-weight: inherit;
  color: #bab5a1;
  cursor: not-allowed;
  text-decoration: none;
}
.button {
  max-height: 30px;
  font-size: 1.3em;
  border: none;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0;
  background-color: #bab5a1;
  color: rgb(63, 59, 51);
  font-family: inherit;
  letter-spacing: inherit;
  font-weight: inherit;
  cursor: pointer;
  -webkit-transition-duration: 0.2s;
  -moz-transition-duration: 0.2s;
  -o-transition-duration: 0.2s;
  -ms-transition-duration: 0.2s;
  transition-duration: 0.2s;
  -webkit-transition-property: color, background-color;
  -moz-transition-property: color, background-color;
  -o-transition-property: color, background-color;
  -ms-transition-property: color, background-color;
  transition-property: color, background-color;
  position: relative;
  z-index: 1;
}
.button:before {
  content: "";
  -webkit-transition: all 0.2s;
  -moz-transition: all 0.2s;
  -o-transition: all 0.2s;
  -ms-transition: all 0.2s;
  transition: all 0.2s;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.button:after {
  content: "";
  -webkit-transition: all 0.2s;
  -moz-transition: all 0.2s;
  -o-transition: all 0.2s;
  -ms-transition: all 0.2s;
  transition: all 0.2s;
  -webkit-transition-timing-function: ease-out;
  -moz-transition-timing-function: ease-out;
  -o-transition-timing-function: ease-out;
  -ms-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 0;
  background-color: #454138;
  z-index: -1;
}
.button:hover {
  background-color: transparent;
  color: #dcd8c0;
}
.button:hover:before {
  top: -0.1rem;
  bottom: -0.1rem;
  border: solid #454138;
  border-width: 0.1rem 0 0.1rem 0;
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
.button:active:before {
  top: 0.1rem;
  bottom: 0.1rem;
  border: solid #dcd8c0;
  border-width: 0 0.1rem 0 0.1rem;
}
.router-link-active {
  border: solid #454138;
  border-width: 0.1rem 0 1rem 0;
}
</style>
