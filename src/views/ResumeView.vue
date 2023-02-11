<template>
  <div class="resume-view">
    <div class="header">
      <h1>{{ $t("resume.header") }}</h1>
      <h3>
        {{ $t("resume.description") }}
      </h3>
    </div>
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
import EarlyDevNotice from "../components/EarlyDevNotice.vue";

export default {
  name: "ResumeView",
  components: { EarlyDevNotice },
};
</script>

<style scoped>
.resume-view {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    "header header header header header devnotice devnotice devnotice"
    "resume resume resume resume resume resume resume resume";
}
h1 {
  margin: 0;
}
.header {
  grid-area: header;
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
