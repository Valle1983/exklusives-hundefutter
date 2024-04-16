<template>
  <div class="bg-grey-2">
    <div
      class="q-pa-md text-h4 justify-center text-center text-dark"
      v-html="this.$t('startseite.questions.title')"
    />
    <div
      class="text-h6 text-weight-bold justify-center text-center text-grey-8 text-weight"
      v-html="this.$t('startseite.questions.subText')"
    />
    <div class="row">
      <div class="col-1"></div>
      <div class="q-pa-sm col-5 col-md-5 col-sm-12 col-xs-12">
        <q-list
          v-for="questions in leftQuestions"
          :key="questions.id"
          class="q-pt-xs"
        >
          <q-expansion-item
            :id="questions.id"
            class="bg-white text-body1 text-weight-bold carousel-cards"
            group="somegroup1"
            :label="questions.headline"
            header-class="text-dark"
            round
          >
            <q-card class="bg-transparent">
              <q-card-section class="text-weight-medium text-grey-8">
                <p v-html="questions.text" />
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-list>
      </div>
      <div class="q-pa-sm col-5 col-md-5 col-sm-12 col-xs-12">
        <q-list
          v-for="questions in rightQuestions"
          :key="questions.id"
          class="q-pt-xs"
        >
          <q-expansion-item
            class="bg-white text-body1 text-weight-bold carousel-cards"
            group="somegroup2"
            :label="questions.headline"
            header-class="text-dark"
          >
            <q-card>
              <q-card-section class="text-weight-medium text-grey-8">
                <p v-html="questions.text" />
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-list>
      </div>
    </div>
    <div class="col-1"></div>
  </div>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    const leftQuestions = [
      {
        id: 1,
        headline: this.$t('startseite.questions.left.question1.headline'),
        text: this.$t('startseite.questions.left.question1.text'),
      },
      {
        id: 2,
        headline: this.$t('startseite.questions.left.question2.headline'),
        text: this.$t('startseite.questions.left.question2.text'),
      },
      {
        id: 3,
        headline: this.$t('startseite.questions.left.question3.headline'),
        text: this.$t('startseite.questions.left.question3.text'),
      },
      {
        id: 4,
        headline: this.$t('startseite.questions.left.question4.headline'),
        text: this.$t('startseite.questions.left.question4.text'),
      },
    ];

    const rightQuestions = [
      {
        id: 1,
        headline: this.$t('startseite.questions.rigth.question1.headline'),
        text: this.$t('startseite.questions.rigth.question1.text'),
      },
      {
        id: 2,
        headline: this.$t('startseite.questions.rigth.question2.headline'),
        text: this.$t('startseite.questions.rigth.question2.text'),
      },
      {
        id: 3,
        headline: this.$t('startseite.questions.rigth.question3.headline'),
        text: this.$t('startseite.questions.rigth.question3.text'),
      },
      {
        id: 4,
        headline: this.$t('startseite.questions.rigth.question4.headline'),
        text: this.$t('startseite.questions.rigth.question4.text'),
      },
    ];
    return {
      leftQuestions,
      rightQuestions,
    };
  },
});
</script>
