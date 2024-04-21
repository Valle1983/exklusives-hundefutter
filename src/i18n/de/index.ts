import { emailContact, email, link } from 'app/appConfig';

export default {
  anmeldung: {
    contact: {
      requiredField: 'Das ist ein Pflichtfeld, bitte etwas eintragen',
      requiredEmail: 'Bitte eine E-Mail-Adresse eingeben',
      firstName: 'Vorname',
      lastName: 'Nachname',
      streetNumber: 'Straße & Hausnummer',
      addressAdd: 'zweite Adresszeile',
      plz: 'PLZ',
      location: 'Stadt',
      phone: 'Telefonnummer',
      email: 'E-Mail-Adresse',
      text: 'Ihre Nachricht',
      checkBox: 'Ja, ich stimme der Datenschutzbestimmung zu.',
      checkBoxText:
        'Ich stimme zu, dass meine Angaben aus dem Kontaktformular zur Beantwortung meiner Anfrage erhoben und verarbeitet werden. Die Daten werden nach abgeschlossener Bearbeitung Ihrer Anfrage gelöscht. Hinweis: Sie können Ihre Einwilligung jederzeit für die Zukunft per E-Mail an <a class="text-dark" href="' +
        emailContact +
        '">kontakt@exklusives-katzenfutter.de</a> widerrufen. Detaillierte Informationen zum Umgang mit Nutzerdaten finden Sie in unserer  <a class="text-dark" href="' +
        link +
        '/datenschutz"><b>Datenschutzerklärung</b></a>',
      submitButton: 'Nachricht abschicken',
      newReicoAccount: 'Jetzt Reico Kunde werden, schnell und unkompliziert.',
      newReicoAccountText:
        'Ihr neues Kundenkonto wird von uns umgehend erstellt. Sobald Ihre Zugangsdaten angelegt wurden, senden wir Ihnen eine Mail zu Ihrem neuen Reico Kundenlogin. Zudem erhalten Sie einen „offenen Warenkorb“ mit den Gratisartikeln (Produkthandbuch, Preisliste, Messbecher, Dosendeckel) und Sie können Ihre erste Bestellung aufgeben bzw. abschließen.',
    },
    neuKunde: {
      newCustomer: 'So werden Sie Reico Neukunde',
      newCustomerText:
        'Um bei der Bestellung von Reico Katzenfutter die Qualität hochzuhalten, ist die Bestellung nur im Direktvertrieb über einen Reico Vertriebspartner möglich, so wie wir es sind. Nachdem eine koordinierte Erstbestellung mit ausführlicher Beratung erfolgt ist, können Sie künftig das Futter für Ihr Tier ganz bequem selbst über den Onlineshop bestellen. Reico legt großen Wert darauf, dass Ihre Katze artgerechtes und passendes Katzenfutter bekommt, weswegen wir Ihnen unsere kostenlose Futterberatung vor Ihrer ersten Bestellung ans Herz legen.',
      carousel: {
        step1:
          '1. Sie erhalten eine kompetente Futterberatung, einen Futterplan und auf Wunsch eine Aufstellung der Futterkosten',
        step2:
          '2. Sie bestellen Ihr frisches und artgerechtes Katzenfutter in hoher Qualität bei Ihrem Reico Vertriebspartner',
        step3:
          '3. Nie wieder lästiges Schleppen von schweren Säcken oder Dosen',
        step4: '4. Die Lieferung erfolgt direkt an Ihre Wunschadresse',
        step5: '5. Sie erhalten eine Versandbestätigung per E-Mail',
        step6: '6. Ihre Katze freut sich über ihr neues Lieblingsfutter',
      },
    },
  },
  food: {
    infos: {
      glutenFree: 'Glutenfrei',
      lactoseFree: 'Laktosefrei',
      mineralBalance: 'Mineralisches Gleichgewicht',
    },
    inhalsStoffe: {
      title: 'So viel Naturkraft steckt wirklich in Reico',
      highFreshMeatContent: 'hoher Frischfleischanteil',
      noGeneticIngredients: 'keine genetischen Zutaten',
      noPreservatives: 'keine Konservierungsstoffe',
      completelyWithoutSlaughterhouseWaste: 'ganz ohne Schlachtabfälle',
      naturalRawMaterials: 'naturbelassene Rohstoffe',
      nutrientPreservingProcessing: 'nährstoffschonende Verarbeitung',
    },
  },
  footer: {
    contactSubtext: 'Kontakt:',
    customerNumber: 'Beraternummer:',
    importantSites: 'Wichtige Seiten:',
    partnerReico: 'Reico & Partner Vertriebs GmbH',
  },
  kontakt: {
    contact: {
      contactText:
        'Sie können uns für eine kostenlose Beratung jetzt direkt anrufen, <br>oder auch in der Telegram Gruppe beitreten, um Ihre Fragen zu stellen:',
      requiredField: 'Das ist ein Pflichtfeld, bitte etwas eintragen',
      requiredEmail: 'Bitte eine E-Mail-Adresse eingeben',
      firstName: 'Vorname',
      lastName: 'Nachname',
      streetNumber: 'Straße & Hausnummer',
      addressAdd: 'zweite Adresszeile',
      plz: 'PLZ',
      location: 'Stadt',
      phone: 'Telefonnummer',
      email: 'E-Mail-Adresse',
      text: 'Ihre Nachricht',
      message: 'Nachricht',
      checkBox: 'Ja, ich stimme der Datenschutzbestimmung zu.',
      contactFormularText:
        'Ich stimme zu, dass meine Angaben aus dem Kontaktformular zur Beantwortung meiner Anfrage erhoben und verarbeitet werden. Die Daten werden nach abgeschlossener Bearbeitung Ihrer Anfrage gelöscht. Hinweis: Sie können Ihre Einwilligung jederzeit für die Zukunft per E-Mail an <a class="text-dark" href="' +
        emailContact +
        '">' +
        email +
        '</a> widerrufen. Detaillierte Informationen zum Umgang mit Nutzerdaten finden Sie in unserer <a class="text-dark" href="' +
        link +
        '/datenschutz"><b>Datenschutzerklärung</b></a>',
      submitButton: 'Nachricht abschicken',
      consultingDateText: 'Vereinbaren Sie einen kostenfreien Beratungstermin',
      foodDogConsultingText:
        'Wir beraten Sie gerne zur Katzenernährung kostenlos, dabei steht Ihnen ein fachlich geschulter Reico Vertriebspartner zur Seite',
      contactEveryDay:
        'Sie haben die Möglichkeit uns jederzeit zu kontaktieren, auch an Wochenenden oder Feiertagen',
      sameConsulterText:
        'Dabei werden Sie immer den gleichen Ansprechpartner zugeteilt',
      fillContactFormular:
        'Wünschen Sie ein Gespräch? Dann füllen Sie einfach für ein unverbindliches Gespräch das Kontaktformular aus',
    },
    contactInfo: {
      title: 'Kontakt',
    },
  },
  krauter_co: {
    headline: 'Die Naturkraft - Kräutermischung für die Katze',
    text: 'Um bei der Bestellung von Reico Katzenfutter die Qualität hochzuhalten, ist die Bestellung nur im Direktvertrieb über einen Reico Vertriebspartner möglich, so wie wir es sind. Nachdem eine koordinierte Erstbestellung mit ausführlicher Beratung erfolgt ist, können Sie künftig das Futter für Ihr Tier ganz bequem selbst über den Onlineshop bestellen. Reico legt großen Wert darauf, dass Ihre Katze artgerechtes und passendes Katzenfutter bekommt, weswegen wir Ihnen unsere kostenlose Futterberatung vor Ihrer ersten Bestellung ans Herz legen.',
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
        'Warum sollten Sie sich gerade für das Reico Katzenfutter entscheiden? Die entscheidenden Vorteile',
      sublineText:
        'Katzen können leider nicht selbst entscheiden, was sie essen, ganz im Gegenteil zu uns Menschen.',
      card1: {
        title: 'natürliche Zutaten',
        point1: 'nährstoffschonende Verarbeitung',
        point2:
          'besonders hoher Fleischgehalt an Innereien sowie Muskelfleisch',
        point3:
          'mineralisches Gleichgewicht, mit Mineralien auf natürlicher Basis',
      },
      card2: {
        title: 'individuelle Beratung',
        point1: 'Persönliche Beratung speziell auf Ihre Katze zugeschnitten',
        point2: 'stets der gleiche Ansprechpartner',
        point3: 'täglich erreichbar, auch am Wochenende sowie Feiertagen',
      },
      card3: {
        title: 'direkte Lieferung',
        point1: 'das Katzenfutter kommt pünktlich nach Hause',
        point2:
          'Sie können Einzellieferungen bekommen oder auf Wunsch auch einen Lieferrhythmus vereinbaren',
        point3: 'Transport bis vor die Haustür',
      },
    },
    mixedItems: {
      title: 'Reico Katzenfutter – das gesunde Futter für Ihre Katze',
      subTitle:
        'Gesundheit ist kein Zufall – Eine gesunde & artgerechte Ernährung ändert Alles!<br><br>',
      text: 'Reico hat das Katzenfutter nach dem Vorbild der Natur entwickelt und mit den Kräutermischungen & Ergänzungsfuttermitteln,<br> das Reico Vital-System erschaffen. Damit wird jede Katze, ob Kitten, erwachsene Katze oder ältere Katzen, <br>  optimal und artgerecht versorgt. Das steckt im Katzenfutter: Naturbelassene Rohstoffe ohne unnötige Zusätze,<br> moderne Wissenschaft und über 30 Jahre Erfahrung. Reico ist mehr als nur ein Katzenfutter.<br> Lernen Sie das Reico Vital-System kennen und lassen Sie sich jetzt kostenlos beraten.',
    },
    questions: {
      title: 'Die wichtigsten Fragen rund um das Futter',
      subText:
        'Hier erhalten Sie Antworten auf die am häufigsten gestellten Fragen.',
      left: {
        question1: {
          headline: 'Kann ich Reico Produkte auch im Supermarkt kaufen?',
          text: 'Das Reico Futter kann man nicht im Supermarkt kaufen. Einer der wichtigsten Grundsteine Reicos Philosophie ist die Individualität eines jeden Tieres. Jedes Tier ist einzigartig und hat seine eigenen Vorlieben, die bei der Auswahl des Futters berücksichtigt werden sollten. Wir bieten Ihnen eine individuelle Beratung, um das bestmögliche für Ihren Vierbeiner zusammenzustellen, außerdem können Sie uns zu jeder Zeit gerne über Telegram oder E-Mail anschreiben, wir antworten schnellstmöglich und individuell. Sie sind an keine Geschäftszeiten gebunden und können zu jeder Zeit bequem von zu Hause aus bestellen, dabei stehen wir Ihnen zur Seite.',
        },
        question2: {
          headline: 'Wie kann ich bei Reico als Neukunde bestellen?',
          text: 'Uns ist der direkte Kundenkontakt sehr wichtig, denn wir wollen für Ihr Tier die bestmögliche Ernährung zusammenstellen. Nachdem Sie das Kontaktformular ausgefüllt und wir gemeinsam das optimale Produkt für Ihre Katze gefunden haben, erhalten Sie eine E-Mail mit dem gewünschten Angebot. Hier können Sie noch einmal Ihre Daten kontrollieren und sofern Ihnen der Warenkorb so gefällt eine Zahlungsart und Versandoption auswählen und eine Bestellung abschließen.',
        },
        question3: {
          headline: 'Wo kann ich Reico Katzenfutter kaufen?',
          text: 'Die Reico Produkte gibt es nur direkt bei Reico. Eine direkte Erstbestellung über das Internet ist nicht möglich! Sie können gerne einen unverbindlichen & kostenlosen Beratungstermin mit uns vereinbaren oder sich auch ohne eine Beratung einen Zugang für den Reico Online-Shop über uns freischalten lassen. Danach erhalten Sie eine Kundennummer und die Zugangsdaten für den Reico Onlineshop. Das Team "exclusives Katzenfutter" bleibt weiterhin ihr persönlicher Ansprechpartner zu allen Fragen rund um die Katze.',
        },
        question4: {
          headline: 'Wo kann ich mich beraten lassen?',
          text: 'Nutzen Sie hier die Gelegenheit und lassen sie sich von uns mit Herz und großem Fachwissen beraten. Wir freuen uns auf Sie. Füllen sie dazu einfach unser Kontaktformular aus und wir melden uns bei Ihnen zur Terminabsprache.',
        },
      },
      right: {
        question1: {
          headline: 'Wie ist der Preis für das Reico Futter?',
          text: 'Da für jede Katze das Futter individuell zusammengestellt wird, variieren auch die Preise. Wie viel Sie für Ihr Reico Futter ausgeben möchten, klären wir in einem kostenlosen Beratungsgespräch, bei dem wir Alter, Aktivität, Gesundheitsstatus, Größe, Gewicht, Rasse, Vorlieben der Katze und Ihre Wünsche erfahren. Dann schauen wir, dass wir das so zusammenstellen, dass es für Ihre Katze optimal und für Sie vom Tages- bzw. Monatspreis her passend ist. Die Preise sind überall gleich.',
        },
        question2: {
          headline: 'Welche Zahlungsmöglichkeiten gibt es bei Reico?',
          text: 'Bei Reico können Sie ganz einfach mit PayPal, Kreditkarte oder Sofortüberweisung bezahlen. Gerne nehmen wir auch Ihr SEPA-Mandat entgegen. Das Lastschriftverfahren gilt als eines der sichersten Zahlsysteme für Endverbraucher. Für Neukunden bei der Erstbestellung bis 120 Euro begrenzt!',
        },
        question3: {
          headline:
            'Warum funktioniert die Erstbestellung im Reico Onlineshop nicht?',
          text: 'Wir möchten Fehlkäufe verhindern! Alles was Sie bei uns kaufen, soll für Ihre Katze und für Sie genau passend sein. Deshalb gehört eine gute kostenlose Beratung zu unserem Erstbesteller Service. Das spart Ihnen oftmals Geld und Ihre Katze wird es Ihnen danken. Nach dieser Beratung erhalten Sie entweder die gewünschte Bestellung als Warenkorb gemailt oder Sie lassen sich nach Anmeldung durch uns die Zugangsdaten geben und bestellen selber. Ab der zweiten Bestellung können Sie dann mit Ihren Zugangsdaten direkt über den Onlineshop bestellen. Für Beratungen stehen wir selbstverständlich weiterhin sehr gerne zur Verfügung.',
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
