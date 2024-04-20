<template>
  <div class="q-pt-xl">
    <div class="q-pa-md row">
      <div class="col-12 col-md-12 col-sm-12 col-xs-2">
        <div class="q-pb-md row">
          <div class="col-10 text-body1">{{ mobile }}</div>
          <q-btn
            class=""
            :href="mobileNumber"
            round
            icon="phone"
            :title="mobileNumber"
            color="dark"
            size="md"
          ></q-btn>
        </div>
      </div>
      <div class="col-12 col-md-12 col-sm-12 col-xs-2">
        <div class="q-pb-md row">
          <div class="col-10 text-body1">{{ email }}</div>
          <q-btn
            :href="emailContact"
            round
            icon="mail"
            color="dark"
            size="md"
          ></q-btn>
        </div>
      </div>
      <div class="col-12 col-md-12 col-sm-12 col-xs-2">
        <div class="row">
          <div class="col-10 text-body1">
            {{ telegramLink }}
          </div>
          <q-btn
            icon="telegram"
            round
            class="text-white"
            color="dark"
            :href="telegramLink"
            :title="telegramLink"
            size="md"
          ></q-btn>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue';
import {
  mobile,
  mobileNumber,
  email,
  emailContact,
  telegramLink,
} from '../../../appConfig';
import { useMeta } from 'quasar';
export default defineComponent({
  name: 'contactInfo',
  data() {
    const logo = require('assets/Kontakt/sarah-chai.jpg');
    const metaData = {
      // sets document title
      title: this.$t('kontakt.contactInfo.title'),
      // optional; sets final title as "Index Page - My Website", useful for multiple level meta
      titleTemplate: (title) => `${title}`,

      // meta tags
      meta: {
        description: {
          name: this.$t('kontakt.contactInfo.title'),
          content: this.$t('kontakt.contactInfo.title'),
        },
        keywords: {
          name: this.$t('kontakt.contactInfo.title'),
          content: this.$t('kontakt.contactInfo.title'),
        },
        ogTitle: {
          property: 'og:title',
          content: this.$t('kontakt.contactInfo.title'),
        },
        ogDescription: {
          property: 'og:description',
          content: this.$t('kontakt.contactInfo.title'),
        },
        ogType: { property: 'og:type', content: window.location.href },
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
      mobile,
      mobileNumber,
      email,
      emailContact,
      telegramLink,
    };
  },
});
</script>
