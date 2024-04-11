<template>
  <q-page-sticky position="bottom-left" :offset="[18, 18]">
    <q-fab icon="message" direction="up" color="dark">
      <q-fab-action
        @click="goToInstagram"
        color="primary"
        href="https://t.me/laisy_malteser"
        title="https://t.me/laisy_malteser"
        rel="canonical"
        icon="telegram"
      />
      <q-fab-action
        @click="writeEmail"
        color="primary"
        aria-label="mailto:kontakt@laisy-malteser.de"
        rel="canonical"
        href="mailto:kontakt@laisy-malteser.de"
        icon="mail"
      />
    </q-fab>
  </q-page-sticky>
  <q-page-scroller
    position="bottom-right"
    :scroll-offset="150"
    :offset="[18, 80]"
  >
    <q-btn fab icon="keyboard_arrow_up" color="dark" />
  </q-page-scroller>
</template>
<script>
import { defineComponent, ref } from 'vue';
import { openURL } from 'quasar';

export default defineComponent({
  name: 'StickyButtons',
  setup() {
    return { cookiesAccepted: ref(false) };
  },
  methods: {
    writeEmail() {
      openURL('mailto:kontakt@laisy-malteser.de');
    },
    goToInstagram() {
      openURL('https://t.me/laisy_malteser');
    },
  },
});
</script>
