<template>
  <div class="HomeView">
    <div class="profilepic-container">
      <img src="../assets/profile_pic.jpg" alt="" />
    </div>
    <div class="info">
      <h1 class="name">Abdallah, Mehiz</h1>
      <h2 class="job">Computer Science Student</h2>
      <h3 class="location">Ras-El-Oued, Bourdj-Bou-Arrerridj, Algeria</h3>
      <p>
        Hello, I'm Abdallah Mehiz, a 2<sup>nd</sup> year Computer Science
        Student at the University of Bachir-El-Ibrahimi.
      </p>
      <p>
        Currently Learning Back-end Web Development with ASP.NET Core and
        Vue.js. Currently Learning Android Development with Kotlin and Android
        Studio.
      </p>
      <p>
        Planning to learn Embedded Systems, Software Engineering, and Game Dev.
      </p>
    </div>
    <div class="generalinfo-container">
      <QuickInfoHolder>Age: {{ calculateAge(2003) }}</QuickInfoHolder>
      <QuickInfoHolder>Time Zone: GMT+1({{ currentTime() }})</QuickInfoHolder>
      <QuickInfoHolder>Languages: Arabic, English, French</QuickInfoHolder>
    </div>
  </div>
</template>

<script>
import QuickInfoHolder from "../components/QuickInfoHolder.vue";

export default {
  name: "HomeView",
  components: { QuickInfoHolder },
  setup() {
    return {};
  },
  methods: {
    calculateAge(birthyear) {
      let currentDate = new Date();
      if (currentDate.getMonth() < 8)
        return currentDate.getFullYear() - birthyear - 1;
      else return currentDate.getFullYear() - birthyear;
    },
    currentTime() {
      let currentTime = new Date();
      return `${currentTime.getHours() + 1}:${currentTime.getMinutes()}`;
    },
  },
};
</script>

<style scoped>
.HomeView {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    "profilepic info info info info info info info"
    "generalinfo info info info info info info info";
  grid-gap: 20px;
}
@media (max-width: 1000px) {
  .HomeView {
    grid-template-columns: repeat(1, 1fr);
    grid-template-areas:
      "profilepic"
      "generalinfo"
      "info";
  }
}
.profilepic-container {
  grid-area: profilepic;
  border: 3px solid var(--color-secondary);
  padding: 2px;
  display: flex;
  margin: auto;
}
.profilepic-container img {
  width: 300px;
  height: 300px;
  object-fit: cover;
  border: 2px solid var(--color-secondary);
  padding: 2px;
}
.generalinfo-container {
  grid-area: generalinfo;
}
.info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-area: info;
  text-align: center;
}
</style>
