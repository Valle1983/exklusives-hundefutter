import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'HomePage',
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
      {
        path: '/nassfutter',
        component: () => import('pages/Food/NassFutter.vue'),
      },
      {
        path: '/trockenfutter',
        component: () => import('pages/Food/TrockenFutter.vue'),
      },
      {
        path: '/welpenfutter',
        component: () => import('pages/Food/WelpenFutter.vue'),
      },
      {
        path: '/leckerlies',
        component: () => import('pages/Food/Leckerlie.vue'),
      },
      {
        path: '/kraeutermischung',
        component: () => import('pages/Kraeuter/Kraeutermischung.vue'),
      },
      {
        path: '/beratung',
        component: () => import('pages/Futterberatung/Index.vue'),
      },
      {
        path: '/produkt/:id',
        component: () => import('pages/Produkt.vue'),
        name: 'produkt',
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
