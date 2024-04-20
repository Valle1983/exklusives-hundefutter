<template>
  <div class="q-pa-sm q-pt-xl bg-dark">
    <div class="text-h4 text-white justify-center text-center contrast">
      So viel Naturkraft steckt wirklich in Reico
    </div>
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
              v-html="this.$t('food.inhalsStoffe.noGenecticIngredients')"
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
              v-html="this.$t('food.inhalsStoffe.nonePreservatives')"
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
                this.$t('food.inhalsStoffe.complettelyWihoutSlaugterhouseWaste')
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
export default defineComponent({
  data() {
    return {};
  },
});
</script>
