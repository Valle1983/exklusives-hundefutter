<template>
  <q-page>
    <contact-formular/>
    <q-page-sticky position="bottom-left" :offset="[18, 18]">
      <q-fab icon="message" direction="up" color="dark">
        <q-fab-action
          color="primary"
          href="https://t.me/exklusivesHundefutter"
          title="https://t.me/exklusivesHundefutter"
          icon="telegram"
        />
        <q-fab-action
          color="primary"
          aria-label="mailto:kontakt@exklusives-hundefutter.de"
          href="mailto:kontakt@exklusives-hundefutter.de"
          icon="mail"
        />
      </q-fab>
    </q-page-sticky>
    <q-page-scroller
      position="bottom-right"
      :scroll-offset="150"
      :offset="[18, 18]"
    >
      <q-btn fab icon="keyboard_arrow_up" color="dark" />
    </q-page-scroller>
  </q-page>
</template>

<script>
import contactFormular from 'components/contakt/contact.vue';
export default {
  name: 'KontaktPage',
  components: {
    contactFormular,
  },
  data() {
    return {};
  },
};
</script>

<style type="scss">
.q-layout {
}
</style>
