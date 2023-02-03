<template>
  <div class="resume-view">
    <h1 class="title">Resume</h1>
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

export default {
  name: "ResumeView",
  components: { VuePdfEmbed },
};
</script>

<style scoped>
.resume-view {
  display: flex;
  flex-direction: column;
}
.title {
  grid-area: title;
}
.document {
  grid-area: resume;
  width: 100%;
  height: 100%;
}
</style>
