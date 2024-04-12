<template>
  <div class="q-pt-xl">
    <div class="q-pa-md row">
      <div class="col-12 col-md-12 col-sm-12 col-xs-2">
        <div class="q-pb-md row">
          <div class="col-10 text-body1">{{ mobile }}</div>
          <q-btn
            class=""
            :href="mobileNumber"
            round
            icon="phone"
            :title="mobileNumber"
            color="dark"
            size="md"
          ></q-btn>
        </div>
      </div>
      <div class="col-12 col-md-12 col-sm-12 col-xs-2">
        <div class="q-pb-md row">
          <div class="col-10 text-body1">{{ email }}</div>
          <q-btn
            :href="emailContact"
            round
            icon="mail"
            color="dark"
            size="md"
          ></q-btn>
        </div>
      </div>
      <div class="col-12 col-md-12 col-sm-12 col-xs-2">
        <div class="row">
          <div class="col-10 text-body1">
            {{ telegramLink }}
          </div>
          <q-btn
            icon="telegram"
            round
            class="text-white"
            color="dark"
            :href="telegramLink"
            :title="telegramLink"
            size="md"
          ></q-btn>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue';
import {
  mobile,
  mobileNumber,
  email,
  emailContact,
  telegramLink,
} from '../../../appConfig';
export default defineComponent({
  name: 'contactInfo',
  setup() {
    return {
      mobile,
      mobileNumber,
      email,
      emailContact,
      telegramLink,
    };
  },
});
</script>
