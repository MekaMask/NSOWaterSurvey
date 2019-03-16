import { Component } from '@angular/core';

/**
 * Generated class for the FormButtonsBarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'form-buttons-bar',
  templateUrl: 'form-buttons-bar.html'
})
export class FormButtonsBarComponent {

  text: string;

  constructor() {
    console.log('Hello FormButtonsBarComponent Component');
    this.text = 'Hello World';
  }

}
