<template>
  <main class="flex flex-col items-center">
    <PageTitle title="Projets" />
    <div class="mx-12 my-4">
      <div class="text-center lg:w-1/2 mx-auto">
        <p>
          Découvrez ici quelques-uns des projets sur lesquels j'ai eu le plaisir de travailler. Que ce soit pour
          développer un site web, concevoir une application ou optimiser vos processus métiers, je mets un point
          d’honneur à comprendre vos besoins pour livrer des résultats à la hauteur de vos attentes.
        </p>
      </div>
      <div class="flex flex-col items-center justify-center gap-6 my-6">
        <div class="border-4 border-slate-800 rounded-r-xl rounded-bl-xl p-4 w-full">
          <div class="lg:flex lg:items-center">
            <ImageGallery :images="galleryMarquei" />
            <div>
              <h3 class="font-semibold mt-4">Marquei <span class="italic">(En Cours)</span></h3>
              <p class="my-4">
                Plateforme mobile de réservations pour salons de beauté et coiffure, développée avec CoelhoJS et React
                Native.
              </p>
              <a href="https://github.com/PCoelho06/marquei-front">
                <div class="flex items-center gap-1">
                  <ArrowTopRightOnSquareIcon class="size-4" />
                  Accéder au Github <span class="italic">(front)</span>
                </div>
              </a>
              <a href="https://github.com/PCoelho06/marquei-back">
                <div class="flex items-center gap-1">
                  <ArrowTopRightOnSquareIcon class="size-4" />
                  Accéder au Github <span class="italic">(back)</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div class="border-4 border-slate-800 rounded-r-xl rounded-bl-xl p-4 w-full">
          <div class="lg:flex lg:items-center">
            <ImageGallery :images="galleryPartageProf" />
            <div>
              <h3 class="font-semibold mt-4">PartageProf.fr</h3>
              <p class="my-4">
                Plateforme de partage de documents entre enseignants, développée avec Symfony.
              </p>
              <a href="https://partageprof.fr">
                <div class="flex items-center gap-1">
                  <ArrowTopRightOnSquareIcon class="size-4" />
                  Voir le projet
                </div>
              </a>
            </div>
          </div>
        </div>

        <div class="border-4 border-slate-800 rounded-r-xl rounded-bl-xl p-4 w-full">
          <div class="lg:flex lg:items-center">
            <ImageGallery :images="galleryRotary" />
            <div>
              <h3 class="font-semibold mt-4">Rotary Porto Vecchio</h3>
              <p class="my-4">
                Site web pour le Rotary Club de Porto Vecchio, développé avec Symfony.
              </p>
              <a href="https://rotary-portovecchio.org">
                <div class="flex items-center gap-1">
                  <ArrowTopRightOnSquareIcon class="size-4" />
                  Voir le projet
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center my-8 flex flex-col gap-4">
        <p class="font-bold">
          Vous avez un projet en tête ? N'hésitez pas à me contacter pour en discuter !
        </p>
        <RouterLink to="contact">
          <LapinouButton>Me Contacter</LapinouButton>
        </RouterLink>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import ImageGallery from '@/components/ImageGallery.vue';
import ArrowTopRightOnSquareIcon from '@/components/icons/ArrowTopRightOnSquareIcon.vue';
import type { GalleryImages } from '@/types';
import { RouterLink } from 'vue-router';
import LapinouButton from '@/components/LapinouButton.vue';
import PageTitle from '@/components/PageTitle.vue';

const galleryPartageProf: GalleryImages[] = [
  {
    src: '/images/projets/PartageProf1.png',
    alt: 'PartageProf.fr - Page d\'accueil',
  },
  {
    src: '/images/projets/PartageProf2.png',
    alt: 'PartageProf.fr - Page de recherche de documents',
  },
  {
    src: '/images/projets/PartageProf3.png',
    alt: 'PartageProf.fr - Page de profil utilisateur',
  },
];

const galleryMarquei: GalleryImages[] = [
  {
    src: '/images/projets/Marquei1.png',
    alt: 'Marquei - Page d\'accueil',
  },
  {
    src: '/images/projets/Marquei2.png',
    alt: 'Marquei - Page de réservations',
  },
  {
    src: '/images/projets/Marquei3.png',
    alt: 'Marquei - Page de salon',
  },
];

const galleryRotary: GalleryImages[] = [
  {
    src: '/images/projets/Rotary1.png',
    alt: 'Rotary Porto Vecchio - Page d\'accueil',
  },
  {
    src: '/images/projets/Rotary2.png',
    alt: 'Rotary Porto Vecchio - Page de présentation',
  },
  {
    src: '/images/projets/Rotary3.png',
    alt: 'Rotary Porto Vecchio - Page de contact',
  },
];
</script>

<style scoped></style>
