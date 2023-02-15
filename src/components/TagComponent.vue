<template>
  <div :class="class" class="tag">
    {{ tag }}
  </div>
</template>

<script>
export default {
  name: "TagComponent",
  setup() {
    return {};
  },
  props: {
    tag: {
      name: String,
      class: String,
    },
  },
};
</script>

<style scoped>
.tag {
  width: fit-content;
  border-radius: 5px;
  padding: 0 0.5rem;
  font-size: 0.8em;
}

.wip {
  background-color: #4b483e;
  color: #a8a487;
}
.arch {
  background-color: #3f3b33;
  color: #a8a487;
}
</style>
