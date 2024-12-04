<template>
  <main class="flex flex-col items-center justify-center gap-7">
    <div class="mx-12 flex flex-col xl:flex-row items-center justify-center gap-7">
      <SparklesIcon class="size-36 xl:size-28 block" />
      <h2 class="text-6xl lg:text-9xl tracking-tighter text-center xl:text-left">Je suis Pierre Coelho</h2>
    </div>
    <div class="mx-12 flex flex-col lg:flex-row items-center justify-center gap-7">
      <p class="text-xl lg:text-2xl lg:w-2/5">
        Spécialisé dans le développement de solutions sur mesure pour les entreprises locales : sites web performants,
        gestion de données, et optimisation des processus.
      </p>
      <h2 class="text-5xl lg:text-8xl tracking-tighter font-bold text-center lg:text-right lg:w-3/5">Developpeur web
        Full Stack
      </h2>
    </div>
    <RouterLink to="contact" class="mt-4 lg:mt-16 mb-8">
      <LapinouButton>Me Contacter</LapinouButton>
    </RouterLink>
  </main>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import SparklesIcon from '@/components/icons/SparklesIcon.vue';
import LapinouButton from '@/components/LapinouButton.vue';
</script>
