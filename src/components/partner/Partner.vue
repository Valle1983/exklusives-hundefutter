<template>
  <div class="q-pb-xl">
    <div
      class="text-h4 text-dark text-center q-pt-xl text-weight-bolder text-h4"
    >
      {{ this.$t('partner.title') }}
    </div>
    <div
      class="row q-pt-lg q-pb-xl justify-center justify-center text-center bott"
    >
      <div class="q-pt-xl col-3 col-md-3 col-sm-12 col-xs-12">
        <q-img
          alt="emmy-toypoddle"
          :src="toyPoodle"
          @click="goToEmmy"
          height="120px"
          width="140px"
          class="q-img-info cursor-pointer"
        >
        </q-img>
      </div>
      <div class="q-pt-xl col-3 col-md-3 col-sm-12 col-xs-12">
        <q-img
          alt="pader-boxer"
          :src="boxer"
          @click="goToBoxer"
          height="120px"
          width="140px"
          class="q-img-info cursor-pointer"
        >
        </q-img>
      </div>
      <div class="q-pt-xl col-3 col-md-3 col-sm-12 col-xs-12">
        <q-img
          alt="exklusives-hundefutter"
          :src="exkluusivesHundefutter"
          @click="gotToLoExclusviesHundefutter"
          height="120px"
          width="140px"
          class="q-img-info cursor-pointer"
        >
        </q-img>
      </div>
    </div>
  </div>
</template>
<script>
import { openURL } from 'quasar';
export default {
  name: 'PartnerC',
  setup() {
    const exkluusivesHundefutter = require('assets/partners/exklusivesHudnefutter.png');
    const boxer = require('assets/partners/boxer-min.png');
    const toyPoodle = require('assets/partners/emmy-min.png');
    return {
      exkluusivesHundefutter,
      boxer,
      toyPoodle,
      meta: {
        title: 'Partner',
        metaTags: [
          {
            name: 'description',
            content:
              'https://emmy-toypoodle.de , https://pader-boxer.com/ , https://exklusives-hundefutter.de/  ',
          },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { name: 'robots', content: 'follow' },
          //Facebook
          { property: 'og:title', content: 'Partner' },
          {
            property: 'og:description',
            content:
              'https://emmy-toypoodle.de , https://pader-boxer.com/ , https://exklusives-hundefutter.de/  ',
          },
          { property: 'og:image', content: exkluusivesHundefutter },
          { property: 'og:url', content: window.location.href },
          //Twitter
          { property: 'og:card', content: 'Partner' },
          { property: 'og:title', content: exkluusivesHundefutter },
          {
            property: 'og:description',
            content:
              'https://emmy-toypoodle.de , https://pader-boxer.com/ , https://exklusives-hundefutter.de/  ',
          },
          { property: 'og:image', content: exkluusivesHundefutter },
        ],
      },
    };
  },
  methods: {
    gotToLoExclusviesHundefutter() {
      openURL('https://exklusives-hundefutter.de');
    },
    goToEmmy() {
      // TODO: übeesetzung für Kontakt einfügen
      openURL('https://emmy-toypoodle.de');
    },
    goToBoxer() {
      openURL('https://pader-boxer.com');
    },
  },
};
</script>
<style lang="css">
.q-img-info {
  background-color: rgb(248, 244, 244);
  border-radius: 100px;
}
.q-img-info:hover {
  background-color: #384747;
  border-radius: 100px;
}
.infos {
  top: 250px;
}
</style>
