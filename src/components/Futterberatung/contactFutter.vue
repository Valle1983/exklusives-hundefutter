<template>
  <div style="background-color: #87ad25">
    <br /><br /><br />
    <div class="row">
      <div class="q-pa-md col-2"></div>
      <div class="q-pa-sm col-4 col-md-4 col-sm-12 col-xs-12">
        <q-form
          ref="form"
          @submit.prevent.stop="onSubmit"
          @reset.prevent.stop="onReset"
          class="q-gutter-md"
        >
          <q-stepper
            v-model="step"
            ref="stepper"
            alternative-labels
            color="primary"
            animated
            class="carousel-cards"
          >
            <q-step
              :name="1"
              title="Fragen zum Hund"
              icon="emoticon-dog"
              :done="step > 1"
            >
              <q-card class="no-border no-shadow">
                <q-card-section>
                  <q-input
                    ref="nameDog"
                    v-model="nameDog"
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
                      <q-icon name="mdi-dog" color="dark" />
                    </template>

                    <template v-slot:append>
                      <q-icon
                        v-if="nameDog !== ''"
                        name="close"
                        @click="nameDog = ''"
                        class="cursor-pointer"
                      />
                    </template>
                  </q-input>
                  <div class="row">
                    <div class="col-5">
                      <q-input
                        ref="ageDog"
                        v-model="ageDog"
                        type="number"
                        min="0"
                        max="20"
                        label="Alter"
                        aria-label="Alter"
                        style="width: 150px"
                        class="q-ma-md"
                        :rules="[(val) => !!val || 'Bitte das Alter eintragen']"
                      >
                        <template v-slot:prepend>
                          <q-icon name="mdi-dog" color="dark" />
                        </template>
                      </q-input>
                    </div>
                    <div class="col-2"></div>
                    <div class="col-5">
                      <q-input
                        ref="weightDog"
                        v-model="weightDog"
                        type="number"
                        label="Gewicht"
                        aria-label="Gewicht"
                        class="q-ma-md float-right"
                        style="width: 150px"
                        lazy-rules
                        :rules="[
                          (val) =>
                            (val && val.length > 0) ||
                            'Das ist ein Pflichfeld, bitte was eintragen',
                        ]"
                      >
                        <template v-slot:prepend>
                          <q-icon name="mdi-dog" color="dark" />
                        </template>
                      </q-input>
                    </div>
                  </div>
                  <div class="q-pb-sm">
                    <div class="row q-pb-md row bg-grey-2 carousel-cards">
                      <div
                        class="col-12 q-ma-md text-body1 text-weight-bolder text-dark"
                      >
                        Wie sieht der Kot aus?
                      </div>
                      <div class="q-pa-xs col-6 text-body1">
                        <q-radio
                          class="text-dark"
                          v-model="festNioptimal"
                          val="fest"
                          label="fest"
                          aria-label="fest"
                        />
                      </div>
                      <div class="q-pa-xs col-6 text-body1">
                        <q-radio
                          class="text-dark"
                          v-model="festNioptimal"
                          val="nicht Optimal"
                          label="nicht optimal"
                          aria-label="nicht optima"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row q-pb-md row bg-grey-2 carousel-cards">
                    <div
                      class="col-12 q-ma-md text-body1 text-weight-bolder text-dark"
                    >
                      Leidet der Hund unter einem/mehreren der folgenden
                      Symptome?
                    </div>
                    <div
                      class="q-pa-xs col-6 col-md-6 col-sm-12 col-xs-12 text-body1 text-dark"
                    >
                      <q-checkbox
                        v-model="juckreiz"
                        label="juckreiz"
                        aria-label="juckreiz"
                      />
                    </div>
                    <div
                      class="q-pa-xs col-6 col-md-6 col-sm-12 text-body1 text-dark justify-end text-end"
                    >
                      <q-checkbox
                        v-model="appetitlosigkeit"
                        label="Appetitlosigkeit"
                        aria-label="Appetitlosigkeit"
                      />
                    </div>
                    <div
                      class="q-pa-xs col-6 col-md-6 col-sm-12 col-xs-12 text-body1 text-dark"
                    >
                      <q-checkbox
                        v-model="analdrüsenprobleme"
                        label="Analdrüsenprobleme"
                        aria-label="Analdrüsenprobleme"
                      />
                    </div>
                    <div
                      class="q-pa-xs col-6 col-md-6 col-sm-12 col-xs-12 text-body1 text-dark"
                    >
                      <q-checkbox
                        v-model="morgendlicheUebelkeit"
                        label="morgendliche Übelkeit"
                        aria-label="morgendliche Übelkeit"
                      />
                    </div>
                    <div
                      class="q-pa-xs col-6 col-md-6 col-sm-12 text-body1 text-dark"
                    >
                      <q-checkbox
                        v-model="allergien"
                        label="Allergien"
                        aria-label="Allergien"
                      />
                    </div>
                    <div
                      class="q-pa-xs col-6 col-md-6 col-sm-12 text-body1 text-dark"
                    >
                      <q-checkbox
                        v-model="pfotenBeißen"
                        label="Pfoten beißen"
                        aria-label="Pfoten beißen"
                      />
                    </div>
                    <div
                      class="q-pa-xs col-6 col-md-6 col-sm-12 text-body1 text-dark"
                    >
                      <q-checkbox
                        v-model="uebermaeßigerGeruch"
                        label="übermäßiger Geruch"
                        aria-label="übermäßiger Geruch"
                      />
                    </div>
                    <div
                      class="q-pa-xs col-6 col-md-6 col-sm-12 text-body1 text-dark"
                    >
                      <q-checkbox
                        v-model="uebermaeßigeHaaren"
                        label="übermäßiges haaren"
                        aria-label="übermäßiges haaren"
                      />
                    </div>
                    <div
                      class="q-pa-xs col-12 col-md-12 col-sm-12 text-body1 text-dark"
                    >
                      <q-checkbox
                        v-model="uebermaeßigesVerfilzen"
                        label="bei Langhaarrassen: übermäßiges verfilzen"
                        aria-label="bei Langhaarrassen: übermäßiges verfilzen"
                      />
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </q-step>

            <q-step
              :name="2"
              title="Kontaktinformationen"
              icon="person"
              :done="step > 2"
            >
              <q-card class="no-border no-shadow">
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
                    type="number"
                    v-model="phone"
                    label="Telefon/Handynummer"
                    aria-label="Telefon/Handynummer"
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
                    label="Nachricht"
                    aria-label="Nachricht"
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
                    type="checkbox"
                    v-model="right"
                    label="Ja, ich stimme der Datenschutzbestimmung zu."
                  />
                  <br /><br />
                  <p>
                    Ich stimme zu, dass meine Angaben aus dem Kontaktformular
                    zur Beantwortung meiner Anfrage erhoben und verarbeitet
                    werden. Die Daten werden nach abgeschlossener Bearbeitung
                    Ihrer Anfrage gelöscht.
                  </p>
                  <p>
                    Hinweis: Sie können Ihre Einwilligung jederzeit für die
                    Zukunft per E-Mail an
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
                      rounded
                      dense
                      no-caps
                      class="text.dark"
                      to="datenschutz"
                      title="Datenschutzerklärung"
                      >Datenschutzerklärung</q-btn
                    >
                  </p>
                </q-card-section>
              </q-card>
            </q-step>
            <template v-slot:navigation>
              <q-stepper-navigation>
                <q-btn
                  type="submit"
                  rounded
                  @click="$refs.stepper.next()"
                  color="primary"
                  :disabled="!right && step > 1"
                  :label="step === 3 ? 'Absenden' : 'Weiter'"
                />
                <q-btn
                  v-if="step > 1"
                  flat
                  rounded
                  color="primary"
                  @click="$refs.stepper.previous()"
                  label="zurück"
                  class="q-ml-sm"
                />
              </q-stepper-navigation>
            </template>
          </q-stepper>
        </q-form>
      </div>
      <div
        class="q-pa-md col-4 col-md-4 col-sm-12 col-xs-12 text-white contrast"
      >
        <p class="text-h4">
          Wir sind für Sie da!<br />
          Für eine Beratung oder Erstbestellung nehmen Sie gerne Kontakt auf!
        </p>
        <div class="row q-pa-md">
          <div class="col-11 text-h6">
            Gerne können Sie Ihre Telefonnummer angeben und wir rufen Sie
            zurück.<br />
            Für eine individuell zugeschnittene Beratung bitten wir Sie um
            Auskunft:
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
import contactInfo from 'components/Kontakt/contactInfo';
import emailjs from '@emailjs/browser';
import {
  telegramToken,
  chatId,
  service_id,
  template_id,
  user_id,
  website,
} from '../../../appConfig';

export default {
  name: 'Benefits',
  components: { contactInfo },
  data() {
    return {
      step: 1,
      right: false,
      name: '',
      email: '',
      phone: '',
      text: '',
      nameDog: '',
      ageDog: '',
      weightDog: '',
      festNioptimal: 'fest',
      juckreiz: false,
      appetitlosigkeit: false,
      analdrüsenprobleme: false,
      morgendlicheUebelkeit: false,
      allergien: false,
      pfotenBeißen: false,
      uebermaeßigerGeruch: false,
      uebermaeßigeHaaren: false,
      uebermaeßigesVerfilzen: false,
      token: telegramToken,
      chatId: chatId,
      regEmail: '',
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
          message: 'Email wurde gesendet',
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
      this.nameDog = null;
      this.ageDog = null;
      this.weightDog = null;

      this.$refs.name.resetValidation();
      this.$refs.email.resetValidation();
      this.$refs.text.resetValidation();
      this.$refs.nameDog.resetValidation();
      this.$refs.ageDog.resetValidation();
      this.$refs.weightDog.resetValidation();
    },
    sendTelegram() {
      const fullMessage = `***Eine Futterberatung***\n ${website} \n\nInfos zum Hund:\nNamen: ${this.nameDog}\nAlter: ${this.ageDog}\nGewicht: ${this.weightDog}\n\nWie sieht der Kot aus? ${this.festNioptimal}\n\nLeidet der Hund unter einem/mehreren der folgenden Symptome?\nJuckreiz: ${this.juckreiz}\nAppetitlosigkeit: ${this.appetitlosigkeit}\nAnaldrüsenprobleme: ${this.analdrüsenprobleme}\nmorgendliche Übelkeit: ${this.morgendlicheUebelkeit}\nAllergien: ${this.allergien}\nPfoten beißen: ${this.pfotenBeißen}\nübermäßiger Geruch: ${this.uebermaeßigerGeruch}\nübermäßiges haaren: ${this.uebermaeßigeHaaren}\nbei Langhaarrassen: übermäßiges verfilzen: ${this.uebermaeßigesVerfilzen}\n\n\nInfos zum Kunden:\nNamen: ${this.name} \nEmailadresse: ${this.email} \nTelefon: ${this.phone} \n\nText:\n${this.text}`;
      this.$http.post(
        `https://api.telegram.org/bot${this.token}/sendMessage?chat_id=${this.chatId}&text=${fullMessage}`
      );
    },
    sendEmail() {
      var templateParams = {
        from_name: this.name,
        reply_to: this.email,
        message:
          'Infos zum Hund ### Namen: ' +
          this.nameDog +
          '   Alter: ' +
          this.ageDog +
          '\nGewicht: ' +
          this.weightDog +
          '\n\nWie sieht der Kot aus? ' +
          this.festNioptimal +
          '\n\nLeidet der Hund unter einem/mehreren der folgenden Symptome?\nJuckreiz:' +
          this.juckreiz +
          '\nAppetitlosigkeit: ' +
          this.appetitlosigkeit +
          '\nAnaldrüsenprobleme: ' +
          this.analdrüsenprobleme +
          '\nmorgendliche Übelkeit: ' +
          this.morgendlicheUebelkeit +
          '\nAllergien: ' +
          this.allergien +
          '\nPfoten beißen: ' +
          this.pfotenBeißen +
          '\nübermäßiger Geruch: ' +
          this.uebermaeßigerGeruch +
          '\nübermäßiges haaren: ' +
          this.uebermaeßigeHaaren +
          '\nbei Langhaarrassen: übermäßiges verfilzen: ' +
          this.uebermaeßigesVerfilzen +
          '\n\n\nInfos zum Kunden:\nNamen: ' +
          this.name +
          '\nEmailadresse: ' +
          this.email +
          '\nTelefon: ' +
          this.phone +
          '\n\nText:\n' +
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
};
</script>
