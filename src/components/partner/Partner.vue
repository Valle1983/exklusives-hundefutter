<template>
  <div class="q-pb-xl">
    <div class="text-h4 text-dark text-center q-pt-xl text-h4">
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
          :src="laisy"
          @click="goToLaisy"
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
import {
  partner1Link,
  partner3Link,
  partner4Link,
  partner5Link,
} from '../../../appConfig';
export default {
  name: 'PartnerC',
  setup() {
    const exkluusivesHundefutter = require('assets/partners/exklusivesHudnefutter.png');
    const laisy = require('assets/partners/laisy-min.png');
    const toyPoodle = require('assets/partners/emmy-min.png');
    const exkluusivesKatzenfutter = require('assets/partners/exklusives-katzenfutter.png');
    return {
      exkluusivesHundefutter,
      exkluusivesKatzenfutter,
      laisy,
      toyPoodle,
      meta: {
        title: 'Partner',
        metaTags: [
          {
            name: 'description',
            content: `${partner1Link} , ${partner3Link} , ${partner4Link}, ${partner5Link} `,
          },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { name: 'robots', content: 'follow' },
          //Facebook
          { property: 'og:title', content: 'Partner' },
          {
            property: 'og:description',
            content: `${partner1Link} ,  ${partner3Link}, ${partner4Link}, ${partner5Link} `,
          },
          { property: 'og:image', content: exkluusivesHundefutter },
          { property: 'og:url', content: window.location.href },
          //Twitter
          { property: 'og:card', content: 'Partner' },
          { property: 'og:title', content: exkluusivesHundefutter },
          {
            property: 'og:description',
            content: `${partner1Link}, ${partner3Link}, ${partner4Link}, ${partner5Link} `,
          },
          { property: 'og:image', content: exkluusivesHundefutter },
        ],
      },
    };
  },
  methods: {
    gotToLoExclusviesKatzenfutter() {
      openURL(partner4Link);
    },
    gotToLoExclusviesHundefutter() {
      openURL(partner3Link);
    },
    goToEmmy() {
      openURL(partner1Link);
    },
    goToLaisy() {
      openURL(partner5Link);
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
  background-color: rgb(56, 71, 71, 0.2);
  border-radius: 100px;
}
.infos {
  top: 250px;
}
</style>
