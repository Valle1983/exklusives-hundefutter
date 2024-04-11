<template>
  <div style="background-color: #87ad25">
    <div class="q-pa-xl text-h5 justify-center text-center text-white contrast">
      <p>Sie können uns für eine kostenlose Beratung jetzt direkt anrufen,</p>
      <p>
        oder auch in der Telegram Gruppe beitreten um Ihre Fragen zu stellen:
      </p>
    </div>
    <br /><br /><br />
    <div class="row">
      <div class="q-pa-md col-2"></div>
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
                label="Namen"
                aria-label="Namen"
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
                    v-if="name !== ''"
                    name="close"
                    @click="name = ''"
                    class="cursor-pointer"
                  />
                </template>
              </q-input>
              <q-input
                ref="email"
                v-model="email"
                type="email"
                label="Emailadresse"
                aria-label="Emailadresse"
                class="q-ma-md"
                :rules="[
                  (val) => !!val || 'Bitte eine Emailadresse eingeben',
                  isValidEmail(),
                ]"
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
                type="number"
                aria-label="Telefonnummer"
                v-model="phone"
                label="Telefonnummer"
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
                label="Ihre Nachricht"
                aria-label="Ihre Nachricht"
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
                <a class="text-dark" :href="emailContact">
                  kontakt@exklusives-hundefutter.de</a
                >
                widerrufen. Detaillierte Informationen zum Umgang mit
                Nutzerdaten finden Sie in unserer
                <q-btn
                  rounded
                  flat
                  dense
                  no-caps
                  class="text.dark"
                  to="datenschutz"
                  title="Datenschutzerklärung"
                  aria-label="Datenschutzerklärung"
                >
                  Datenschutzerklärung
                </q-btn>
              </p>
            </q-card-section>
            <q-card-actions class="q-pa-md" style="height: 120px">
              <q-btn
                rounded
                color="primary"
                :disabled="!right"
                type="submit"
                no-caps
                aria-label="Nachricht abschicken"
              >
                Nachricht abschicken
              </q-btn>
            </q-card-actions>
          </q-form>
        </q-card>
      </div>
      <div
        class="q-pa-md col-4 col-md-4 col-sm-12 col-xs-12 text-white contrast"
      >
        <p class="text-h4">
          Vereinbaren Sie einen kostenfreien Beratungstermin
        </p>
        <div class="row q-pa-md">
          <div class="col-1 text-h6">
            <q-icon name="check"></q-icon>
          </div>
          <div class="col-11 text-h6">
            wir beraten Sie gerne zur Hundeernährung kostenlos, dabei steht
            Ihnen ein fachlich geschulter Reico Vertriebspartner zur Seite
          </div>
        </div>
        <div class="row q-pa-md">
          <div class="col-1 text-h6">
            <q-icon name="check"></q-icon>
          </div>
          <div class="col-11 text-h6">
            Sie haben die Möglichkeit uns jeder Zeit zu Kontaktieren, auch an
            Wochenenden oder Feiertagen
          </div>
        </div>
        <div class="row q-pa-md">
          <div class="col-1 text-h6">
            <q-icon name="check"></q-icon>
          </div>
          <div class="col-11 text-h6">
            dabei werden Sie immer den gleichen Ansprechpartnern zugeteilt
          </div>
        </div>
        <div class="row q-pa-md">
          <div class="col-1 text-h6">
            <q-icon name="check"></q-icon>
          </div>
          <div class="col-11 text-h6">
            Wünschen Sie ein Gespräch? Dann füllen Sie einfach für ein
            unverbindliches Gespräch das Kontaktformular aus
          </div>
        </div>
        <contact-info />
      </div>
      <div class="q-pa-md col-2"></div>
    </div>
    <br /><br /><br />
  </div>
</template>
<script>
import contactInfo from 'components/contakt/contactInfo';
import emailjs from '@emailjs/browser';
import { emailContact, chatId, telegramToken } from '../../../appConfig';
export default {
  name: 'BenefitsComp',
  components: { contactInfo },
  data() {
    return {
      right: false,
      name: '',
      phone: '',
      email: '',
      text: '',
      token: telegramToken,
      chatId: chatId,
      regEmail: '',
      emailContact,
      telegramToken,
    };
  },
  methods: {
    isValidEmail() {
      const emailPattern =
        /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      return emailPattern.test(this.regEmail) || 'Invalid email';
    },
    onSubmit() {
      this.$refs.name.validate();
      this.$refs.email.validate();
      this.$refs.text.validate();

      if (
        this.$refs.name.hasError ||
        this.$refs.email.hasError ||
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
      this.email = null;
      this.text = null;
      this.phone = null;
      this.right = false;

      this.$refs.name.resetValidation();
      this.$refs.email.resetValidation();
      this.$refs.text.resetValidation();
    },
    sendTelegram() {
      const fullMessage = `***Eine Kundenberatung***\nExklusives-Hundefutter.de \n\nNamen: ${this.name} \n\nEmailadresse: ${this.email} \n\nTelefon: ${this.phone} \n\n\nText:\n${this.text}`;
      this.$http.post(
        `https://api.telegram.org/bot${this.token}/sendMessage?chat_id=${this.chatId}&text=${fullMessage}`
      );
    },
    sendEmail() {
      var templateParams = {
        from_name: this.name,
        reply_to: this.email,
        message:
          'Name: ' +
          this.name +
          ' ' +
          ' Emailadresse: ' +
          this.email +
          '  Telefon: ' +
          this.phone +
          ' Nachricht: ' +
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
