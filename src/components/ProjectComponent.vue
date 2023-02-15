<template>
  <div style="border: 2px solid #454138; width: 25rem">
    <div class="project-container">
      <img :src="projectImage" />
      <h3 class="project-title">{{ projectTitle }}</h3>
      <p class="project-description">{{ projectDescription }}</p>
      <div class="tags-container">
        <tag
          v-for="tag in projectTags"
          :key="tag"
          :tag="tag.name"
          :class="tag.class"
        />
      </div>
      <div class="links-container">
        <CustomButton
          class="link"
          v-for="projectlink in projectLinks"
          :key="projectlink.name"
          :btnLink="projectlink.link"
          :text="projectlink.name"
        >
        </CustomButton>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from "./CustomButton.vue";
import tag from "./TagComponent.vue";

export default {
  name: "FigureComponent",
  setup() {
    return {};
  },
  components: {
    CustomButton,
    tag,
  },
  props: {
    projectTitle: {
      type: String,
      default: "Project Title",
    },
    projectImage: {
      type: String,
      default: "Project Image",
    },
    projectDescription: {
      type: String,
      default: "Project Description",
    },
    projectLinks: {
      type: Array,
      default: () => [],
    },
    projectTags: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
<style scoped>
.project-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0.5rem;
}
.image-holder {
  background: #aba58e;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 175px;
  width: calc(175px * 2);
}
img {
  height: 175px;
  width: inherit;
  border-radius: 5px;
}
.project-container {
  transition: 500ms;
  width: 24rem;
  height: 23.7rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
}
.links-container:last-child {
  margin-top: auto;
}
.project-container:hover {
  background: #aba58e;
}

.links-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.tags-container {
  margin-bottom: 0.5rem;
}

.project-description {
  /* ellipsis on 3rd line */
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
