import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the DemoNaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'demo-na',
  templateUrl: 'demo-na.html'
})
export class DemoNaComponent {

  text: string;

  constructor(public alertCtrl: AlertController) {
    console.log('Hello DemoNaComponent Component');
    this.text = 'Hello World';
  }

  public showAlert() {
    const alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  }

}
