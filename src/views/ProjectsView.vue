<template>
  <div class="RouterView">
    <div class="header">
      <h1>{{ $t("projects.header") }}</h1>
      <p>
        {{ $t("projects.description") }}
      </p>
    </div>
    <EarlyDevNotice class="EarlyDevNotice" />
    <div class="projects-container">
      <ProjectComponent
        v-for="project in projects"
        :projectTitle="project.title"
        :projectImage="project.image"
        :projectDescription="project.description"
        :projectLinks="project.links"
      />
    </div>
  </div>
</template>

<script>
import ProjectComponent from "../components/ProjectComponent.vue";
import EarlyDevNotice from "../components/EarlyDevNotice.vue";
import Projects from "/assets/projects/projects.json";

export default {
  name: "ProjectsView",
  components: {
    ProjectComponent,
    EarlyDevNotice,
  },
  setup() {
    return {
      projects: Projects,
    };
  },
  mounted() {
    console.log(Projects);
  },
};
</script>

<style scoped>
.RouterView {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    "header header header header header EarlyDevNotice EarlyDevNotice EarlyDevNotice"
    "projects projects projects projects projects projects projects projects";
}
.EarlyDevNotice {
  grid-area: EarlyDevNotice;
}
.header {
  grid-area: header;
}
.projects-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-gap: 1rem;
  grid-area: projects;
}
</style>
