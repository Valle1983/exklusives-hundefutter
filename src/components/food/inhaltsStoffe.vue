<template>
  <div class="q-pa-sm q-pt-xl bg-dark">
    <div
      class="text-h4 text-white justify-center text-center contrast"
      v-html="this.$t('food.inhalsStoffe.title')"
    />
    <div class="q-pa-md q-pt-xl q-gutter-md row justify-center">
      <div class="3 text-center">
        <q-card style="width: 250px" class="shadow-8 carousel-cards">
          <q-card-section>
            <q-btn
              flat
              round
              icon="done"
              size="xl"
              color="primary"
              class="non-selectable no-pointer-events"
            ></q-btn>
            <div
              class="text-h6 text-primary"
              v-html="this.$t('food.inhalsStoffe.highFreshMeatContent')"
            />
          </q-card-section>
        </q-card>
      </div>
      <div class="3 text-center">
        <q-card style="width: 250px" class="shadow-8 carousel-cards">
          <q-card-section>
            <q-btn
              flat
              round
              icon="pets"
              size="xl"
              color="primary"
              class="non-selectable no-pointer-events"
            ></q-btn>
            <div
              class="text-h6 text-primary"
              v-html="this.$t('food.inhalsStoffe.noGeneticIngredients')"
            />
          </q-card-section>
        </q-card>
      </div>
      <div class="3 text-center">
        <q-card style="width: 250px" class="shadow-8 carousel-cards">
          <q-card-section>
            <q-btn
              flat
              round
              icon="done"
              size="xl"
              color="primary"
              class="non-selectable no-pointer-events"
            ></q-btn>
            <div
              class="text-h6 text-primary"
              v-html="this.$t('food.inhalsStoffe.noPreservatives')"
            />
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="q-pa-md q-gutter-md row justify-center carousel-cards">
      <div class="3 text-center">
        <q-card style="width: 250px" class="shadow-8 carousel-cards">
          <q-card-section>
            <q-btn
              flat
              round
              icon="pets"
              size="xl"
              color="primary"
              class="non-selectable no-pointer-events"
            ></q-btn>
            <div
              class="text-h6 text-primary"
              v-html="
                this.$t(
                  'food.inhalsStoffe.completelyWithoutSlaughterhouseWaste'
                )
              "
            />
          </q-card-section>
        </q-card>
      </div>
      <div class="3 text-center">
        <q-card style="width: 250px" class="shadow-8 carousel-cards">
          <q-card-section>
            <q-btn
              flat
              round
              icon="done"
              size="xl"
              color="primary"
              class="non-selectable no-pointer-events"
            ></q-btn>
            <div
              class="text-h6 text-primary"
              v-html="this.$t('food.inhalsStoffe.naturalRawMaterials')"
            />
          </q-card-section>
        </q-card>
      </div>
      <div class="3 text-center">
        <q-card style="width: 250px" class="shadow-8 carousel-cards">
          <q-card-section>
            <q-btn
              flat
              round
              icon="pets"
              size="xl"
              color="primary"
              class="non-selectable no-pointer-events"
            ></q-btn>
            <div
              class="text-h6 text-primary"
              v-html="this.$t('food.inhalsStoffe.nutrientPreservingProcessing')"
            />
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue';
import { useMeta } from 'quasar';
export default defineComponent({
  data() {
    const logo = require('assets/icons/logo.png');
    const metaData = {
      // sets document title
      title: this.$t('food.inhalsStoffe.title'),
      // optional; sets final title as "Index Page - My Website", useful for multiple level meta
      titleTemplate: (title) => `${title}`,
      // meta tags
      meta: {
        description: {
          name: this.$t('food.inhalsStoffe.title'),
          content:
            this.$t('food.inhalsStoffe.highFreshMeatContent') +
            ' ' +
            this.$t('food.inhalsStoffe.noGeneticIngredients') +
            ' ' +
            this.$t('food.inhalsStoffe.noPreservatives') +
            ' ' +
            this.$t('food.inhalsStoffe.completelyWithoutSlaughterhouseWaste') +
            ' ' +
            this.$t('food.inhalsStoffe.naturalRawMaterials') +
            ' ' +
            this.$t('food.inhalsStoffe.nutrientPreservingProcessing'),
        },
        keywords: {
          name:
            this.$t('food.inhalsStoffe.highFreshMeatContent') +
            ' ' +
            this.$t('food.inhalsStoffe.noGeneticIngredients') +
            ' ' +
            this.$t('food.inhalsStoffe.noPreservatives') +
            ' ' +
            this.$t('food.inhalsStoffe.completelyWithoutSlaughterhouseWaste') +
            ' ' +
            this.$t('food.inhalsStoffe.naturalRawMaterials') +
            ' ' +
            this.$t('food.inhalsStoffe.nutrientPreservingProcessing'),
          content: this.content,
        },
        ogTitle: {
          property: 'og:title',
          content: this.$t('food.inhalsStoffe.title'),
        },
        ogDescription: {
          property: 'og:description',
          content:
            this.$t('food.inhalsStoffe.highFreshMeatContent') +
            ' ' +
            this.$t('food.inhalsStoffe.noGeneticIngredients') +
            ' ' +
            this.$t('food.inhalsStoffe.noPreservatives') +
            ' ' +
            this.$t('food.inhalsStoffe.completelyWithoutSlaughterhouseWaste') +
            ' ' +
            this.$t('food.inhalsStoffe.naturalRawMaterials') +
            ' ' +
            this.$t('food.inhalsStoffe.nutrientPreservingProcessing'),
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
