<template>
  <div class="HomeView">
    <div class="profilepic-container">
      <img src="/assets/profile_pic.jpg" alt="Profile Pic!!!" />
    </div>
    <div class="generalinfo-container">
      <h1 class="name">Abdallah, Mehiz</h1>
      <h2 class="job">Computer Science Student</h2>
      <h3 class="location">Ras-El-Oued, Bourdj-Bou-Arrerridj, Algeria</h3>
    </div>
    <div class="info">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta optio
        totam fugiat, suscipit repellendus, illo ipsam facilis vitae quos
        accusantium culpa provident iusto. Ipsum illo voluptatum eius esse culpa
        obcaecati. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Expedita quibusdam nulla tempore alias ducimus rerum illo dolorum
        voluptatum rem debitis quis, quia atque natus numquam maxime dolorem eum
        saepe odit!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  setup() {
    return {};
  },
};
</script>

<style scoped>
.HomeView {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    "profilepic generalinfo generalinfo generalinfo generalinfo generalinfo generalinfo generalinfo"
    "info info info info info info info info";
}
.profilepic-container {
  grid-area: profilepic;
  border: 3px solid #454138;
  padding: 2px;
  display: flex;
}
.profilepic-container img {
  width: 300px;
  height: 300px;
  object-fit: cover;
  border: 2px solid #454138;
  padding: 2px;
}
.generalinfo-container {
  grid-area: generalinfo;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.info {
  grid-area: info;
}
</style>
