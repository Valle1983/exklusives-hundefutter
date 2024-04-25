<template>
  <q-layout view="lHh lpR lff" @scroll="scrollHandler">
    <q-parallax
      :style="!isMobile ? 'height: 75vh' : 'height: 450px'"
      class="q-pa-xl"
    >
      <template v-slot:media>
        <q-carousel
          v-model="slide"
          :autoplay="autoplay"
          @mouseenter="autoplay = false"
          @mouseleave="autoplay = true"
          navigation
          infinite
          animated
          class="full-width"
          transition-prev="slide-right"
          transition-next="slide-left"
        >
          <q-carousel-slide
            v-if="isHome"
            :name="1"
            lazy-load
            :img-src="homeImage"
          />
          <q-carousel-slide v-if="isHome" :name="2" :img-src="homeImage2" />
          <q-carousel-slide
            v-else-if="isNewCustomer"
            :name="1"
            :img-src="newCustomerImage"
          />
          <q-carousel-slide
            v-else-if="isDatenschutz || isImpressum"
            :name="1"
            :img-src="datenschutzImage"
          />
          <q-carousel-slide
            v-else-if="isTrockenfutter || isNAssFutter"
            :name="1"
            :img-src="trockenfutterImage"
          />
          <q-carousel-slide
            v-else-if="isLeckerlies || isWelpenFutter"
            :name="1"
            :img-src="leckerlieImage"
          />
          <q-carousel-slide
            v-else-if="isContact"
            :name="1"
            :img-src="contactImage"
          />
          <q-carousel-slide
            v-else-if="isKraeutermischung"
            name="1"
            :img-src="kraeutermischungImage"
          />
          <q-carousel-slide
            v-else-if="isBeratung"
            :name="1"
            img-src="~assets/Futterberatung/helena-lopes.jpg"
          />
          <q-carousel-slide :name="1" :img-src="defaultImage" />
        </q-carousel>
      </template>
      <template v-slot:content="">
        <q-header
          elevated
          class="text-white text-weight-bold bg-grey-2 no-shadow"
        >
          <q-page-sticky expand position="top">
            <q-toolbar
              class="q-pa-xl"
              style="height: 65px"
              :class="
                paintToolbar
                  ? 'bg-white text-dark toolbar-text-color text-weight-bold'
                  : 'q-pa-lg'
              "
              :style="{
                opacity: 0.9 + 1 * 0.9,
                left: 0,
                right: 0,
              }"
            >
              <q-btn
                flat
                round
                icon="menu"
                aria-label="menu"
                v-if="role !== 'user'"
                @click="drawer = !drawer"
              />
              <q-toolbar-title
                @click="this.$router.push('/')"
                class="justify-center cursor-pointer"
              >
                <q-toolbar-title>
                  <q-img
                    src="~/assets/reico-2019.png"
                    :class="!isMobile ? 'logo' : 'logo-mobil'"
                  />
                </q-toolbar-title>
              </q-toolbar-title>
              <div v-if="isMobile">
                <q-btn
                  flat
                  :class="paintToolbar ? 'text-dark' : 'text-white'"
                  round
                  icon="menu"
                  aria-label="menu"
                  @click="right = !right"
                />
              </div>
              <div v-else>
                <q-btn
                  no-caps
                  size="lg"
                  rounded
                  flat
                  label="Startseite"
                  to="/"
                  aria-label="Startseite"
                />
                <q-btn
                  no-caps
                  size="lg"
                  rounded
                  flat
                  label="Futterberatung"
                  title="Futterberatung"
                  to="/beratung"
                  aria-label="Futterberatung"
                />
                <q-btn-dropdown
                  no-caps
                  size="lg"
                  rounded
                  flat
                  label="Futter"
                  aria-label="Futter"
                >
                  <q-list v-for="menuItem in feedList" :key="menuItem.id">
                    <q-item
                      v-close-popup
                      clickable
                      v-ripple
                      :to="menuItem.to"
                      title="Futter"
                    >
                      <q-item-section>
                        <q-item-label class="text-h6">{{
                          menuItem.label
                        }}</q-item-label>
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-btn-dropdown>
                <q-btn-dropdown
                  no-caps
                  size="lg"
                  rounded
                  flat
                  label="Kräuter & Ergänzung"
                  aria-label="Kräuter & Ergänzung"
                >
                  <q-list
                    v-for="menuItem in herbSupplementsList"
                    :key="menuItem.id"
                  >
                    <q-item
                      v-close-popup
                      clickable
                      v-ripple
                      :to="menuItem.to"
                      title="Kräuter & Ergänzung"
                    >
                      <q-item-section>
                        <q-item-label class="text-h6">{{
                          menuItem.label
                        }}</q-item-label>
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-btn-dropdown>
                <q-btn-dropdown
                  no-caps
                  size="lg"
                  rounded
                  flat
                  label="Anmeldung"
                  aria-label="Anmeldung"
                >
                  <q-list>
                    <q-item clickable v-close-popup @click="goToReico">
                      <q-item-section>
                        <q-item-label class="text-h6"
                          >Bestandkunden Login</q-item-label
                        >
                      </q-item-section>
                    </q-item>

                    <q-item
                      clickable
                      v-close-popup
                      to="/neu-kunde"
                      title="Neu Kunde"
                    >
                      <q-item-section>
                        <q-item-label class="text-h6"
                          >Anmeldung als Neukunde</q-item-label
                        >
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-btn-dropdown>
                <q-btn
                  no-caps
                  size="lg"
                  rounded
                  flat
                  label="Kontakt"
                  title="Kontakt"
                  to="/kontakt"
                  aria-label="Kotnakt"
                />
              </div>
            </q-toolbar>
          </q-page-sticky>
        </q-header>
      </template>
    </q-parallax>
    <q-layout hidden @scroll="scrollHandler" />

    <q-drawer
      v-model="right"
      :width="250"
      behavior="mobile"
      :breakpoint="500"
      overlay
      bordered
      side="right"
      content-class="bg-grey-1"
    >
      <q-scroll-area class="fit">
        <q-list>
          <template v-for="(menuItem, index) in rightList">
            <q-item
              :key="index"
              clickable
              v-ripple
              :to="menuItem.to"
              v-if="
                menuItem.label !== 'Futter' &&
                menuItem.label !== 'Anmeldung' &&
                menuItem.label != 'Kräuter & Ergänzung'
              "
              title="Menu"
            >
              <q-item-section avatar>
                <q-icon :name="menuItem.icon" />
              </q-item-section>
              <q-item-section>
                {{ menuItem.label }}
              </q-item-section>
            </q-item>
            <q-expansion-item
              :icon="
                menuItem.label === 'Futter' ||
                menuItem.label === 'Kräuter & Ergänzung'
                  ? 'mdi-dog'
                  : 'person_add'
              "
              :label="menuItem.label"
              default-default-opened
              :key="menuItem.id"
              clickable
              expand-separator
              v-else
            >
              <div v-if="menuItem.label === 'Futter'">
                <div v-for="feedItem in feedList" :key="feedItem.id">
                  <q-item clickable v-ripple :to="feedItem.to" title="Futter">
                    <q-item-section>
                      {{ feedItem.label }}
                    </q-item-section>
                  </q-item>
                </div>
              </div>
              <div v-else-if="menuItem.label === 'Kräuter & Ergänzung'">
                <div v-for="herbItem in herbSupplementsList" :key="herbItem.id">
                  <q-item
                    clickable
                    v-ripple
                    :to="herbItem.to"
                    title="Kräuter & Ergänzung"
                  >
                    <q-item-section>
                      {{ herbItem.label }}
                    </q-item-section>
                  </q-item>
                </div>
              </div>
              <div v-else-if="menuItem.label === 'Anmeldung'">
                <div v-for="adviseItem in adviseList" :key="adviseItem.id">
                  <div v-if="adviseItem.label === 'Bestandkunden Login'">
                    <q-item clickable v-ripple @click="goToReico">
                      <q-item-section>
                        {{ adviseItem.label }}
                      </q-item-section>
                    </q-item>
                  </div>
                  <div v-else>
                    <q-item
                      clickable
                      v-ripple
                      :to="adviseItem.to"
                      title="Bestandkunden Login"
                    >
                      <q-item-section>
                        {{ adviseItem.label }}
                      </q-item-section>
                    </q-item>
                  </div>
                </div>
              </div>
            </q-expansion-item>
          </template>
        </q-list>
        <div class="q-pa-md justify-center text-center">
          <q-img
            src="~assets/icons/logo.png"
            class="logo"
            style="height: 180px"
          />
        </div>
        <p class="q-pt-md text-center">© {{ currentYear }} {{ website }}</p>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
      <sticky-buttons />
      <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-btn fab icon="lock" color="dark" @click="showCookie = !showCookie" />
      </q-page-sticky>
      <footer-c />
    </q-page-container>
    <cookie-banner v-if="showCookie" :showCookie="showCookie" @close="close" />
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import FooterC from 'components/footer/Footer.vue';
import { LocalStorage, date, openURL, Platform } from 'quasar';
import CookieBanner from 'components/cookieBanner.vue';
import StickyButtons from 'components/stickButtons/stickyButtons.vue';
import { link, website } from '../../appConfig';

export default defineComponent({
  name: 'MainLayout',

  components: { FooterC, CookieBanner, StickyButtons },
  mounted() {
    this.onResize();
    window.addEventListener('resize', this.onResize, { passive: true });
    this.elevated = true;
    this.showCookie = !LocalStorage.has('cookiesAccepted');
  },
  created() {
    if (Platform.is.mobile) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  },
  data() {
    const leftDrawerOpen = ref(false);
    const logo = require('assets/icons/logo.png');
    const instagram = require('assets/icons/instagram.svg');
    const tictoc = require('assets/icons/tiktok.png');
    const telegram = require('assets/icons/telegram.svg');

    const timeStamp = Date.now();
    const currentYear = date.formatDate(timeStamp, 'YYYY');

    const rightList = [
      {
        id: 0,
        icon: 'home',
        to: '/',
        label: 'Startseite',
        separator: true,
      },
      {
        id: 1,
        icon: 'person',
        to: '/beratung',
        label: 'Futterberatung',
        separator: false,
      },
      {
        id: 2,
        icon: 'mdi-dog',
        label: 'Kräuter & Ergänzung',
        separator: false,
      },
      {
        id: 3,
        icon: 'pets',
        label: 'Futter',
        separator: false,
      },
      {
        id: 4,
        icon: 'invite',
        label: 'Anmeldung',
        separator: false,
      },
      {
        id: 5,
        icon: 'alternate_email',
        to: 'kontakt',
        label: 'Kontakt',
        separator: false,
      },
      {
        id: 6,
        icon: 'assignment',
        to: 'impressum',
        label: 'Impressum',
        separator: false,
      },
      {
        id: 7,
        icon: 'assignment',
        to: 'datenschutz',
        label: 'Datenschutz',
        separator: false,
      },
    ];

    const herbSupplementsList = [
      {
        id: 1,
        icon: 'mdi-cat',
        to: '/kraeutermischung',
        label: 'Kräutermischung',
        separator: false,
      },
    ];

    const feedList = [
      {
        id: 0,
        icon: '',
        to: '/nassfutter',
        label: 'Nassfutter',
        separator: false,
      },
      {
        id: 1,
        icon: '',
        to: '/trockenfutter',
        label: 'Trockenfutter',
        separator: true,
      },
      {
        id: 2,
        icon: 'contact',
        to: '/welpenfutter',
        label: 'Welpenfutter',
        separator: false,
      },
      {
        id: 3,
        icon: 'contact',
        to: '/leckerlies',
        label: 'Leckerlies',
        separator: false,
      },
    ];

    const adviseList = [
      {
        id: 1,
        icon: 'team',
        to: '',
        label: 'Bestandkunden Login',
        separator: true,
      },
      {
        id: 2,
        icon: 'team',
        to: '/neu-kunde',
        label: 'Anmeldung als Neukunde',
        separator: false,
      },
    ];
    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      logo,
      paintToolbar: false,
      position: ref('bg-white text-primary transparent menu'),
      elevated: false,
      instagram,
      tictoc,
      telegram,
      currentYear,
      showCookie: ref(false),
      autoplay: ref(true),
      left: ref(false),
      right: ref(false),
      role: 'user',
      isMobile: ref(false),
      slide: 1,
      isHome: ref(false),
      homeImage: require('assets/Startseite/imageBackground.jpg'),
      homeImage2: require('assets/Startseite/imageBackground2.jpg'),
      isContact: ref(false),
      contactImage: require('assets/Kontakt/imageBackground.jpg'),
      isBeratung: ref(false),
      beratungImage: require('assets/Kontakt/imageBackground.jpg'),
      isNewCustomer: ref(false),
      newCustomerImage: require('assets/Anmeldung/imageBackground.jpg'),
      isDatenschutz: ref(false),
      datenschutzImage: require('assets/Datenschutz/imageBackground.jpg'),
      isKraeutermischung: ref(false),
      kraeutermischungImage: require('assets/Kraeuter/imageBackground.jpg'),
      isErgaenzung: ref(false),
      isTrockenfutter: ref(false),
      trockenfutterImage: require('assets/Futter/Trockenfutter/imageBackground.jpg'),
      isNAssFutter: ref(false),
      nassfutterImage: require('assets/Futter/Trockenfutter/imageBackground.jpg'),
      isWelpenFutter: ref(false),
      isLeckerlies: ref(false),
      leckerlieImage: require('assets/Futter/Leckerlies/imageBackground.jpg'),
      isProdukt: ref(false),
      isImpressum: ref(false),
      impressumImage: require('assets/Datenschutz/imageBackground.jpg'),
      isDefault: ref(false),
      defaultImage: require('assets/Startseite/defaultImageBackground.jpg'),
      rightList,
      herbSupplementsList,
      feedList,
      adviseList,
      drawer: ref(false),
      link,
      website,
    };
  },
  watch: {
    $route(to) {
      this.isDefault = false;
      this.isHome = false;
      this.isContact = false;
      this.isBeratung = false;
      this.isNewCustomer = false;
      this.isDatenschutz = false;
      this.isKraeutermischung = false;
      this.isErgaenzung = false;
      this.isTrockenfutter = false;
      this.isNAssFutter = false;
      this.isWelpenFutter = false;
      this.isLeckerlies = false;
      this.isProdukt = false;
      this.isImpressum = false;
      if (to.fullPath === '/') {
        this.isHome = true;
      } else if (to.fullPath === '/kontakt') {
        this.isContact = true;
      } else if (to.fullPath === '/beratung') {
        this.isBeratung = true;
      } else if (to.fullPath === '/neu-kunde') {
        this.isNewCustomer = true;
      } else if (to.fullPath === '/datenschutz') {
        this.isDatenschutz = true;
      } else if (to.fullPath === '/kraeutermischung') {
        this.isKraeutermischung = true;
      } else if (to.fullPath === '/trockenfutter') {
        this.isTrockenfutter = true;
      } else if (to.fullPath === '/nassfutter') {
        this.isNAssFutter = true;
      } else if (to.fullPath === '/welpenfutter') {
        this.isWelpenFutter = true;
      } else if (to.fullPath === '/leckerlies') {
        this.isLeckerlies = true;
      } else if (to.fullPath === '/ergaenzungsmittel') {
        this.isErgaenzung = true;
      } else if (to.fullPath === '/impressum') {
        this.isImpressum = true;
      } else {
        this.isDefault = true;
      }
    },
  },
  methods: {
    scrollHandler(el: any) {
      if (el.position >= 300) {
        this.position = 'bg-white text-primary menu';
        this.elevated = true;
        this.paintToolbar = true;
      } else {
        this.position = 'bg-white text-primary transparent menu';
        this.elevated = false;
        this.paintToolbar = false;
      }
    },
    goToHome() {
      openURL(link);
    },
    goTo() {
      this.$router.push('/');
    },
    close() {
      this.$emit('close');
      this.showCookie = false;
    },
    onResize() {
      this.isMobile = window.innerWidth < 1200;
    },
    goToReico() {
      openURL('https://reico-vital.com/de/anmeldung?back=my-account');
    },
  },
});
</script>
<style lang="sass" scoped>
.logo
  height: 65px,
  width: 120px
.logo-mobil
  height: 45px,
  width:75px

.custom-caption
  text-align: center
  padding: 12px
  color: white
  width: 100%
  background-color: rgba(72,97,11, 0.1)
</style>
