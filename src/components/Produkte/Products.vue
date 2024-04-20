<template>
  <div class="bg-grey-2">
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      :autoplay="autoplay"
      control-color="primary"
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
            v-for="(prod, index) in products"
            :key="prod.id"
            v-show="index < 3"
            class="my-card carousel-cards shadow-10 col-3 col-md-3 col-sm-12 col-xs-12 cursor-pointer"
            bordered
            @click="goToProduct(prod)"
          >
            <q-img :src="prod.image" class="img" />
            <div>
              <q-card-section class="bg-primary rounded-borders">
                <div class="row q-gutter-sm">
                  <img
                    v-if="prod.lactoseFree"
                    class="icons"
                    src="~assets/chips/Lactosefrei.png"
                    alt="Lactosefrei"
                  />
                  <img
                    v-if="prod.mineralBalance"
                    class="icons"
                    src="~assets/chips/Mineralisches_Gleichgewicht.png"
                    alt="Mineralisches_Gleichgewicht"
                  />
                  <img
                    v-if="prod.glutenFree"
                    class="icons"
                    src="~assets/chips/Glutenfrei.png"
                    alt="Glutenfrei"
                  />
                </div>
                <div
                  class="text-h5 q-mt-sm q-mb-xs text-weight-bold text-white contrast"
                >
                  {{ prod.headline }}
                </div>
                <div class="text-caption text-white text-body1">
                  {{ prod.text }}
                </div>
              </q-card-section>
            </div>

            <q-card-actions>
              <q-btn
                flat
                color="dark"
                label="weiter lesen"
                class="full-width button"
                @click="goToProduct(prod)"
              />
            </q-card-actions>
          </q-card>
        </div>
      </q-carousel-slide>
      <q-carousel-slide
        v-if="products.length > 3"
        :name="2"
        class="column no-wrap"
      >
        <div
          :class="
            isMobile
              ? 'q-pa-xs fit justify-center items-center q-gutter-md q-col-gutter'
              : 'row q-pa-xl fit justify-center items-center q-gutter-md q-col-gutter no-wrap'
          "
        >
          <q-card
            v-for="(prod, index) in products"
            :key="prod.id"
            v-show="index >= 3 && index < 6"
            class="my-card carousel-cards shadow-10 col-3 col-md-3 col-sm-12 col-xs-12 cursor-pointer"
            bordered
            @click="goToProduct(prod)"
          >
            <q-img :src="prod.image" class="img" />
            <div>
              <q-card-section class="bg-primary rounded-borders">
                <div class="row q-gutter-sm">
                  <img
                    v-if="prod.lactoseFree"
                    class="icons"
                    src="~assets/chips/Lactosefrei.png"
                    alt="Lactosefrei"
                  />
                  <img
                    v-if="prod.mineralBalance"
                    class="icons"
                    src="~assets/chips/Mineralisches_Gleichgewicht.png"
                    alt="Mineralisches_Gleichgewicht"
                  />
                  <img
                    v-if="prod.glutenFree"
                    class="icons"
                    src="~assets/chips/Glutenfrei.png"
                    alt="Glutenfrei"
                  />
                </div>
                <div
                  class="text-h5 q-mt-sm q-mb-xs text-weight-bold text-white contrast"
                >
                  {{ prod.headline }}
                </div>
                <div class="text-caption text-white text-body1">
                  {{ prod.text }}
                </div>
              </q-card-section>
            </div>

            <q-card-actions>
              <q-btn
                flat
                color="dark"
                label="weiter lesen"
                class="full-width button"
                @click="goToProduct(prod)"
              />
            </q-card-actions>
          </q-card>
        </div>
      </q-carousel-slide>
      <q-carousel-slide
        v-if="products.length > 6"
        :name="3"
        class="column no-wrap"
      >
        <div
          :class="
            isMobile
              ? 'q-pa-xs fit justify-center items-center q-gutter-md q-col-gutter'
              : 'row q-pa-xl fit justify-center items-center q-gutter-md q-col-gutter no-wrap'
          "
        >
          <q-card
            v-for="(prod, index) in products"
            :key="prod.id"
            v-show="index >= 6 && index < 9"
            class="my-card carousel-cards shadow-10 col-3 col-md-3 col-sm-12 col-xs-12 cursor-pointer"
            bordered
            @click="goToProduct(prod)"
          >
            <q-img :src="prod.image" class="img" />
            <div>
              <q-card-section class="bg-primary rounded-borders">
                <div class="row q-gutter-sm">
                  <img
                    v-if="prod.lactoseFree"
                    class="icons"
                    src="~assets/chips/Lactosefrei.png"
                    alt="Lactosefrei"
                  />
                  <img
                    v-if="prod.mineralBalance"
                    class="icons"
                    src="~assets/chips/Mineralisches_Gleichgewicht.png"
                    alt="Mineralisches_Gleichgewicht"
                  />
                  <img
                    v-if="prod.glutenFree"
                    class="icons"
                    src="~assets/chips/Glutenfrei.png"
                    alt="Glutenfrei"
                  />
                </div>
                <div
                  class="text-h5 q-mt-sm q-mb-xs text-weight-bold text-white contrast"
                >
                  {{ prod.headline }}
                </div>
                <div class="text-caption text-white text-body1">
                  {{ prod.text }}
                </div>
              </q-card-section>
            </div>

            <q-card-actions>
              <q-btn
                flat
                color="dark"
                label="weiter lesen"
                class="full-width button"
                @click="goToProduct(prod)"
              />
            </q-card-actions>
          </q-card>
        </div>
      </q-carousel-slide>
      <q-carousel-slide
        v-if="products.length > 9"
        :name="4"
        class="column no-wrap"
      >
        <div
          :class="
            isMobile
              ? 'q-pa-xs fit justify-center items-center q-gutter-md q-col-gutter'
              : 'row q-pa-xl fit justify-center items-center q-gutter-md q-col-gutter no-wrap'
          "
        >
          <q-card
            v-for="(prod, index) in products"
            :key="prod.id"
            v-show="index >= 9"
            class="my-card carousel-cards shadow-10 col-3 col-md-3 col-sm-12 col-xs-12 cursor-pointer"
            bordered
            @click="goToProduct(prod)"
          >
            <q-img :src="prod.image" class="img" />
            <div>
              <q-card-section class="bg-primary rounded-borders">
                <div class="row q-gutter-sm">
                  <img
                    v-if="prod.lactoseFree"
                    class="icons"
                    src="~assets/chips/Lactosefrei.png"
                    alt="Lactosefrei"
                  />
                  <img
                    v-if="prod.mineralBalance"
                    class="icons"
                    src="~assets/chips/Mineralisches_Gleichgewicht.png"
                    alt="Mineralisches_Gleichgewicht"
                  />
                  <img
                    v-if="prod.glutenFree"
                    class="icons"
                    src="~assets/chips/Glutenfrei.png"
                    alt="Glutenfrei"
                  />
                </div>
                <div
                  class="text-h5 q-mt-sm q-mb-xs text-weight-bold text-white contrast"
                >
                  {{ prod.headline }}
                </div>
                <div class="text-caption text-white text-body1">
                  {{ prod.text }}
                </div>
              </q-card-section>
            </div>

            <q-card-actions>
              <q-btn
                flat
                color="dark"
                label="weiter lesen"
                class="full-width button"
                @click="goToProduct(prod)"
              />
            </q-card-actions>
          </q-card>
        </div>
      </q-carousel-slide>
    </q-carousel>
    <buble-separator-close-dark />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { Platform } from 'quasar';
import bubleSeparatorCloseDark from 'components/StyleTools/bubleSeparatorCloseDark';
import { useProductStore } from 'src/stores/example-store';

export default defineComponent({
  name: 'Products',
  props: {
    products: {
      type: Object,
    },
  },
  components: {
    bubleSeparatorCloseDark,
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
    goToProduct(product) {
      this.productStore.setSelectedProduct(product);
      this.$router
        .push({
          name: 'produkt',
          params: {
            type: this.productStore.getSelectedProduct.type,
          },
        })
        .catch();
    },
  },
  data() {
    const productStore = useProductStore();
    return {
      slide: 1,
      isMobile: false,
      autoplay: true,
      productStore,
    };
  },
});
</script>

<style type="scss">
.icons {
  width: 35px;
}
.img {
  max-height: 340px;
}
.my-card:hover {
  background-color: rgb(135, 173, 37, 1);
}
q-card:hover {
  background-color: red;
}
.button:hover {
  background-color: white;
}
</style>
