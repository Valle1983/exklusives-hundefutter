<template>
  <contact-formular />
</template>

<script>
import { defineComponent } from 'vue';
import ContactFormular from 'components/Kontakt/contact.vue';
export default defineComponent({
  name: 'KontaktPage',
  components: {
    ContactFormular,
  },
});
</script>
