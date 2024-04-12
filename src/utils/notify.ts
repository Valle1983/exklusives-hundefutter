import { Notify } from 'quasar';

function positiveNotify(message: string) {
  Notify.create({
    type: 'positive',
    position: 'top',
    message: message,
  });
}

function negativeNotify() {
  Notify.create({
    type: 'negative',
    position: 'top',
    message: 'Danger, Will Robinson! Danger!',
  });
}
// or with a config object:
export { positiveNotify, negativeNotify };
