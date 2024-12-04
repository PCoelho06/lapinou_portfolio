<template>
  <header class="mb-4 relative">
    <div class="mx-12 border-b-2 border-black flex justify-between items-center py-4">
      <h1 class="text-xl font-semibold">
        <RouterLink :to="{ name: 'home' }">Lapinou.tech</RouterLink>
      </h1>
      <nav class="hidden lg:flex gap-8">
        <RouterLink :to="{ name: 'about' }" :class="{ 'hover:underline': true, 'hover:font-bold': true }">
          À propos</RouterLink>
        <RouterLink :to="{ name: 'projects' }" :class="{ 'hover:underline': true, 'hover:font-bold': true }">Projets
        </RouterLink>
        <a href="http://blog.lapinou.tech" target="_blank"
          :class="{ 'hover:underline': true, 'hover:font-bold': true }">Blog</a>
        <RouterLink :to="{ name: 'contact' }" :class="{ 'hover:underline': true, 'hover:font-bold': true }">Contact
        </RouterLink>
      </nav>
      <div class="hidden lg:flex gap-2 justify-items-center">
        <p>Nice</p>
        <SparklesIcon class="size-6" />
        <p>France</p>
      </div>
      <button title="menu"
        :class="{ 'right-12 flex flex-col justify-between w-6 h-5 bg-transparent cursor-pointer border-0 lg:hidden': true, 'fixed z-50': !isHidden }"
        @click="toggleMenu">
        <span
          :class="{ 'w-full h-1 bg-black rounded-md transition-all duration-700 origin-top-right': true, '-rotate-45 bg-white': closeIcon }"></span>
        <span :class="{ 'w-full h-1 bg-black rounded-md transition-all': true, 'bg-slate-800': closeIcon }"></span>
        <span
          :class="{ 'w-full h-1 bg-black rounded-md transition-all duration-700 origin-bottom-right': true, 'rotate-45 bg-white': closeIcon }"></span>
      </button>
    </div>
  </header>
  <div
    :class="{ 'translate-x-full': isHidden, 'fixed z-40 flex justify-end items-center left-0 w-full h-1/2 -mt-4 py-4 pe-12 bg-slate-800 text-white transition-transform duration-700': true }">
    <nav class="flex flex-col gap-4 text-end">
      <RouterLink :to="{ name: 'home' }" :class="{ 'hover:underline': true, 'hover:font-bold': true }"
        @click="isHidden = !isHidden">
        Accueil</RouterLink>
      <RouterLink :to="{ name: 'about' }" :class="{ 'hover:underline': true, 'hover:font-bold': true }"
        @click="isHidden = !isHidden">
        À propos</RouterLink>
      <RouterLink :to="{ name: 'projects' }" :class="{ 'hover:underline': true, 'hover:font-bold': true }"
        @click="isHidden = !isHidden">Projets
      </RouterLink>
      <a href="http://blog.lapinou.tech" target="_blank" :class="{ 'hover:underline': true, 'hover:font-bold': true }"
        @click="isHidden = !isHidden">Blog</a>
      <RouterLink :to="{ name: 'contact' }" :class="{ 'hover:underline': true, 'hover:font-bold': true }"
        @click="isHidden = !isHidden">Contact
      </RouterLink>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import SparklesIcon from '@/components/icons/SparklesIcon.vue'

const isHidden = ref(true);
const closeIcon = computed(() => !isHidden.value);

const toggleMenu = () => {
  isHidden.value = !isHidden.value;
}
</script>
