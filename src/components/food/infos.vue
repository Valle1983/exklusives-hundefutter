<template>
  <div>
    <div class="row q-pt-xl justify-around justify-center text-center bott">
      <div class="col-1" />
      <div class="q-pt-xl col-3 col-md-3 col-sm-12 col-xs-12">
        <q-img src="~assets/chips/Glutenfrei.png" class="q-img-info" />
        <div
          class="text-h6 q-pa-md text-dark"
          v-html="this.$t('food.infos.glutenFree')"
        />
      </div>
      <div class="q-pt-xl col-3 col-md-3 col-sm-12 col-xs-12">
        <q-img src="~assets/chips/Lactosefrei.png" class="q-img-info" />
        <div
          class="text-h6 q-pa-md text-dark"
          v-html="this.$t('food.infos.lactoseFree')"
        />
      </div>
      <div class="q-pt-xl col-3 col-md-3 col-sm-12 col-xs-12">
        <q-img
          src="~assets/chips/Mineralisches_Gleichgewicht.png"
          class="q-img-info"
        ></q-img>
        <div
          class="text-h6 q-pa-md text-dark"
          v-html="this.$t('food.infos.mineralBalance')"
        />
      </div>
      <div class="col-1" />
    </div>
    <buble-separator-open />
  </div>
</template>
<script>
import bubleSeparatorOpen from 'components/StyleTools/bubleSeparatorOpen';
import { defineComponent } from 'vue';
export default defineComponent({
  components: { bubleSeparatorOpen },
});
</script>
<style lang="css">
.q-img-info {
  height: 50px;
  width: 50px;
}
.infos {
  top: 250px;
}
</style>
