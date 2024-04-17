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
            class="my-card carousel-cards shadow-10 col-3 col-md-3 col-sm-12 col-xs-12 cursor-pointer"
            bordered
            @click="goToProduct('2010-2011-2012')"
          >
            <q-img src="~assets/Futter/Nassfutter/maxivit-kalb.png" />
            <div>
              <q-card-section class="bg-dark rounded-borders">
                <div class="row q-gutter-sm">
                  <img
                    class="icons"
                    src="~assets/chips/Mineralisches_Gleichgewicht.png"
                    alt="Mineralisches_Gleichgewicht"
                  />
                  <img
                    class="icons"
                    src="~assets/chips/Lactosefrei.png"
                    alt="Lactosefrei"
                  />
                </div>
                <div
                  class="text-h5 q-mt-sm q-mb-xs text-weight-bold text-white contrast"
                >
                  MaxicatVit Wild
                </div>
                <div class="text-caption text-white text-body1">
                  MaxicatVit Wild enthält alles, was kleine Jäger lieben:
                  köstliches Wildfleisch, schmackhaftes Geflügelfleisch, leckere
                  Nudeln, knackige Zucchini, goldgelben Kürbis und unsere
                  einzigartige Algenmischung, die den Körper in sein
                  mineralisches Gleichgewicht bringt...
                </div>
              </q-card-section>
            </div>

            <q-card-actions>
              <q-btn
                flat
                color="dark"
                label="weiter lesen"
                class="full-width button"
                @click="goToProduct('2010-2011-2012')"
              />
            </q-card-actions>
          </q-card>
          <q-card
            class="my-card carousel-cards shadow-10 col-3 col-md-3 col-sm-12 col-xs-12 cursor-pointer"
            bordered
            @click="goToProduct('2002-2006-2027')"
          >
            <q-img src="~assets/Futter/Nassfutter/maxivit-rind.png" />

            <q-card-section class="bg-dark rounded-borders">
              <div class="row q-gutter-sm">
                <img
                  class="icons"
                  src="~assets/chips/Mineralisches_Gleichgewicht.png"
                  alt="Mineralisches_Gleichgewicht"
                />
              </div>
              <div
                class="text-h5 q-mt-sm q-mb-xs text-weight-bold text-white contrast"
              >
                MaxicatVit Herz Leber
              </div>
              <div class="text-caption text-white text-body1">
                Unser MaxicatVit Herz Leber wird auch die wählerischste Katze
                der Welt überzeugen. Mit saftigem Rindfleisch, köstlichem
                Rinderherz, schmackhafter Geflügelleber, nahrhaften Nudeln und
                unserer einzigartigen Algenmischung...
              </div>
            </q-card-section>

            <q-card-actions>
              <q-btn
                flat
                color="dark"
                label="weiter lesen"
                class="full-width button"
                @click="goToProduct('2002-2006-2027')"
              />
            </q-card-actions>
          </q-card>
          <q-card
            class="my-card carousel-cards shadow-10 col-3 col-md-3 col-sm-12 col-xs-12 cursor-pointer"
            bordered
            @click="goToProduct('2001-2005-2026')"
          >
            <q-img src="~assets/Futter/Nassfutter/maxivit-gefluegel.png" />

            <q-card-section class="bg-dark rounded-borders">
              <div class="row q-gutter-sm">
                <img
                  class="icons"
                  src="~assets/chips/Glutenfrei.png"
                  alt="Glutenfrei"
                />
                <img
                  class="icons"
                  src="~assets/chips/Mineralisches_Gleichgewicht.png"
                  alt="Mineralisches_Gleichgewicht"
                />
              </div>
              <div
                class="text-h5 q-mt-sm q-mb-xs text-weight-bold text-white contrast"
              >
                MaxicatVit Geflügel
              </div>
              <div class="text-caption text-white text-body1">
                Stubentiger können es sich mit unserem MaxicatVit Geflügel mit
                köstlichem Geflügelfleisch, saftigem Rindfleisch, leckerem Reis
                und unserer einzigartigen Algenmischung, die den Körper in sein
                mineralisches Gleichgewicht bringt, so richtig gut gehen lassen.
              </div>
            </q-card-section>

            <q-card-actions>
              <q-btn
                flat
                color="dark"
                label="weiter lesen"
                class="full-width button"
                @click="goToProduct('2001-2005-2026')"
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
            class="my-card carousel-cards shadow-10 col-3 col-md-3 col-sm-12 col-xs-12 cursor-pointer"
            bordered
            @click="goToProduct('2000-2004-2025')"
          >
            <q-img src="~assets/Futter/Nassfutter/maxivit-schonkost-lamm.png" />
            <div>
              <q-card-section class="bg-dark rounded-borders">
                <div class="row q-gutter-sm">
                  <img
                    class="icons"
                    src="~assets/chips/Lactosefrei.png"
                    alt="Lactosefrei"
                  />
                  <img
                    class="icons"
                    src="~assets/chips/Mineralisches_Gleichgewicht.png"
                    alt="Mineralisches_Gleichgewicht"
                  />
                  <img
                    class="icons"
                    src="~assets/chips/Glutenfrei.png"
                    alt="Glutenfrei"
                  />
                </div>
                <div
                  class="text-h5 q-mt-sm q-mb-xs text-weight-bold text-white contrast"
                >
                  MaxicatVit Rind
                </div>
                <div class="text-caption text-white text-body1">
                  Abenteuerlustige Katzen lieben unser MaxicatVit Rind: viel
                  saftiges Rindfleisch, leckerer Reis und unsere einzigartige
                  Algenmischung, die den Körper in sein mineralisches
                  Gleichgewicht bringt. Damit bleibt Ihre Katze fit und wird
                  optimal ernährt.
                </div>
              </q-card-section>
            </div>

            <q-card-actions>
              <q-btn
                flat
                color="dark"
                label="weiter lesen"
                class="full-width"
                @click="goToProduct('2000-2004-2025')"
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
import { defineComponent } from 'vue';
import { Platform } from 'quasar';
import bubleSeparatorClose from 'components/StyleTools/bubleSeparatorClose';

export default defineComponent({
  name: 'TrockenFutter',
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
      this.$router
        .push({
          name: 'produkt',
          params: {
            id: id,
          },
        })
        .catch();
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
.icons {
  width: 35px;
}
.my-card:hover {
  background-color: rgb(56, 71, 71, 1);
}
q-card:hover {
  background-color: red;
}
.button:hover {
  background-color: white;
}
</style>
