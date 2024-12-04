<template>
  <LapinouHeader />
  <RouterView />
  <LapinouFooter />
</template>

<script setup lang="ts">
import LapinouHeader from '@/components/LapinouHeader.vue'
import { RouterView } from 'vue-router'
import LapinouFooter from '@/components/LapinouFooter.vue'
</script>
