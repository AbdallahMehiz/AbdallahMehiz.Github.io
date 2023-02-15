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
        :key="project.title"
        :projectTitle="project.title"
        :projectImage="project.image"
        :projectDescription="project.description"
        :projectLinks="project.links"
        :projectTags="project.tags"
      />
    </div>
  </div>
</template>

<script>
import ProjectComponent from "../components/ProjectComponent.vue";
import EarlyDevNotice from "../components/EarlyDevNotice.vue";
import Projects from "../assets/data/projects.json";

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
@media (max-width: 1000px) {
  .projects-container {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
