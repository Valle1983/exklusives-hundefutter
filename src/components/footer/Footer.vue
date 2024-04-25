<template>
  <q-footer class="bg-dark" style="max-height: 1250px">
    <div class="q-pa-lg">
      <div
        class="row q-pb-md justify-center items-center text-center q-gutter-md"
      >
        <div class="col-md-5 col-xs-12">
          <open-map />
        </div>
        <div class="col-md-3 col-xs-12">
          <q-card class="bg-dark no-shadow">
            <q-card-section>
              <div class="row text-left">
                <div
                  class="col-12 text-h5 q-pb-md"
                  v-html="this.$t('footer.contactSubtext')"
                />
                <div class="col-12 text-body1">{{ reicoPartner }}</div>
                <div class="col-12 text-body1">{{ name }}</div>
                <div class="col-12 text-body1">{{ location }}</div>
                <div class="row q-pt-md q-pb-md">
                  <div class="q-pr-md">
                    <q-btn
                      :href="emailContact"
                      round
                      icon="mail"
                      color="dark"
                      size="xs"
                    ></q-btn>
                  </div>
                  <q-btn
                    :href="mobileNumber"
                    round
                    icon="phone"
                    :title="mobileNumber"
                    color="dark"
                    size="xs"
                  ></q-btn>
                </div>
                <div
                  class="col-12 text-white q-pa-xs cursor text-weight-bold q-pb-xs"
                >
                  <div
                    class="col-12 text-body1"
                    v-html="this.$t('footer.partnerReico')"
                  />
                  <div class="col-12 text-body1">
                    {{ this.$t('footer.customerNumber') }} {{ beraterNummer }}
                  </div>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-md-3 col-xs-12">
          <q-card class="bg-dark no-shadow">
            <q-card-section>
              <div class="row text-left">
                <div
                  class="col-12 text-h5 text-left"
                  v-html="this.$t('footer.contactSubtext')"
                />
                <div class="col-12 text-left text-body1">
                  <menu-list :showHome="false" />
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
      <div class="row justify-center items-center">
        <div class="col-md-4 col-xs-6">
          <social-media-bar />
        </div>
      </div>
    </div>
    <div class="row q-pb-xl justify-center items-center text-center">
      <q-img
        alt="home"
        :src="logo"
        class="logo cursor-pointer"
        height="35px"
        width="35px"
        @click="goToHome()"
      />
      <div class="q-pl-md text-h6 text-white">
        © {{ currentYear }} {{ website }}
      </div>
    </div>
  </q-footer>
</template>
<script>
import { defineComponent } from 'vue';
import { date, openURL } from 'quasar';
import menuList from '../menuList/menuList.vue';
import SocialMediaBar from '../socialMediaBar/socialMediaBar.vue';
import OpenMap from '../openMap/openMap.vue';
import {
  reicoPartner,
  name,
  location,
  email,
  website,
  mobile,
  link,
  emailContact,
  mobileNumber,
  beraterNummer,
} from '../../../appConfig';
import { useMeta } from 'quasar';

const timeStamp = Date.now();
const currentYear = date.formatDate(timeStamp, 'YYYY');
export default defineComponent({
  components: { menuList, SocialMediaBar, OpenMap },
  name: 'FooterC',
  data() {
    const logo = require('assets/icons/logo.png');
    const instagram = require('assets/icons/instagram.svg');
    const tictoc = require('assets/icons/tiktok.png');
    const telegram = require('assets/icons/telegram.svg');
    const metaData = {
      // sets document title
      title: this.$t('footer.contactSubtext'),
      // optional; sets final title as "Index Page - My Website", useful for multiple level meta
      titleTemplate: (title) => `${title}`,
      // meta tags
      meta: {
        description: {
          name: this.$t('footer.contactSubtext'),
          content: name,
        },
        keywords: { name: website, content: website },
        ogTitle: { property: 'og:title', content: website },
        ogDescription: {
          property: 'og:description',
          content: this.desctiptionContent,
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
      logo,
      instagram,
      tictoc,
      telegram,
      currentYear,
      OpenMap,
      reicoPartner,
      name,
      location,
      email,
      website,
      mobile,
      emailContact,
      mobileNumber,
      beraterNummer,
    };
  },
  methods: {
    goToHome() {
      openURL(link);
    },
  },
});
</script>
<style scoped>
.img:hover {
  border-radius: 100px;
  background-color: white;
}
</style>
