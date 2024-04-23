<template>
  <q-list>
    <q-item v-if="showHome" clickable v-ripple :to="{ name: 'HomePage' }">
      <q-item-section>Home</q-item-section>
    </q-item>

    <q-item
      v-for="navigation in navigationList"
      :key="navigation.id"
      clickable
      v-ripple
      :to="{ name: navigation.to }"
    >
      <q-item-section>
        <q-item-label>{{ navigation.name }}</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MenuList',
  props: {
    showHome: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    const navigationList = [
      {
        id: 2,
        name: this.$t('menuList.contactSite'),
        to: 'kontakt',
      },
      {
        id: 3,
        name: this.$t('menuList.impressumSite'),
        to: 'Impressum',
      },
      {
        id: 4,
        name: this.$t('menuList.datenschutzSite'),
        to: 'Datenschutz',
      },
    ];
    return { navigationList };
  },
});
</script>
<style scoped>
.q-item.q-router-link--active {
  color: #61345e !important;
  background-color: rgba(255, 255, 255, 0.445) !important;
  font-weight: bold;
  border-radius: 25px;
}
.q-hoverable {
  border-radius: 25px;
}
</style>
