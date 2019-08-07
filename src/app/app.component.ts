import {Component} from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `<div><h1>{{pageTitle}}</h1>
  <div><pm-products></pm-products></div>
  </div>`
})
export class AppComponent {
  // tslint:disable-next-line: no-inferrable-types
  pageTitle: string = 'Acme Product Management';
}
