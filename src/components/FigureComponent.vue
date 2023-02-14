<template>
  <figure>
    <figcaption>{{ figureTitle }}</figcaption>
    <div>
      {{ figureText }}
      <slot></slot>
    </div>
  </figure>
</template>

<script>
export default {
  name: "FigureComponent",
  setup() {
    return {};
  },
  props: {
    figureTitle: {
      type: String,
      default: "Figure Title",
    },
    figureText: {
      type: String,
      default: "Figure Text",
    },
  },
};
</script>
<style scoped>
figure {
  display: flex;
  flex-direction: column;
  margin: 0;
  margin-bottom: 1rem;
  background-color: #dcd8c0;
  height: fit-content;
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
</style>
