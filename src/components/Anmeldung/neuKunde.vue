<template>
  <div class="bg-grey-2">
    <div class="q-pa-sm q-pt-xl row justify-center text-center">
      <div
        class="col-auto text-h4 text-dark"
        v-html="this.$t('anmeldung.neuKunde.newCustomer')"
      />
      <div class="row justify-center">
        <div class="col2"></div>
        <div
          class="col-8 col-md-8 col-sm-12 col-xs-12 q-pa-md text-h6 text-grey-8"
        >
          {{ this.$t('anmeldung.neuKunde.newCustomerText') }}
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
              {{ this.$t('anmeldung.neuKunde.carousel.step1') }}
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="second" class="column no-wrap flex-center">
            <q-img src="~assets/reico-2019.png" width="150px" />
            <div class="q-mt-md text-center">
              {{ this.$t('anmeldung.neuKunde.carousel.step2') }}
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="thirt" class="column no-wrap flex-center">
            <q-img src="~assets/reico-2019.png" width="150px" />
            <div class="q-mt-md text-center">
              {{ this.$t('anmeldung.neuKunde.carousel.step3') }}
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="fourth" class="column no-wrap flex-center">
            <q-img src="~assets/reico-2019.png" width="150px" />
            <div class="q-mt-md text-center">
              {{ this.$t('anmeldung.neuKunde.carousel.step4') }}
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="fifth" class="column no-wrap flex-center">
            <q-img src="~assets/reico-2019.png" width="150px" />
            <div class="q-mt-md text-center">
              {{ this.$t('anmeldung.neuKunde.carousel.step5') }}
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="sixth" class="column no-wrap flex-center">
            <q-img src="~assets/reico-2019.png" width="150px" />
            <div class="q-mt-md text-center">
              {{ this.$t('anmeldung.neuKunde.carousel.step6') }}
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
import { defineComponent } from 'vue';
export default defineComponent({
  components: { bubleSeparatorClose },
  data() {
    return {
      slide: 'first',
      img: 'imgs/reico-2019.png',
    };
  },
});
</script>
