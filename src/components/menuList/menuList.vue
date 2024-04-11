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
  setup() {
    const navigationList = [
      {
        id: 2,
        name: 'Kontakt',
        to: 'Contact',
      },
      {
        id: 3,
        name: 'Impressum',
        to: 'Impressum',
      },
      {
        id: 4,
        name: 'Datenschutz',
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
