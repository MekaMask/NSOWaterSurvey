import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormGroup } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-dlg-field-area-rice',
  templateUrl: 'dlg-field-area-rice.html',
})
export class DlgFieldAreaRicePage {

  public FormItem: FormGroup;
  public text: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
    this.FormItem = navParams.get('FormItem');
    this.text = navParams.get("headline");
  }

  public closeDialog() {
    this.viewCtrl.dismiss();
  }

  public okDialog() {
    this.viewCtrl.dismiss(this.FormItem);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DlgFieldAreaRicePage');
  }

}
