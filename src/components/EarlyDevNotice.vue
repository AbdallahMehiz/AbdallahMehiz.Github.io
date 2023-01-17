<template>
  <div>
    <figure>
      <figcaption>Early Dev Notice!</figcaption>
      <div>
        <p style="margin: 0 0">
          This website is still in development, many things are incomplete and
          expected to not work properly.
        </p>
      </div>
    </figure>
  </div>
</template>

<script>
export default {
  name: "Test",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
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
  :not(figcaption)
    margin: 0.5rem
  figcaption
    order: -1
    padding: 0.3rem 0.5rem 0rem 0.5rem
    font-size: 1.2rem
    background-color: #a8a487
    color: #454138
</style>
