<template>
  <div class="bg-grey-2">
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      :autoplay="autoplay"
      control-color="dark"
      navigation
      arrows
      height="690px"
      class="shadow-2 rounded-borders transparent no-box-shadow"
    >
      <q-carousel-slide :name="1" class="column no-wrap">
        <div
          :class="
            isMobile
              ? 'q-pa-xs fit justify-center items-center q-gutter-md q-col-gutter'
              : 'row q-pa-xl fit justify-center items-center q-gutter-md q-col-gutter no-wrap'
          "
        >
          <q-card
            class="productCard carousel-cards shadow-10 col-3 col-md-3 col-sm-12 col-xs-12 cursor-pointer"
            bordered
            @click="goToProduct('3000-3027-3020')"
          >
            <q-img
              src="~assets/Kraeuter/Kraeuter/naturkraft-pro-1-purgerbe-150-g.png"
            />
            <div>
              <q-card-section class="bg-dark rounded-borders">
                <div
                  class="text-h5 q-mt-sm q-mb-xs text-weight-bold text-white"
                >
                  Naturkraft Pro-1
                </div>
                <div class="text-caption text-white">
                  Pro-1 ist eine Mischung aus Kräutern, die zur Blutverbesserung
                  und zur Regulierung der Darmtätigkeit gefüttert wird. Die
                  Mischung kann die Bildung von Darmparasiten verhindern und
                  dient gleichzeitig der inneren Reinigung...
                </div>
              </q-card-section>
            </div>

            <q-card-actions>
              <q-btn
                flat
                color="dark"
                label="weiter lesen"
                class="full-width button"
                @click="goToProduct('3000-3027-3020')"
              />
            </q-card-actions>
          </q-card>
          <q-card
            class="productCard carousel-cards shadow-10 col-3 col-md-3 col-sm-12 col-xs-12 cursor-pointer"
            bordered
            @click="goToProduct('3001-3028-3023')"
          >
            <q-img
              src="~assets/Kraeuter/Kraeuter/naturkraft-pro-2-forvit-150-g.png"
            />

            <q-card-section class="bg-dark rounded-borders">
              <div class="text-h5 q-mt-sm q-mb-xs text-weight-bold text-white">
                Naturkraft Pro-2
              </div>
              <div class="text-caption text-white">
                Pro-2 ist eine Mischung aus Kräutern, Hefen, Spurenelementen,
                Algen, B-Vitaminen, Mineralien und Aminosäuren, speziell für den
                Knochenaufbau und die Zahnentwicklung sowie eine gute
                Milchleistung bei säugenden Tieren...
              </div>
            </q-card-section>

            <q-card-actions>
              <q-btn
                flat
                color="dark"
                label="weiter lesen"
                class="full-width button"
                @click="goToProduct('3001-3028-3023')"
              />
            </q-card-actions>
          </q-card>
          <q-card
            class="productCard carousel-cards shadow-10 col-3 col-md-3 col-sm-12 col-xs-12 cursor-pointer"
            bordered
            @click="goToProduct('3003-3021-3016')"
          >
            <q-img
              src="~assets/Kraeuter/Kraeuter/naturkraft-pro-4-epaflor-150-g.png"
            />

            <q-card-section class="bg-dark rounded-borders">
              <div class="text-h5 q-mt-sm q-mb-xs text-weight-bold text-white">
                Naturkraft Pro-4
              </div>
              <div class="text-caption text-white">
                Pro-4 ist eine Mischung aus Kräutern, Vitaminen der B-Gruppe und
                Aminosäuren, die speziell zum Schutz der inneren Organe
                entwickelt wurde, wie z. B. Leber, Bauchspeicheldrüse, Niere,
                Galle...
              </div>
            </q-card-section>

            <q-card-actions>
              <q-btn
                flat
                color="dark"
                label="weiter lesen"
                class="full-width"
                @click="goToProduct('3003-3021-3016')"
              />
            </q-card-actions>
          </q-card>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap">
        <div
          :class="
            isMobile
              ? 'q-pa-xs fit justify-center items-center q-gutter-md q-col-gutter'
              : 'row q-pa-xl fit justify-center items-center q-gutter-md q-col-gutter no-wrap'
          "
        >
          <q-card
            class="productCard carousel-cards shadow-10 col-3 col-md-3 col-sm-12 col-xs-12 cursor-pointer"
            bordered
            @click="goToProduct('3005-3022-3018')"
          >
            <q-img
              src="~assets/Kraeuter/Kraeuter/naturkraft-pro-6-artos-150-g.png"
            />
            <div>
              <q-card-section class="bg-dark rounded-borders">
                <div
                  class="text-h5 q-mt-sm q-mb-xs text-weight-bold text-white"
                >
                  Naturkraft Pro-6
                </div>
                <div class="text-caption text-white">
                  Pro-6 ist eine Mischung aus Kräutern mit Hefen,
                  Spurenelementen und Vitaminen der B-Gruppe für einen gut
                  entwickelten und störungsfreien Bewegungsapparat...
                </div>
              </q-card-section>
            </div>

            <q-card-actions>
              <q-btn
                flat
                color="dark"
                label="weiter lesen"
                class="full-width button"
                @click="goToProduct('3005-3022-3018')"
              />
            </q-card-actions>
          </q-card>
          <q-card
            class="productCard carousel-cards shadow-10 col-3 col-md-3 col-sm-12 col-xs-12 cursor-pointer"
            bordered
            @click="goToProduct('3025-3038')"
          >
            <q-img src="~assets/Kraeuter/Kraeuter/naturkraft-pro-7.png" />

            <q-card-section class="bg-dark rounded-borders">
              <div class="text-h5 q-mt-sm q-mb-xs text-weight-bold text-white">
                Naturkraft Pro-7
              </div>
              <div class="text-caption text-white">
                Pro-7 ist eine Mischung aus Kräutern, Spurenelementen und
                Aromasubstanzen, die speziell zur Erleichterung der Atmung
                entwickelt wurde. Die Mischung eignet sich für Tiere jedes
                Alters...
              </div>
            </q-card-section>

            <q-card-actions>
              <q-btn
                flat
                color="dark"
                label="weiter lesen"
                class="full-width button"
                @click="goToProduct('3025-3038')"
              />
            </q-card-actions>
          </q-card>
          <q-card
            class="productCard carousel-cards shadow-10 col-3 col-md-3 col-sm-12 col-xs-12 cursor-pointer"
            bordered
            @click="goToProduct('3026-3039')"
          >
            <q-img src="~assets/Kraeuter/Kraeuter/naturkraft-pro-8.png" />

            <q-card-section class="bg-dark rounded-borders">
              <div class="text-h5 q-mt-sm q-mb-xs text-weight-bold text-white">
                Naturkraft Pro-8
              </div>
              <div class="text-caption text-white">
                Pro-8 ist eine Mischung aus Kräutern, Hefen, Meeresalgen und
                Aromasubstanzen, die vor und nach Stresssituationen, sowie zur
                sanften Unterstützung bei Ruhelosigkeit und Panik eingesetzt
                werden kann...
              </div>
            </q-card-section>

            <q-card-actions>
              <q-btn
                flat
                color="dark"
                label="weiter lesen"
                class="full-width button"
                @click="goToProduct('3026-3039')"
              />
            </q-card-actions>
          </q-card>
        </div>
      </q-carousel-slide>
    </q-carousel>
    <buble-separator-close />
  </div>
</template>

<script>
import { Platform } from 'quasar';
import bubleSeparatorClose from 'components/StyleTools/bubleSeparatorClose';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Kraeuter',
  components: {
    bubleSeparatorClose,
  },
  mounted() {
    this.onResize();
    window.addEventListener('resize', this.onResize, { passive: true });
  },
  created() {
    if (Platform.is.mobile) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  },
  methods: {
    onResize() {
      this.isMobile = window.innerWidth < 1200;
    },
    test() {
      console.log('test');
    },
    goToProduct(id) {
      this.$router.push({
        name: 'produkt',
        params: {
          id: id,
        },
      });
    },
  },
  data() {
    return {
      slide: 1,
      isMobile: false,
      autoplay: true,
    };
  },
});
</script>

<style type="scss">
.productCard:hover {
  background-color: rgb(56, 71, 71, 1);
}
.button:hover {
  background-color: white;
}
</style>
