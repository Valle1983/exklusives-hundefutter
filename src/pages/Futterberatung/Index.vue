<template>
  <beratung />
  <klartext />
  <contact-formular />
</template>
<script>
import beratung from 'components/Futterberatung/beratung';
import klartext from 'components/Futterberatung/klartext';
import { useMeta } from 'quasar';
import contactFormular from 'components/Futterberatung/contactFutter';
export default {
  name: 'Kontakt',
  components: {
    beratung,
    klartext,
    contactFormular,
  },

  data() {
    const logo = require('assets/Futterberatung/helena-lopes.jpg');
    const metaData = {
      // sets document title
      title: 'Artgerechte Futterberatung und Berechnung der Futterkosten',
      // optional; sets final title as "Index Page - My Website", useful for multiple level meta
      titleTemplate: this.title,

      // meta tags
      meta: {
        description: {
          name: 'Als leidenschaftliche Hundefreunde nehmen wir uns Zeit für Sie und Ihren Vierbeiner – und informieren Sie mit unserer Futterberatung zu wirklich artgerechter, gesunder Ernährung. Die Beratung ist kostenlos, genauso wie die Berechnung der monatlichen Futterkosten für Ihren geliebten Vierbeiner.',
          content: 'Artgerechte Futterberatung und Berechnung der Futterkosten',
        },
        keywords: {
          name: 'Als leidenschaftliche Hundefreunde nehmen wir uns Zeit für Sie und Ihren Vierbeiner – und informieren Sie mit unserer Futterberatung zu wirklich artgerechter, gesunder Ernährung. Die Beratung ist kostenlos, genauso wie die Berechnung der monatlichen Futterkosten für Ihren geliebten Vierbeiner.',
          content: 'Artgerechte Futterberatung und Berechnung der Futterkosten',
        },
        ogTitle: {
          property: 'og:title',
          content: 'Artgerechte Futterberatung und Berechnung der Futterkosten',
        },
        ogDescription: {
          property: 'og:description',
          content: 'Artgerechte Futterberatung und Berechnung der Futterkosten',
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
};
</script>
