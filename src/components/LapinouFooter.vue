<template>
  <footer class="bg-slate-800 text-white p-4">
    <div class="mx-12 pt-4">
      <h2 class="text-center text-6xl md:text-8xl tracking-tighter font-semibold mb-4">
        Travaillons ensemble !
      </h2>
      <div class="flex flex-col-reverse md:flex-row gap-4 justify-around items-center my-8">
        <div class="flex flex-col">
          <div class="flex gap-1 items-center">
            <ArrowTopRightOnSquareIcon class="size-4" /><a href="https://www.linkedin.com/in/pierre-coelho/"
              class="hover:underline" target="_blank">LinkedIn</a>
          </div>
          <div class="flex gap-1 items-center">
            <ArrowTopRightOnSquareIcon class="size-4" /><a href="https://x.com/PierreCoelho06" class="hover:underline"
              target="_blank">Twitter</a>
          </div>
          <div class="flex gap-1 items-center">
            <ArrowTopRightOnSquareIcon class="size-4" /><a href="https://www.instagram.com/pierrecoelho06/"
              class="hover:underline" target="_blank">Instagram</a>
          </div>
        </div>
        <p class="md:w-1/3 xl:w-1/4">
          Vous avez un projet de développement web ? Vous desirez un site moderne ou une application web efficace
          ?<br />
          Contactez-moi pour en discuter.
        </p>
      </div>
    </div>
    <div class="flex flex-col md:flex-row gap-2 justify-around items-center mt-4 text-xs">
      <div><a href="mailto:p.coelho@lapinou.tech">p.coelho@lapinou.tech</a></div>
      <nav class="flex items-center gap-4 text-center">
        <RouterLink :to="{ name: 'terms' }" class="hover:underline">Mentions légales</RouterLink>
        <RouterLink :to="{ name: 'privacy' }" class="hover:underline">Politique de confidentialité</RouterLink>
        <RouterLink :to="{ name: 'accessibility' }" class="hover:underline">Accessibilité</RouterLink>
      </nav>
      <div class="flex items-center gap-2">
        <p>
          <RouterLink :to="{ name: 'home' }">Lapinou.tech</RouterLink>
        </p>
        <SparklesIcon class="size-6" />
        <p>Nice, France</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import SparklesIcon from '@/components/icons/SparklesIcon.vue';
import ArrowTopRightOnSquareIcon from '@/components/icons/ArrowTopRightOnSquareIcon.vue';
</script>
