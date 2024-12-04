import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import ContactView from '@/views/ContactView.vue'
import AccessibilityView from '@/views/AccessibilityView.vue'
import PrivacyView from '@/views/PrivacyView.vue'
import TermsView from '@/views/TermsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/a-propos',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/projets',
      name: 'projects',
      component: ProjectsView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/politique-accessibilite',
      name: 'accessibility',
      component: AccessibilityView,
    },
    {
      path: '/politique-confidentialite',
      name: 'privacy',
      component: PrivacyView,
    },
    {
      path: '/mentions-legales',
      name: 'terms',
      component: TermsView,
    },
  ],
})

export default router
