<template>
  <div>
    <inhalts-stoffe />
    <infos />
    <products :products="Welpenfutter" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import inhaltsStoffe from 'components/food/inhaltsStoffe';
import infos from 'components/food/infos';
import Products from 'components/Produkte/Products';
import { Welpenfutter } from 'src/pages/products';
export default defineComponent({
  watch: {},
  name: 'WelpenFutter',
  components: {
    inhaltsStoffe,
    infos,
    Products,
  },
  data() {
    return {
      Welpenfutter,
    };
  },
});
</script>
