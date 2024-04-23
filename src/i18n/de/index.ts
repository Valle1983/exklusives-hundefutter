import { emailContact, email, link } from 'app/appConfig';

export default {
  anmeldung: {
    contact: {
      requiredField: 'Bitte füllen Sie dieses Feld aus, es ist verpflichtend',
      requiredEmail: 'Geben Sie bitte eine gültige E-Mail-Adresse an',
      firstName: 'Vorname',
      lastName: 'Nachname',
      streetNumber: 'Straße und Hausnummer',
      addressAdd: 'Adresszusatz',
      plz: 'Postleitzahl',
      location: 'Ort',
      phone: 'Telefon',
      email: 'E-Mail',
      text: 'Nachricht',
      checkBox: 'Ja, ich akzeptiere die Datenschutzrichtlinien.',
      checkBoxText:
        'Ich erkläre mich einverstanden, dass meine Daten aus dem Anmeldeformular zur Bearbeitung meiner Anfrage gesammelt und verarbeitet werden. Die Informationen werden nach der Bearbeitung meiner Anfrage gelöscht. Beachten Sie: Ihre Zustimmung kann jederzeit per E-Mail an <a class="text-dark" href="' +
        emailContact +
        '">kontakt@exklusives-katzenfutter.de</a> für die Zukunft widerrufen werden. Weitere Informationen zum Umgang mit Nutzerdaten finden Sie in unserer <a class="text-dark" href="' +
        link +
        '/datenschutz"><b>Datenschutzerklärung</b></a>',
      submitButton: 'Nachricht senden',
      newReicoAccount: 'Werden Sie jetzt einfach und schnell Reico-Kunde.',
      newReicoAccountText:
        'Wir erstellen Ihr neues Kundenkonto umgehend. Sobald Ihre Zugangsdaten bereit sind, informieren wir Sie per E-Mail über Ihr neues Reico Kundenlogin. Zusätzlich erhalten Sie einen „offenen Warenkorb“ mit Gratisprodukten (Produkthandbuch, Preisliste, Messbecher, Dosendeckel) und können Ihre erste Bestellung tätigen.',
    },
    neuKunde: {
      newCustomer: 'So werden Sie ein neuer Reico-Kunde',
      newCustomerText:
        'Die Bestellung von Reico Katzenfutter setzt eine Direktvertrieb-Bestellung bei einem Reico-Vertriebspartner voraus, so wie wir es anbieten. Nach einer koordinierten Erstbestellung und ausführlicher Beratung, können Sie zukünftig das Futter über unseren Onlineshop selbstständig bestellen. Es ist uns wichtig, dass Ihre Katze das artgerechte und passende Futter erhält, deshalb empfehlen wir Ihnen vorab unsere kostenlose Futterberatung.',
      carousel: {
        step1:
          '1. Sie bekommen eine umfassende Futterberatung und bei Bedarf eine Kostenaufstellung',
        step2:
          '2. Bestellen Sie Ihr qualitativ hochwertiges und artgerechtes Katzenfutter über Ihren Reico-Vertriebspartner',
        step3: '3. Kein mühsames Tragen von schweren Säcken oder Dosen mehr',
        step4: '4. Die Lieferung erfolgt direkt zu Ihnen nach Hause',
        step5: '5. Eine Versandbestätigung wird Ihnen per E-Mail zugesandt',
        step6: '6. Ihre Katze wird sich über ihr neues Lieblingsfutter freuen',
      },
    },
  },
  food: {
    infos: {
      glutenFree: 'Glutenfrei',
      lactoseFree: 'Laktosefrei',
      mineralBalance: 'Mineralisches <br> Gleichgewicht',
    },
    inhalsStoffe: {
      title: 'Die verborgene Naturkraft in Reico entdecken',
      highFreshMeatContent: 'hoher Anteil an Frischfleisch',
      noGeneticIngredients: 'freI von genetisch veränderten Zutaten',
      noPreservatives: 'ohne Konservierungsstoffe',
      completelyWithoutSlaughterhouseWaste:
        'komplett ohne Schlachtnebenprodukte',
      naturalRawMaterials: 'natürlich belassene Rohstoffe',
      nutrientPreservingProcessing: 'nährstoffbewahrende Verarbeitung',
    },
  },
  footer: {
    contactSubtext: 'Kontaktieren Sie uns:',
    customerNumber: 'Beratungsnummer:',
    importantSites: 'Wichtige Links:',
    partnerReico: 'Reico & Partner Vertriebs GmbH',
  },
  kontakt: {
    contact: {
      contactText:
        'Kontaktieren Sie uns jederzeit für eine unverbindliche Beratung,<br> treten Sie unserer Telegram-Gruppe bei, um Fragen zu stellen:',
      requiredField: 'Bitte füllen Sie dieses Feld aus, es ist verpflichtend',
      requiredEmail: 'Geben Sie bitte eine gültige E-Mail-Adresse an',
      firstName: 'Vorname',
      lastName: 'Nachname',
      streetNumber: 'Straße und Hausnummer',
      addressAdd: 'Adresszusatz',
      plz: 'Postleitzahl',
      location: 'Ort',
      phone: 'Telefon',
      email: 'E-Mail',
      text: 'Nachricht',
      message: 'Ihre Nachricht',
      checkBox: 'Ja, ich akzeptiere die Datenschutzrichtlinien.',
      contactFormularText:
        'Ich erkläre mich einverstanden, dass meine Daten aus dem Kontaktformular zur Bearbeitung meiner Anfrage gesammelt und verarbeitet werden. Die Informationen werden nach der Bearbeitung meiner Anfrage gelöscht. Beachten Sie: Ihre Zustimmung kann jederzeit per E-Mail an <a class="text-dark" href="' +
        emailContact +
        '">' +
        email +
        '</a> für die Zukunft widerrufen werden. Weitere Informationen zum Umgang mit Nutzerdaten finden Sie in unserer <a class="text-dark" href="' +
        link +
        '/datenschutz"><b>Datenschutzerklärung</b></a>',
      submitButton: 'Nachricht senden',
      consultingDateText: 'Vereinbaren Sie einen kostenfreien Beratungstermin',
      foodDogConsultingText:
        'Wir beraten Sie gerne kostenlos zur Katzenernährung, unterstützt durch einen fachkundigen Reico-Vertriebspartner',
      contactEveryDay:
        'Sie können uns jederzeit kontaktieren, auch an Wochenenden und Feiertagen',
      sameConsulterText: 'Sie werden stets denselben Berater haben',
      fillContactFormular:
        'Möchten Sie ein Gespräch führen? Füllen Sie unser Kontaktformular für ein unverbindliches Gespräch aus',
    },
    contactInfo: {
      title: 'Kontaktinformation',
    },
  },
  krauter_co: {
    headline: 'Die Naturkraft - Kräutermischung für Katzen',
    text: 'Um die Qualität von Reico Katzenfutter zu gewährleisten, erfolgt die Bestellung ausschließlich über einen Reico-Vertriebspartner. Nach einer geplanten Erstbestellung und umfassenden Beratung können Sie das Futter zukünftig selbst über unseren Onlineshop bestellen. Es ist uns ein Anliegen, dass Ihre Katze das artgerechte und passende Futter erhält, deshalb empfehlen wir Ihnen vorab unsere kostenlose Futterberatung.',
  },
  menuList: {
    contactSite: 'Kontakt',
    impressumSite: 'Impressum',
    datenschutzSite: 'Datenschutz',
  },
  partner: {
    title: 'Partner',
  },
  startseite: {
    benefits: {
      titleText:
        'Warum Sie sich für das Reico Katzenfutter entscheiden sollten? <br> Hier sind die Vorteile <br>',
      sublineText:
        'Im Gegensatz zu Menschen können Katzen leider nicht selbst entscheiden, was sie essen möchten.',
      card1: {
        title: 'Natürliche Inhaltsstoffe',
        point1: 'Nährstoffschonende Verarbeitung',
        point2: 'Hoher Anteil an Innereien und Muskelfleisch',
        point3:
          'Mineralisches Gleichgewicht, basierend auf natürlichen Mineralien',
      },
      card2: {
        title: 'Individuelle Beratung',
        point1: 'Persönliche, auf Ihre Katze zugeschnittene Beratung',
        point2: 'Immer derselbe Ansprechpartner',
        point3: 'Tägliche Erreichbarkeit, auch an Wochenenden und Feiertagen',
      },
      card3: {
        title: 'Direkte Anlieferung',
        point1: 'Pünktliche Lieferung direkt zu Ihnen nach Hause',
        point2: 'Einzelne Lieferungen oder auf Wunsch ein Lieferplan',
        point3: 'Lieferung bis vor Ihre Haustür',
      },
    },
    mixedItems: {
      title: 'Reico Katzenfutter – gesunde Ernährung für Ihre Katze',
      subTitle:
        'Gesundheit ist kein Zufall – Eine artgerechte Ernährung ändert alles!<br><br>',
      text: 'Reico entwickelt das Katzenfutter nach dem Vorbild der Natur und hat mit den Kräutermischungen und Ergänzungsfuttermitteln das Reico Vital-System kreiert. So wird jede Katze, ob jung oder alt, optimal und artgerecht versorgt. Das bietet das Futter: Natürliche Rohstoffe ohne überflüssige Zusätze, moderne Wissenschaft und mehr als 30 Jahre Erfahrung. Reico ist mehr als nur ein Katzenfutter. Erfahren Sie mehr über das Reico Vital-System und lassen Sie sich jetzt kostenlos beraten.',
    },
    questions: {
      title: 'Häufig gestellte Fragen zum Futter',
      subText:
        'Antworten auf die am häufigsten gestellten Fragen finden Sie hier.',
      left: {
        question1: {
          headline: 'Kann ich Reico Produkte auch im Supermarkt erwerben?',
          text: 'Reico Futter ist nicht im Supermarkt erhältlich. Die Individualität jedes Tieres ist ein zentraler Bestandteil der Philosophie von Reico. Jedes Tier hat seine eigenen Vorlieben, die bei der Futterauswahl berücksichtigt werden müssen. Wir bieten individuelle Beratungen an, um das Beste für Ihr Haustier zusammenzustellen. Sie können uns jederzeit per Telegram oder E-Mail kontaktieren, wir antworten so schnell wie möglich und individuell. Sie sind nicht an Geschäftszeiten gebunden und können jederzeit bequem von zu Hause aus bestellen.',
        },
        question2: {
          headline: 'Wie kann ich als Neukunde bei Reico bestellen?',
          text: 'Der direkte Kundenkontakt ist uns sehr wichtig, um die bestmögliche Ernährung für Ihr Tier zusammenzustellen. Nachdem Sie das Kontaktformular ausgefüllt haben und wir gemeinsam das optimale Produkt für Ihre Katze ausgewählt haben, erhalten Sie ein Angebot per E-Mail. Überprüfen Sie Ihre Daten und wenn Ihnen der Warenkorb zusagt, wählen Sie eine Zahlungs- und Versandoption und schließen Sie die Bestellung ab.',
        },
        question3: {
          headline: 'Wo kann ich Reico Katzenfutter kaufen?',
          text: 'Reico Produkte sind ausschließlich direkt bei Reico erhältlich. Eine direkte Erstbestellung über das Internet ist nicht möglich! Gerne können Sie einen unverbindlichen und kostenlosen Beratungstermin mit uns vereinbaren oder sich ohne Beratung einen Zugang für den Reico Online-Shop über uns freischalten lassen. Danach erhalten Sie eine Kundennummer und die Zugangsdaten für den Reico-Onlineshop. Das Team "exklusives Katzenfutter" bleibt weiterhin Ihr persönlicher Ansprechpartner zu allen Fragen rund um Ihre Katze.',
        },
        question4: {
          headline: 'Wo kann ich mich beraten lassen?',
          text: 'Nutzen Sie die Gelegenheit und lassen Sie sich von uns mit Herz und Fachwissen beraten. Wir freuen uns auf Sie. Füllen Sie dazu einfach unser Kontaktformular aus und wir melden uns bei Ihnen zur Terminabsprache.',
        },
      },
      right: {
        question1: {
          headline: 'Wie sind die Preise für das Reico Futter?',
          text: 'Da das Futter für jede Katze individuell zusammengestellt wird, variieren die Preise. In einem kostenlosen Beratungsgespräch klären wir das Alter, die Aktivität, den Gesundheitsstatus, die Größe, das Gewicht, die Rasse, die Vorlieben Ihrer Katze und Ihre Wünsche. Anschließend stellen wir das Futter so zusammen, dass es für Ihre Katze optimal und preislich für Sie akzeptabel ist. Die Preise sind überall gleich.',
        },
        question2: {
          headline: 'Welche Zahlungsmöglichkeiten gibt es bei Reico?',
          text: 'Bei Reico können Sie einfach per PayPal, Kreditkarte oder Sofortüberweisung zahlen. Wir akzeptieren auch SEPA-Mandate. Das Lastschriftverfahren zählt zu den sichersten Zahlungsmethoden für Endverbraucher. Für Neukunden ist die Erstbestellung auf einen Betrag von 120 Euro begrenzt.',
        },
        question3: {
          headline:
            'Warum kann ich bei meiner Erstbestellung im Reico Onlineshop nicht bestellen?',
          text: 'Wir möchten Fehlkäufe vermeiden! Alles, was Sie bei uns kaufen, sollte genau auf Ihre Katze und Sie abgestimmt sein. Deshalb gehört eine umfassende kostenlose Beratung zu unserem Service für Erstbesteller. Dies spart Ihnen oft Geld und Ihre Katze wird es Ihnen danken. Nach der Beratung erhalten Sie entweder die gewünschte Bestellung als Warenkorb per E-Mail oder Sie erhalten nach Ihrer Anmeldung die Zugangsdaten von uns und bestellen selbst. Ab der zweiten Bestellung können Sie dann mit Ihren Zugangsdaten direkt über den Onlineshop bestellen. Für Beratungen stehen wir Ihnen natürlich weiterhin gerne zur Verfügung.',
        },
        question4: {
          headline: 'Haben Sie weitere Fragen?',
          text: 'Wir beraten Sie gerne <strong>kostenlos</strong> zu allen Themen rund um die Katze. Wir stehen Ihnen mit Rat und Tat zur Seite und stellen gemeinsam die optimale Ernährung für Ihren Vierbeiner zusammen. Füllen Sie einfach unser Kontaktformular aus und wir melden uns schnellstmöglich bei Ihnen, um einen Beratungstermin zu vereinbaren und Ihre Katze glücklich zu machen.',
        },
      },
    },
  },
  instagramFeed: {
    title: 'Unsere Instagram-Seite',
  },
};
