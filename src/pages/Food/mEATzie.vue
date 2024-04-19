<template>
  <div>
    <inhalts-stoffe />
    <infos />
    <products :products="Meatzie" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import inhaltsStoffe from 'components/food/inhaltsStoffe';
import infos from 'components/food/infos';
import Products from 'components/Produkte/Products';
import { Meatzie } from 'src/pages/products';
export default defineComponent({
  watch: {},
  name: 'Meatzie',
  components: {
    inhaltsStoffe,
    infos,
    Products,
  },
  data() {
    return {
      Meatzie,
    };
  },
});
</script>
