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
        <div class="postContent" v-html="postContent"></div>
      </FigureComponent>
    </div>
  </div>
</template>

<script>
import FigureComponent from "../components/FigureComponent.vue";
import CustomButton from "../components/CustomButton.vue";
import MarkdownIt from "markdown-it";
import markdownItAttrs from "markdown-it-attrs";
import metadata from "/assets/feed/metadata.json";
const md = new MarkdownIt();
md.use(markdownItAttrs);

export default {
  name: "FeedView",
  components: { CustomButton, FigureComponent },
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
        this.postContent = md.render(this.postContent);
        console.log(this.postContent);
      } catch (error) {
        this.postContent = "# Post not found";
      }
    },
  },
  mounted() {
    this.selectPost("default-post");
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
.postContent {
  display: flex;
  flex-direction: column;
  flex-basis: content;
}
.list {
  grid-area: list;
  display: flex;
  flex-direction: column;
}
.button {
  margin: 0.5rem 0 0.5rem 0;
}

.postContent {
  flex-basis: 100%;
  margin: 0 2rem;
}
</style>
