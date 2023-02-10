<template>
  <!-- Top best component names of all time -->
  <div class="info-holder">
    <slot></slot>
    <div class="lil-brown-box"></div>
  </div>
</template>

<style>
.info-holder {
  position: relative;
  box-shadow: -3px 0 0 #454138, -9px 0 0 #dcd8c0, -21px 0 0 #454138,
    -18px 3px 0 #979381, 3px 3px 0 #979381;
  background-color: #dcd8c0;
  padding: 0.5rem;
  margin: 0.3rem 0.2rem 0.3rem 1.3rem;
}
.lil-brown-box {
  position: absolute;
  bottom: 0.2rem;
  right: 0.3rem;
  width: 0.7rem;
  height: 0.7rem;
  background-color: #454138;
}
</style>
