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
          /></div
      ></FigureComponent>
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

import metadata from "../assets/feed/metadata.json";
const posts = Object.values(
  import.meta.glob("../assets/feed/posts/*.md", {
    eager: true,
    import: "default",
  })
);

export default {
  name: "FeedView",
  components: { CustomButton, FigureComponent, VueMarkdown },
  data() {
    return {
      metadata: metadata,
      posts: posts,
      postContent: "",
    };
  },
  mounted() {
    console.log(posts);
  },
  methods: {
    async selectPost(fileName) {
      const filePath = this.posts.find((post) => {
        return post.endsWith(fileName);
      });
      if (filePath) {
        const response = await fetch(filePath);
        this.postContent = await response.text();
      } else {
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
