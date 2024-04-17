<template>
  <div>
    <inhalts-stoffe />
    <infos />
    <nassFutter />
    <contact-formular></contact-formular>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import inhaltsStoffe from 'components/food/inhaltsStoffe';
import infos from 'components/food/infos';
import nassFutter from 'components/food/Nassfutter';
import ContactFormular from 'components/Kontakt/contact';
export default defineComponent({
  watch: {},
  name: 'Nassfutter',
  components: {
    inhaltsStoffe,
    infos,
    nassFutter,
    ContactFormular,
  },
  data() {
    return {};
  },
});
</script>
