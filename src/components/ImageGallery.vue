<template>
  <div class="image-gallery">
    <img :src="images[currentImage].src" :alt="images[currentImage].alt" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import type { GalleryImages } from '@/types';

const props = defineProps<{
  images: GalleryImages[];
}>();

const currentImage = ref(0);

const changeImage = () => {
  currentImage.value = (currentImage.value + 1) % props.images.length;
};

let intervalId: number;

onMounted(() => {
  intervalId = setInterval(changeImage, 3000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<style scoped>
.image-gallery {
  height: auto;
  width: 100%;
  overflow: hidden;
}

.image-gallery img {
  height: 400px;
  margin: auto;
  display: block;
}
</style>
