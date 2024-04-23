<template>
  <div>
    <mixed-items />
    <benefits />
    <contact-formular />
    <partner />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useMeta } from 'quasar';
import Partner from 'src/components/partner/Partner.vue';
import MixedItems from 'components/startseite/mixedItems.vue';
import Benefits from 'components/startseite/benefits.vue';
import ContactFormular from 'components/Kontakt/contact.vue';

export default defineComponent({
  name: 'HomePage',
  props: {
    title: {
      type: String,
      default: 'Ecklusives Katzenfutter | Reico Katzenfutter',
    },
    content: {
      type: String,
      default: 'Ecklusives Katzenfutter | Reico Katzenfutter',
    },
    desctiption: {
      type: String,
      default:
        'Reico Katzenfutter – gesunde Ernährung für Ihre Katze Gesundheit ist kein Zufall – Eine artgerechte Ernährung ändert alles! Reico entwickelt das Katzenfutter nach dem Vorbild der Natur und hat mit den Kräutermischungen und Ergänzungsfuttermitteln das Reico Vital-System kreiert. So wird jede Katze, ob jung oder alt, optimal und artgerecht versorgt. Das bietet das Futter: Natürliche Rohstoffe ohne überflüssige Zusätze, moderne Wissenschaft und mehr als 30 Jahre Erfahrung. Reico ist mehr als nur ein Katzenfutter. Erfahren Sie mehr über das Reico Vital-System und lassen Sie sich jetzt kostenlos beraten.',
    },
    desctiptionContent: {
      type: String,
      default:
        'Reico Katzenfutter – gesunde Ernährung für Ihre Katze Gesundheit ist kein Zufall – Eine artgerechte Ernährung ändert alles! Reico entwickelt das Katzenfutter nach dem Vorbild der Natur und hat mit den Kräutermischungen und Ergänzungsfuttermitteln das Reico Vital-System kreiert. So wird jede Katze, ob jung oder alt, optimal und artgerecht versorgt. Das bietet das Futter: Natürliche Rohstoffe ohne überflüssige Zusätze, moderne Wissenschaft und mehr als 30 Jahre Erfahrung. Reico ist mehr als nur ein Katzenfutter. Erfahren Sie mehr über das Reico Vital-System und lassen Sie sich jetzt kostenlos beraten.',
    },
    keywords: {
      type: String,
      default:
        'nährstoffschonende Verarbeitung, besonders hoher Fleischgehalt an Innereien, Muskelfleisch, mineralisches Gleichgewicht, mit Mineralien auf natülicher Basis',
    },
    ogImage: {
      type: String,
      default: '~/assets/quasar-logo-vertical.svg',
    },
    ogUrl: {
      type: String,
      default: window.location.href ?? '',
    },
  },

  components: { Partner, MixedItems, Benefits, ContactFormular },

  data() {
    const logo = require('assets/icons/logo.svg');
    const metaData = {
      // sets document title
      title: this.title,
      // optional; sets final title as "Index Page - My Website", useful for multiple level meta
      titleTemplate: (title: string) => `${title}`,

      // meta tags
      meta: {
        description: {
          name: this.desctiption,
          content: this.content,
        },
        keywords: {
          name: this.desctiptionContent,
          content: this.desctiptionContent,
        },
        ogTitle: {
          property: 'og:title',
          content: this.$t('startseite.mixedItems.subTitle'),
        },
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
