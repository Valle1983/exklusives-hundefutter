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
                <div class="col-12 text-h5">Kontakt:</div>
                <div class="col-12 text-h6">{{ name }}</div>
                <div class="col-12 text-h6">{{ location }}</div>
                <div class="col-12 cursor text-left">
                  <a :href="emailContact"
                    ><span class="text-h6">{{ email }}</span></a
                  >
                </div>
                <div class="col-12">
                  <a href="tel:+4917622346563"
                    ><span class="text-h6">{{ mobile }}</span></a
                  >
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-md-3 col-xs-12">
          <q-card class="bg-dark no-shadow">
            <q-card-section>
              <div class="row text-left">
                <div class="col-12 text-h5 text-left">Wichtige Seiten:</div>
                <div class="col-12 text-left">
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
<script lang="ts">
import { defineComponent } from 'vue';
import { date, openURL } from 'quasar';
import menuList from '../menuList/menuList.vue';
import SocialMediaBar from '../socialMediaBar/socialMediaBar.vue';
import OpenMap from '../openMap/openMap.vue';
import {
  name,
  location,
  email,
  website,
  mobile,
  link,
  emailContact,
} from '../../../appConfig';

const timeStamp = Date.now();
const currentYear = date.formatDate(timeStamp, 'YYYY');
export default defineComponent({
  components: { menuList, SocialMediaBar, OpenMap },
  name: 'FooterC',
  setup() {
    const logo = require('assets/icons/laisy-min.png');
    const instagram = require('assets/icons/instagram.svg');
    const tictoc = require('assets/icons/tiktok.png');
    const telegram = require('assets/icons/telegram.svg');
    return {
      logo,
      instagram,
      tictoc,
      telegram,
      currentYear,
      OpenMap,
      name,
      location,
      email,
      website,
      mobile,
      emailContact,
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
