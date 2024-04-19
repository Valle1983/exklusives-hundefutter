<template>
  <div>
    <inhalts-stoffe />
    <infos />
    <products :products="WeetFood" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import inhaltsStoffe from 'components/food/inhaltsStoffe';
import infos from 'components/food/infos';
import Products from 'components/Produkte/Products';
import { WeetFood } from 'src/pages/products';
export default defineComponent({
  watch: {},
  name: 'Nassfutter',
  components: {
    inhaltsStoffe,
    infos,
    Products,
  },
  data() {
    return {
      WeetFood,
    };
  },
});
</script>
