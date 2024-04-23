<template>
  <div class="fullscreen text-white text-center q-pa-md flex flex-center">
    <q-img
      src="~/assets/404/imageBackground.jpg"
      class="fullscreen"
      style="z-index: -1"
    ></q-img>
    <div>
      <div style="font-size: 30vh">404</div>

      <div class="text-h2" style="opacity: 0.4">
        Upps. Die Seite gibt es nicht...
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="dark"
        unelevated
        rounded
        title="Zurück zur Startseite"
        to="/"
        label="Zurück zur Startseite"
        no-caps
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Error404Page',
});
</script>
