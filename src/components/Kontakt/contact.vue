<template>
  <div style="background-color: #87ad25">
    <div
      class="q-pa-xl text-h5 justify-center text-center text-white contrast"
      v-html="this.$t('kontakt.contact.contactText')"
    ></div>
    <br /><br /><br />
    <div class="row">
      <di class="q-pa-md col-2" />
      <div class="q-pa-md col-4 col-md-4 col-sm-12 col-xs-12">
        <q-card class="shadow-4 carousel-cards">
          <q-form
            @submit.prevent.stop="onSubmit"
            @reset.prevent.stop="onReset"
            class="q-gutter-md"
          >
            <q-card-section>
              <q-input
                ref="name"
                v-model="name"
                type="text"
                :label="this.$t('kontakt.contact.firstName')"
                :aria-label="this.$t('kontakt.contact.firstName')"
                class="q-ma-md"
                lazy-rules
                :rules="[
                  (val) =>
                    (val && val.length > 0) ||
                    this.$t('kontakt.contact.requiredField'),
                ]"
              >
                <template v-slot:prepend>
                  <q-icon name="person" color="dark" />
                </template>

                <template v-slot:append>
                  <q-icon
                    v-if="name !== ''"
                    name="close"
                    @click="name = ''"
                    class="cursor-pointer"
                  />
                </template>
              </q-input>
              <q-input
                ref="inputEmail"
                v-model="inputEmail"
                type="inputEmail"
                :label="this.$t('kontakt.contact.email')"
                :aria-label="this.$t('kontakt.contact.email')"
                class="q-ma-md"
                :rules="[isValidEmail]"
              >
                <template v-slot:prepend>
                  <q-icon name="email" color="dark" />
                </template>

                <template v-slot:append>
                  <q-icon
                    v-if="inputEmail !== ''"
                    name="close"
                    @click="inputEmail = ''"
                    class="cursor-pointer"
                  />
                </template>
              </q-input>
              <q-input
                type="number"
                :aria-label="this.$t('kontakt.contact.phone')"
                v-model="phone"
                :label="this.$t('kontakt.contact.phone')"
                class="q-ma-md"
              >
                <template v-slot:prepend>
                  <q-icon name="phone" color="dark" />
                </template>

                <template v-slot:append>
                  <q-icon
                    v-if="phone !== ''"
                    name="close"
                    @click="phone = ''"
                    class="cursor-pointer"
                  />
                </template>
              </q-input>
              <q-input
                ref="text"
                v-model="text"
                type="textarea"
                :label="this.$t('kontakt.contact.text')"
                :aria-label="this.$t('kontakt.contact.text')"
                class="q-ma-md"
                lazy-rules
                :rules="[
                  (val) =>
                    (val && val.length > 0) ||
                    this.$t('kontakt.contact.requiredField'),
                ]"
              >
                <template v-slot:prepend>
                  <q-icon name="message" color="dark" />
                </template>

                <template v-slot:append>
                  <q-icon
                    v-if="text !== ''"
                    name="close"
                    @click="text = ''"
                    class="cursor-pointer"
                  />
                </template>
              </q-input>
              <q-checkbox
                v-model="right"
                :label="this.$t('kontakt.contact.checkBox')"
              />
              <br /><br />
              <div>
                <p>
                  Ich erkläre mich einverstanden, dass meine Daten aus dem
                  Anmeldeformular zur Bearbeitung meiner Anfrage gesammelt und
                  verarbeitet werden. Die Informationen werden nach der
                  Bearbeitung meiner Anfrage gelöscht. Beachten Sie: Ihre
                  Zustimmung kann jederzeit per E-Mail an
                </p>
                <p>
                  <a class="text-dark" :href="`${emailContact}`"
                    >kontakt@exklusives-hundefutter.de</a
                  >
                  für die Zukunft widerrufen werden. Weitere Informationen zum
                  Umgang mit Nutzerdaten finden Sie in unserer
                  <a
                    class="text-dark cursor-pointer"
                    :href="`${link}/datenschutz`"
                    ><b>Datenschutzerklärung</b></a
                  >
                </p>
              </div>
            </q-card-section>
            <q-card-actions class="q-pa-md" style="height: 120px">
              <q-btn
                rounded
                color="primary"
                :disabled="!right"
                type="submit"
                no-caps
                :aria-label="this.$t('kontakt.contact.submitButton')"
              >
                {{ this.$t('kontakt.contact.submitButton') }}
              </q-btn>
            </q-card-actions>
          </q-form>
        </q-card>
      </div>
      <div
        class="q-pa-md col-4 col-md-4 col-sm-12 col-xs-12 text-white contrast"
      >
        <p class="text-h4">
          {{ this.$t('kontakt.contact.consultingDateText') }}
        </p>
        <div class="row q-pa-md">
          <div class="col-1 text-h6">
            <q-icon name="check" />
          </div>
          <div class="col-11 text-h6">
            {{ this.$t('kontakt.contact.foodDogConsultingText') }}
          </div>
        </div>
        <div class="row q-pa-md">
          <div class="col-1 text-h6">
            <q-icon name="check" />
          </div>
          <div class="col-11 text-h6">
            {{ this.$t('kontakt.contact.contactEveryDay') }}
          </div>
        </div>
        <div class="row q-pa-md">
          <div class="col-1 text-h6">
            <q-icon name="check" />
          </div>
          <div class="col-11 text-h6">
            {{ this.$t('kontakt.contact.sameConsulterText') }}
          </div>
        </div>
        <div class="row q-pa-md">
          <div class="col-1 text-h6">
            <q-icon name="check" />
          </div>
          <div class="col-11 text-h6">
            {{ this.$t('kontakt.contact.fillContactFormular') }}
          </div>
        </div>
        <contact-info />
      </div>
      <div class="q-pa-md col-2" />
    </div>
    <br /><br /><br />
  </div>
</template>
<script>
import contactInfo from 'components/Kontakt/contactInfo';
import emailjs from '@emailjs/browser';
import { defineComponent } from 'vue';
import {
  email,
  emailContact,
  telegramToken,
  chatId,
  service_id,
  template_id,
  user_id,
  link,
} from '../../../appConfig';
import { axios } from 'src/boot/axios';
export default defineComponent({
  name: 'ContactFormular',
  components: { contactInfo },
  data() {
    return {
      right: false,
      name: '',
      phone: '',
      inputEmail: '',
      text: '',
      email,
      emailContact,
      link,
    };
  },
  methods: {
    isValidEmail() {
      const emailPattern =
        /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      return (
        (emailPattern.test(this.inputEmail) && this.inputEmail.length > 0) ||
        this.$t('kontakt.contact.reqziredEmail')
      );
    },
    onSubmit() {
      this.$refs.name.validate();
      this.$refs.inputEmail.validate();
      this.$refs.text.validate();

      if (
        this.$refs.name.hasError ||
        this.$refs.inputEmail.hasError ||
        this.$refs.text.hasError
      ) {
        this.formHasError = true;
      } else {
        this.sendTelegram();
        this.sendEmail();
        this.$q.notify({
          icon: 'done',
          color: 'primary',
          message: 'Nachricht wurde gesendet',
          position: 'top',
        });
        this.onReset();
      }
    },
    onReset() {
      this.name = null;
      this.inputEmail = null;
      this.text = null;
      this.phone = null;
      this.right = false;

      this.$refs.name.resetValidation();
      this.$refs.inputEmail.resetValidation();
      this.$refs.text.resetValidation();
    },
    sendTelegram() {
      const fullMessage = `***Eine Kundenberatung***\n${link} \n\nNamen: ${this.name} \n\nEmailadresse: ${this.inputEmail} \n\nTelefon: ${this.phone} \n\n\nText:\n${this.text}`;
      axios.post(
        `https://api.telegram.org/bot${telegramToken}/sendMessage?chat_id=${chatId}&text=${fullMessage}`
      );
    },
    sendEmail() {
      var templateParams = {
        from_name: this.name,
        reply_to: this.inputEmail,
        message:
          this.$t('kontakt.contact.firstName') +
          ':' +
          this.name +
          ' ' +
          this.$t('kontakt.contact.email') +
          ':' +
          this.inputEmail +
          this.$t('kontakt.contact.phone') +
          ':' +
          this.phone +
          this.$t('kontakt.contact.message') +
          ':' +
          this.text,
      };
      emailjs.send(service_id, template_id, templateParams, user_id).then(
        function (response) {
          console.log('SUCCESS!', response.status, response.text);
        },
        function (error) {
          console.log('FAILED...', error);
        }
      );
      // Reset form field
      this.name = '';
      this.inputEmail = '';
      this.message = '';
      this.onReset();
    },
  },
});
</script>
