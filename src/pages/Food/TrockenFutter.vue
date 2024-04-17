<template>
  <div>
    <inhalts-stoffe />
    <infos />
    <trocken-futter />
    <contact-formular></contact-formular>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import inhaltsStoffe from 'components/food/inhaltsStoffe';
import infos from 'components/food/infos';
import trockenFutter from 'components/food/Trockenfutter';
import ContactFormular from 'components/Kontakt/contact';

export default defineComponent({
  watch: {},
  name: 'TrockenFutter',
  components: {
    inhaltsStoffe,
    infos,
    trockenFutter,
    ContactFormular,
  },
  data() {
    return {};
  },
});
</script>
