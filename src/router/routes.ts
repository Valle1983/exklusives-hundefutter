import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('pages/IndexPage.vue'),
      },
      {
        name: 'Datenschutz',
        path: '/datenschutz',
        component: () => import('pages/DatenschutzPage.vue'),
      },
      {
        name: 'Impressum',
        path: '/impressum',
        component: () => import('pages/ImpressumPage.vue'),
      },
      {
        name: 'Kontakt',
        path: '/kontakt',
        component: () => import('pages/KontaktPage.vue'),
      },
      {
        name: 'NeuKunde',
        path: '/neu-kunde',
        component: () => import('pages/AnmeldungPage.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    name: 'Error404Page',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
