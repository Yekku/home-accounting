import { trigger, state, style, transition, animate } from '@angular/animations';

export const fadeStateTrigger = trigger('fade', [
  transition(':enter', [style({ opacity: 0 }), animate(500, style({ opacity: 1 }))]),
  transition(':leave', [animate(500, style({ opacity: 0 }))]),
]);
