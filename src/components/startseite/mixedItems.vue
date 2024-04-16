<template>
  <div class="q-pt-xl">
    <div class="row q-pt-xl q-pa-md">
      <div class="col-2" />
      <div class="col-4 col-md-4 col-sm-12 col-xs-12 text-h4">
        <div
          class="text-dark"
          v-html="this.$t('startseite.mixedItems.title')"
        />
        <div
          class="text-h6 text-grey-8 text-weight"
          v-html="this.$t('startseite.mixedItems.subTitle')"
        />
        <div
          class="text-body1 text-black"
          v-html="this.$t('startseite.mixedItems.text')"
        />
      </div>
      <div class="col-4 col-md-4 col-sm-12 col-xs-12">
        <q-img
          src="~assets/MixedItems/IMAGE 2022-02-05 20_44_39.png"
          height="100%"
          width="100%"
        ></q-img>
      </div>
      <div class="col-2"></div>
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
