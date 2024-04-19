<template>
  <div><contact-formular /></div>
</template>

<script>
import { defineComponent } from 'vue';
import ContactFormular from 'components/Kontakt/contact.vue';
import { telegramLink, emailContact } from '../../appConfig';
export default defineComponent({
  name: 'KontaktPage',
  components: {
    ContactFormular,
  },
  data() {
    return { telegramLink, emailContact };
  },
});
</script>

<style type="scss">
.q-layout {
}
</style>
