import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HouseHoldState } from '../../../states/household/household.reducer';
import { Store } from '@ngrx/store';
import { getHouseHoldSample } from '../../../states/household';
import { map } from 'rxjs/operators';

/**
 * Generated class for the ResidentialShellPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-residential-shell',
  templateUrl: 'residential-shell.html',
})
export class ResidentialShellPage {

  public formData$ = this.store.select(getHouseHoldSample).pipe(map(h => h.residence));

  constructor(public navCtrl: NavController, public navParams: NavParams, private store: Store<HouseHoldState>) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResidentialShellPage');
  }

}
