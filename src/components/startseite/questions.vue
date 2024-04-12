<template>
  <div class="bg-grey-2">
    <div class="q-pa-md text-h4 justify-center text-center text-dark">
      <p>Die wichtigsten Fragen rund um das Futter</p>
    </div>
    <div
      class="text-h6 text-weight-bold justify-center text-center text-grey-8 text-weight"
    >
      <p>
        Hier erhalten Sie Antworten auf die am häufigsten gestellten Fragen.
      </p>
    </div>
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

const leftQuestions = [
  {
    id: 1,
    headline: 'Kann ich Reico Produkte auch im Supermarkt kaufen?',
    text: 'Das Reico Futter kann man nicht im Supermarkt kaufen. Einer der wichtigsten Grundsteine Reico\'s-Philosophie ist, die Individualität eines jeden Hundes. Jedes Tier ist einzigartig und hat seine eigenen Vorlieben, die bei der Auswahl des Futters berücksichtigt werden sollten. Wir bieten Ihnen eine individuelle Beratung, um das bestmögliche für Ihren Vierbeiner zusammenzustellen, außerdem können Sie uns zu jeder Zeit gerne über Telegram oder E-Mail anschreiben, wir antworten schnellstmöglich und individuell. Sie sind an keine Geschäftszeiten gebunden und können zu jeder Zeit bequem von zu Hause aus bestellen, dabei stehen wir Ihnen zur Seite."',
  },
  {
    id: 2,
    headline: 'Wie kann ich bei Reico als Neukunde bestellen?',
    text: 'Uns ist der direkte Kundenkontakt sehr wichtig, denn wir wollen für Ihr Tier die bestmögliche Ernährung zusammenstellen. Nachdem Sie das Kontaktformular ausgefüllt und wir gemeinsam das optimale Produkt für Ihren Hund gefunden haben, erhalten Sie eine E-Mail mit dem gewünschten Angebot. Hier können Sie noch einmal Ihre Daten kontrollieren und sofern Ihnen der Warenkorb so gefällt eine Zahlungsart und Versandoption auswählen und eine Bestellung abschließen.',
  },
  {
    id: 3,
    headline: 'Wo kann ich Reico Hundefutter kaufen?',
    text: 'Die Reico Produkte gibt es nur direkt bei Reico. Eine direkte Erstbestellung über das Internet ist nicht möglich! Sie können gerne einen unverbindlichen & kostenlosen Beratungstermin mit uns vereinbaren oder sich auch ohne eine Beratung einen Zugang für den Reico Online-Shop über uns freischalten lassen.<br><br>Danach erhalten Sie eine Kundennummer und die Zugangsdaten für den Reico Onlineshop. Das Team "exclusives Hundefutter" bleibt weiterhin ihr persönlicher Ansprechpartner zu allen Fragen rund um den Hund',
  },
  {
    id: 4,
    headline: 'Wo kann ich mich beraten lassen?',
    text: 'Nutzen Sie hier die Gelegenheit und lassen sie sich von uns mit Herz und großem Fachwissen beraten. Wir freuen uns auf Sie. Füllen sie dazu einfach unser Kontaktformular aus und wir melden uns bei Ihnen zur Terminabsprache.',
  },
];

const rightQuestions = [
  {
    id: 1,
    headline: 'Wie ist der Preis für das Reico Futter?',
    text: 'Da für jeden Hund das Futter individuell zusammengestellt wird variieren auch die Preise. Wie viel Sie für Ihr Reico Futter ausgeben möchten klären wir in einem kostenlosen Beratungsgespräch bei dem wir Alter Aktivität Gesundheitsstatus Grüße Gewicht Rasse Vorlieben des Hundes und Ihre Wünsche erfahren. Dann schauen wir dass wir das so zusammen gestellt bekommen das ist für Ihren Hund optimal und für Sie vom tages bzw monatspreis her passend ist. Die Preise sind überall gleich.',
  },
  {
    id: 2,
    headline: 'Welche Zahlungsmöglichkeiten gibt es bei Reico?',
    text: 'Bei Reico können Sie ganz einfach mit PayPal, Kreditkarte oder Sofortüberweisung bezahlen. Gerne nehmen wir auch Ihr SEPA-Mandat entgegen. Das Lastschriftverfahren gilt als eines der sichersten Zahlsysteme für Endverbraucher. Für Neukunden bei der Erstbestellung bis 120 Euro begrenzt!',
  },
  {
    id: 3,
    headline:
      'Warum funktioniert die Erstbestellung im Reico Onlineshop nicht?',
    text: 'Wir möchten Fehlkäufe verhindern! Alles was Sie bei uns kaufen, soll für Ihren Hund und für Sie genau passend sein. Deshalb gehört eine gute kostenlose Beratung zu unserem Erstbesteller Service. Das spart Sie oftmals Geld und Ihr Hund wird es Ihnen danken.<br><br>Nach dieser Beratung erhalten Sie entweder die gewünschte Bestellung als Warenkorb gemailt oder sie lassen sich nach Anmeldung durch uns die Zugangsdaden geben und bestellen selber. Ab der zweiten Bestellung können Sie dann mit Ihren Zugangsdaten direkt über den Onlineshop bestellen. Für Beratungen stehen wir selbstverständlich weiterhin sehr gerne zur Verfügung.',
  },
  {
    id: 4,
    headline: 'Haben Sie weitere Fragen?',
    text: 'Wir beraten Sie gerne <strong>kostenlos</strong>  zu allen Themen rund um den Hund. Wir stehen Ihnen mit Rat und Tat zur Seite und stellen gemeinsam die optimale Ernährung für Ihren Vierbeiner zusammen.<br><br>Füllen Sie einfach unser Kontaktformular aus und wir melden uns schnellstmöglich bei Ihnen, um einen Beratungstermin zu vereinbaren und ihren Vierbeiner glücklich zu machen.',
  },
];

export default defineComponent({
  data() {
    return {
      leftQuestions,
      rightQuestions,
    };
  },
});
</script>
