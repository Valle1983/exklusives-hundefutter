<template>
  <contact-formular />
</template>

<script>
import ContactFormular from 'components/Kontakt/contact.vue';
import { telegramLink, emailContact } from '../../appConfig';
export default {
  name: 'KontaktPage',
  components: {
    ContactFormular,
  },
  data() {
    return { telegramLink, emailContact };
  },
};
</script>

<style type="scss">
.q-layout {
}
</style>
