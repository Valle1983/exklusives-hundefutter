<template>
  <q-page>
    <inhalts-stoffe />
    <m-e-a-tzie />
    <contact-formular></contact-formular>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import inhaltsStoffe from 'components/food/inhaltsStoffe';
import mEATzie from 'components/food/mEATzie';
import contactFormular from 'components/Kontakt/contact';
export default defineComponent({
  watch: {},
  name: 'mEATzie',
  components: {
    inhaltsStoffe,
    contactFormular,
    mEATzie,
  },
  data() {
    return {};
  },
});
</script>

<style type="scss">
.q-layout {
}
</style>
