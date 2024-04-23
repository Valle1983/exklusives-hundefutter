<template>
  <q-page-sticky position="bottom-left" :offset="[18, 18]">
    <q-fab icon="message" direction="up" color="dark">
      <q-fab-action
        @click="goToInstagram"
        color="primary"
        :href="telegramLink"
        :title="telegramLink"
        rel="canonical"
        icon="telegram"
      />
      <q-fab-action
        @click="writeEmail"
        color="primary"
        :title="emailContact"
        :aria-label="emailContact"
        rel="canonical"
        :href="emailContact"
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
import { telegramLink, emailContact } from '../../../appConfig';
export default defineComponent({
  name: 'StickyButtons',
  setup() {
    return { cookiesAccepted: ref(false), telegramLink, emailContact };
  },
  methods: {
    writeEmail() {
      openURL(emailContact);
    },
    goToInstagram() {
      openURL(telegramLink);
    },
  },
});
</script>
