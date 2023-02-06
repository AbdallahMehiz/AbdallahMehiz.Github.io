<template>
  <div>
    <h1>Feed</h1>
    <div class="feed">
      <FigureComponent figureTitle="Posts">
        <div class="list">
          <CustomButton
            v-for="metadata in metadata"
            class="button"
            btnLink="#"
            :btnText="metadata.title"
            @click="selectPost(metadata.file)"
          />
        </div>
      </FigureComponent>
      <FigureComponent class="post" figureTitle="Description">
        <VueMarkdown :source="postContent" />
      </FigureComponent>
    </div>
  </div>
</template>

<script>
import FigureComponent from "../components/FigureComponent.vue";
import CustomButton from "../components/CustomButton.vue";
import VueMarkdown from "vue-markdown-render";

import metadata from "/assets/feed/metadata.json";

export default {
  name: "FeedView",
  components: { CustomButton, FigureComponent, VueMarkdown },
  data() {
    return {
      metadata,
      postContent: "",
    };
  },
  methods: {
    async selectPost(fileName) {
      const postPath = `/assets/feed/posts/${fileName}/${fileName}.md`;
      try {
        const response = await fetch(postPath);
        this.postContent = await response.text();
      } catch (error) {
        this.postContent = "# Post not found";
      }
    },
  },
};
</script>

<style scoped>
.feed {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-template-areas: "list  post post post";
  grid-gap: 20px;
}
.post {
  grid-area: post;
}
.list {
  grid-area: list;
  display: flex;
  flex-direction: column;
}
.button {
  margin: 0.5rem 0 0.5rem 0;
}
</style>
