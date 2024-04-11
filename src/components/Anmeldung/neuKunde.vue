<template>
  <div class="bg-grey-2">
    <div class="q-pa-sm q-pt-xl row justify-center text-center">
      <div class="col-auto text-h4 text-dark">So werden Sie Reico Neukunde</div>
      <div class="row justify-center">
        <div class="col2"></div>
        <div
          class="col-8 col-md-8 col-sm-12 col-xs-12 q-pa-md text-h6 text-grey-8"
        >
          Um bei der Bestellung von Reico Hundefutter die Qualität hochzuhalten,
          ist die Bestellung nur im Direktvertrieb über einen Reico
          Vertriebspartner möglich, so wie wir es sind. Nachdem eine
          koordinierte Erstbestellung mit ausführlicher Beratung erfolgt ist,
          können Sie künftig das Futter für Ihr Tier ganz bequem selbst über den
          Onlineshop bestellen. Reico legt großen Wert darauf, dass Ihr Hund
          artgerechtes und passendes Hundefutter bekommt, weswegen wir Ihnen
          unsere kostenlose Futterberatung vor Ihrer ersten Bestellung ans Herz
          legen.
        </div>
        <div class="col2"></div>
      </div>
    </div>
    <div class="row q-pt-md justify-center">
      <div class="col-8 col-md-8 col-sm-12 col-xs-12 q-pa-md">
        <q-carousel
          v-model="slide"
          transition-prev="scale"
          transition-next="scale"
          swipeable
          animated
          control-color="primary"
          navigation
          padding
          arrows
          height="350px"
          class="bg-grey-3 text-h6 text-dark rounded-borders carousel-cards"
        >
          <template v-slot:navigation-icon="{ active, btnProps, onClick }">
            <q-btn
              v-if="active"
              size="lg"
              icon="pets"
              color="primary"
              flat
              round
              dense
              @click="onClick"
            />
            <q-btn
              v-else
              size="sm"
              :icon="btnProps.icon"
              color="white"
              flat
              round
              dense
              @click="onClick"
            />
          </template>

          <q-carousel-slide name="first" class="column no-wrap flex-center">
            <q-img src="~assets/reico-2019.png" width="150px" />
            <div class="q-mt-md text-center">
              1. Sie erhalten eine kompetente<br />Futterberatung, einen
              Futterplan und auf<br />Wunsch eine Aufstellung der Futterkosten
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="second" class="column no-wrap flex-center">
            <q-img src="~assets/reico-2019.png" width="150px" />
            <div class="q-mt-md text-center">
              2. Die bestellen Ihr frisches und<br />artgerechtes Hundefutter in
              hoher Qualität<br />bei Ihrem Reico Vertriebspartner
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="thirt" class="column no-wrap flex-center">
            <q-img src="~assets/reico-2019.png" width="150px" />
            <div class="q-mt-md text-center">
              3. Nie wieder lästiges Schleppen von<br />schweren Säcken oder
              Dosen
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="fourth" class="column no-wrap flex-center">
            <q-img src="~assets/reico-2019.png" width="150px" />
            <div class="q-mt-md text-center">
              4. Die Lieferung erfolgt direkt an Ihre<br />Wunschadresse
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="fifth" class="column no-wrap flex-center">
            <q-img src="~assets/reico-2019.png" width="150px" />
            <div class="q-mt-md text-center">
              5. Sie erhalten eine Versandbestätigung<br />per E-Mail
              inklusive<br />Sendungsverfolgungslink mit<br />Zustellabstimmung
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="sixth" class="column no-wrap flex-center">
            <q-img src="~assets/reico-2019.png" width="150px" />
            <div class="q-mt-md text-center">
              6. Ihr Hund freut sich über sein neues<br />Lieblingsfutter
            </div>
          </q-carousel-slide>
        </q-carousel>
      </div>
    </div>
    <buble-separator-close />
  </div>
</template>
<script>
import bubleSeparatorClose from 'components/StyleTools/bubleSeparatorClose';
export default {
  name: 'NewCustomer',
  components: { bubleSeparatorClose },
  data() {
    return {
      slide: 'first',
      img: 'imgs/reico-2019.png',
    };
  },
};
</script>
