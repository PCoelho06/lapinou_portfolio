<template>
  <div id="notification" :class="{ 'hidden': showNotification }">
    <div :class="`notification ${notificationType}`">
      <p v-if="notificationType === 'success' || notificationType === 'filtered'">
        Votre message a bien été envoyé ! Nous reviendrons vers vous dans les plus brefs délais.
      </p>
      <p v-else-if="notificationType === 'error'">Une erreur est survenue, veuillez réessayer.</p>
    </div>
  </div>
  <form @submit.prevent="handleSubmit" class="flex flex-col gap-4">
    <div class="lg:flex lg:gap-4">
      <div class="flex flex-col lg:w-1/2 mb-4 lg:mb-0">
        <label for="first-name" class="font-bold">Prénom</label>
        <input type="text" id="first-name" v-model="firstName" required />
      </div>
      <div class="flex flex-col lg:w-1/2">
        <label for="last-name" class="font-bold">Nom</label>
        <input type="text" id="last-name" v-model="lastName" required />
      </div>
    </div>
    <div class="flex flex-col w-100">
      <label for="email" class="font-bold">Email</label>
      <input type="email" id="email" v-model="email" required />
    </div>
    <div class="flex flex-col w-100">
      <label for="message" class="font-bold">Message:</label>
      <textarea id="message" v-model="message" required></textarea>
    </div>
    <div class="hidden">
      <label for="antispam" class="font-bold">Merci de ne pas remplir ce champ:</label>
      <input type="text" id="antispam" v-model="antispam" />
    </div>
    <LapinouButton type="submit">Envoyer mon message</LapinouButton>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import LapinouButton from './LapinouButton.vue';
import apiClient from '@/services/apiClient';

import type { Message } from '@/types';

const firstName = ref('');
const lastName = ref('');
const email = ref('');
const message = ref('');
const antispam = ref('');
const notificationType = ref('');
const showNotification = ref(false);

const handleSubmit = () => {
  const formData: Message = {
    first_name: firstName.value,
    last_name: lastName.value,
    email: email.value,
    message: message.value,
    antispam: antispam.value,
  };

  // Add your form submission logic here
  try {
    sendEmail(formData);
    firstName.value = '';
    lastName.value = '';
    email.value = '';
    message.value = '';
    antispam.value = '';
    notificationType.value = 'success';
    handleNotification();
  } catch (error) {
    console.error(error);
    notificationType.value = 'error';
    handleNotification();
  }
};

const handleNotification = () => {
  showNotification.value = true;
  setTimeout(() => {
    notificationType.value = '';
    showNotification.value = false;
  }, 5000);
};

const sendEmail = async (data: Message) => {
  const response = await apiClient.post('/messages', data);
  console.log(response);
};

</script>

<style scoped>
input,
textarea {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
