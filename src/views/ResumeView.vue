<template>
  <div class="resume-view">
    <h1 class="title">Resume</h1>
    <EarlyDevNotice class="devnotice" />
    <iframe
      class="document"
      frameborder="0"
      src="https://drive.google.com/file/d/1-y8cei8J7xN62Q_wNpuLgdLs7ZmeQNjm/preview"
      allow="autoplay"
    ></iframe>
  </div>
</template>

<script>
import VuePdfEmbed from "vue-pdf-embed";
import EarlyDevNotice from "../components/EarlyDevNotice.vue";

export default {
  name: "ResumeView",
  components: { VuePdfEmbed, EarlyDevNotice },
};
</script>

<style scoped>
.resume-view {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    "title title title ... ... devnotice devnotice devnotice"
    "resume resume resume resume resume resume resume resume";
}
.title {
  grid-area: title;
}
.document {
  grid-area: resume;
  width: 100%;
  height: calc(
    100vh / 1.52
  ); /* This is very arbitrary i have to find a fix later */
  overflow: hidden;
}
.devnotice {
  grid-area: devnotice;
}
</style>
