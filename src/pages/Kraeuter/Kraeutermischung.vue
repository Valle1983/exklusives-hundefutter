<template>
  <div>
    <infos />
    <krauter />
    <contact-formular></contact-formular>
  </div>
</template>

<script>
import infos from 'components/Kraeuter_Co/infos';
import krauter from 'components/Kraeuter_Co/Kraeuter';
import contactFormular from 'components/Kontakt/contact';
export default {
  name: 'KräuterPage',
  components: {
    infos,
    krauter,
    contactFormular,
  },
  data() {
    return {};
  },
};
</script>
