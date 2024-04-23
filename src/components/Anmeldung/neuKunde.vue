<template>
  <div class="bg-grey-2">
    <div class="q-pa-sm q-pt-xl row justify-center text-center">
      <div
        class="col-auto text-h4 text-dark"
        v-html="this.$t('anmeldung.neuKunde.newCustomer')"
      />
      <div class="row justify-center">
        <div class="col2" />
        <div
          class="col-8 col-md-8 col-sm-12 col-xs-12 q-pa-md text-h6 text-grey-8"
        >
          {{ this.$t('anmeldung.neuKunde.newCustomerText') }}
        </div>
        <div class="col2" />
      </div>
    </div>
    <div class="row q-pt-md justify-center">
      <div class="col-8 col-md-8 col-sm-12 col-xs-12 q-pa-md">
        <q-carousel
          v-model="slide"
          transition-prev="scale"
          transition-next="scale"
          swipeable
          animated
          control-color="dark"
          navigation
          padding
          arrows
          height="350px"
          class="bg-grey-3 text-h6 text-dark rounded-borders carousel-cards"
        >
          <template v-slot:navigation-icon="{ active, btnProps, onClick }">
            <q-btn
              v-if="active"
              size="lg"
              icon="pets"
              color="dark"
              flat
              round
              dense
              @click="onClick"
            />
            <q-btn
              v-else
              size="sm"
              :icon="btnProps.icon"
              color="white"
              flat
              round
              dense
              @click="onClick"
            />
          </template>

          <q-carousel-slide name="first" class="column no-wrap flex-center">
            <q-img src="~assets/reico-2019.png" width="150px" />
            <div
              class="q-mt-md text-center"
              v-html="this.$t('anmeldung.neuKunde.carousel.step1')"
            ></div>
          </q-carousel-slide>
          <q-carousel-slide name="second" class="column no-wrap flex-center">
            <q-img src="~assets/reico-2019.png" width="150px" />
            <div
              class="q-mt-md text-center"
              v-html="this.$t('anmeldung.neuKunde.carousel.step2')"
            ></div>
          </q-carousel-slide>
          <q-carousel-slide name="thirt" class="column no-wrap flex-center">
            <q-img src="~assets/reico-2019.png" width="150px" />
            <div
              class="q-mt-md text-center"
              v-html="this.$t('anmeldung.neuKunde.carousel.step3')"
            ></div>
          </q-carousel-slide>
          <q-carousel-slide name="fourth" class="column no-wrap flex-center">
            <q-img src="~assets/reico-2019.png" width="150px" />
            <div
              class="q-mt-md text-center"
              v-html="this.$t('anmeldung.neuKunde.carousel.step4')"
            ></div>
          </q-carousel-slide>
          <q-carousel-slide name="fifth" class="column no-wrap flex-center">
            <q-img src="~assets/reico-2019.png" width="150px" />
            <div
              class="q-mt-md text-center"
              v-html="this.$t('anmeldung.neuKunde.carousel.step5')"
            ></div>
          </q-carousel-slide>
          <q-carousel-slide name="sixth" class="column no-wrap flex-center">
            <q-img src="~assets/reico-2019.png" width="150px" />
            <div
              class="q-mt-md text-center"
              v-html="this.$t('anmeldung.neuKunde.carousel.step6')"
            ></div>
          </q-carousel-slide>
        </q-carousel>
      </div>
    </div>
    <buble-separator-close />
  </div>
</template>
<script>
import bubleSeparatorClose from 'components/StyleTools/bubleSeparatorClose';
import { defineComponent } from 'vue';
import { useMeta } from 'quasar';
export default defineComponent({
  components: { bubleSeparatorClose },
  data() {
    const logo = require('assets/Anmeldung/imageBackground.jpg');
    const metaData = {
      // sets document title
      title: this.$t('anmeldung.neuKunde.newCustomer'),
      // optional; sets final title as "Index Page - My Website", useful for multiple level meta
      titleTemplate: (title) => `${title}`,

      // meta tags
      meta: {
        description: {
          name: this.$t('anmeldung.neuKunde.newCustomer'),
          content: this.$t('anmeldung.neuKunde.newCustomerText'),
        },
        keywords: {
          name: this.$t('anmeldung.neuKunde.newCustomerText'),
          content: this.$t('anmeldung.neuKunde.newCustomer'),
        },
        ogTitle: {
          property: 'og:title',
          content: this.$t('anmeldung.neuKunde.newCustomer'),
        },
        ogDescription: {
          property: 'og:description',
          content: this.$t('anmeldung.neuKunde.newCustomerText'),
        },
        ogType: { property: 'og:type', content: 'website' },
        ogImage: { property: 'og:image', content: logo },
        ogUrl: { property: 'og:url', content: window.location.href },
        equiv: {
          'http-equiv': 'Content-Type',
          content: 'text/html; charset=UTF-8',
        },
      },

      // CSS tags
      link: {
        material: {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
        },
      },

      // JS tags
      script: {
        ldJson: {
          type: 'application/ld+json',
          innerHTML: '{ "@context": "http://schema.org" }',
        },
      },

      // <html> attributes
      htmlAttr: {
        'xmlns:cc': 'http://creativecommons.org/ns#', // generates <html xmlns:cc="http://creativecommons.org/ns#">,
        empty: undefined, // generates <html empty>
      },

      // <body> attributes
      bodyAttr: {
        'action-scope': 'xyz', // generates <body action-scope="xyz">
        empty: undefined, // generates <body empty>
      },

      // <noscript> tags
      noscript: {
        default: 'This is content for browsers with no JS (or disabled JS)',
      },
    };
    useMeta(metaData);
    return {
      slide: 'first',
      img: 'imgs/reico-2019.png',
    };
  },
});
</script>
