<template>
  <div style="background-color: #87ad25">
    <br /><br /><br />
    <div class="row">
      <div class="q-pa-md col-2"></div>
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
                    name="Vorname"
                    type="text"
                    label="Vorname"
                    aria-label="Vorname"
                    class="q-ma-md"
                    lazy-rules
                    :rules="[
                      (val) =>
                        (val && val.length > 0) ||
                        'Das ist ein Pflichfeld, bitte was eintragen',
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
                    name="Nachname"
                    label="Nachname"
                    aria-label="Nachname"
                    class="q-ma-md"
                    lazy-rules
                    :rules="[
                      (val) =>
                        (val && val.length > 0) ||
                        'Das ist ein Pflichfeld, bitte was eintragen',
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
                name="Straße_Hausnummer"
                label="Straße & Hausnummer"
                aria-label="Straße_Hausnummer"
                class="q-ma-md"
                lazy-rules
                :rules="[
                  (val) =>
                    (val && val.length > 0) ||
                    'Das ist ein Pflichfeld, bitte was eintragen',
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
                name="zweite_Adresse"
                aria-label="zweite_Adresse"
                label="zweite Adresszeile"
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
                    name="plz"
                    label="PLZ"
                    aria-label="PLZ"
                    class="q-ma-md"
                    lazy-rules
                    :rules="[
                      (val) =>
                        (val && val.length > 0) ||
                        'Das ist ein Pflichfeld, bitte was eintragen',
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
                    label="Ort"
                    aria-label="Ort"
                    class="q-ma-md"
                    lazy-rules
                    :rules="[
                      (val) =>
                        (val && val.length > 0) ||
                        'Das ist ein Pflichfeld, bitte was eintragen',
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
                label="Emailadresse"
                aria-label="Emailadresse"
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
                label="Telefeonnummer"
                aria-label="Telefeonnummer"
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
                name="message"
                type="textarea"
                aria-label="Ihre Nachricht"
                label="Ihre Nachricht"
                class="q-ma-md"
                lazy-rules
                :rules="[
                  (val) =>
                    (val && val.length > 0) ||
                    'Das ist ein Pflichfeld, bitte was eintragen',
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
                label="Ja, ich stimme der Datenschutzbestimmung zu."
              />
              <br /><br />
              <p>
                Ich stimme zu, dass meine Angaben aus dem Kontaktformular zur
                Beantwortung meiner Anfrage erhoben und verarbeitet werden. Die
                Daten werden nach abgeschlossener Bearbeitung Ihrer Anfrage
                gelöscht.
              </p>
              <p>
                Hinweis: Sie können Ihre Einwilligung jederzeit für die Zukunft
                per E-Mail an
                <a
                  class="text-dark"
                  href="mailto:kontakt@exklusives-hundefutter.de"
                >
                  kontakt@exklusives-hundefutter.de</a
                >
                widerrufen. Detaillierte Informationen zum Umgang mit
                Nutzerdaten finden Sie in unserer
                <q-btn
                  flat
                  dense
                  no-caps
                  aria-label="datenschutzerklaerung"
                  class="text.dark"
                  to="datenschutzerklaerung"
                  title="Datenschutzerklärung"
                  >Datenschutzerklärung</q-btn
                >
              </p>
            </q-card-section>
            <q-card-actions class="q-pa-md" style="height: 120px">
              <q-btn
                rounded
                :disable="!right && !errorForm"
                color="primary"
                type="submit"
                no-caps
                aria-label="Nachricht abschicken"
                >Nachricht abschicken
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
              Jetzt Reico Kunde werden, schnell und unkompliziert.
            </div>
          </div>
        </div>
        <div class="row q-pa-md">
          <div class="col-11 text-h6">
            Ihr neues Kundenkonto wird von uns umgehend erstellt. Sobald Ihre
            Zugangsdaten angelegt wurden, senden wir Ihnen eine Mail zu Ihrem
            neuen Reico Kundenlogin. Zudem erhalten Sie einen „offenen
            Warenkorb“ mit den Gratisartikeln (Produkthandbuch, Preisliste,
            Messbecher, Dosendeckel) und Sie können Ihre erste Bestellung
            aufgeben bzw. abschließen.
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
import contactInfo from 'components/Kontakt/contactInfo';

console.log('process.env.EMAIL_JS_ID', process.env.EMAIL_JS_ID);
emailjs.init('user_3j7fixvUbKpSj7GrpOzZA');

export default {
  name: 'ContactFormular',
  components: { contactInfo },
  data() {
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
      token: '5267440204:AAF0wDcWBBNFWrPhRpFTj3pYFldgWMbgJ30',
      chatId: '-1001638137967',
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
    };
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
      const fullMessage = `***Ein neues Kundenkonto anlegen*** \nExklusives-Hundefutter.de \n\nVornamen: ${this.firstName} \nNachnamen: ${this.lastName} \n\nAdresse:\nStrasse: ${this.streetNumber}  ${this.addressAdd} \nOrt: ${this.location}\nPLZ: ${this.plz} \nEmail: ${this.email} \nTelefon: ${this.telefon} \n\n\nText:\n ${this.text}`;
      this.$http.post(
        `https://api.telegram.org/bot${this.token}/sendMessage?chat_id=${this.chatId}&text=${fullMessage}`
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
      emailjs
        .send(
          'service_6gu3omr',
          'template_hfq2air',
          templateParams,
          'user_3j7fixvUbKpSj7GrpOzZA'
        )
        .then(
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
};
</script>
