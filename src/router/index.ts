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
      meta: {
        title: 'Portfolio de Pierre Coelho',
      },
      component: HomeView,
    },
    {
      path: '/a-propos',
      name: 'about',
      meta: { title: 'À propos de moi' },
      component: AboutView,
    },
    {
      path: '/projets',
      name: 'projects',
      meta: { title: 'Projets' },
      component: ProjectsView,
    },
    {
      path: '/contact',
      name: 'contact',
      meta: { title: 'Contact' },
      component: ContactView,
    },
    {
      path: '/politique-accessibilite',
      name: 'accessibility',
      meta: { title: "Politique d'accessibilité" },
      component: AccessibilityView,
    },
    {
      path: '/politique-confidentialite',
      name: 'privacy',
      meta: { title: 'Politique de confidentialité' },
      component: PrivacyView,
    },
    {
      path: '/mentions-legales',
      name: 'terms',
      meta: { title: 'Mentions légales' },
      component: TermsView,
    },
  ],
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)
  document.title = `Lapinou.tech - ${to.meta.title}`
  const titleMetaTag = document.querySelector('meta[name="title"]')
  if (titleMetaTag) {
    titleMetaTag.setAttribute('content', `Lapinou.tech - ${to.meta.title}`)
  }
  const ogTitleMetaTag = document.querySelector('meta[property="og:title"]')
  if (ogTitleMetaTag) {
    ogTitleMetaTag.setAttribute('content', `Lapinou.tech - ${to.meta.title}`)
  }
  const twitterTitleMetaTag = document.querySelector('meta[name="twitter:title"]')
  if (twitterTitleMetaTag) {
    twitterTitleMetaTag.setAttribute('content', `Lapinou.tech - ${to.meta.title}`)
  }
  next()
})

export default router
