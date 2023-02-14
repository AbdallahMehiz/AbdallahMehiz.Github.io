<template>
  <figure>
    <figcaption>{{ projectTitle }}</figcaption>
    <div class="image-holder">
      <img :src="projectImage" />
    </div>
    <p class="project-description">{{ projectDescription }}</p>
    <div class="links-container">
      <CustomButton
        class="link"
        v-for="projectlink in projectLinks"
        :key="projectlink.name"
        :btnLink="link.link"
        :text="link.name"
      />
    </div>
  </figure>
</template>

<script>
import CustomButton from "./CustomButton.vue";

export default {
  name: "FigureComponent",
  setup() {
    return {};
  },
  components: {
    CustomButton,
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
  },
};
</script>
<style scoped>
figure {
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0;
  margin-bottom: 1rem;
  background-color: #dcd8c0;
  height: fit-content;
  padding-bottom: 0.5rem;
  /* Add ellipsis to paragraph */
  overflow: hidden;
  text-overflow: ellipsis;
  height: 300px;
}
figure > :not(figcaption) {
  margin: 0.5rem;
}
figure > figcaption {
  order: -1;
  padding: 0 0.5rem 0 0.5rem;
  font-size: 1.2rem;
  background-color: #3f3b33;
  color: #a8a487;
  align-items: center;
}
.image-holder {
  background: #aba58e;
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  max-height: 9rem;
}
.project-description {
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  margin: 0 0.5rem;
}
.links-container {
  position: absolute;
  bottom: 0.5rem;
}
.link {
  margin: 0 0.5rem 0 0;
}
.arabic figure {
  height: 340px;
}
.arabic .links-container {
  display: flex;
}
</style>
