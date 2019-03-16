import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormGroup } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-dlg-rain-storage',
  templateUrl: 'dlg-rain-storage.html',
})
export class DlgRainStoragePage {
  public FormItem: FormGroup;
  public text: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,private viewCtrl: ViewController) {
    this.FormItem = navParams.get('FormItem');
    this.text = navParams.get("iTitle");
  }
  public closeDialog() {
    this.viewCtrl.dismiss();
  }

  public okDialog() {
    this.viewCtrl.dismiss(this.FormItem);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DlgRainStoragePage');
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.touched);
  }
}
