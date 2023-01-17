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
<style lang="sass" scoped>
figure
  display: box
  display: flex
  flex-direction: column
  margin: 0
  margin-bottom: 1rem
  background-color: #dcd8c0
  height: fit-content
  :not(figcaption)
    margin: 0.5rem
  figcaption
    order: -1
    padding: 0.3rem 0.5rem 0rem 0.5rem
    font-size: 1.2rem
    background-color: #3f3b33
    color: #a8a487
</style>
