<template>
  <div class="text-center relative">
    <h2 aria-hidden="true" class="heading2-stroke">{{ title }}</h2>
    <h2
      class="text-7xl md:text-8xl tracking-tighter font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      {{ title
      }}</h2>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: String,
});
</script>

<style scoped>
.heading2-stroke {
  font-size: 200px;
  font-weight: 400;
  line-height: 1.12em;
  letter-spacing: -9px;
  -webkit-text-stroke: 1px #333;
  color: transparent;
  text-align: center;
  white-space: nowrap;
}
</style>
