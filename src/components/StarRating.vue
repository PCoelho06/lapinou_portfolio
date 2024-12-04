<template>
  <div class="star-rating">
    <span v-for="star in stars" :key="star">
      <StarIcon :class="{ 'filled': star <= props.rating, 'size-6': true }" />
    </span>
  </div>
</template>

<script setup lang="ts">
import StarIcon from '@/components/icons/StarIcon.vue';

const props = defineProps<{
  rating: number;
}>();

const stars = [1, 2, 3, 4, 5];
</script>

<style scoped>
.star-rating {
  display: flex;
}

.star-rating span {
  font-size: 2rem;
  color: #d3d3d3;
}

.filled {
  color: #ffc107;
}
</style>
