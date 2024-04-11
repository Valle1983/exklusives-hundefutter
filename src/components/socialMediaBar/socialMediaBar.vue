<template>
  <div class="row justify-around items-center text-center">
    <div class="col-md-1 col-xs-4 cursor-pointer img">
      <q-img
        alt="instagram"
        class="q-pa-md"
        :src="instagram"
        height="35px"
        width="35px"
        @click="gotToInstagram()"
      />
    </div>
    <div class="col-md-1 col-xs-4 cursor-pointer img">
      <q-img
        alt="tictoc"
        class="q-pa-md"
        :src="tictoc"
        height="35px"
        width="35px"
        @click="goToTiktik()"
      />
    </div>
    <div class="col-md-1 col-xs-4 cursor-pointer img">
      <q-img
        alt="telegram"
        class="q-pa-md"
        :src="telegram"
        height="35px"
        width="35px"
        @click="goToTelegram()"
      />
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue';
import { instagramLink, telegramLink, tiktokLink } from '../../../appConfig';
import { openURL } from 'quasar';

export default defineComponent({
  name: 'SocialMediaBar',
  setup() {
    const instagram = require('assets/icons/instagram.svg');
    const tictoc = require('assets/icons/tiktok.png');
    const telegram = require('assets/icons/telegram.svg');
    return {
      instagram,
      tictoc,
      telegram,
      meta: {
        title: 'Social Media',
        metaTags: [
          {
            name: 'description',
            content:
              'https://www.instagram.com/laisy_malteser/ , https://www.tiktok.com/@laisy_malteser , https://t.me/laisy_malteser    ',
          },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { name: 'robots', content: 'follow' },
          //Facebook
          { property: 'og:title', content: 'Social Media' },
          {
            property: 'og:description',
            content:
              'https://www.instagram.com/laisy_malteser/ , https://www.tiktok.com/@laisy_malteser , https://t.me/laisy_malteser    ',
          },
          { property: 'og:image', content: instagram },
          { property: 'og:url', content: window.location.href },
          //Twitter
          { property: 'og:card', content: 'Social Media' },
          { property: 'og:title', content: instagram },
          {
            property: 'og:description',
            content:
              'https://www.instagram.com/laisy_malteser/ , https://www.tiktok.com/@laisy_malteser , https://t.me/laisy_malteser    ',
          },
          { property: 'og:image', content: instagram },
        ],
      },
    };
  },
  methods: {
    gotToInstagram() {
      openURL(instagramLink);
    },
    goToTiktik() {
      openURL(tiktokLink);
    },
    goToTelegram() {
      openURL(telegramLink);
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
