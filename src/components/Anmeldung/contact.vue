<template>
  <div style="background-color: #87ad25">
    <br /><br /><br />
    <div class="row">
      <div class="q-pa-md col-2" />
      <div class="q-pa-md col-4 col-md-4 col-sm-12 col-xs-12">
        <q-card class="shadow-4 carousel-cards">
          <q-form
            ref="form"
            @submit.prevent.stop="onSubmit"
            @reset.prevent.stop="onReset"
            class="q-gutter-md"
          >
            <q-card-section>
              <div class="row">
                <div class="col-6">
                  <q-input
                    ref="firstName"
                    v-model="firstName"
                    name="firstName"
                    type="text"
                    :label="this.$t('anmeldung.contact.firstName')"
                    :aria-label="this.$t('anmeldung.contact.firstName')"
                    class="q-ma-md"
                    lazy-rules
                    :rules="[
                      (val) =>
                        (val && val.length > 0) ||
                        this.$t('this.anmeldung.contact.requiredField'),
                    ]"
                  >
                    <template v-slot:prepend>
                      <q-icon name="person" color="dark" />
                    </template>

                    <template v-slot:append>
                      <q-icon
                        v-if="firstName !== ''"
                        name="close"
                        @click="firstName = ''"
                        class="cursor-pointer"
                      />
                    </template>
                  </q-input>
                </div>
                <div class="col-6">
                  <q-input
                    ref="lastName"
                    v-model="lastName"
                    type="text"
                    name="lastName"
                    :label="this.$t('anmeldung.contact.lastName')"
                    :aria-label="this.$t('anmeldung.contact.lastName')"
                    class="q-ma-md"
                    lazy-rules
                    :rules="[
                      (val) =>
                        (val && val.length > 0) ||
                        this.$t('anmeldung.contact.requiredField'),
                    ]"
                  >
                    <template v-slot:prepend>
                      <q-icon name="person" color="dark" />
                    </template>

                    <template v-slot:append>
                      <q-icon
                        v-if="lastName !== ''"
                        name="close"
                        @click="lastName = ''"
                        class="cursor-pointer"
                      />
                    </template>
                  </q-input>
                </div>
              </div>
              <q-input
                ref="streetNumber"
                v-model="streetNumber"
                type="text"
                name="text"
                :label="this.$t('anmeldung.contact.streetNumber')"
                :aria-label="this.$t('anmeldung.contact.streetNumber')"
                class="q-ma-md"
                lazy-rules
                :rules="[
                  (val) =>
                    (val && val.length > 0) ||
                    this.$t('anmeldung.contact.requiredField'),
                ]"
              >
                <template v-slot:prepend>
                  <q-icon name="house" color="dark" />
                </template>

                <template v-slot:append>
                  <q-icon
                    v-if="streetNumber !== ''"
                    name="close"
                    @click="streetNumber = ''"
                    class="cursor-pointer"
                  />
                </template>
              </q-input>
              <q-input
                ref="addressAdd"
                v-model="addressAdd"
                type="text"
                name="addressAdd"
                :aria-label="this.$t('anmeldung.contact.streetNumber')"
                :label="this.$t('anmeldung.contact.streetNumber')"
                class="q-ma-md"
              >
                <template v-slot:prepend>
                  <q-icon name="house" color="dark" />
                </template>

                <template v-slot:append>
                  <q-icon
                    v-if="addressAdd !== ''"
                    name="close"
                    @click="addressAdd = ''"
                    class="cursor-pointer"
                  />
                </template>
              </q-input>
              <div class="row">
                <div class="col-6">
                  <q-input
                    ref="plz"
                    v-model="plz"
                    type="text"
                    name="text"
                    :label="this.$t('anmeldung.contact.plz')"
                    :aria-label="this.$t('anmeldung.contact.plz')"
                    class="q-ma-md"
                    lazy-rules
                    :rules="[
                      (val) =>
                        (val && val.length > 0) ||
                        this.$t('anmeldung.contact.requiredField'),
                    ]"
                  >
                    <template v-slot:prepend>
                      <q-icon name="mdi-city" color="dark" />
                    </template>

                    <template v-slot:append>
                      <q-icon
                        v-if="plz !== ''"
                        name="close"
                        @click="plz = ''"
                        class="cursor-pointer"
                      />
                    </template>
                  </q-input>
                </div>
                <div class="col-6">
                  <q-input
                    ref="location"
                    v-model="location"
                    name="location"
                    type="text"
                    :label="this.$t('anmeldung.contact.requiredField')"
                    :aria-label="this.$t('anmeldung.contact.location')"
                    class="q-ma-md"
                    lazy-rules
                    :rules="[
                      (val) =>
                        (val && val.length > 0) ||
                        this.$t('anmeldung.contact.requiredField'),
                    ]"
                  >
                    <template v-slot:prepend>
                      <q-icon name="mdi-city-variant" color="dark" />
                    </template>

                    <template v-slot:append>
                      <q-icon
                        v-if="location !== ''"
                        name="close"
                        @click="location = ''"
                        class="cursor-pointer"
                      />
                    </template>
                  </q-input>
                </div>
              </div>
              <q-input
                ref="email"
                v-model="email"
                type="email"
                name="email"
                :label="this.$t('anmeldung.contact.email')"
                :aria-label="this.$t('anmeldung.contact.email')"
                class="q-ma-md"
                :rules="[isValidEmail()]"
              >
                <template v-slot:prepend>
                  <q-icon name="email" color="dark" />
                </template>

                <template v-slot:append>
                  <q-icon
                    v-if="email !== ''"
                    name="close"
                    @click="email = ''"
                    class="cursor-pointer"
                  />
                </template>
              </q-input>
              <q-input
                ref="telefon"
                v-model="telefon"
                type="number"
                name="telefon"
                :label="this.$t('anmeldung.contact.phone')"
                :aria-label="this.$t('anmeldung.contact.phone')"
                class="q-ma-md"
              >
                <template v-slot:prepend>
                  <q-icon name="phone" color="dark" />
                </template>

                <template v-slot:append>
                  <q-icon
                    v-if="telefon !== ''"
                    name="close"
                    @click="telefon = ''"
                    class="cursor-pointer"
                  />
                </template>
              </q-input>
              <q-input
                ref="text"
                v-model="text"
                name="text"
                type="textarea"
                :aria-label="this.$t('anmeldung.contact.text')"
                :label="this.$t('anmeldung.contact.text')"
                class="q-ma-md"
                lazy-rules
                :rules="[
                  (val) =>
                    (val && val.length > 0) ||
                    this.$t('anmeldung.contact.requiredField'),
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
                :label="this.$t('anmeldung.contact.checkBox')"
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
                    >kontakt@exklusives-katzenfutter.de</a
                  >
                  für die Zukunft widerrufen werden. Weitere Informationen zum
                  Umgang mit Nutzerdaten finden Sie in unserer
                  <a class="text-dark" :href="`${link}/datenschutz`"
                    ><b>Datenschutzerklärung</b></a
                  >
                </p>
              </div>
            </q-card-section>
            <q-card-actions class="q-pa-md" style="height: 120px">
              <q-btn
                rounded
                :disable="!right && !errorForm"
                color="primary"
                type="submit"
                no-caps
                :aria-label="this.$t('anmeldung.contact.submitButton')"
                >{{ this.$t('anmeldung.contact.submitButton') }}
              </q-btn>
            </q-card-actions>
          </q-form>
        </q-card>
      </div>
      <div
        class="q-pa-md col-4 col-md-4 col-sm-12 col-xs-12 text-white contrast"
      >
        <div class="text-h4">
          Neues Kundenkonto anlegen
          <div class="row q-pa-md">
            <div class="col-11 text-h6">
              {{ this.$t('anmeldung.contact.newReicoAccount') }}
            </div>
          </div>
        </div>
        <div class="row q-pa-md">
          <div class="col-11 text-h6">
            {{ this.$t('anmeldung.contact.newReicoAccountText') }}
          </div>
        </div>
        <contact-info />
      </div>
      <div class="q-pa-md col-2"></div>
    </div>
  </div>
</template>
<script>
import emailjs from '@emailjs/browser';
import {
  emailContact,
  telegramToken,
  chatId,
  service_id,
  template_id,
  user_id,
  website,
  link,
} from '../../../appConfig';
import { defineComponent } from 'vue';
import { axios } from 'src/boot/axios';
import contactInfo from '../Kontakt/contactInfo.vue';
import { useMeta } from 'quasar';
export default defineComponent({
  name: 'ContactFormular',
  components: { contactInfo },
  data() {
    const logo = require('assets/Anmeldung/imageBackground.jpg');
    const metaData = {
      // sets document title
      title: this.$t('anmeldung.contact.newReicoAccount'),
      // optional; sets final title as "Index Page - My Website", useful for multiple level meta
      titleTemplate: (title) => `${title}`,

      // meta tags
      meta: {
        description: {
          name: this.$t('anmeldung.contact.newReicoAccount'),
          content: this.$t('anmeldung.contact.newReicoAccountText'),
        },
        keywords: {
          name: this.$t('anmeldung.contact.newReicoAccountText'),
          content: this.$t('anmeldung.contact.newReicoAccount'),
        },
        ogTitle: {
          property: 'og:title',
          content: this.$t('anmeldung.contact.newReicoAccount'),
        },
        ogDescription: {
          property: 'og:description',
          content: this.desctiptionContent,
        },
        ogType: { property: 'og:type', content: 'website' },
        ogImage: { property: 'og:image', content: logo },
        ogUrl: { property: 'og:url', content: window.location.href },
        equiv: {
          'http-equiv': 'Content-Type',
          content: 'text/html; charset=UTF-8',
        },
      },

      // CSS tags
      link: {
        material: {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
        },
      },

      // JS tags
      script: {
        ldJson: {
          type: 'application/ld+json',
          innerHTML: '{ "@context": "http://schema.org" }',
        },
      },

      // <html> attributes
      htmlAttr: {
        'xmlns:cc': 'http://creativecommons.org/ns#', // generates <html xmlns:cc="http://creativecommons.org/ns#">,
        empty: undefined, // generates <html empty>
      },

      // <body> attributes
      bodyAttr: {
        'action-scope': 'xyz', // generates <body action-scope="xyz">
        empty: undefined, // generates <body empty>
      },

      // <noscript> tags
      noscript: {
        default: 'This is content for browsers with no JS (or disabled JS)',
      },
    };
    useMeta(metaData);
    return {
      right: false,
      firstName: '',
      lastName: '',
      streetNumber: '',
      addressAdd: '',
      plz: '',
      location: '',
      email: '',
      telefon: '',
      text: '',
      errorForm: this.$refs.form !== undefined && this.$refs.form.hasError,
      isRight:
        (this.$refs.firstName !== undefined && this.$refs.firstName.hasError) ||
        (this.$refs.lastName !== undefined && this.$refs.lastName.hasError) ||
        (this.$refs.streetNumber !== undefined &&
          this.$refs.streetNumber.hasError) ||
        (this.$refs.plz !== undefined && this.$refs.plz.hasError) ||
        (this.$refs.location !== undefined && this.$refs.location.hasError) ||
        (this.$refs.email !== undefined && this.$refs.email.hasError) ||
        (this.$refs.text !== undefined && this.$refs.text.hasError),
      service_id,
      template_id,
      user_id,
      website,
      emailContact,
      link,
    };
    emailContact;
  },
  methods: {
    isValidEmail() {
      const emailPattern =
        /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      return emailPattern.test(this.regEmail) || 'Invalid email';
    },
    onSubmit() {
      this.$refs.firstName.validate();
      this.$refs.lastName.validate();
      this.$refs.streetNumber.validate();
      this.$refs.addressAdd.validate();
      this.$refs.plz.validate();
      this.$refs.location.validate();
      this.$refs.email.validate();
      this.$refs.text.validate();

      if (
        this.$refs.firstName.hasError ||
        this.$refs.lastName.hasError ||
        this.$refs.streetNumber.hasError ||
        this.$refs.plz.hasError ||
        this.$refs.location.hasError ||
        this.$refs.email.hasError ||
        this.$refs.text.hasError
      ) {
        this.formHasError = true;
        this.right = false;
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
      this.firstName = null;
      this.lastName = null;
      this.streetNumber = null;
      this.addressAdd = null;
      this.plz = null;
      this.location = null;
      this.email = null;
      this.telefon = null;
      this.text = null;

      this.$refs.firstName.resetValidation();
      this.$refs.lastName.resetValidation();
      this.$refs.streetNumber.resetValidation();
      this.$refs.addressAdd.resetValidation();
      this.$refs.plz.resetValidation();
      this.$refs.location.resetValidation();
      this.$refs.email.resetValidation();
      this.$refs.text.resetValidation();
    },
    sendTelegram() {
      const fullMessage = `***Ein neues Kundenkonto anlegen*** \n${website}\n\nVornamen: ${this.firstName} \nNachnamen: ${this.lastName} \n\nAdresse:\nStrasse: ${this.streetNumber}  ${this.addressAdd} \nOrt: ${this.location}\nPLZ: ${this.plz} \nEmail: ${this.email} \nTelefon: ${this.telefon} \n\n\nText:\n ${this.text}`;
      axios.post(
        `https://api.telegram.org/bot${telegramToken}/sendMessage?chat_id=${chatId}&text=${fullMessage}`
      );
    },
    sendEmail() {
      var templateParams = {
        from_name: this.firstName + this.lastName,
        reply_to: this.email,
        message:
          this.firstName +
          ' ' +
          this.lastName +
          '\n' +
          'Adresse:' +
          this.streetNumber +
          ' ' +
          this.addressAdd +
          ' PLZ:' +
          this.plz +
          ' Stadt:' +
          this.location +
          '  Nachricht' +
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
      this.email = '';
      this.message = '';
    },
  },
});
</script>
