<template>
  <infos />
  <div class="bg-grey-2">
    <div class="q-pt-md-lg q-pt-sm-lg q-pt-xs-xl">
      <div class="row justify-center items-center">
        <div class="col-md-2 col-xs-1 text-center">
          <q-btn
            v-if="showBackButton"
            class="q-pa-sm"
            flat
            round
            color="primary"
            @click="backProdukt()"
            icon="chevron_left"
            size="md"
          ></q-btn>
          <q-btn
            v-if="showGoBackButton"
            class="q-pa-sm"
            flat
            round
            color="primary"
            @click="$router.go(-1)"
            icon="chevron_left"
            size="md"
          ></q-btn>
        </div>
        <div class="col-md-8 col-xs-10">
          <div v-for="produkt in currentProducts" :key="produkt.id">
            <div
              class="row"
              v-if="produkt.id === currentNumber.id"
              style="max-height: 1250px"
            >
              <div class="col-4 col-4 col-md-4 col-sm-12 col-xs-12">
                <q-img :src="produkt.image" />
                <div class="row q-gutter-sm">
                  <img
                    v-if="produkt.lactoseFree"
                    class="icons"
                    src="~assets/chips/Lactosefrei.png"
                    alt="Lactosefrei"
                  />
                  <img
                    v-if="produkt.mineralBalance"
                    class="icons"
                    src="~assets/chips/Mineralisches_Gleichgewicht.png"
                    alt="Mineralisches_Gleichgewicht"
                  />
                  <img
                    v-if="produkt.glutenFree"
                    class="icons"
                    src="~assets/chips/Glutenfrei.png"
                    alt="Glutenfrei"
                  />
                </div>
              </div>
              <div class="q-pa-md col-8 col-md-8 col-sm-12 col-xs-12">
                <div class="row">
                  <div class="col-12">
                    <div class="q-pt-md text-h4">{{ produkt.headline }}</div>
                    <div
                      class="q-pt-md text-h6 text-weight-light"
                      v-html="produkt.description"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-2 col-xs-1 text-center">
          <q-btn
            v-if="showNextButton"
            class="q-pa-sm"
            flat
            round
            color="primary"
            @click="nextProuct()"
            icon="chevron_right"
            size="md"
          ></q-btn>
        </div>
      </div>
      <buble-separator-close-dark />
    </div>
  </div>
</template>

<script>
import { Platform } from 'quasar';
import Infos from 'components/food/infos';
import BubleSeparatorCloseDark from 'components/StyleTools/bubleSeparatorCloseDark';
import {
  productsInfo,
  productsTable,
  DryFood,
  WeetFood,
  Meatzie,
  Herbs,
} from './products';
import { useProductStore } from 'src/stores/example-store';
import { ref } from 'vue';

export default {
  name: 'PageIndex',
  components: {
    BubleSeparatorCloseDark,
    Infos,
  },
  mounted() {
    this.currentNumber = this.productStore.getSelectedProduct;

    this.Meatzie.forEach((m) => {
      if (m.id === this.currentNumber.id) {
        this.currentProducts = this.Meatzie;
      }
    });

    this.WeetFood.forEach((w) => {
      if (w.id === this.currentNumber.id) {
        this.currentProducts = this.WeetFood;
      }
    });

    this.DryFood.forEach((d) => {
      if (d.id === this.currentNumber.id) {
        this.currentProducts = this.DryFood;
      }
    });

    this.Herbs.forEach((h) => {
      if (h.id === this.currentNumber.id) {
        this.currentProducts = this.Herbs;
      }
    });
  },
  data() {
    const productStore = useProductStore();
    return {
      Platform,
      productsInfo,
      productsTable,
      currentNumber: '',
      fromRoute: null,
      tab: 'composition',
      composition: true,
      recommendation: false,
      productStore,
      site: 0,
      showNextButton: ref(true),
      showBackButton: ref(true),
      showGoBackButton: ref(false),
      DryFood,
      Meatzie,
      WeetFood,
      Herbs,
      currentProducts: [],
    };
  },
  methods: {
    nextProuct() {
      if (
        this.currentProducts.findIndex(
          (item) => item.id === this.productStore.getSelectedProduct.id
        ) !== undefined
      ) {
        this.site = this.site = this.currentProducts.findIndex(
          (item) => item.id === this.productStore.getSelectedProduct.id
        );
        if (this.site < this.currentProducts.length - 1) {
          this.showNextButton = true;
          this.site++;
          this.productStore.setSelectedProduct(this.currentProducts[this.site]);
          this.currentNumber = this.productStore.getSelectedProduct;
        }
        if (this.site === this.currentProducts.length - 1) {
          this.showNextButton = false;
        }
      }
    },
    backProdukt() {
      if (
        this.currentProducts.findIndex(
          (item) => item.id === this.productStore.getSelectedProduct.id
        ) !== undefined
      ) {
        this.site = this.site = this.currentProducts.findIndex(
          (item) => item.id === this.productStore.getSelectedProduct.id
        );
        if (this.site < this.currentProducts.length) {
          this.showBackButton = true;
          this.site--;
          this.productStore.setSelectedProduct(this.currentProducts[this.site]);
          this.currentNumber = this.productStore.getSelectedProduct;
        }
        if (this.site === 0) {
          this.showBackButton = false;
          this.showGoBackButton = true;
        }
      }
    },
  },
};
</script>

<style type="scss">
q-btn-active {
  background-color: red;
}
</style>
