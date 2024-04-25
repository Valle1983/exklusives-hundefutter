<template>
  <div class="bg-grey-2">
    <div class="row q-pa-md">
      <div class="col-2">
      </div>
      <div class="col-8 col-md-8 col-sm-12 col-xs-12">
        <p class="text-h4 text-dark">Das ist im Reico Hundefutter enthalten.</p>
      </div>
      <div class="col-2">
      </div>
  </div>
    <div class="row q-pa-md justify-center">
      <div class="col-1">
      </div>
      <div class="q-pa-md col-3 col-md-3 col-sm-12 col-xs-12">
        <p class="text-h5 text-center text-grey-8 text-weight">Naturkraft</p>
        <div class="row q-pa-md">
          <div class="col-1 text-body1">
            <q-icon name="check" color="primary" class="text-weight-bolder contrast"></q-icon>
          </div>
          <div class="col-11 text-body1">
            Frei von Zusatzstoffen, Frei von Bindemitten, Frei von Farbstoffen
          </div>
        </div>
        <div class="row q-pa-md">
          <div class="col-1 text-body1">
            <q-icon name="check" color="primary" class="text-weight-bolder contrast"></q-icon>
          </div>
          <div class="col-11 text-body1">
            mit viel Fleisch.
            Natürliche Zusammensetzung nach dem Vorbild der Natur
          </div>
        </div>
        <div class="row q-pa-md">
          <div class="col-1 text-body1">
            <q-icon name="check" color="primary" class="text-weight-bolder contrast"></q-icon>
          </div>
          <div class="col-11 text-body1">
            kompetente Beratung durch besonders tierliebe Menschen
          </div>
        </div>
      </div>
      <div class="q-pa-md col-3 col-md-3 col-sm-12 col-xs-12">
        <p class="text-h5 text-center text-grey-8 text-weight">Sensibilität</p>
        <div class="row q-pa-md">
          <div class="col-1 text-body1">
            <q-icon name="check" color="primary" class="text-weight-bolder contrast"></q-icon>
          </div>
          <div class="col-11 text-body1">
            bestens für Hunde mit Allergien, Krankheiten, Unverträglichkeiten oder empfindlichem Magen
          </div>
        </div>
        <div class="row q-pa-md">
          <div class="col-1 text-body1">
            <q-icon name="check" color="primary" class="text-weight-bolder contrast"></q-icon>
          </div>
          <div class="col-11 text-body1">
            Keine Schlachtabfälle, Konservierungsmittel, Tiermehle
          </div>
        </div>
        <div class="row q-pa-md">
          <div class="col-1 text-body1">
            <q-icon name="check" color="primary" class="text-weight-bolder contrast"></q-icon>
          </div>
          <div class="col-11 text-body1">
            sorgsam verpackt ohne unnötigen Schnickschnack
          </div>
        </div>
      </div>
      <div class="q-pa-md col-3 col-md-3 col-sm-12 col-xs-12">
        <p class="text-h5 text-center text-grey-8 text-weight">Vitalität</p>
        <div class="row q-pa-md">
          <div class="col-1 text-body1">
            <q-icon name="check" color="primary" class="text-weight-bolder contrast"></q-icon>
          </div>
          <div class="col-11 text-body1">
            naturbelassenes Futter mit vitaminreichem Obst
          </div>
        </div>
        <div class="row q-pa-md">
          <div class="col-1 text-body1">
            <q-icon name="check" color="primary" class="text-weight-bolder contrast"></q-icon>
          </div>
          <div class="col-11 text-body1">
            Spezielle Algenmischung für das mineralische Gleichgewicht
          </div>
        </div>
        <div class="row q-pa-md">
          <div class="col-1 text-body1">
            <q-icon name="check" color="primary" class="text-weight-bolder contrast"></q-icon>
          </div>
          <div class="col-11 text-body1">
            Gesunde Beigaben wie Gemüse, Obst und Kräuter
          </div>
        </div>
      </div>
      <div class="col-1">
      </div>
    </div>
    <br><br><br>
    <questions/>
    <buble-separator-close/>
  </div>
</template>
<script>
import bubleSeparatorClose from 'components/StyleTools/bubleSeparatorClose'
import questions from 'components/Futterberatung/questions'
export default {
  components: { questions, bubleSeparatorClose }
}
</script>
