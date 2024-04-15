// This is just an example,
// so you can safely delete all default props below
import { emailContact, email } from 'app/appConfig';

export default {
  anmeldung: {
    contact: {
      requiredField: 'Das ist ein Pflichfeld, bitte was eintragen',
      reqziredEmail: 'Falsche Emailadresse',
      firstName: 'Vorname',
      lastName: 'Nachname',
      streetNumber: 'Strasse & Hausnummer',
      addressAdd: 'zweite Adresszeile',
      plz: 'PLZ',
      location: 'Stadt',
      phone: 'Telefon',
      email: 'Emailadresse',
      text: 'Ihre Nachricht',
      checkBox: 'Ja, ich stimme der Datenschutzbestimmung zu.',
      checkBoxText:
        'Ich stimme zu, dass meine Angaben aus dem Kontaktformular zur Beantwortung meiner Anfrage erhoben und verarbeitet werden. Die Daten werden nach abgeschlossener Bearbeitung Ihrer Anfrage gelöscht.<br><br>   Hinweis: Sie können Ihre Einwilligung jederzeit für die Zukunft per E-Mail an <a class="text-dark" href=' +
        emailContact +
        '>kontakt@exklusives-hundefutter.de</a>widerrufen. Detaillierte Informationen zum Umgang mit Nutzerdaten finden Sie in unserer  <a class="text-dark" href="' +
        window?.location.href.split('/kontakt')[0] +
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
          '1. Sie erhalten eine kompetente<br />Futterberatung, einen Futterplan und auf<br />Wunsch eine Aufstellung der Futterkosten',
        step2:
          '2. Die bestellen Ihr frisches und<br />artgerechtes Katzenfutter in hoher Qualität<br />bei Ihrem Reico Vertriebspartner',
        step3:
          '3. Nie wieder lästiges Schleppen von<br />schweren Säcken oder Dosen',
        step4: '4. Die Lieferung erfolgt direkt an Ihre<br />Wunschadresse',
        step5: '5. Sie erhalten eine Versandbestätigung<br />per E-Mail',
        step6: ' 6. Ihr Hund freut sich über sein neues<br />Lieblingsfutter',
      },
    },
  },
  footer: {
    contactSubtext: 'Kontakt:',
    customerNumber: 'Beraternummer:',
    importantSites: 'Wichtige Seiten:',
  },
  kontakt: {
    contact: {
      contactText:
        'Sie können uns für eine kostenlose Beratung jetzt direkt anrufen, <br><br>  oder auch in der Telegram Gruppe beitreten um Ihre Fragen zu stellen:',
      requiredField: 'Das ist ein Pflichfeld, bitte was eintragen',
      reqziredEmail: 'Bitte eine Emailadresse eingeben',
      firstName: 'Namen',
      lastName: 'Nachname',
      streetNumber: 'Strasse & Hausnummer',
      addressAdd: 'zweite Adresszeile',
      plz: 'PLZ',
      location: 'Stadt',
      phone: 'Telefonnummer',
      email: 'Emailadresse',
      text: 'Ihre Nachricht',
      checkBox: 'Ja, ich stimme der Datenschutzbestimmung zu.',
      contactFormularText:
        'Ich stimme zu, dass meine Angaben aus dem Kontaktformular zur Beantwortung meiner Anfrage erhoben und verarbeitet werden. Die Daten werden nach abgeschlossener Bearbeitung Ihrer Anfrage  gelöscht. <br><br> Hinweis: Sie können Ihre Einwilligung jederzeit für die Zukunft  per E-Mail an   <a class="text-dark" href=' +
        emailContact +
        '>' +
        email +
        ' </a> widerrufen. Detaillierte Informationen zum Umgang mit  Nutzerdaten finden Sie in unserer  <a class="text-dark" href="' +
        window?.location.href.split('/kontakt')[0] +
        '/datenschutz"><b>Datenschutzerklärung</b></a>',
      submitButton: 'Nachricht abschicken',
      consultingDateText: 'Vereinbaren Sie einen kostenfreien Beratungstermin',
      foodDogConsultingText:
        'wir beraten Sie gerne zur Hundeernährung kostenlos, dabei steht Ihnen ein fachlich geschulter Reico Vertriebspartner zur Seite',
      contactEveryDay:
        'Sie haben die Möglichkeit uns jeder Zeit zu Kontaktieren, auch an Wochenenden oder Feiertagen',
      sameConsulterText:
        'dabei werden Sie immer den gleichen Ansprechpartnern zugeteilt',
      fillContactFormular:
        ' Wünschen Sie ein Gespräch? Dann füllen Sie einfach für ein unverbindliches Gespräch das Kontaktformular aus',
    },
  },
  menuList: {
    contactSite: 'Kontakt',
    impressumSite: 'Impressum',
    datenschutzSite: 'Datenschutz',
  },
  partner: {
    title: 'Partner',
  },
};
