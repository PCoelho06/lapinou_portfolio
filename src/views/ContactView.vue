<template>
  <main class="flex flex-col items-center">
    <PageTitle title="Contact" />
    <div class="mx-12 my-4">
      <div class="lg:w-1/2 mx-auto text-center">
        <p>
          Vous avez un projet en tête ? Vous souhaitez en savoir plus sur mes compétences ou mes disponibilités ?
          N’hésitez pas à me contacter en remplissant le formulaire ci-dessous.
        </p>
        <p>
          Je vous répondrai dans les plus brefs délais.
        </p>
      </div>
      <div class="lg:w-1/2 mx-auto my-8">
        <ContactForm />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import ContactForm from '@/components/ContactForm.vue';
import PageTitle from '@/components/PageTitle.vue';
</script>
