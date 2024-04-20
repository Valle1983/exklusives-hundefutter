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
import { useMeta } from 'quasar';
export default defineComponent({
  components: { bubleSeparatorOpen },
  data() {
    const logo = require('../../assets/Startseite/BackgroundLogo.jpg');
    const metaData = {
      // sets document title
      title:
        this.$t('food.infos.glutenFree') +
        ' ' +
        this.$t('food.infos.lactoseFree') +
        ' ' +
        this.$t('food.infos.mineralBalance'),
      // optional; sets final title as "Index Page - My Website", useful for multiple level meta
      titleTemplate: (title) => `${title}`,

      // meta tags
      meta: {
        description: {
          name: 'Gesund',
          content:
            this.$t('food.infos.glutenFree') +
            ' ' +
            this.$t('food.infos.lactoseFree') +
            ' ' +
            this.$t('food.infos.mineralBalance'),
        },
        keywords: {
          name:
            this.$t('food.infos.glutenFree') +
            ' ' +
            this.$t('food.infos.lactoseFree') +
            ' ' +
            this.$t('food.infos.mineralBalance'),
          content: this.content,
        },
        ogTitle: { property: 'og:title', content: 'Gesund' },
        ogDescription: {
          property: 'og:description',
          content: this.desctiptionContent,
        },
        ogType: { property: 'og:type', content: window.location.href },
        ogImage: { property: 'og:image', content: logo },
        ogUrl: { property: 'og:url', content: window.location.href },
        equiv: {
          'http-equiv': 'Content-Type',
          content: 'text/html; charset=UTF-8',
        },
      },

      // CSS tags
      link: {
        material: {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
        },
      },

      // JS tags
      script: {
        ldJson: {
          type: 'application/ld+json',
          innerHTML: '{ "@context": "http://schema.org" }',
        },
      },

      // <html> attributes
      htmlAttr: {
        'xmlns:cc': 'http://creativecommons.org/ns#', // generates <html xmlns:cc="http://creativecommons.org/ns#">,
        empty: undefined, // generates <html empty>
      },

      // <body> attributes
      bodyAttr: {
        'action-scope': 'xyz', // generates <body action-scope="xyz">
        empty: undefined, // generates <body empty>
      },

      // <noscript> tags
      noscript: {
        default: 'This is content for browsers with no JS (or disabled JS)',
      },
    };
    useMeta(metaData);
    return {};
  },
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
