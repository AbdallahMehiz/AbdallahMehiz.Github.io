<template>
  <div>
    <h1>Feed</h1>
    <div class="feed">
      <FigureComponent figureTitle="Posts">
        <div class="list">
          <CustomButton
            v-for="post in posts"
            class="button"
            :btnText="post.title"
            btnLink="/feed"
          /></div
      ></FigureComponent>
      <FigureComponent class="post" figureTitle="Description">
      </FigureComponent>
    </div>
  </div>
</template>

<script>
import FigureComponent from "../components/FigureComponent.vue";
import CustomButton from "../components/CustomButton.vue";

import posts from "../assets/feed/metadata.json";

export default {
  name: "FeedView",
  components: { CustomButton, FigureComponent },
  data() {
    return {
      posts: posts,
    };
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
