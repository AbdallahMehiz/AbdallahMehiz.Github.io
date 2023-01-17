<template>
  <figure>
    <figcaption>Notice!</figcaption>
    <div>
      <p style="margin: 0 0">
        Under here are all of my social links and contact info. A contact info
        being here doesn't necessarily means i use it regularly.
      </p>
    </div>
  </figure>
</template>

<script>
export default {
  name: "FigureComponent",
  setup() {
    return {};
  },
};
</script>
<style scoped>
figure {
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: box;
  display: flex;
  -webkit-box-orient: vertical;
  -moz-box-orient: vertical;
  -o-box-orient: vertical;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
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
  -webkit-box-ordinal-group: -1;
  -moz-box-ordinal-group: -1;
  -o-box-ordinal-group: -1;
  -ms-flex-order: -1;
  -webkit-order: -1;
  order: -1;
  padding: 0.3rem 0.5rem 0rem 0.5rem;
  font-size: 1.2rem;
  background-color: #3f3b33;
  color: #a8a487;
}
iframe {
  border: 0.1rem solid #bab5a1;
}
</style>
