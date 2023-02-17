<template>
  <div>
    <figure>
      <figcaption>{{ $t("earlydevnotice.title") }}</figcaption>
      <div>
        <p style="margin: 0 0">
          {{ $t("earlydevnotice.message") }}
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
  background-color: var(--color-primary);
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
  background-color: var(--color-secondary);
  color: var(--color-text-primary);
}
iframe {
  border: 0.1rem solid var(--color-secondary);
}
</style>
