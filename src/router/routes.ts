import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
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
        name: 'Contact',
        path: '/contact',
        component: () => import('pages/KontaktPage.vue'),
      },
      {
        name: 'Customer',
        path: '/new-customer',
        component: () => import('pages/AnmeldungPage.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
