<template>
  <div>
    <infos />
    <products :products="Herbs" />
  </div>
</template>

<script>
import infos from 'components/Kraeuter_Co/infos';
import Products from 'components/Produkte/Products.vue';
import { Herbs } from 'src/pages/products';
export default {
  name: 'KräuterPage',
  components: {
    infos,
    Products,
  },
  data() {
    return { Herbs };
  },
};
</script>
