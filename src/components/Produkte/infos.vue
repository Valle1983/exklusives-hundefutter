<template>
  <div>
    <div class="row">
      <div class="col-1"></div>
      <div class="col-1"></div>
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
