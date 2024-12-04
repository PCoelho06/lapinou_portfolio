<template>
  <main class="flex flex-col items-center">
    <PageTitle :title="isMobile ? 'À Propos' : 'À Propos de moi'" />
    <div class="mx-12 my-4">
      <div class="flex flex-col-reverse lg:flex-row items-center">
        <div class="lg:w-1/2">
          <p>
            Bonjour, je m'appelle Pierre, développeur full-stack passionné basé à Nice, spécialisé dans les technologies
            <strong class="font-bold">Symfony</strong>, <strong class="font-bold">Node.js</strong>, et <strong
              class="font-bold">Vue.js</strong>. Avec un parcours unique
            mêlant 9
            ans d’enseignement en mathématiques et une reconversion ambitieuse dans le développement web, j’apporte une
            perspective analytique et structurée à chaque projet que j’entreprends.
          </p>
          <p>
            Mon objectif ? <strong class="font-bold">Créer des solutions digitales efficaces et sur mesure</strong> qui
            aident les
            entreprises
            locales et les entrepreneurs à se démarquer. Que ce soit pour développer un site web, concevoir une
            application
            ou optimiser vos processus métiers, je mets un point d’honneur à comprendre vos besoins pour livrer des
            résultats à la hauteur de vos attentes.
          </p>
          <h3 class="w-100 border-b-2 border-black my-4 font-semibold">Mes atouts</h3>
          <div>
            <div class="flex flex-col-reverse items-center md:flex-row gap-4">
              <ul class="md:w-1/2">
                <li>
                  <strong class="font-bold">Expertise technique</strong> : Maîtrise de frameworks modernes pour des
                  applications
                  performantes et
                  évolutives.
                </li>
                <li>
                  <strong class="font-bold">Polyvalence</strong> : Du front-end à l'intégration backend, en passant par
                  l’automatisation
                  et
                  les
                  tests.
                </li>
                <li>
                  <strong class="font-bold">Approche personnalisée</strong> : Collaboration étroite avec mes clients
                  pour transformer
                  leurs
                  idées
                  en réalité.
                </li>
              </ul>
              <div class="w-1/2 flex flex-col items-center gap-4 justify-center">
                <div class="flex flex-col items-center gap-1">
                  <StarRating :rating="5" />
                  <strong class="font-bold">Symfony, Node.js, Vue.js, Bootstrap</strong>
                </div>
                <div class="flex flex-col items-center gap-1">
                  <StarRating :rating="4" />
                  <strong class="font-bold">Tailwind CSS, TypeScript</strong>
                </div>
                <div class="flex flex-col items-center gap-1">
                  <StarRating :rating="3" />
                  <strong class="font-bold">React Native, Spring, Docker</strong>
                </div>
              </div>
            </div>

            <p class="my-2">
              En parallèle, je développe des projets personnels comme un framework backend nommé Coelho.js, témoignant
              de
              mon envie constante d'innover et de relever des défis.</p>
          </div>
        </div>
        <div class="md:w-1/2 mx-12 mb-4">
          <img src="@/assets/images/PierreCoelho.jpg" alt="Pierre Coelho" class="mx-auto" />
        </div>
      </div>
      <div class="flex flex-col lg:flex-row gap-8">
        <div class="lg:w-1/2">
          <h3 class="w-100 border-b-2 border-black my-4 font-semibold">Pourquoi travailler avec moi ?</h3>
          <p>
            En plus de mon expertise technique, je suis connu pour ma rigueur, ma capacité d'adaptation et ma volonté
            d'apprendre rapidement. Mon passé d’enseignant m’a permis de développer un excellent sens de la
            communication,
            essentiel pour expliquer clairement des concepts techniques et collaborer efficacement.
          </p>
        </div>
        <div class="lg:w-1/2">
          <h3 class="w-100 border-b-2 border-black my-4 font-semibold">Et vous ?</h3>
          <p>
            Si vous cherchez à donner vie à vos idées ou à optimiser votre présence en ligne, je serais ravi d’échanger
            avec
            vous. Ensemble, construisons des outils qui feront la différence pour votre activité.
          </p>
        </div>
      </div>
      <div class="text-center my-8 flex flex-col gap-4">
        <p class="font-bold">
          Prêt à démarrer ? Contactez-moi dès maintenant pour discuter de vos besoins.
        </p>
        <RouterLink to="contact" class="underline">
          <LapinouButton>Me Contacter</LapinouButton>
        </RouterLink>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import LapinouButton from '@/components/LapinouButton.vue';
import StarRating from '@/components/StarRating.vue';
import { RouterLink } from 'vue-router';
import PageTitle from '@/components/PageTitle.vue';
import { useBreakpoints } from '@vueuse/core'

const breakpoints = useBreakpoints({
  mobile: 0, // optional
  tablet: 640,
  laptop: 1024,
  desktop: 1280,
})

const isMobile = breakpoints.between('mobile', 'tablet')
</script>
