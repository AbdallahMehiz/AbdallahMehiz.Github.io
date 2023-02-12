<template>
  <div>
    <div class="title">
      <h1>{{ $t("media.header") }}</h1>
      <p>
        {{ $t("media.description") }}
      </p>
    </div>
    <EarlyDevNotice class="EarlyDevNotice" />
    <div class="media-container">
      <div v-for="media in media" class="media-type">
        <div class="type">
          {{ media.type }}
        </div>
        <div class="medias">
          <div v-for="media in media.media" class="media">
            <a class="media-cover" :href="media.link">
              <img :src="media.cover" />
            </a>
            <a class="media-title" :href="media.link">
              {{ media.title }}
            </a>
            <p class="media-summary">{{ media.summary }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EarlyDevNotice from "../components/EarlyDevNotice.vue";
import media from "/assets/media/media.json";

export default {
  name: "MediaView",
  components: { EarlyDevNotice },
  setup() {
    return {
      media: media,
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
    "title title title title title EarlyDevNotice EarlyDevNotice EarlyDevNotice"
    "media media media media media media media media";
}
.title {
  grid-area: title;
}
.EarlyDevNotice {
  grid-area: EarlyDevNotice;
}
.media-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    "type"
    "media";
  grid-gap: 20px;
  grid-area: media;
}
@media (max-width: 1000px) {
  .media-container {
    grid-template-columns: repeat(1, 1fr);
  }
}
.media-type {
  background-color: rgba(69, 65, 56, 0.8);
  color: #dcd8c0;
  max-height: 250px;
  padding: 0 10px 10px 10px;
  box-shadow: 8px 10px 0px 1px rgba(168, 164, 135, 0.6);
}
.medias {
  overflow: scroll;
  max-height: 200px;
  display: grid;
  grid-gap: 1rem;
}
.media {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1.3em 1fr;
  grid-template-areas:
    "cover title title title"
    "cover summary summary summary";
  max-height: 7em;
  max-width: 100%;
  grid-gap: 10px;
}
.type {
  grid-area: type;
  padding: 10px;
}
.media-cover {
  grid-area: cover;
  border: 2px solid #dcd8c0;
  padding: 3px;
  height: calc(5rem * 1.41); /* 1.41 vertical aspect ration of covers*/
  max-width: 5rem;
}
img {
  width: 5rem;
  height: calc(5rem * 1.41);
}
.media-title {
  grid-area: title;
  margin: 0;
}
.media-summary {
  grid-area: summary;
  margin: 0;
  font-size: smaller;
  overflow: hidden !important;
  text-overflow: ellipsis;
  white-space: break-word;
  max-height: 4.7rem;
}
</style>
