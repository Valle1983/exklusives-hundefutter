<template>
  <div>
    <inhalts-stoffe />
    <infos />
    <products :products="Leckerlie" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import inhaltsStoffe from 'components/food/inhaltsStoffe';
import infos from 'components/food/infos';
import Products from 'components/Produkte/Products';
import { Leckerlie } from 'src/pages/products';
export default defineComponent({
  watch: {},
  name: 'Leckerlies',
  components: {
    inhaltsStoffe,
    infos,
    Products,
  },
  data() {
    return {
      Leckerlie,
    };
  },
});
</script>
