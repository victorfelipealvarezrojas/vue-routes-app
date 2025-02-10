import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/modules/landing/pages/HomePage.vue';
import LandingLayout from '@/modules/landing/layouts/LandingLayout.vue';
import isAuthenticatedGuard from '@/modules/auth/guards/is-authenticated.guard';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingLayout,
      children: [
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
        {
          path: '/pokemon/:id',
          name: 'pokemon',
          beforeEnter: [isAuthenticatedGuard],
          //props: true,
          props: (route) => {
            const id = Number(route.params.id);
            return { id: id };
          },
          component: () => import('@/modules/pokemons/pages/PokemonPage.vue'),
        },
      ],
    },
    {
      path: '/auth',
      redirect: '/login',
      component: () => import('@/modules/auth/layouts/AuthLayout.vue'),
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import('@/modules/auth/pages/LoginPage.vue'),
        },
        {
          path: 'register',
          name: 'register',
          component: () => import('@/modules/auth/pages/RegisterPage.vue'),
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notfound',
      component: () => import('@/modules/404Page.vue'),
    },
  ],
});

export default router;
