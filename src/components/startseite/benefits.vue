<template>
  <div class="bg-grey-2">
    <div
      class="q-pa-md text-h4 justify-center text-center text-dark"
      v-html="this.$t('startseite.benefits.titleText')"
    />
    <div
      class="text-h6 q-pt-md q-pb-md text-weight-bold justify-center text-center text-grey-8 text-weight"
      v-html="this.$t('startseite.benefits.sublineText')"
    />
    <div class="row">
      <div class="q-pa-xs col"></div>
      <div
        v-for="card in cards"
        :key="card.id"
        class="q-pa-md col-3 col-md-3 col-sm-12 col-xs-12"
      >
        <q-card
          class="my-card carousel-cards rounded-borders no-box-shadow no-border"
          style="min-height: 405px; max-height: 620px"
        >
          <q-img
            :src="card.imageTitle"
            aria-label="dog-food-background"
            class="bg-primary"
            ratio="4"
          />
          <q-card-section>
            <q-btn
              fab
              color="primary"
              class="absolute-center no-shadow no-box-shadow no-border no-border cursor-none"
              style="top: 0; height: 80px; width: 80px"
            >
              <q-img
                :src="card.imageIcon"
                aria-label="doog-food"
                class="full-height full-width"
              />
            </q-btn>

            <div class="row no-wrap items-center">
              <div class="col text-h6 ellipsis text-dark q-pt-xl">
                {{ card.title }}
              </div>
            </div>
          </q-card-section>
          <q-card-section class="q-pt-none row text-body1">
            <div class="col-1">
              <q-icon
                name="check"
                round
                color="primary"
                aria-label="check"
                class="text-weight-bolder contrast"
              />
            </div>
            <div class="col-11">{{ card.ponit1 }}</div>
          </q-card-section>
          <q-card-section class="q-pt-none row text-body1">
            <div class="col-1">
              <q-icon
                name="check"
                round
                color="primary"
                aria-label="check"
                class="text-weight-bolder contrast"
              />
            </div>
            <div class="col-11">
              {{ card.ponit2 }}
            </div>
          </q-card-section>
          <q-card-section class="q-pt-none row text-body1">
            <div class="col-1">
              <q-icon
                name="check"
                round
                color="primary"
                aria-label="check"
                class="text-weight-bolder contrast"
              />
            </div>
            <div class="col-11">
              {{ card.ponit3 }}
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="q-pa-md col"></div>
    </div>
    <br /><br /><br />
    <instagram-feed
      :accessToken="accessToken"
      :count="this.$q.screen.lt.sm ? 1 : 4"
      :pagination="true"
      :caption="false"
    />
    <questions />
    <buble-separator-close />
  </div>
</template>
<script>
import questions from 'components/startseite/questions';
import bubleSeparatorClose from 'components/StyleTools/bubleSeparatorClose';
import { accessToken } from '../../../appConfig';
import InstagramFeed from 'src/components/instagramFeed.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Benefits',
  components: { questions, bubleSeparatorClose, InstagramFeed },
  data() {
    const cards = [
      {
        id: 1,
        title: 'natürliche Zutaten',
        ponit1: 'nährstoffschonende Verarbeitung',
        ponit2:
          'besonders hoher Fleischgehalt an Innereien sowie Muskelfleisch',
        ponit3:
          'mineralisches Gleichgewicht, mit Mineralien auf natülicher Basis',
        imageTitle: '/icons/dog-food-background.svg',
        imageIcon: '/icons/dog-food.svg',
      },
      {
        id: 2,
        title: 'individuelle Beratung',
        ponit1: 'Persönliche Beratung speziell auf Ihre Katze zugeschnitten',
        ponit2: 'stets der gleiche Ansprechpartner',
        ponit3: 'täglich erreichbar auch am Wochenende sowie Feiertagen',
        imageTitle: '/icons/dog-background.svg',
        imageIcon: '/icons/dog.svg',
      },
      {
        id: 3,
        title: 'direkte Lieferung',
        ponit1: 'das Katzenfutter kommt pünktlich nach Hause',
        ponit2:
          'Sie können Einzellieferungen bekommen oder auf Wunsch auch einen Lieferrhythmus vereinbaren',
        ponit3: 'transport bis vor die Haustür',
        imageTitle: '/icons/truck-delivery-background.svg',
        imageIcon: '/icons/truck-delivery.svg',
      },
    ];
    return {
      accessToken,
      cards,
    };
  },
});
</script>

<style lang="scss" scoped>
.my-card:hover {
  background-color: rgb(56, 71, 71, 0.2);
}
</style>
