<template>
  <div class="resume-view">
    <h1 class="title">Resume</h1>
    <div class="document-container">
      <vue-pdf-embed class="document" source="../../assets/Resume.pdf" />
    </div>
  </div>
</template>

<script>
import VuePdfEmbed from "vue-pdf-embed";

export default {
  name: "ResumeView",
  setup() {
    return {};
  },
  components: { VuePdfEmbed },
};
</script>

<style scoped>
body {
  overflow: scroll !important;
}
.resume-view {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    "title ..."
    "resume resume"
    "resume resume"
    "resume resume"
    "resume resume"
    "resume resume";
}
.title {
  grid-area: title;
}
.document-container {
  grid-area: resume;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    "resume resume"
    "resume resume"
    "resume resume"
    "resume resume"
    "resume resume"
    "resume resume";
}
.document {
  grid-area: resume;
  width: 100%;
  height: 100%;
}
</style>
