<template>
  <div>
    <div class="header">
      <h1 class="title">{{ $t("feed.header") }}</h1>
      <EarlyDevNotice class="devnotice" />
    </div>
    <div class="feed">
      <FigureComponent :figureTitle="$t(`feed.postlist.title`)" figureText="">
        <div class="list">
          <CustomRouterButton
            v-for="post in posts"
            :key="post.file"
            class="button"
            :btnLink="`#${post.file}`"
            :btnText="post.title"
            @click="selectPost(post.file)"
          />
        </div>
      </FigureComponent>
      <FigureComponent
        class="post"
        :figureTitle="selectedPostDescription"
        figureText=""
      >
        <div class="postContent" v-html="postContent"></div>
      </FigureComponent>
    </div>
  </div>
</template>

<script>
import FigureComponent from "../components/FigureComponent.vue";
import CustomRouterButton from "../components/CustomRouterButton.vue";
import EarlyDevNotice from "../components/EarlyDevNotice.vue";

import MarkdownIt from "markdown-it";
import markdownItAttrs from "markdown-it-attrs";
import posts from "../assets/data/posts.json";
const md = new MarkdownIt();
md.use(markdownItAttrs);

export default {
  name: "FeedView",
  components: { CustomRouterButton, FigureComponent, EarlyDevNotice },
  data() {
    return {
      posts,
      postContent: "",
      selectedPostDescription: "",
    };
  },
  methods: {
    async selectPost(fileName) {
      const hash = window.location.hash.slice(1) || "default-post";
      const file = fileName || hash;
      const postPath = `/assets/feed/posts/${file}/${file}.md`;
      try {
        const response = await fetch(postPath);
        this.postContent = await response.text();
        this.postContent = md.render(this.postContent);
        const selectedPost = this.posts.find((post) => post.file === fileName);
        this.selectedPostDescription = selectedPost.description;
      } catch (error) {
        this.postContent = "# Post not found";
      }
    },
  },
  mounted() {
    window.addEventListener("hashchange", this.selectPost);
    this.selectPost(
      window.location.hash.slice(1).split("#").pop() === "/feed"
        ? "default-post"
        : window.location.hash.slice(1).split("#").pop()
    );
  },
  beforeDestroy() {
    window.removeEventListener("hashchange", this.selectPost);
  },
};
</script>

<style scoped>
.header {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: auto;
  grid-template-areas: "title title title title title devnotice devnotice devnotice";
}
.devnotice {
  grid-area: devnotice;
}
.title {
  grid-area: title;
}
.feed {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-template-areas: "list  post post post";
  grid-gap: 20px;
}
@media (max-width: 1000px) {
  .feed {
    display: block;
  }
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
