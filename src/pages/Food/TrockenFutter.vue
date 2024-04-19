<template>
  <div>
    <inhalts-stoffe />
    <infos />
    <products :products="DryFood" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import inhaltsStoffe from 'components/food/inhaltsStoffe';
import infos from 'components/food/infos';
import Products from 'components/Produkte/Products';
import { DryFood } from 'src/pages/products';
export default defineComponent({
  methods: {},
  watch: {},
  name: 'Nassfutter',
  components: {
    inhaltsStoffe,
    infos,
    Products,
  },
  data() {
    return { DryFood };
  },
});
</script>
