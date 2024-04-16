import { emailContact, email } from 'app/appConfig';

export default {
  anmeldung: {
    contact: {
      requiredField: 'This is a required field, please enter something',
      requiredEmail: 'Invalid email address',
      firstName: 'First Name',
      lastName: 'Last Name',
      streetNumber: 'Street & House Number',
      addressAdd: 'Second Address Line',
      plz: 'ZIP',
      location: 'City',
      phone: 'Phone',
      email: 'Email Address',
      text: 'Your Message',
      checkBox: 'Yes, I agree to the privacy policy.',
      checkBoxText:
        'I agree that my details from the contact form will be collected and processed to answer my request. The data will be deleted after your request has been processed.<br><br>   Note: You can revoke your consent at any time for the future by email to <a class="text-dark" href=' +
        emailContact +
        '>kontakt@exklusives-hundefutter.de</a>. Detailed information on handling user data can be found in our <a class="text-dark" href="' +
        window?.location.href.split('/kontakt')[0] +
        '/datenschutz"><b>Privacy Policy</b></a>',
      submitButton: 'Send Message',
      newReicoAccount: 'Become a Reico customer now, quickly and easily.',
      newReicoAccountText:
        'Your new customer account will be created immediately by us. As soon as your access data has been set up, we will send you an email about your new Reico customer login. In addition, you will receive an "open shopping cart" with free items (product manual, price list, measuring cup, can lid) and you can place or complete your first order.',
    },
    neuKunde: {
      newCustomer: 'How to become a new Reico customer',
      newCustomerText:
        'To maintain the quality of Reico cat food ordering, it is only possible to order through direct sales via a Reico sales partner, as we are. After a coordinated initial order with detailed consultation has taken place, you can conveniently order the food for your pet yourself through the online shop in the future. Reico places great importance on your cat receiving species-appropriate and suitable cat food, which is why we strongly recommend our free food consultation before your first order.',
      carousel: {
        step1:
          '1. You receive competent<br />food consultation, a feeding plan, and upon<br />request, an estimate of the food costs',
        step2:
          '2. You order your fresh and<br />species-appropriate cat food of high quality<br />from your Reico sales partner',
        step3: '3. No more tedious carrying of<br />heavy bags or cans',
        step4: '4. Delivery is made directly to your<br />desired address',
        step5: '5. You will receive a shipping confirmation<br />by email',
        step6: '6. Your dog will enjoy its new<br />favorite food',
      },
    },
  },
  footer: {
    contactSubtext: 'Contact:',
    customerNumber: 'Advisor Number:',
    importantSites: 'Important Pages:',
  },
  kontakt: {
    contact: {
      contactText:
        'You can now call us directly for a free consultation, <br><br> or join the Telegram group to ask your questions:',
      requiredField: 'This is a required field, please enter something',
      requiredEmail: 'Please enter an email address',
      firstName: 'First Name',
      lastName: 'Last Name',
      streetNumber: 'Street & House Number',
      addressAdd: 'Second Address Line',
      plz: 'ZIP',
      location: 'City',
      phone: 'Phone Number',
      email: 'Email Address',
      text: 'Your Message',
      checkBox: 'Yes, I agree to the privacy policy.',
      contactFormularText:
        'I agree that my details from the contact form will be collected and processed to answer my request. The data will be deleted after your request has been processed. <br><br> Note: You can revoke your consent at any time for the future by email to <a class="text-dark" href=' +
        emailContact +
        '>' +
        email +
        '</a>. Detailed information on handling user data can be found in our <a class="text-dark" href="' +
        window?.location.href.split('/kontakt')[0] +
        '/datenschutz"><b>Privacy Policy</b></a>',
      submitButton: 'Send Message',
      consultingDateText: 'Schedule a free consultation appointment',
      foodDogConsultingText:
        'We are happy to provide free advice on dog nutrition, with a professionally trained Reico sales partner at your side',
      contactEveryDay:
        'You have the opportunity to contact us at any time, including weekends or holidays',
      sameConsulterText: 'You will always be assigned the same contact persons',
      fillContactFormular:
        'Would you like a conversation? Just fill out the contact form for a non-binding discussion',
    },
  },
  menuList: {
    contactSite: 'Contact',
    impressumSite: 'Legal Notice',
    datenschutzSite: 'Privacy Policy',
  },
  partner: {
    title: 'Partner',
  },
  instagramFeed: {
    title: 'Our Instagram Page',
  },
};
