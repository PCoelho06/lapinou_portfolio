<template>
  <button :type class="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  type?: 'button' | 'submit' | 'reset';
}>();
</script>
