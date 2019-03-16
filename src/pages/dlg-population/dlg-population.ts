import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormGroup } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-dlg-population',
  templateUrl: 'dlg-population.html',
})
export class DlgPopulationPage {
  public FormItem: FormGroup;
  text: any;
  personNo: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
    this.FormItem = navParams.get('FormItem');
    this.text = navParams.get("iTitle");
    this.personNo = navParams.get("no");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DlgPopulationPage');
  }
  public closeDialog() {
    this.viewCtrl.dismiss();
  }

  public okDialog() {
    this.viewCtrl.dismiss(this.FormItem);
  }
}
