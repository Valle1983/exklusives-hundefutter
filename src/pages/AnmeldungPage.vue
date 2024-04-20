<template>
  <div>
    <neu-kunde />
    <contact-formular />
  </div>
</template>
<script>
import { defineComponent } from 'vue';
import { telegramLink, emailContact } from '../../appConfig';
import NeuKunde from 'components/Anmeldung/neuKunde.vue';
import ContactFormular from 'components/Anmeldung/contact.vue';
export default defineComponent({
  name: 'CustomerPage',
  components: { NeuKunde, ContactFormular },

  data() {
    return { telegramLink, emailContact };
  },
});
</script>
