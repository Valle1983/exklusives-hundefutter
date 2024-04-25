<template>
    <div class="bg-grey-2">
        <div class="q-pa-md text-h4 justify-center text-center text-dark">
          <p>Die wichtigsten Fragen rund um das Futter</p>
        </div>
        <div class="text-h6 text-weight-bold justify-center text-center text-grey-8 text-weight">
          <p>Hier erhalten Sie Antworten auf die am häufigsten gestellten Fragen.</p>
        </div>
      <div class="row">
        <div class="col-1">
        </div>
        <div class="q-pa-sm col-5 col-md-5 col-sm-12 col-xs-12">
      <q-list v-for="(questions) in leftQuestions" :key="questions.id" class="q-pt-xs">
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
              <p v-html="questions.text "/>
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>
      </div>
        <div class="q-pa-sm col-5 col-md-5 col-sm-12 col-xs-12">
          <q-list v-for="(questions) in rightQuestions" :key="questions.id" class="q-pt-xs">
            <q-expansion-item
              class="bg-white text-body1 text-weight-bold carousel-cards"
              group="somegroup2"
              :label="questions.headline"
              header-class="text-dark"
            >
              <q-card>
                <q-card-section class="text-weight-medium text-grey-8">
                  <p v-html="questions.text"/>
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </q-list>
        </div>
      </div>
      <div class="col-1">
      </div>
    </div>
</template>
<script>

const leftQuestions = [
  {
    id: 1,
    headline: 'Wie stelle ich am besten auf Reico Futter um ?',
    text: 'Aufgrund der sensiblen Flora darf ein Nahrungswechsel nur langsam vorgenommen werden, um die Bakterien an die neuen Nährstoffe zu gewöhnen, weil die bakterielle Besiedlung des Darms von Tier zu Tier unterschiedlich ist. Dabei hängt es von Faktoren wie dem alter oder der Rasse des Hundes ab, außerdem hilft dies eine mögliche Verdauungsstörung oder Durchfall entgegenzuwirken.<br><br>' +
      'Die Futterumstellung sollte idealerweise über zwei Wochen andauern, das neue Futter sollte mit dem alten vermischt werden, wobei die Menge des neuen Futters stetig erhöht werden sollte. Es könnte vorübergehend zu Durchfall führen, solange sich die Darmflora noch nicht an die Futterumstellung angepasst hat, die Verdauung sollte sich aber in der Regel schnell wieder von alleine normalisieren.'
  },
  {
    id: 2,
    headline: 'Wie lange kann ich Welpenfutter füttern ?',
    text: 'Mit einem Alter von ungefähr einem Jahr wird auf das normale Futter für den ausgewachsenen Hund umgestiegen. Bei großen und Riesenrassen (Dogge, Bernhardiner, Hovawart u. ä.) empfiehlt es sich bereits mit 9 Monaten auf ein normales Futter umzusteigen, um eine zu hohe Energiezufuhr zu vermeiden.<br><br>' +
      'Was besonders wichtig ist zu beachten, dass junge Hunde nicht rund gefüttert werden dürfen, weil sich die Wachstumsfugen der Knochen erst ab den 12 Lebensmonat schließen. Das bedeutet, dass jedes Kilogramm Übergewicht, die Knochen und Gelenke zu sehr belastet und es im schlimmsten Fall zu chronischen Gelenkleiden kommen kann. Insbesondere sehr große Rassen müssen rechtzeitig auf ein Futter für erwachsene Hunde umgestellt werden, um eine Energieüberversorgung und damit ein Übergewicht zu vermeiden. Im Grunde sollte so gefüttert werden, dass die durchschnittliche Wachstumskurve erreicht werden sollte.'
  }
]

const rightQuestions = [
  {
    id: 1,
    headline: 'Woher weiß ich wie viel Reico Futter ich füttern soll?',
    text: 'Jede Reico Trockenfutter sowie Nassfutter Verpackung enthält einen Bereich mit wertvollen Tipps und Richtwerten zur korrekten Futtermenge. Da Sie Ihr Liebling besser einschätzen können als wir, wenn man die Größe, das Gewicht und die tägliche Bewegung des Hundes betrachtet. Können Sie die Portionsgrößen mithilfe der Futterempfehlung auf der Verpackung ganz selbstständig dem täglichen Bedarf anpassen.'
  },
  {
    id: 2,
    headline: 'Darf man Trockenfutter mit Nassfutter mischen ?',
    text: 'Grundsätzlich ist es auch für gesunde Hunde wichtig, dass zwischen einer Fütterung von Nass- und Trockenfutter ein zeitlicher Abstand von mindestens acht Stunden eingehalten wird. Der Grund dafür sind Verdauungszeiten die sich bei den beiden Futterarten unterscheiden, das Nassfutter wird in nur 6 Stunden aufgespalten und verdaut wobei das Trockenfutter wegen der Beschaffenheit auf 10-12 Stunden zur Verdauung braucht. Wenn sich diese beiden Verdauungsprozesse überlagern, entstehen im Magen-Darm-Trakt des Hundes Schlackestoffe und Gärungen, die die Schleimhaut des Hundes angreifen. Die Folgen könnten Blähungen sowie Unverträglichkeiten sein.'
  }
]

export default {
  data () {
    return {
      leftQuestions,
      rightQuestions
    }
  }

}
</script>
