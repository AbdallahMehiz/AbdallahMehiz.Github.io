<template>
  <div class="pattern">
    <div class="container">
      <div class="pattern-inner"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavPattern",
  setup() {
    return {};
  },
};
</script>

<style scoped>
body {
  width: 100vh;
}
.pattern {
  grid-area: pattern;
  border-top: 2px solid var(--color-secondary);
}

.pattern-inner {
  height: 40px;
  background-size: 50px 3px, 50px 1px, 50px 1px, 50px 1px, 50px 1px, 50px 1px,
    50px 1px, 50px 1px, 50px 1px;
  background-position: 0 0, 22px 4px, 22px 5px, 22px 6px, 22px 7px, 28px 12px,
    28px 13px, 28px 14px, 28px 15px;
  background-image: linear-gradient(
      90deg,
      #4d493e,
      #4d493e 10px,
      transparent 10px
    ),
    linear-gradient(
      90deg,
      rgba(77, 73, 62, 0.4),
      rgba(77, 73, 62, 0.4) 1px,
      rgba(77, 73, 62, 0.8) 1px,
      rgba(77, 73, 62, 0.8) 2px,
      rgba(77, 73, 62, 0.9) 2px,
      rgba(77, 73, 62, 0.9) 3px,
      rgba(77, 73, 62, 0.4) 3px,
      rgba(77, 73, 62, 0.4) 4px,
      transparent 4px,
      transparent 12px,
      rgba(77, 73, 62, 0.4) 12px,
      rgba(77, 73, 62, 0.4) 13px,
      rgba(77, 73, 62, 0.8) 13px,
      rgba(77, 73, 62, 0.8) 14px,
      rgba(77, 73, 62, 0.9) 14px,
      rgba(77, 73, 62, 0.9) 15px,
      rgba(77, 73, 62, 0.4) 15px,
      rgba(77, 73, 62, 0.4) 16px,
      transparent 16px
    ),
    linear-gradient(
      90deg,
      rgba(77, 73, 62, 0.9),
      rgba(77, 73, 62, 0.9) 1px,
      #4d493e 1px,
      #4d493e 2px,
      #4d493e 2px,
      #4d493e 3px,
      rgba(77, 73, 62, 0.9) 3px,
      rgba(77, 73, 62, 0.9) 4px,
      transparent 4px,
      transparent 12px,
      rgba(77, 73, 62, 0.9) 12px,
      rgba(77, 73, 62, 0.9) 13px,
      #4d493e 13px,
      #4d493e 14px,
      #4d493e 14px,
      #4d493e 15px,
      rgba(77, 73, 62, 0.9) 15px,
      rgba(77, 73, 62, 0.9) 16px,
      transparent 16px
    ),
    linear-gradient(
      90deg,
      rgba(77, 73, 62, 0.9),
      rgba(77, 73, 62, 0.9) 1px,
      #4d493e 1px,
      #4d493e 2px,
      #4d493e 2px,
      #4d493e 3px,
      rgba(77, 73, 62, 0.9) 3px,
      rgba(77, 73, 62, 0.9) 4px,
      transparent 4px,
      transparent 12px,
      rgba(77, 73, 62, 0.9) 12px,
      rgba(77, 73, 62, 0.9) 13px,
      #4d493e 13px,
      #4d493e 14px,
      #4d493e 14px,
      #4d493e 15px,
      rgba(77, 73, 62, 0.9) 15px,
      rgba(77, 73, 62, 0.9) 16px,
      transparent 16px
    ),
    linear-gradient(
      90deg,
      rgba(77, 73, 62, 0.4),
      rgba(77, 73, 62, 0.4) 1px,
      rgba(77, 73, 62, 0.8) 1px,
      rgba(77, 73, 62, 0.8) 2px,
      rgba(77, 73, 62, 0.9) 2px,
      rgba(77, 73, 62, 0.9) 3px,
      rgba(77, 73, 62, 0.4) 3px,
      rgba(77, 73, 62, 0.4) 4px,
      transparent 4px,
      transparent 12px,
      rgba(77, 73, 62, 0.4) 12px,
      rgba(77, 73, 62, 0.4) 13px,
      rgba(77, 73, 62, 0.8) 13px,
      rgba(77, 73, 62, 0.8) 14px,
      rgba(77, 73, 62, 0.9) 14px,
      rgba(77, 73, 62, 0.9) 15px,
      rgba(77, 73, 62, 0.4) 15px,
      rgba(77, 73, 62, 0.4) 16px,
      transparent 16px
    ),
    linear-gradient(
      90deg,
      rgba(77, 73, 62, 0.4),
      rgba(77, 73, 62, 0.4) 1px,
      rgba(77, 73, 62, 0.8) 1px,
      rgba(77, 73, 62, 0.8) 2px,
      rgba(77, 73, 62, 0.9) 2px,
      rgba(77, 73, 62, 0.9) 3px,
      rgba(77, 73, 62, 0.4) 3px,
      rgba(77, 73, 62, 0.4) 4px,
      transparent 4px
    ),
    linear-gradient(
      90deg,
      rgba(77, 73, 62, 0.9),
      rgba(77, 73, 62, 0.9) 1px,
      #4d493e 1px,
      #4d493e 2px,
      #4d493e 2px,
      #4d493e 3px,
      rgba(77, 73, 62, 0.9) 3px,
      rgba(77, 73, 62, 0.9) 4px,
      transparent 4px
    ),
    linear-gradient(
      90deg,
      rgba(77, 73, 62, 0.9),
      rgba(77, 73, 62, 0.9) 1px,
      #4d493e 1px,
      #4d493e 2px,
      #4d493e 2px,
      #4d493e 3px,
      rgba(77, 73, 62, 0.9) 3px,
      rgba(77, 73, 62, 0.9) 4px,
      transparent 4px
    ),
    linear-gradient(
      90deg,
      rgba(77, 73, 62, 0.4),
      rgba(77, 73, 62, 0.4) 1px,
      rgba(77, 73, 62, 0.8) 1px,
      rgba(77, 73, 62, 0.8) 2px,
      rgba(77, 73, 62, 0.9) 2px,
      rgba(77, 73, 62, 0.9) 3px,
      rgba(77, 73, 62, 0.4) 3px,
      rgba(77, 73, 62, 0.4) 4px,
      transparent 4px
    );
  background-repeat: repeat-x;
}
</style>
