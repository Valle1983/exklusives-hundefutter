<template>
  <q-dialog seamless v-model="dialog" position="bottom">
    <q-card
      rounded
      class="bg-white text-dark banner q-pt-lg"
      style="max-height: 850px"
    >
      <div v-if="cardOpen">
        <q-card-section class="text-h6"> Cookie-Liste </q-card-section>
        <q-card-section>
          <div class="row text-start items-center q-pb-md">
            <div class="col-1"><q-toggle v-model="eccential" /></div>
            <div class="col-11 q-pl-md">Essentielle</div>
            <div class="col-12">
              Ermöglicht Kernfunktionen. Erforderlich, damit notwendige
              Funktionen ordnungsgemäß funkionieren
            </div>
          </div>
          <div class="row text-start items-center q-pb-md">
            <div class="col-1"><q-toggle v-model="functional" /></div>
            <div class="col-11 q-pl-md">Funktionale</div>
            <div class="col-12">
              Funktionale Cookies werden verwendet, um Besucherinformationen auf
              der Website zu speichern, z.B. Sprache, Zeitzone, erweiterte
              Inhalte.
            </div>
          </div>
          <div class="row text-start items-center q-pb-md">
            <div class="col-1"><q-toggle v-model="marketing" /></div>
            <div class="col-11 q-pl-md">Marketing</div>
            <div class="col-12">
              Dienen zur Identifizierung von Besuchern zwischen verscheidenen
              Websites, z.B. Content-Partnern, Bannernetzwerken. Diese Cookies
              können von Unternehmen verwendet werden, um relevante Werbung auf
              anderen Webseiten anzuzeigen.
            </div>
          </div>
          <div class="row text-start items-center q-pb-md">
            <div class="col-1"><q-toggle v-model="other" /></div>
            <div class="col-11 q-pl-md">Sonstige</div>
          </div>
        </q-card-section>
      </div>
      <q-card-section>
        <div class="col-12">
          Diese Internetseite verwendet Cookies und Google Analytics für die
          Analyse und Statistik. Wir nutzen Cookies zu unterschiedlichen
          Zwecken, unter anderem zur Analyse und für personalisierte
          Marketing-Mitteilungen. Durch die weitere Nutzung der Website stimmen
          Sie der Verwendung zu.
          <q-btn
            no-caps
            size="md"
            flat
            dense
            color="dark"
            label="weitere Einstellungen"
            @click="cardOpen = !cardOpen"
          />
        </div>
      </q-card-section>
      <q-card-actions class="items-end justify-end q-pb-lg">
        <q-btn flat color="dark" label="Ablehnen" @click="rejectCookies" />
        <q-btn flat color="dark" label="Akzeptieren" @click="acceptCookies" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { LocalStorage } from 'quasar';
export default defineComponent({
  name: 'CookieBanner',
  props: {
    showCookie: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['close'],
  data() {
    const logo = require('assets/icons/laisy-min.png');
    return {
      logo,
      cardOpen: ref(false),
      eccential: ref(
        LocalStorage.has('eccential')
          ? LocalStorage.getItem('eccential')
          : false
      ),
      functional: ref(
        LocalStorage.has('functional')
          ? LocalStorage.getItem('functional')
          : false
      ),
      performace: ref(
        LocalStorage.has('performace')
          ? LocalStorage.getItem('performace')
          : false
      ),
      marketing: ref(
        LocalStorage.has('marketing')
          ? LocalStorage.getItem('marketing')
          : false
      ),
      other: ref(
        LocalStorage.has('other') ? LocalStorage.getItem('other') : false
      ),
      dialog: ref(true),
    };
  },
  methods: {
    acceptCookies() {
      LocalStorage.set('cookiesAccepted', true);
      LocalStorage.set('eccential', this.eccential);
      LocalStorage.set('functional', this.functional);
      LocalStorage.set('marketing', this.marketing);
      LocalStorage.set('other', this.other);
      this.dialog = false;
      this.$emit('close');
    },
    rejectCookies() {
      LocalStorage.set('cookiesAccepted', false);
      LocalStorage.set('eccential', false);
      LocalStorage.set('functional', false);
      LocalStorage.set('marketing', false);
      LocalStorage.set('other', false);
      this.dialog = false;
      this.$emit('close');
    },
  },
});
</script>
<style scoped>
.banner {
  border-radius: 25px;
}
</style>
