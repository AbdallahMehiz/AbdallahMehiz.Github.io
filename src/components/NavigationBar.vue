<template>
  <nav>
    <!--<router-link to="/blog">
      <button>Blog</button>
    </router-link>
    <router-link to="/Projects">
      <button>Projects</button>
    </router-link>
    <router-link to="/Resume">
      <button>Resume</button>
    </router-link>-->
    <router-link to="/Contact">
      <button class="button">Contact</button>
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
nav {
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  align-items: left;
  grid-area: nav;
  color: white;
  padding-left: 2.5rem;
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

button {
  min-width: 120px;
  text-align: left;
}

/* css code of navigation bar items from 
https://github.com/metakirby5/yorha
tysm
*/

input:disabled,
button:disabled,
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
button:not(:disabled),
.button {
  padding: 0.5rem 0.5rem 0.1rem 0.5rem;
  font-size: 1em;
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
  -webkit-transition-property: color, background-color, box-shadow;
  -moz-transition-property: color, background-color, box-shadow;
  -o-transition-property: color, background-color, box-shadow;
  -ms-transition-property: color, background-color, box-shadow;
  transition-property: color, background-color, box-shadow;
  position: relative;
  z-index: 1;
}
button:not(:disabled):hover,
.button:hover {
  -webkit-box-shadow: 0.2em 0.2em 0.1em 0 #bab5a1;
  box-shadow: 0.2em 0.2em 0.1em 0 #bab5a1;
}
button:not(:disabled):before,
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
button:not(:disabled):after,
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
button:not(:disabled):hover,
.button:hover {
  background-color: transparent;
  color: #dcd8c0;
}
button:not(:disabled):hover:before,
.button:hover:before {
  top: -0.2rem;
  bottom: -0.2rem;
  border: solid #454138;
  border-width: 0.1rem 0;
}
button:not(:disabled):hover:after,
.button:hover:after {
  width: 100%;
}
button:not(:disabled):active,
.button:active {
  color: #454138;
  color: white;
}
button:not(:disabled):active:after,
.button:active:after {
  background-color: #dcd8c0;
}
</style>
