import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '@/modules/landing/pages/HomePage.vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage, // no es carga perezosa
    },
    {
      path: '/features',
      name: 'features',
      component: () => import('@/modules/landing/pages/FeaturePage.vue'), // es carga perezosa
    },
    {
      path: '/pricings',
      name: 'pricings',
      component: () => import('@/modules/landing/pages/PricingPage.vue'),
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('@/modules/landing/pages/ContactPage.vue'),
    },
  ],
});

export default router;
