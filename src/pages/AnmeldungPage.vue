<template>
  <div>
    <new-customer />
    <contact-formular></contact-formular>
    <q-page-sticky position="bottom-left" :offset="[18, 18]">
      <q-fab icon="message" direction="up" color="dark">
        <q-fab-action
          color="primary"
          :href="telegramLink"
          :title="telegramLink"
          icon="telegram"
        />
        <q-fab-action
          color="primary"
          :aria-label="emailContact"
          :href="emailContact"
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
  </div>
</template>
<script>
import NewCustomer from 'components/Anmeldung/neuKunde';
import ContactFormular from 'components/Anmeldung/contact';
import { telegramLink, emailContact } from '../../appConfig';
export default {
  name: 'CustomerPage',
  components: {
    NewCustomer,
    ContactFormular,
  },

  data() {
    return { telegramLink, emailContact };
  },
};
</script>
