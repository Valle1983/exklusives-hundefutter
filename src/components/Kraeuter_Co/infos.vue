<template>
  <div class="q-pt-xl">
    <div class="row q-pa-sm justify-center text-center">
      <div class="col-1" />
      <div
        class="col-8 col-md-8 col-sm-12 col-xs-12 col-md-10 col-sm-12 col-xs-12 text-h4 text-dark"
        v-html="this.$t('krauter_co.headline')"
      />
      <div class="col-1" />
    </div>
    <div class="row q-pt-xl justify-center">
      <div class="col-1" />
      <div
        class="q-pa-md col-8 col-md-8 col-sm-12 col-xs-12 text-h6 text-grey-8"
        v-html="this.$t('krauter_co.text')"
      />
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
    const logo = require('assets/icons/logo.png');
    const metaData = {
      // sets document title
      title: this.$t('krauter_co.headline'),
      // optional; sets final title as "Index Page - My Website", useful for multiple level meta
      titleTemplate: (title) => `${title}`,

      // meta tags
      meta: {
        description: {
          name: this.$t('krauter_co.headline'),
          content: this.$t('krauter_co.text'),
        },
        keywords: {
          name: this.$t('krauter_co.text'),
          content: this.$t('krauter_co.text'),
        },
        ogTitle: { property: 'og:title', content: this.$t('krauter_co.text') },
        ogDescription: {
          property: 'og:description',
          content: this.$t('krauter_co.headline'),
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
