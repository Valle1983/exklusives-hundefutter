<template>
  <contact-formular />
</template>

<script>
import contactFormular from 'components/Kontakt/contact.vue';
import { telegramLink, emailContact } from '../../appConfig';
export default {
  name: 'KontaktPage',
  components: {
    contactFormular,
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
